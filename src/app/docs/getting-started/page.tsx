'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  ArrowLeft,
  Terminal,
  CheckCircle,
  Copy,
  ExternalLink,
  Code,
  Zap,
  Shield,
  ChevronRight
} from 'lucide-react'

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 circuit-board opacity-5" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              href="/docs"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8 transition-colors font-mono text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {'<'} Back to Docs
            </Link>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text-primary">Getting Started</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-mono">
              // Build your first ACP agent in minutes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-yellow max-w-none">
            
            {/* Prerequisites */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-tech rounded-xl p-8 border border-yellow-500/20 mb-8"
            >
              <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3" />
                Prerequisites
              </h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Node.js 18+ installed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Solana wallet (Phantom, Solflare, etc.)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Basic TypeScript/JavaScript knowledge</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Understanding of blockchain concepts</span>
                </div>
              </div>
            </motion.div>

            {/* Step 1: Installation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-tech rounded-xl p-8 border border-yellow-500/20 mb-8"
            >
              <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Install the ACP CLI
              </h2>
              <p className="text-gray-300 mb-4">
                The ACP CLI is your primary tool for creating, deploying, and managing autonomous agents.
              </p>
              <div className="bg-black/50 rounded-lg p-4 border border-yellow-500/20 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm font-mono"># Install globally via npm</span>
                  <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-yellow-400" />
                </div>
                <code className="text-yellow-400 font-mono">npm install -g @solace/acp-cli</code>
              </div>
              <div className="bg-black/50 rounded-lg p-4 border border-yellow-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm font-mono"># Verify installation</span>
                  <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-yellow-400" />
                </div>
                <code className="text-yellow-400 font-mono">acp --version</code>
              </div>
            </motion.div>

            {/* Step 2: Authentication */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-tech rounded-xl p-8 border border-yellow-500/20 mb-8"
            >
              <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Set Up Authentication
              </h2>
              <p className="text-gray-300 mb-4">
                Connect your Solana wallet and generate an API key for secure agent operations.
              </p>
              <div className="bg-black/50 rounded-lg p-4 border border-yellow-500/20 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm font-mono"># Authenticate with Solana wallet</span>
                  <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-yellow-400" />
                </div>
                <code className="text-yellow-400 font-mono">acp auth login</code>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-blue-400 font-semibold mb-1">Pro Tip</p>
                    <p className="text-gray-300 text-sm">
                      Start with devnet for testing. You can switch to mainnet later when ready for production.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3: Create Agent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-tech rounded-xl p-8 border border-yellow-500/20 mb-8"
            >
              <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Create Your First Agent
              </h2>
              <p className="text-gray-300 mb-4">
                Initialize a new agent project using one of our pre-built templates.
              </p>
              <div className="bg-black/50 rounded-lg p-4 border border-yellow-500/20 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm font-mono"># Create new agent project</span>
                  <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-yellow-400" />
                </div>
                <code className="text-yellow-400 font-mono">acp init my-trading-agent</code>
              </div>
              <div className="bg-black/50 rounded-lg p-4 border border-yellow-500/20 mb-4">
                <span className="text-gray-400 text-sm font-mono mb-2 block"># Interactive template selection</span>
                <div className="space-y-1 text-sm">
                  <div className="text-yellow-400">? Choose agent template:</div>
                  <div className="text-gray-300 ml-4">❯ Trading Bot - Automated trading with risk management</div>
                  <div className="text-gray-300 ml-4">  Data Agent - Data processing and analysis</div>
                  <div className="text-gray-300 ml-4">  Service Agent - Service marketplace</div>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-4 border border-yellow-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm font-mono"># Navigate to project</span>
                  <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-yellow-400" />
                </div>
                <code className="text-yellow-400 font-mono">cd my-trading-agent</code>
              </div>
            </motion.div>

            {/* Step 4: Configuration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-tech rounded-xl p-8 border border-yellow-500/20 mb-8"
            >
              <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                Configure Your Agent
              </h2>
              <p className="text-gray-300 mb-4">
                Set up your agent's configuration file with network settings and parameters.
              </p>
              <div className="bg-black/50 rounded-lg p-6 border border-yellow-500/20 overflow-x-auto">
                <pre className="text-sm">
                  <code className="text-gray-300">
{`// acp.config.ts
export default {
  name: "my-trading-agent",
  network: "devnet", // or "mainnet"
  agent: {
    type: "trading",
    riskThreshold: 100, // USDC
    autoTrade: false,
    maxPositionSize: 1000
  },
  wallet: {
    keypair: process.env.WALLET_PRIVATE_KEY,
    // or use wallet adapter for browser
  },
  api: {
    endpoint: "https://api.solaceprotocol.com/v1",
    key: process.env.ACP_API_KEY
  }
}`}
                  </code>
                </pre>
              </div>
            </motion.div>

            {/* Step 5: Deploy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-tech rounded-xl p-8 border border-yellow-500/20 mb-8"
            >
              <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                Deploy to Solana
              </h2>
              <p className="text-gray-300 mb-4">
                Deploy your agent to the Solana blockchain and start autonomous operations.
              </p>
              <div className="bg-black/50 rounded-lg p-4 border border-yellow-500/20 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm font-mono"># Deploy to devnet first</span>
                  <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-yellow-400" />
                </div>
                <code className="text-yellow-400 font-mono">acp deploy --network devnet</code>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <p className="text-green-400 font-semibold mb-1">Success!</p>
                    <p className="text-gray-300 text-sm">
                      Your agent is now deployed and ready to participate in the ACP network.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="glass-tech rounded-xl p-8 border border-yellow-500/20"
            >
              <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
                <Zap className="w-6 h-6 mr-3" />
                Next Steps
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/docs/api" className="group p-4 bg-black/30 rounded-lg border border-yellow-500/10 hover:border-yellow-500/30 transition-colors">
                  <Code className="w-6 h-6 text-yellow-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400">API Reference</h3>
                  <p className="text-gray-400 text-sm mb-3">Explore the complete API documentation</p>
                  <div className="flex items-center text-yellow-400 text-sm">
                    <span>Read docs</span>
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
                
                <Link href="/docs/use-cases" className="group p-4 bg-black/30 rounded-lg border border-yellow-500/10 hover:border-yellow-500/30 transition-colors">
                  <Terminal className="w-6 h-6 text-yellow-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400">Use Cases</h3>
                  <p className="text-gray-400 text-sm mb-3">See real-world implementation examples</p>
                  <div className="flex items-center text-yellow-400 text-sm">
                    <span>View examples</span>
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 