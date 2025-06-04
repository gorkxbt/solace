// =============================================================================
// APPLICATION CONSTANTS - Centralized configuration and data
// =============================================================================

import { 
  Home, 
  Book, 
  FileText, 
  Info, 
  Github, 
  Twitter, 
  MessageCircle,
  Zap,
  Shield,
  Globe,
  Cpu,
  TrendingUp,
  Bot,
  Coins,
  Network,
  Code,
  Users,
  Target
} from 'lucide-react'
import type { NavigationItem, UseCase, TechMetric, ProtocolFeature } from '@/types'

/**
 * Application metadata and SEO constants
 */
export const APP_CONFIG = {
  name: 'Solace Protocol',
  description: 'Empowering AI agents to transact, coordinate, and build autonomous businesses trustlessly on Solana blockchain.',
  url: 'https://solaceprotocol.com',
  version: '2.0.1',
  author: 'Solace Protocol Team',
  keywords: [
    'Solace Protocol',
    'AI agents',
    'Solana',
    'blockchain',
    'autonomous commerce',
    'DeFi',
    'Web3',
    'smart contracts',
    'cryptocurrency'
  ]
} as const

/**
 * Navigation structure for consistent routing
 */
export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: Home,
    description: 'Main landing page'
  },
  {
    label: 'Framework',
    href: '/framework',
    icon: Code,
    description: 'Development framework and tools'
  },
  {
    label: 'Documentation',
    href: '/docs',
    icon: Book,
    description: 'Technical documentation and guides'
  },
  {
    label: 'Whitepaper',
    href: '/whitepaper',
    icon: FileText,
    description: 'Protocol whitepaper and research'
  },
  {
    label: 'Blog',
    href: '/blog',
    icon: FileText,
    description: 'Latest updates and insights'
  },
  {
    label: 'About',
    href: '/about',
    icon: Info,
    description: 'About the protocol and team'
  }
]

/**
 * Social media links and external resources
 */
export const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/solace-protocol',
    icon: Github,
    isExternal: true
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/solaceprotocol',
    icon: Twitter,
    isExternal: true
  },
  {
    label: 'Discord',
    href: 'https://discord.gg/solaceprotocol',
    icon: MessageCircle,
    isExternal: true
  }
] as const

/**
 * Protocol features and capabilities
 */
export const PROTOCOL_FEATURES: ProtocolFeature[] = [
  {
    id: 'autonomous-agents',
    title: 'Autonomous Agents',
    description: 'Deploy AI agents that can transact, negotiate, and build businesses autonomously',
    icon: Bot,
    status: 'active',
    metrics: [
      { label: 'Active Agents', value: '3,247', trend: 'up' },
      { label: 'Transactions/Day', value: '12.5K', trend: 'up' }
    ]
  },
  {
    id: 'smart-contracts',
    title: 'Smart Contracts',
    description: 'Solana-based smart contracts optimized for agent interactions',
    icon: Code,
    status: 'active',
    metrics: [
      { label: 'Contract Calls', value: '45.2K', trend: 'up' },
      { label: 'Gas Efficiency', value: '99.7%', trend: 'stable' }
    ]
  },
  {
    id: 'decentralized-commerce',
    title: 'Decentralized Commerce',
    description: 'Enable agents to create and manage decentralized marketplaces',
    icon: Globe,
    status: 'beta',
    metrics: [
      { label: 'Active Markets', value: '156', trend: 'up' },
      { label: 'Volume', value: '$2.4M', trend: 'up' }
    ]
  },
  {
    id: 'security-layer',
    title: 'Security Layer',
    description: 'Advanced security protocols ensuring safe agent operations',
    icon: Shield,
    status: 'active',
    metrics: [
      { label: 'Security Score', value: '99.9%', trend: 'stable' },
      { label: 'Incidents', value: '0', trend: 'stable' }
    ]
  }
]

/**
 * Use cases and examples
 */
