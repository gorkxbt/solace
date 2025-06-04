/**
 * Agent types supported by the ACP system
 */
export enum AgentType {
  TRADING = 'trading',
  DATA_ANALYSIS = 'data_analysis',
  SERVICE_PROVIDER = 'service_provider',
  MARKETPLACE = 'marketplace',
  ORACLE = 'oracle',
  CUSTOM = 'custom',
}

/**
 * Agent status states
 */
export enum AgentStatus {
  PENDING = 'pending',
  ACTIVE = 'active',
  PAUSED = 'paused',
  SUSPENDED = 'suspended',
  TERMINATED = 'terminated',
  ERROR = 'error',
}

/**
 * Solana network types
 */
export enum SolanaNetwork {
  DEVNET = 'devnet',
  TESTNET = 'testnet',
  MAINNET = 'mainnet-beta',
}

/**
 * Agent capability interface
 */
export interface AgentCapability {
  id: string;
  name: string;
  description: string;
  version: string;
  parameters?: Record<string, any>;
}

/**
 * Agent configuration interface
 */
export interface AgentConfiguration {
  maxTransactionAmount: number;
  dailyTransactionLimit: number;
  allowedTokens: string[];
  riskThreshold: number;
  operatingHours?: {
    start: string; // HH:mm format
    end: string;   // HH:mm format
    timezone: string;
  };
  notifications: {
    email?: string;
    webhook?: string;
    discord?: string;
  };
  customParameters?: Record<string, any>;
}

/**
 * Agent reputation metrics
 */
export interface AgentReputation {
  score: number; // 0-100
  totalTransactions: number;
  successfulTransactions: number;
  averageResponseTime: number; // in milliseconds
  uptime: number; // percentage
  lastUpdated: Date;
  reviews: AgentReview[];
}

/**
 * Agent review interface
 */
export interface AgentReview {
  id: string;
  reviewerId: string;
  rating: number; // 1-5
  comment?: string;
  transactionId?: string;
  createdAt: Date;
}

/**
 * Agent statistics interface
 */
export interface AgentStatistics {
  totalEarnings: number;
  transactionsCount: number;
  averageTransactionValue: number;
  activeContracts: number;
  lastActivityAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Main Agent interface
 */
export interface Agent {
  id: string;
  name: string;
  description: string;
  type: AgentType;
  status: AgentStatus;
  
  // Owner information
  ownerId: string;
  ownerWallet: string;
  
  // Network and deployment
  network: SolanaNetwork;
  contractAddress?: string;
  programId?: string;
  
  // Agent capabilities and configuration
  capabilities: AgentCapability[];
  configuration: AgentConfiguration;
  
  // Performance and reputation
  reputation: AgentReputation;
  statistics: AgentStatistics;
  
  // Metadata
  version: string;
  tags: string[];
  isPublic: boolean;
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  deployedAt?: Date;
  lastActiveAt?: Date;
}

/**
 * Agent creation input interface
 */
export interface CreateAgentInput {
  name: string;
  description: string;
  type: AgentType;
  network: SolanaNetwork;
  capabilities: Omit<AgentCapability, 'id'>[];
  configuration: AgentConfiguration;
  tags?: string[];
  isPublic?: boolean;
}

/**
 * Agent update input interface
 */
export interface UpdateAgentInput {
  name?: string;
  description?: string;
  status?: AgentStatus;
  configuration?: Partial<AgentConfiguration>;
  tags?: string[];
  isPublic?: boolean;
}

/**
 * Agent query filters interface
 */
export interface AgentQueryFilters {
  type?: AgentType | AgentType[];
  status?: AgentStatus | AgentStatus[];
  network?: SolanaNetwork | SolanaNetwork[];
  ownerId?: string;
  isPublic?: boolean;
  tags?: string[];
  minReputation?: number;
  search?: string; // Search in name and description
  sortBy?: 'createdAt' | 'reputation' | 'earnings' | 'activity';
  sortOrder?: 'asc' | 'desc';
  limit?: number;
  offset?: number;
}

/**
 * Agent deployment configuration
 */
export interface AgentDeploymentConfig {
  network: SolanaNetwork;
  wallet: string;
  programId?: string;
  initialFunding?: number;
  computeUnits?: number;
  priorityFee?: number;
}

/**
 * Agent deployment result
 */
export interface AgentDeploymentResult {
  success: boolean;
  contractAddress?: string;
  transactionId?: string;
  error?: string;
  deployedAt: Date;
}

/**
 * Agent activity log entry
 */
export interface AgentActivityLog {
  id: string;
  agentId: string;
  type: 'deployment' | 'transaction' | 'configuration_change' | 'status_change' | 'error';
  description: string;
  metadata?: Record<string, any>;
  timestamp: Date;
}

/**
 * Agent metrics interface for monitoring
 */
export interface AgentMetrics {
  agentId: string;
  timestamp: Date;
  cpuUsage?: number;
  memoryUsage?: number;
  networkLatency?: number;
  transactionSpeed?: number;
  errorRate?: number;
  responseTime?: number;
}

/**
 * Agent validation functions
 */
export class AgentValidator {
  /**
   * Validate agent name
   */
  static validateName(name: string): boolean {
    return name.length >= 3 && name.length <= 50 && /^[a-zA-Z0-9_-]+$/.test(name);
  }

  /**
   * Validate agent description
   */
  static validateDescription(description: string): boolean {
    return description.length >= 10 && description.length <= 500;
  }

  /**
   * Validate wallet address
   */
  static validateWalletAddress(address: string): boolean {
    return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address);
  }

  /**
   * Validate agent configuration
   */
  static validateConfiguration(config: AgentConfiguration): string[] {
    const errors: string[] = [];

    if (config.maxTransactionAmount <= 0) {
      errors.push('Max transaction amount must be positive');
    }

    if (config.dailyTransactionLimit <= 0) {
      errors.push('Daily transaction limit must be positive');
    }

    if (config.riskThreshold < 0 || config.riskThreshold > 100) {
      errors.push('Risk threshold must be between 0 and 100');
    }

    if (config.allowedTokens.length === 0) {
      errors.push('At least one allowed token must be specified');
    }

    return errors;
  }
}

/**
 * Agent utility functions
 */
export class AgentUtils {
  /**
   * Generate unique agent ID
   */
  static generateAgentId(): string {
    return `agent_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Calculate agent reputation score
   */
  static calculateReputationScore(metrics: {
    successRate: number;
    responseTime: number;
    uptime: number;
    transactionCount: number;
  }): number {
    const { successRate, responseTime, uptime, transactionCount } = metrics;
    
    // Weighted scoring algorithm
    const successWeight = 0.4;
    const responseWeight = 0.2;
    const uptimeWeight = 0.3;
    const volumeWeight = 0.1;

    const successScore = successRate;
    const responseScore = Math.max(0, 100 - (responseTime / 1000) * 10); // Penalize slow response
    const uptimeScore = uptime;
    const volumeScore = Math.min(100, (transactionCount / 1000) * 100); // Bonus for volume

    const totalScore = 
      successScore * successWeight +
      responseScore * responseWeight +
      uptimeScore * uptimeWeight +
      volumeScore * volumeWeight;

    return Math.round(Math.max(0, Math.min(100, totalScore)));
  }

  /**
   * Format agent for API response
   */
  static formatForAPI(agent: Agent): Omit<Agent, 'ownerWallet'> & { ownerWallet: string } {
    return {
      ...agent,
      ownerWallet: agent.ownerWallet.slice(0, 8) + '...' + agent.ownerWallet.slice(-8),
    };
  }
}

export default Agent; 