import { 
  Agent, 
  CreateAgentInput, 
  UpdateAgentInput, 
  AgentQueryFilters,
  AgentStatus,
  AgentDeploymentConfig,
  AgentDeploymentResult,
  AgentValidator,
  AgentUtils,
  AgentType,
  SolanaNetwork 
} from '../models/agent.model';
import { 
  ValidationError, 
  NotFoundError, 
  ConflictError,
  AgentError 
} from '../utils/error-handler';
import { log } from '../utils/logger';

/**
 * Agent service for managing ACP agents
 */
export class AgentService {
  private agents: Map<string, Agent> = new Map();

  /**
   * Create a new agent
   */
  async createAgent(input: CreateAgentInput, ownerId: string, ownerWallet: string): Promise<Agent> {
    log.agentOperation('create_agent_start', '', { 
      ownerId, 
      agentName: input.name, 
      agentType: input.type 
    });

    // Validate input
    this.validateCreateInput(input);

    // Check for duplicate agent name for this owner
    const existingAgent = this.findAgentByNameAndOwner(input.name, ownerId);
    if (existingAgent) {
      throw new ConflictError(`Agent with name '${input.name}' already exists`, {
        agentName: input.name,
        ownerId,
      });
    }

    // Create agent object
    const agent: Agent = {
      id: AgentUtils.generateAgentId(),
      name: input.name,
      description: input.description,
      type: input.type,
      status: AgentStatus.PENDING,
      ownerId,
      ownerWallet,
      network: input.network,
      capabilities: input.capabilities.map(cap => ({
        ...cap,
        id: `cap_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
      })),
      configuration: input.configuration,
      reputation: {
        score: 0,
        totalTransactions: 0,
        successfulTransactions: 0,
        averageResponseTime: 0,
        uptime: 0,
        lastUpdated: new Date(),
        reviews: [],
      },
      statistics: {
        totalEarnings: 0,
        transactionsCount: 0,
        averageTransactionValue: 0,
        activeContracts: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      version: '1.0.0',
      tags: input.tags || [],
      isPublic: input.isPublic || false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Store agent
    this.agents.set(agent.id, agent);

    log.agentOperation('create_agent_success', agent.id, { 
      ownerId, 
      agentName: agent.name 
    });

    return agent;
  }

  /**
   * Get agent by ID
   */
  async getAgent(agentId: string, requesterId?: string): Promise<Agent> {
    const agent = this.agents.get(agentId);
    
    if (!agent) {
      throw new NotFoundError('Agent', { agentId });
    }

    // Check if agent is public or owned by requester
    if (!agent.isPublic && agent.ownerId !== requesterId) {
      throw new NotFoundError('Agent', { agentId });
    }

    return agent;
  }

  /**
   * Update agent
   */
  async updateAgent(agentId: string, input: UpdateAgentInput, requesterId: string): Promise<Agent> {
    const agent = await this.getAgent(agentId, requesterId);

    // Only owner can update agent
    if (agent.ownerId !== requesterId) {
      throw new NotFoundError('Agent', { agentId });
    }

    log.agentOperation('update_agent_start', agentId, { 
      ownerId: requesterId,
      updates: Object.keys(input) 
    });

    // Validate update input
    if (input.name && !AgentValidator.validateName(input.name)) {
      throw new ValidationError('Invalid agent name format');
    }

    if (input.description && !AgentValidator.validateDescription(input.description)) {
      throw new ValidationError('Invalid agent description');
    }

    if (input.configuration) {
      const configErrors = AgentValidator.validateConfiguration({
        ...agent.configuration,
        ...input.configuration,
      });
      if (configErrors.length > 0) {
        throw new ValidationError(`Configuration errors: ${configErrors.join(', ')}`);
      }
    }

    // Apply updates
    const updatedAgent: Agent = {
      ...agent,
      ...input,
      configuration: input.configuration 
        ? { ...agent.configuration, ...input.configuration }
        : agent.configuration,
      updatedAt: new Date(),
    };

    // Store updated agent
    this.agents.set(agentId, updatedAgent);

    log.agentOperation('update_agent_success', agentId, { 
      ownerId: requesterId 
    });

    return updatedAgent;
  }

  /**
   * Delete agent
   */
  async deleteAgent(agentId: string, requesterId: string): Promise<void> {
    const agent = await this.getAgent(agentId, requesterId);

    // Only owner can delete agent
    if (agent.ownerId !== requesterId) {
      throw new NotFoundError('Agent', { agentId });
    }

    // Cannot delete active agents
    if (agent.status === AgentStatus.ACTIVE) {
      throw new AgentError('Cannot delete active agent. Please pause it first.', {
        agentId,
        status: agent.status,
      });
    }

    this.agents.delete(agentId);

    log.agentOperation('delete_agent', agentId, { 
      ownerId: requesterId 
    });
  }

  /**
   * List agents with filters
   */
  async listAgents(filters: AgentQueryFilters): Promise<{agents: Agent[], total: number}> {
    let filteredAgents = Array.from(this.agents.values());

    // Apply filters
    if (filters.type) {
      const types = Array.isArray(filters.type) ? filters.type : [filters.type];
      filteredAgents = filteredAgents.filter(agent => types.includes(agent.type));
    }

    if (filters.status) {
      const statuses = Array.isArray(filters.status) ? filters.status : [filters.status];
      filteredAgents = filteredAgents.filter(agent => statuses.includes(agent.status));
    }

    if (filters.network) {
      const networks = Array.isArray(filters.network) ? filters.network : [filters.network];
      filteredAgents = filteredAgents.filter(agent => networks.includes(agent.network));
    }

    if (filters.ownerId) {
      filteredAgents = filteredAgents.filter(agent => agent.ownerId === filters.ownerId);
    }

    if (filters.isPublic !== undefined) {
      filteredAgents = filteredAgents.filter(agent => agent.isPublic === filters.isPublic);
    }

    if (filters.tags && filters.tags.length > 0) {
      filteredAgents = filteredAgents.filter(agent => 
        filters.tags!.some(tag => agent.tags.includes(tag))
      );
    }

    if (filters.minReputation !== undefined) {
      filteredAgents = filteredAgents.filter(agent => 
        agent.reputation.score >= filters.minReputation!
      );
    }

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filteredAgents = filteredAgents.filter(agent => 
        agent.name.toLowerCase().includes(searchTerm) ||
        agent.description.toLowerCase().includes(searchTerm)
      );
    }

    // Hide private agents unless owned by requester
    if (!filters.ownerId) {
      filteredAgents = filteredAgents.filter(agent => agent.isPublic);
    }

    const total = filteredAgents.length;

    // Apply sorting
    if (filters.sortBy) {
      filteredAgents.sort((a, b) => {
        let aValue: any, bValue: any;

        switch (filters.sortBy) {
          case 'createdAt':
            aValue = a.createdAt.getTime();
            bValue = b.createdAt.getTime();
            break;
          case 'reputation':
            aValue = a.reputation.score;
            bValue = b.reputation.score;
            break;
          case 'earnings':
            aValue = a.statistics.totalEarnings;
            bValue = b.statistics.totalEarnings;
            break;
          case 'activity':
            aValue = a.lastActiveAt?.getTime() || 0;
            bValue = b.lastActiveAt?.getTime() || 0;
            break;
          default:
            aValue = a.createdAt.getTime();
            bValue = b.createdAt.getTime();
        }

        const order = filters.sortOrder === 'desc' ? -1 : 1;
        return aValue > bValue ? order : aValue < bValue ? -order : 0;
      });
    }

    // Apply pagination
    const offset = filters.offset || 0;
    const limit = filters.limit || 50;
    const paginatedAgents = filteredAgents.slice(offset, offset + limit);

    return { agents: paginatedAgents, total };
  }

  /**
   * Deploy agent to blockchain
   */
  async deployAgent(agentId: string, config: AgentDeploymentConfig, requesterId: string): Promise<AgentDeploymentResult> {
    const agent = await this.getAgent(agentId, requesterId);

    // Only owner can deploy agent
    if (agent.ownerId !== requesterId) {
      throw new NotFoundError('Agent', { agentId });
    }

    // Agent must be in pending status
    if (agent.status !== AgentStatus.PENDING) {
      throw new AgentError(`Agent must be in pending status to deploy. Current status: ${agent.status}`, {
        agentId,
        currentStatus: agent.status,
      });
    }

    log.agentOperation('deploy_agent_start', agentId, { 
      ownerId: requesterId,
      network: config.network,
      wallet: config.wallet 
    });

    try {
      // Simulate blockchain deployment
      // In real implementation, this would interact with Solana blockchain
      const deploymentResult: AgentDeploymentResult = {
        success: true,
        contractAddress: `${Math.random().toString(36).substr(2, 9)}...${Math.random().toString(36).substr(2, 9)}`,
        transactionId: `tx_${Math.random().toString(36).substr(2, 12)}`,
        deployedAt: new Date(),
      };

      // Update agent with deployment info
      const updatedAgent: Agent = {
        ...agent,
        status: AgentStatus.ACTIVE,
        contractAddress: deploymentResult.contractAddress,
        deployedAt: deploymentResult.deployedAt,
        updatedAt: new Date(),
      };

      this.agents.set(agentId, updatedAgent);

      log.agentOperation('deploy_agent_success', agentId, { 
        ownerId: requesterId,
        contractAddress: deploymentResult.contractAddress,
        transactionId: deploymentResult.transactionId 
      });

      return deploymentResult;
    } catch (error) {
      log.error('Agent deployment failed', { 
        agentId, 
        ownerId: requesterId,
        error: error instanceof Error ? error.message : 'Unknown error' 
      });

      // Update agent status to error
      const errorAgent: Agent = {
        ...agent,
        status: AgentStatus.ERROR,
        updatedAt: new Date(),
      };
      this.agents.set(agentId, errorAgent);

      throw new AgentError('Agent deployment failed', { agentId, error });
    }
  }

  /**
   * Pause agent
   */
  async pauseAgent(agentId: string, requesterId: string): Promise<Agent> {
    return this.updateAgentStatus(agentId, AgentStatus.PAUSED, requesterId);
  }

  /**
   * Resume agent
   */
  async resumeAgent(agentId: string, requesterId: string): Promise<Agent> {
    return this.updateAgentStatus(agentId, AgentStatus.ACTIVE, requesterId);
  }

  /**
   * Suspend agent (admin only)
   */
  async suspendAgent(agentId: string, reason: string): Promise<Agent> {
    const agent = this.agents.get(agentId);
    if (!agent) {
      throw new NotFoundError('Agent', { agentId });
    }

    const updatedAgent: Agent = {
      ...agent,
      status: AgentStatus.SUSPENDED,
      updatedAt: new Date(),
    };

    this.agents.set(agentId, updatedAgent);

    log.agentOperation('suspend_agent', agentId, { 
      reason,
      previousStatus: agent.status 
    });

    return updatedAgent;
  }

  /**
   * Get agent statistics
   */
  async getAgentStatistics(agentId: string, requesterId: string): Promise<Agent['statistics']> {
    const agent = await this.getAgent(agentId, requesterId);
    return agent.statistics;
  }

  /**
   * Update agent reputation
   */
  async updateAgentReputation(agentId: string, metrics: {
    successRate: number;
    responseTime: number;
    uptime: number;
    transactionCount: number;
  }): Promise<Agent> {
    const agent = this.agents.get(agentId);
    if (!agent) {
      throw new NotFoundError('Agent', { agentId });
    }

    const newScore = AgentUtils.calculateReputationScore(metrics);
    
    const updatedAgent: Agent = {
      ...agent,
      reputation: {
        ...agent.reputation,
        score: newScore,
        averageResponseTime: metrics.responseTime,
        uptime: metrics.uptime,
        lastUpdated: new Date(),
      },
      lastActiveAt: new Date(),
      updatedAt: new Date(),
    };

    this.agents.set(agentId, updatedAgent);

    log.agentOperation('update_reputation', agentId, { 
      newScore,
      metrics 
    });

    return updatedAgent;
  }

  // Private helper methods

  private validateCreateInput(input: CreateAgentInput): void {
    if (!AgentValidator.validateName(input.name)) {
      throw new ValidationError('Invalid agent name format');
    }

    if (!AgentValidator.validateDescription(input.description)) {
      throw new ValidationError('Invalid agent description');
    }

    const configErrors = AgentValidator.validateConfiguration(input.configuration);
    if (configErrors.length > 0) {
      throw new ValidationError(`Configuration errors: ${configErrors.join(', ')}`);
    }

    if (input.capabilities.length === 0) {
      throw new ValidationError('Agent must have at least one capability');
    }
  }

  private findAgentByNameAndOwner(name: string, ownerId: string): Agent | undefined {
    return Array.from(this.agents.values()).find(
      agent => agent.name === name && agent.ownerId === ownerId
    );
  }

  private async updateAgentStatus(agentId: string, status: AgentStatus, requesterId: string): Promise<Agent> {
    const agent = await this.getAgent(agentId, requesterId);

    // Only owner can update status
    if (agent.ownerId !== requesterId) {
      throw new NotFoundError('Agent', { agentId });
    }

    const updatedAgent: Agent = {
      ...agent,
      status,
      updatedAt: new Date(),
    };

    this.agents.set(agentId, updatedAgent);

    log.agentOperation('update_status', agentId, { 
      ownerId: requesterId,
      newStatus: status,
      previousStatus: agent.status 
    });

    return updatedAgent;
  }
}

// Singleton instance
export const agentService = new AgentService(); 