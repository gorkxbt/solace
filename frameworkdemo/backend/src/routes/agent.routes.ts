import { Router, Request, Response } from 'express';
import Joi from 'joi';
import { agentService } from '../services/agent.service';
import { AgentType, SolanaNetwork, CreateAgentInput, UpdateAgentInput, AgentQueryFilters } from '../models/agent.model';
import { asyncHandler } from '../utils/error-handler';
import { log } from '../utils/logger';

const router = Router();

/**
 * Validation schemas
 */
const createAgentSchema = Joi.object({
  name: Joi.string().min(3).max(50).pattern(/^[a-zA-Z0-9_-]+$/).required(),
  description: Joi.string().min(10).max(500).required(),
  type: Joi.string().valid(...Object.values(AgentType)).required(),
  network: Joi.string().valid(...Object.values(SolanaNetwork)).required(),
  capabilities: Joi.array().items(Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    version: Joi.string().required(),
    parameters: Joi.object().optional(),
  })).min(1).required(),
  configuration: Joi.object({
    maxTransactionAmount: Joi.number().positive().required(),
    dailyTransactionLimit: Joi.number().positive().required(),
    allowedTokens: Joi.array().items(Joi.string()).min(1).required(),
    riskThreshold: Joi.number().min(0).max(100).required(),
    operatingHours: Joi.object({
      start: Joi.string().pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).required(),
      end: Joi.string().pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).required(),
      timezone: Joi.string().required(),
    }).optional(),
    notifications: Joi.object({
      email: Joi.string().email().optional(),
      webhook: Joi.string().uri().optional(),
      discord: Joi.string().optional(),
    }).required(),
    customParameters: Joi.object().optional(),
  }).required(),
  tags: Joi.array().items(Joi.string()).optional(),
  isPublic: Joi.boolean().optional(),
});

const updateAgentSchema = Joi.object({
  name: Joi.string().min(3).max(50).pattern(/^[a-zA-Z0-9_-]+$/).optional(),
  description: Joi.string().min(10).max(500).optional(),
  status: Joi.string().valid('pending', 'active', 'paused', 'suspended', 'terminated', 'error').optional(),
  configuration: Joi.object({
    maxTransactionAmount: Joi.number().positive().optional(),
    dailyTransactionLimit: Joi.number().positive().optional(),
    allowedTokens: Joi.array().items(Joi.string()).min(1).optional(),
    riskThreshold: Joi.number().min(0).max(100).optional(),
    operatingHours: Joi.object({
      start: Joi.string().pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).required(),
      end: Joi.string().pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).required(),
      timezone: Joi.string().required(),
    }).optional(),
    notifications: Joi.object({
      email: Joi.string().email().optional(),
      webhook: Joi.string().uri().optional(),
      discord: Joi.string().optional(),
    }).optional(),
    customParameters: Joi.object().optional(),
  }).optional(),
  tags: Joi.array().items(Joi.string()).optional(),
  isPublic: Joi.boolean().optional(),
});

const deploymentSchema = Joi.object({
  network: Joi.string().valid(...Object.values(SolanaNetwork)).required(),
  wallet: Joi.string().pattern(/^[1-9A-HJ-NP-Za-km-z]{32,44}$/).required(),
  programId: Joi.string().pattern(/^[1-9A-HJ-NP-Za-km-z]{32,44}$/).optional(),
  initialFunding: Joi.number().positive().optional(),
  computeUnits: Joi.number().positive().optional(),
  priorityFee: Joi.number().positive().optional(),
});

const querySchema = Joi.object({
  type: Joi.alternatives().try(
    Joi.string().valid(...Object.values(AgentType)),
    Joi.array().items(Joi.string().valid(...Object.values(AgentType)))
  ).optional(),
  status: Joi.alternatives().try(
    Joi.string().valid('pending', 'active', 'paused', 'suspended', 'terminated', 'error'),
    Joi.array().items(Joi.string().valid('pending', 'active', 'paused', 'suspended', 'terminated', 'error'))
  ).optional(),
  network: Joi.alternatives().try(
    Joi.string().valid(...Object.values(SolanaNetwork)),
    Joi.array().items(Joi.string().valid(...Object.values(SolanaNetwork)))
  ).optional(),
  ownerId: Joi.string().optional(),
  isPublic: Joi.boolean().optional(),
  tags: Joi.array().items(Joi.string()).optional(),
  minReputation: Joi.number().min(0).max(100).optional(),
  search: Joi.string().max(100).optional(),
  sortBy: Joi.string().valid('createdAt', 'reputation', 'earnings', 'activity').optional(),
  sortOrder: Joi.string().valid('asc', 'desc').optional(),
  limit: Joi.number().min(1).max(100).default(50),
  offset: Joi.number().min(0).default(0),
});

/**
 * Middleware to validate request body
 */
const validateBody = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: any) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: error.details[0].message,
          details: error.details,
        },
      });
    }
    req.body = value;
    next();
  };
};

/**
 * Middleware to validate query parameters
 */
const validateQuery = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: any) => {
    const { error, value } = schema.validate(req.query);
    if (error) {
      return res.status(400).json({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: error.details[0].message,
          details: error.details,
        },
      });
    }
    req.query = value;
    next();
  };
};

/**
 * Mock authentication middleware
 * In production, this would verify JWT tokens and extract user info
 */
const authMiddleware = (req: any, res: Response, next: any) => {
  // Mock user data - in production, extract from JWT
  req.user = {
    id: 'user_123',
    wallet: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
  };
  next();
};