export const USE_CASES: UseCase[] = [
  {
    id: 'trading-bot',
    title: 'Autonomous Trading Bot',
    description: 'Deploy AI agents that can analyze markets and execute trades automatically',
    icon: TrendingUp,
    category: 'Finance',
    complexity: 'intermediate',
    estimatedTime: '2-4 hours',
    features: [
      'Real-time market analysis',
      'Risk management protocols',
      'Multi-exchange support',
      'Profit optimization'
    ],
    codeExample: `
// Deploy trading agent
const agent = await solace.createAgent({
  type: 'TRADING_BOT',
  strategy: 'momentum',
  riskLevel: 'moderate'
})

await agent.deploy()
    `,
    demoUrl: '/demo/trading-bot'
  },
  {
    id: 'marketplace-manager',
    title: 'Marketplace Manager',
    description: 'Create and manage decentralized marketplaces with autonomous inventory management',
    icon: Globe,
    category: 'Commerce',
    complexity: 'advanced',
    estimatedTime: '4-8 hours',
    features: [
      'Inventory automation',
      'Price optimization',
      'Customer service bots',
      'Payment processing'
    ],
    codeExample: `
// Create marketplace
const marketplace = await solace.createMarketplace({
  category: 'digital-goods',
  automation: true
})
    `,
    demoUrl: '/demo/marketplace'
  },
  {
    id: 'liquidity-provider',
    title: 'Liquidity Provider',
    description: 'Automated liquidity provision across multiple DeFi protocols',
    icon: Coins,
    category: 'DeFi',
    complexity: 'advanced',
    estimatedTime: '3-6 hours',
    features: [
      'Multi-protocol support',
      'Yield optimization',
      'Impermanent loss protection',
      'Automated rebalancing'
    ],
    codeExample: `
// Deploy liquidity agent
const provider = await solace.createLiquidityProvider({
  protocols: ['uniswap', 'sushiswap'],
  strategy: 'yield-farming'
})
    `,
    demoUrl: '/demo/liquidity-provider'
  },
  {
    id: 'dao-governance',
    title: 'DAO Governance Agent',
    description: 'Automate DAO participation and governance voting based on predefined criteria',
    icon: Users,
    category: 'Governance',
    complexity: 'intermediate',
    estimatedTime: '2-3 hours',
    features: [
      'Proposal analysis',
      'Voting automation',
      'Delegation management',
      'Community engagement'
    ],
    codeExample: `
// Create governance agent
const governor = await solace.createGovernanceAgent({
  dao: 'example-dao',
  votingStrategy: 'weighted-analysis'
})
    `,
    demoUrl: '/demo/dao-governance'
  }
]

/**
 * Tech metrics for the hero section
 */
export const TECH_METRICS: TechMetric[] = [
  {
    label: 'NETWORK_UPTIME',
    value: '99.97',
    unit: '%',
    trend: 'stable',
    color: '#10b981'
  },
  {
    label: 'ACTIVE_AGENTS',
    value: '3,247',
    unit: '',
    trend: 'up',
    color: '#ffd700'
  },
  {
    label: 'TPS_CAPACITY',
    value: '65,000',
    unit: '',
    trend: 'stable',
    color: '#06b6d4'
  },
  {
    label: 'AVG_LATENCY',
    value: '0.4',
    unit: 'ms',
    trend: 'down',
    color: '#8b5cf6'
  }
]

/**
 * Animation configuration
 */
export const ANIMATION_CONFIG = {
  durations: {
    fast: 0.15,
    normal: 0.3,
    slow: 0.5,
    slower: 0.75
  },
  easings: {
    easeOut: [0, 0, 0.2, 1],
    easeIn: [0.4, 0, 1, 1],
    easeInOut: [0.4, 0, 0.2, 1],
    backOut: [0.34, 1.56, 0.64, 1]
  },
  stagger: {
    items: 0.1,
    children: 0.05
  }
} as const

/**
 * API endpoints and configuration
 */
export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  endpoints: {
    agents: '/api/agents',
    analytics: '/api/analytics',
    health: '/api/health'
  },
  timeout: 10000,
  retries: 3
} as const

/**
 * Blockchain configuration
 */
export const BLOCKCHAIN_CONFIG = {
  solana: {
    network: process.env.NEXT_PUBLIC_SOLANA_NETWORK || 'devnet',
    rpcUrl: process.env.NEXT_PUBLIC_SOLANA_RPC_URL || 'https://api.devnet.solana.com',
    programId: process.env.NEXT_PUBLIC_PROGRAM_ID || ''
  },
  contracts: {
    agentFactory: process.env.NEXT_PUBLIC_AGENT_FACTORY_ADDRESS || '',
    marketplace: process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS || '',
    governance: process.env.NEXT_PUBLIC_GOVERNANCE_ADDRESS || ''
  }
} as const

/**
 * Feature flags for progressive rollout
 */
export const FEATURE_FLAGS = {
  enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  enableDebugMode: process.env.NODE_ENV === 'development',
  enableBetaFeatures: process.env.NEXT_PUBLIC_ENABLE_BETA === 'true',
  enableMarketplace: true,
  enableGovernance: false
} as const

/**
 * Validation rules and constraints
 */
export const VALIDATION_RULES = {
  agent: {
    nameMinLength: 3,
    nameMaxLength: 50,
    descriptionMaxLength: 500
  },
  user: {
    emailPattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    passwordMinLength: 8
  },
  transaction: {
    minAmount: 0.001,
    maxAmount: 1000000
  }
} as const 