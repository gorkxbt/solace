'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  ArrowLeft,
  Plus,
  Code,
  Terminal,
  Database,
  Settings,
  Play,
  Pause,
  Activity,
  Zap,
  Shield,
  Key,
  FileText,
  GitBranch,
  MonitorSpeaker,
  Cpu,
  Network,
  ChevronRight,
  ExternalLink,
  Copy,
  CheckCircle,
  AlertTriangle,
  Info,
  Wallet,
  Power,
  Send
} from 'lucide-react'

export default function Framework() {
  const [activeTab, setActiveTab] = useState('overview')
  const [mounted, setMounted] = useState(false)
  const [apiKeyCopied, setApiKeyCopied] = useState(false)
  
  // Terminal state
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'Solace Protocol Terminal v1.0.0',
    'Type "help" for available commands',
    '> '
  ])
  const terminalRef = useRef<HTMLDivElement>(null)
  
  // Agent builder state
  const [agentName, setAgentName] = useState('')
  const [agentNetwork, setAgentNetwork] = useState('devnet')
  const [agentType, setAgentType] = useState('trading')
  const [isDeploying, setIsDeploying] = useState(false)
  
  // Phantom wallet state
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')
  const [phantom, setPhantom] = useState<any>(null)

  useEffect(() => {
    setMounted(true)
    
    // Check for Phantom wallet
    if (typeof window !== 'undefined') {
      const getProvider = () => {
        if ('phantom' in window) {
          const provider = (window as any).phantom?.solana
          if (provider?.isPhantom) {
            return provider
          }
        }
        window.open('https://phantom.app/', '_blank')
      }
      setPhantom(getProvider())
    }
  }, [])

  // Auto-scroll terminal to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [terminalHistory])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setApiKeyCopied(true)
    setTimeout(() => setApiKeyCopied(false), 2000)
  }

  // Terminal commands
  const executeCommand = (command: string) => {
    const cmd = command.trim().toLowerCase()
    let response = ''
    
    switch (cmd) {
      case 'help':
        response = `Available commands:
  help              - Show this help message
  agents list       - List all deployed agents
  agents create     - Create a new agent
  agents deploy     - Deploy agent to network
  wallet connect    - Connect Phantom wallet
  wallet balance    - Check wallet balance
  network status    - Check network status
  clear             - Clear terminal`
        break
      case 'agents list':
        response = `Active Agents:
  agent_001 - trading-bot-alpha    [ACTIVE]   devnet
  agent_002 - market-analyzer      [ACTIVE]   devnet
  agent_003 - portfolio-manager    [PAUSED]   mainnet`
        break
      case 'agents create':
        response = `Creating new agent...
✓ Agent template loaded
✓ Configuration initialized
✓ Smart contract compiled
Agent created successfully! Use 'agents deploy' to deploy.`
        break
      case 'agents deploy':
        response = `Deploying agent to ${agentNetwork}...
✓ Wallet connected: ${walletAddress || 'Not connected'}
✓ Network connection established
✓ Smart contract deployed
✓ Agent registered
Deployment complete! Agent is now active.`
        break
      case 'wallet connect':
        if (walletConnected) {
          response = `Wallet already connected: ${walletAddress}`
        } else {
          response = `Please connect wallet using the button in Agent Configuration panel.`
        }
        break
      case 'wallet balance':
        if (walletConnected) {
          response = `Wallet Balance:
  SOL: 2.45 SOL
  USDC: 1,250.00 USDC
  SPL Tokens: 3 different tokens`
        } else {
          response = `Error: Wallet not connected. Use 'wallet connect' first.`
        }
        break
      case 'network status':
        response = `Network Status:
  Solana Devnet:    [ONLINE]  TPS: 2,847
  Solana Mainnet:   [ONLINE]  TPS: 3,421
  ACP Protocol:     [ONLINE]  Active Agents: 1,247
  Last Block:       #187,432,156`
        break
      case 'clear':
        setTerminalHistory([
          'Solace Protocol Terminal v1.0.0',
          'Type "help" for available commands',
          '> '
        ])
        return
      default:
        response = `Command not found: ${command}. Type 'help' for available commands.`
    }
    
    setTerminalHistory(prev => [
      ...prev.slice(0, -1), // Remove the current prompt
      `> ${command}`,
      response,
      '> '
    ])
  }

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (terminalInput.trim()) {
      executeCommand(terminalInput)
      setTerminalInput('')
    }
  }

  // Phantom wallet functions
  const connectPhantom = async () => {
    if (!phantom) {
      alert('Phantom wallet not found! Please install Phantom wallet.')
      return
    }

    try {
      const response = await phantom.connect()
      setWalletConnected(true)
      setWalletAddress(response.publicKey.toString())
      
      // Add to terminal history
      setTerminalHistory(prev => [
        ...prev.slice(0, -1),
        `✓ Phantom wallet connected: ${response.publicKey.toString().slice(0, 8)}...`,
        '> '
      ])
    } catch (error) {
      console.error('Error connecting to Phantom:', error)
      alert('Failed to connect wallet. Please try again.')
    }
  }

  const deployAgent = async () => {
    if (!agentName.trim()) {
      alert('Please enter an agent name')
      return
    }
    
    if (!walletConnected) {
      alert('Please connect your Phantom wallet first')
      return
    }

    setIsDeploying(true)
    
    // Simulate deployment process
    setTimeout(() => {
      setTerminalHistory(prev => [
        ...prev.slice(0, -1),
        `✓ Agent "${agentName}" deployed successfully to ${agentNetwork}`,
        `✓ Contract Address: ${Math.random().toString(36).substr(2, 9)}...`,
        `✓ Agent ID: agent_${Math.random().toString(36).substr(2, 6)}`,
        '> '
      ])
      setIsDeploying(false)
    }, 3000)
  }

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-yellow-400">Loading...</div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 circuit-board opacity-5" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Link 
              href="/"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8 transition-colors font-mono text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {'<'} Back to Hub
            </Link>
            
            <div className="mb-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
                <span className="gradient-text-primary">ACP</span>
                <span className="text-yellow-400 ml-3">Framework</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
                // Professional SDK for building Autonomous Commerce Protocol agents
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="glass-tech rounded-xl p-6 border border-yellow-500/20">
                <div className="text-2xl font-bold text-yellow-400 mb-1">SDK</div>
                <div className="text-sm text-gray-400 font-mono">TypeScript Ready</div>
              </div>
              <div className="glass-tech rounded-xl p-6 border border-yellow-500/20">
                <div className="text-2xl font-bold text-yellow-400 mb-1">API</div>
                <div className="text-sm text-gray-400 font-mono">RESTful & WebSocket</div>
              </div>
              <div className="glass-tech rounded-xl p-6 border border-yellow-500/20">
                <div className="text-2xl font-bold text-yellow-400 mb-1">Solana</div>
                <div className="text-sm text-gray-400 font-mono">Native Integration</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-tech rounded-xl p-3 border border-yellow-500/20">
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'overview', label: 'Overview', icon: MonitorSpeaker },
                { id: 'quickstart', label: 'Quick Start', icon: Zap },
                { id: 'agents', label: 'Agent Builder', icon: Cpu },
                { id: 'api', label: 'API Console', icon: Terminal },
                { id: 'terminal', label: 'Terminal', icon: Terminal }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-5 py-3 rounded-lg transition-all duration-300 font-mono text-sm ${
                    activeTab === tab.id
                      ? 'bg-yellow-400 text-black font-semibold'
                      : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/5'
                  }`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Architecture Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="glass-tech rounded-xl p-8 border border-yellow-500/20">
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
                    <Code className="w-6 h-6 mr-3" />
                    Framework Architecture
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Agent Core</h3>
                        <p className="text-gray-400 text-sm">Base agent infrastructure with decision-making capabilities</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Commerce Layer</h3>
                        <p className="text-gray-400 text-sm">Transaction handling and escrow management</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Solana Integration</h3>
                        <p className="text-gray-400 text-sm">Native blockchain operations and wallet management</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-tech rounded-xl p-8 border border-yellow-500/20">
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
                    <Shield className="w-6 h-6 mr-3" />
                    Security Features
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                      <span className="text-white">End-to-End Encryption</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                      <span className="text-white">Multi-Signature Wallets</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                      <span className="text-white">Reputation System</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                      <span className="text-white">Audit Trails</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Development Tools */}
              <div className="glass-tech rounded-xl p-8 border border-yellow-500/20">
                <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
                  <Network className="w-6 h-6 mr-3" />
                  Development Tools
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-black/30 rounded-lg border border-yellow-500/10">
                    <Terminal className="w-8 h-8 text-yellow-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">CLI Tools</h3>
                    <p className="text-gray-400 text-sm mb-4">Command-line interface for agent deployment and management</p>
                    <code className="text-xs text-yellow-400 bg-black/50 px-2 py-1 rounded font-mono">
                      npm install -g @solace/acp-cli
                    </code>
                  </div>
                  <div className="p-6 bg-black/30 rounded-lg border border-yellow-500/10">
                    <Database className="w-8 h-8 text-yellow-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">SDK Package</h3>
                    <p className="text-gray-400 text-sm mb-4">TypeScript SDK with comprehensive type definitions</p>
                    <code className="text-xs text-yellow-400 bg-black/50 px-2 py-1 rounded font-mono">
                      npm install @solace/acp-sdk
                    </code>
                  </div>
                  <div className="p-6 bg-black/30 rounded-lg border border-yellow-500/10">
                    <GitBranch className="w-8 h-8 text-yellow-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Templates</h3>
                    <p className="text-gray-400 text-sm mb-4">Pre-built agent templates for common use cases</p>
                    <code className="text-xs text-yellow-400 bg-black/50 px-2 py-1 rounded font-mono">
                      acp init --template trading
                    </code>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Quick Start Tab */}
          {activeTab === 'quickstart' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-yellow-400 mb-4">Get Started in Minutes</h2>
                <p className="text-gray-300 font-mono">Follow these steps to create your first ACP agent</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Installation */}
                <div className="glass-tech rounded-xl p-6 border border-yellow-500/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <span className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                    Installation
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-black/50 rounded-lg p-4 border border-yellow-500/20">
                      <p className="text-gray-400 text-sm mb-2 font-mono"># Install the ACP CLI</p>
                      <code className="text-yellow-400 font-mono text-sm">npm install -g @solace/acp-cli</code>
                    </div>
                    <div className="bg-black/50 rounded-lg p-4 border border-yellow-500/20">
                      <p className="text-gray-400 text-sm mb-2 font-mono"># Install the SDK</p>
                      <code className="text-yellow-400 font-mono text-sm">npm install @solace/acp-sdk</code>
                    </div>
                  </div>
                </div>

                {/* Authentication */}
                <div className="glass-tech rounded-xl p-6 border border-yellow-500/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <span className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                    Authentication
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-black/50 rounded-lg p-4 border border-yellow-500/20">
                      <p className="text-gray-400 text-sm mb-2 font-mono"># Generate API key</p>
                      <code className="text-yellow-400 font-mono text-sm">acp auth login</code>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Info className="w-4 h-4 text-blue-400" />
                      <p className="text-gray-400 text-sm">Connect your Solana wallet for deployment</p>
                    </div>
                  </div>
                </div>

                {/* Create Agent */}
                <div className="glass-tech rounded-xl p-6 border border-yellow-500/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <span className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                    Create Agent
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-black/50 rounded-lg p-4 border border-yellow-500/20">
                      <p className="text-gray-400 text-sm mb-2 font-mono"># Initialize new agent</p>
                      <code className="text-yellow-400 font-mono text-sm">acp init my-trading-agent</code>
                    </div>
                    <div className="bg-black/50 rounded-lg p-4 border border-yellow-500/20">
                      <p className="text-gray-400 text-sm mb-2 font-mono"># Select template</p>
                      <code className="text-yellow-400 font-mono text-sm">? Choose template: Trading Bot</code>
                    </div>
                  </div>
                </div>

                {/* Deploy */}
                <div className="glass-tech rounded-xl p-6 border border-yellow-500/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <span className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                    Deploy
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-black/50 rounded-lg p-4 border border-yellow-500/20">
                      <p className="text-gray-400 text-sm mb-2 font-mono"># Deploy to testnet</p>
                      <code className="text-yellow-400 font-mono text-sm">acp deploy --network devnet</code>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <p className="text-gray-400 text-sm">Agent deployed and ready to transact</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Example */}
              <div className="glass-tech rounded-xl p-6 border border-yellow-500/20">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Basic Agent Example</h3>
                <div className="bg-black/50 rounded-lg p-6 border border-yellow-500/20 overflow-x-auto">
                  <pre className="text-sm">
                    <code className="text-gray-300">
{`import { ACPAgent, Transaction } from '@solace/acp-sdk'