/**
 * Create a new agent
 * POST /api/agents
 */
router.post(
  '/',
  authMiddleware,
  validateBody(createAgentSchema),
  asyncHandler(async (req: any, res: Response) => {
    const input: CreateAgentInput = req.body;
    const { id: ownerId, wallet: ownerWallet } = req.user;

    const agent = await agentService.createAgent(input, ownerId, ownerWallet);

    log.apiRequest('POST', '/api/agents', {
      requestId: req.requestId,
      userId: ownerId,
      agentId: agent.id,
    });

    res.status(201).json({
      success: true,
      data: agent,
    });
  })
);

/**
 * Get all agents with filtering
 * GET /api/agents
 */
router.get(
  '/',
  validateQuery(querySchema),
  asyncHandler(async (req: any, res: Response) => {
    const filters: AgentQueryFilters = req.query;
    const { agents, total } = await agentService.listAgents(filters);

    res.json({
      success: true,
      data: {
        agents,
        pagination: {
          total,
          limit: filters.limit || 50,
          offset: filters.offset || 0,
          hasNext: (filters.offset || 0) + (filters.limit || 50) < total,
        },
      },
    });
  })
);

/**
 * Get agent by ID
 * GET /api/agents/:id
 */
router.get(
  '/:id',
  asyncHandler(async (req: any, res: Response) => {
    const { id } = req.params;
    const requesterId = req.user?.id;

    const agent = await agentService.getAgent(id, requesterId);

    res.json({
      success: true,
      data: agent,
    });
  })
);

/**
 * Update agent
 * PUT /api/agents/:id
 */
router.put(
  '/:id',
  authMiddleware,
  validateBody(updateAgentSchema),
  asyncHandler(async (req: any, res: Response) => {
    const { id } = req.params;
    const input: UpdateAgentInput = req.body;
    const { id: requesterId } = req.user;

    const agent = await agentService.updateAgent(id, input, requesterId);

    log.apiRequest('PUT', `/api/agents/${id}`, {
      requestId: req.requestId,
      userId: requesterId,
      agentId: id,
    });

    res.json({
      success: true,
      data: agent,
    });
  })
);

/**
 * Delete agent
 * DELETE /api/agents/:id
 */
router.delete(
  '/:id',
  authMiddleware,
  asyncHandler(async (req: any, res: Response) => {
    const { id } = req.params;
    const { id: requesterId } = req.user;

    await agentService.deleteAgent(id, requesterId);

    log.apiRequest('DELETE', `/api/agents/${id}`, {
      requestId: req.requestId,
      userId: requesterId,
      agentId: id,
    });

    res.status(204).send();
  })
);

/**
 * Deploy agent to blockchain
 * POST /api/agents/:id/deploy
 */
router.post(
  '/:id/deploy',
  authMiddleware,
  validateBody(deploymentSchema),
  asyncHandler(async (req: any, res: Response) => {
    const { id } = req.params;
    const config = req.body;
    const { id: requesterId } = req.user;

    const result = await agentService.deployAgent(id, config, requesterId);

    log.apiRequest('POST', `/api/agents/${id}/deploy`, {
      requestId: req.requestId,
      userId: requesterId,
      agentId: id,
      network: config.network,
    });

    res.json({
      success: true,
      data: result,
    });
  })
);

/**
 * Pause agent
 * POST /api/agents/:id/pause
 */
router.post(
  '/:id/pause',
  authMiddleware,
  asyncHandler(async (req: any, res: Response) => {
    const { id } = req.params;
    const { id: requesterId } = req.user;

    const agent = await agentService.pauseAgent(id, requesterId);

    log.apiRequest('POST', `/api/agents/${id}/pause`, {
      requestId: req.requestId,
      userId: requesterId,
      agentId: id,
    });

    res.json({
      success: true,
      data: agent,
    });
  })
);

/**
 * Resume agent
 * POST /api/agents/:id/resume
 */
router.post(
  '/:id/resume',
  authMiddleware,
  asyncHandler(async (req: any, res: Response) => {
    const { id } = req.params;
    const { id: requesterId } = req.user;

    const agent = await agentService.resumeAgent(id, requesterId);

    log.apiRequest('POST', `/api/agents/${id}/resume`, {
      requestId: req.requestId,
      userId: requesterId,
      agentId: id,
    });

    res.json({
      success: true,
      data: agent,
    });
  })
);

/**
 * Get agent statistics
 * GET /api/agents/:id/statistics
 */
router.get(
  '/:id/statistics',
  authMiddleware,
  asyncHandler(async (req: any, res: Response) => {
    const { id } = req.params;
    const { id: requesterId } = req.user;

    const statistics = await agentService.getAgentStatistics(id, requesterId);

    res.json({
      success: true,
      data: statistics,
    });
  })
);

/**
 * Get my agents (authenticated user's agents)
 * GET /api/agents/my
 */
router.get(
  '/my',
  authMiddleware,
  validateQuery(querySchema),
  asyncHandler(async (req: any, res: Response) => {
    const filters: AgentQueryFilters = {
      ...req.query,
      ownerId: req.user.id,
    };

    const { agents, total } = await agentService.listAgents(filters);

    res.json({
      success: true,
      data: {
        agents,
        pagination: {
          total,
          limit: filters.limit || 50,
          offset: filters.offset || 0,
          hasNext: (filters.offset || 0) + (filters.limit || 50) < total,
        },
      },
    });
  })
);

export default router; 