class TradingAgent extends ACPAgent {
  async onRequest(request: Transaction) {
    // Agent decision logic
    if (this.shouldAcceptTrade(request)) {
      return this.acceptTransaction(request)
    }
    return this.rejectTransaction(request)
  }

  private shouldAcceptTrade(request: Transaction): boolean {
    // Custom trading logic
    return request.amount <= this.riskThreshold
  }
}

const agent = new TradingAgent({
  walletAddress: process.env.WALLET_ADDRESS,
  apiKey: process.env.ACP_API_KEY
})

agent.start()`}
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>
          )}

          {/* Agent Builder Tab */}
          {activeTab === 'agents' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-yellow-400 mb-4">Agent Management Console</h2>
                <p className="text-gray-300 font-mono">Create, configure, and monitor your ACP agents</p>
              </div>

              {/* Agent Creation */}
              <div className="glass-tech rounded-xl p-8 border border-yellow-500/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Create New Agent</h3>
                  <button className="btn-tech">
                    <Plus className="w-4 h-4 mr-2" />
                    New Agent
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-black/30 rounded-lg border border-yellow-500/10 cursor-pointer hover:border-yellow-500/30 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                      <Activity className="w-6 h-6 text-black" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Trading Agent</h4>
                    <p className="text-gray-400 text-sm">Automated trading with risk management and market analysis</p>
                  </div>

                  <div className="p-6 bg-black/30 rounded-lg border border-yellow-500/10 cursor-pointer hover:border-yellow-500/30 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                      <Database className="w-6 h-6 text-black" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Data Agent</h4>
                    <p className="text-gray-400 text-sm">Data processing and analysis with automated insights</p>
                  </div>

                  <div className="p-6 bg-black/30 rounded-lg border border-yellow-500/10 cursor-pointer hover:border-yellow-500/30 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                      <Network className="w-6 h-6 text-black" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Service Agent</h4>
                    <p className="text-gray-400 text-sm">Service marketplace with automated fulfillment</p>
                  </div>
                </div>
              </div>

              {/* Configuration Panel */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="glass-tech rounded-xl p-6 border border-yellow-500/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Settings className="w-5 h-5 mr-3" />
                    Agent Configuration
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Agent Name</label>
                      <input 
                        type="text" 
                        value={agentName}
                        onChange={(e) => setAgentName(e.target.value)}
                        placeholder="my-trading-agent"
                        className="w-full px-4 py-2 bg-black/30 border border-yellow-500/20 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Agent Type</label>
                      <select 
                        value={agentType}
                        onChange={(e) => setAgentType(e.target.value)}
                        className="w-full px-4 py-2 bg-black/30 border border-yellow-500/20 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                      >
                        <option value="trading">Trading Bot</option>
                        <option value="data">Data Analyzer</option>
                        <option value="service">Service Provider</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Network</label>
                      <select 
                        value={agentNetwork}
                        onChange={(e) => setAgentNetwork(e.target.value)}
                        className="w-full px-4 py-2 bg-black/30 border border-yellow-500/20 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                      >
                        <option value="devnet">Devnet (Testing)</option>
                        <option value="mainnet">Mainnet (Production)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Wallet Address</label>
                      <input 
                        type="text" 
                        value={walletConnected ? walletAddress : ''}
                        placeholder="Connect Solana wallet"
                        readOnly
                        className="w-full px-4 py-2 bg-black/30 border border-yellow-500/20 rounded-lg text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
                      />
                      <button
                        onClick={connectPhantom}
                        disabled={walletConnected}
                        className={`mt-2 w-full flex items-center justify-center px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                          walletConnected
                            ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                            : 'bg-purple-500/20 border border-purple-500/30 text-purple-400 hover:bg-purple-500/30'
                        }`}
                      >
                        <Wallet className="w-4 h-4 mr-2" />
                        {walletConnected ? 'Wallet Connected' : 'Connect Phantom Wallet'}
                      </button>
                    </div>
                    
                    <button
                      onClick={deployAgent}
                      disabled={!walletConnected || !agentName.trim() || isDeploying}
                      className={`w-full flex items-center justify-center px-4 py-3 rounded-lg font-mono text-sm transition-all duration-300 ${
                        !walletConnected || !agentName.trim() || isDeploying
                          ? 'bg-gray-500/20 border border-gray-500/30 text-gray-500 cursor-not-allowed'
                          : 'bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/30'
                      }`}
                    >
                      {isDeploying ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-400 mr-2"></div>
                          Deploying Agent...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Deploy Agent
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="glass-tech rounded-xl p-6 border border-yellow-500/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Key className="w-5 h-5 mr-3" />
                    API Credentials
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">API Key</label>
                      <div className="flex space-x-2">
                        <input 
                          type="text" 
                          value="acp_live_sk_test_123...abc"
                          readOnly
                          className="flex-1 px-4 py-2 bg-black/30 border border-yellow-500/20 rounded-lg text-gray-400 font-mono text-sm"
                        />
                        <button 
                          onClick={() => copyToClipboard('acp_live_sk_test_123...abc')}
                          className="px-3 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-lg text-yellow-400 hover:bg-yellow-400/20 transition-colors"
                        >
                          {apiKeyCopied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 p-3 bg-yellow-400/10 border border-yellow-400/30 rounded-lg">
                      <AlertTriangle className="w-4 h-4 text-yellow-400" />
                      <p className="text-yellow-400 text-sm">Keep your API keys secure and never share them publicly</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* API Console Tab */}
          {activeTab === 'api' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-yellow-400 mb-4">API Console</h2>
                <p className="text-gray-300 font-mono">Test and explore the ACP API endpoints</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* API Explorer */}
                <div className="glass-tech rounded-xl p-6 border border-yellow-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">API Endpoints</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg border border-yellow-500/10">
                      <div className="flex items-center space-x-3">
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-mono">GET</span>
                        <span className="text-white font-mono text-sm">/api/v1/agents</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg border border-yellow-500/10">
                      <div className="flex items-center space-x-3">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-mono">POST</span>
                        <span className="text-white font-mono text-sm">/api/v1/agents</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg border border-yellow-500/10">
                      <div className="flex items-center space-x-3">
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-mono">PUT</span>
                        <span className="text-white font-mono text-sm">/api/v1/agents/:id</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg border border-yellow-500/10">
                      <div className="flex items-center space-x-3">
                        <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-mono">DEL</span>
                        <span className="text-white font-mono text-sm">/api/v1/agents/:id</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Response Example */}
                <div className="glass-tech rounded-xl p-6 border border-yellow-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">Response Example</h3>
                  <div className="bg-black/50 rounded-lg p-4 border border-yellow-500/20 overflow-x-auto">
                    <pre className="text-sm">
                      <code className="text-gray-300">
{`{
  "agent": {
    "id": "agent_1234567890",
    "name": "trading-bot-alpha",
    "status": "active",
    "network": "devnet",
    "wallet": "9WzDXwBbmkg...",
    "created_at": "2024-01-15T10:30:00Z",
    "config": {
      "risk_threshold": 100,
      "auto_trade": true
    }
  }
}`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* WebSocket */}
              <div className="glass-tech rounded-xl p-6 border border-yellow-500/20">
                <h3 className="text-xl font-bold text-white mb-4">WebSocket Connection</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-300 mb-4">Real-time agent events and transaction updates</p>
                    <div className="bg-black/50 rounded-lg p-4 border border-yellow-500/20">
                      <code className="text-yellow-400 font-mono text-sm">
                        wss://api.solaceprotocol.com/ws/v1/agents
                      </code>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300 mb-4">Authentication required</p>
                    <div className="bg-black/50 rounded-lg p-4 border border-yellow-500/20">
                      <code className="text-gray-300 font-mono text-sm">
                        Authorization: Bearer your_api_key
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Terminal Tab */}
          {activeTab === 'terminal' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-yellow-400 mb-4">Protocol Terminal</h2>
                <p className="text-gray-300 font-mono">Execute commands and interact with the Solace Protocol network</p>
              </div>

              <div className="glass-tech rounded-xl border border-yellow-500/20 overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between p-4 bg-black/50 border-b border-yellow-500/20">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-400 font-mono text-sm">solace-protocol://terminal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono ${
                      walletConnected ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${walletConnected ? 'bg-green-400' : 'bg-red-400'}`}></div>
                      <span>{walletConnected ? 'CONNECTED' : 'DISCONNECTED'}</span>
                    </div>
                    <div className="flex items-center space-x-2 px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-xs font-mono">
                      <Power className="w-3 h-3" />
                      <span>{agentNetwork.toUpperCase()}</span>
                    </div>
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-6">
                  <div 
                    ref={terminalRef}
                    className="bg-black rounded-lg p-4 h-96 overflow-y-auto font-mono text-sm border border-yellow-500/10"
                  >
                    {terminalHistory.map((line, index) => (
                      <div key={index} className={`${
                        line.startsWith('>') ? 'text-yellow-400' : 
                        line.includes('✓') ? 'text-green-400' : 
                        line.includes('Error:') ? 'text-red-400' : 
                        'text-gray-300'
                      }`}>
                        {line}
                      </div>
                    ))}
                    
                    {/* Input Line */}
                    <form onSubmit={handleTerminalSubmit} className="flex items-center">
                      <span className="text-yellow-400 mr-2">{'>'}</span>
                      <input
                        type="text"
                        value={terminalInput}
                        onChange={(e) => setTerminalInput(e.target.value)}
                        className="flex-1 bg-transparent outline-none text-white caret-yellow-400"
                        placeholder="Type a command..."
                        autoFocus
                      />
                    </form>
                  </div>

                  {/* Command Shortcuts */}
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { cmd: 'agents list', desc: 'List agents' },
                      { cmd: 'wallet connect', desc: 'Connect wallet' },
                      { cmd: 'network status', desc: 'Network info' },
                      { cmd: 'help', desc: 'Show help' }
                    ].map((shortcut, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setTerminalInput(shortcut.cmd)
                          executeCommand(shortcut.cmd)
                        }}
                        className="p-3 bg-black/30 border border-yellow-500/20 rounded-lg hover:border-yellow-500/40 transition-colors group"
                      >
                        <div className="text-yellow-400 font-mono text-sm mb-1 group-hover:text-yellow-300">
                          {shortcut.cmd}
                        </div>
                        <div className="text-gray-400 text-xs">{shortcut.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Terminal Help Panel */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="glass-tech rounded-xl p-6 border border-yellow-500/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Terminal className="w-5 h-5 mr-3" />
                    Quick Commands
                  </h3>
                  <div className="space-y-3 text-sm">
                    {[
                      { cmd: 'agents create', desc: 'Initialize a new agent project' },
                      { cmd: 'agents deploy', desc: 'Deploy agent to selected network' },
                      { cmd: 'wallet balance', desc: 'Check connected wallet balance' },
                      { cmd: 'clear', desc: 'Clear terminal output' }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-black/20 rounded">
                        <code className="text-yellow-400">{item.cmd}</code>
                        <span className="text-gray-400">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-tech rounded-xl p-6 border border-yellow-500/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Activity className="w-5 h-5 mr-3" />
                    Live Network Stats
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Active Agents</span>
                      <span className="text-yellow-400 font-mono">1,247</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Transactions/Hour</span>
                      <span className="text-green-400 font-mono">23,456</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Network TPS</span>
                      <span className="text-blue-400 font-mono">3,421</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Protocol Version</span>
                      <span className="text-purple-400 font-mono">v1.0.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
} 