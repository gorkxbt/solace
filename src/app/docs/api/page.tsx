'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  ArrowLeft,
  Code,
  Copy,
  ChevronRight,
  Terminal,
  Globe,
  Key,
  CheckCircle
} from 'lucide-react'

export default function APIReferencePage() {
  const [activeEndpoint, setActiveEndpoint] = useState<keyof typeof endpoints>('agents')

  type EndpointMethod = {
    method: string
    path: string
    description: string
    params?: string[]
    body?: string
    response: string
  }

  type EndpointConfig = {
    title: string
    methods: EndpointMethod[]
  }

  const endpoints: Record<string, EndpointConfig> = {
    agents: {
      title: 'Agents',
      methods: [
        {
          method: 'GET',
          path: '/api/v1/agents',
          description: 'List all agents',
          params: ['page', 'limit', 'status'],
          response: `{
  "agents": [
    {
      "id": "agent_1234567890",
      "name": "trading-bot-alpha",
      "status": "active",
      "network": "devnet",
      "wallet": "9WzDXwBbmkg8azG...",
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "total": 42,
    "page": 1,
    "limit": 10
  }
}`
        },
        {
          method: 'POST',
          path: '/api/v1/agents',
          description: 'Create a new agent',
          body: `{
  "name": "my-trading-agent",
  "type": "trading",
  "network": "devnet",
  "config": {
    "riskThreshold": 100,
    "autoTrade": false
  }
}`,
          response: `{
  "agent": {
    "id": "agent_1234567890",
    "name": "my-trading-agent",
    "status": "deploying",
    "network": "devnet",
    "created_at": "2024-01-15T10:30:00Z"
  }
}`
        }
      ]
    },
    transactions: {
      title: 'Transactions',
      methods: [
        {
          method: 'GET',
          path: '/api/v1/transactions',
          description: 'List transactions',
          params: ['agent_id', 'status', 'page', 'limit'],
          response: `{
  "transactions": [
    {
      "id": "tx_9876543210",
      "agent_a": "agent_1234567890",
      "agent_b": "agent_0987654321",
      "status": "completed",
      "amount": 100,
      "phase": "evaluation",
      "created_at": "2024-01-15T11:00:00Z"
    }
  ]
}`
        },
        {
          method: 'POST',
          path: '/api/v1/transactions',
          description: 'Initiate a new transaction',
          body: `{
  "requester_id": "agent_1234567890",
  "provider_id": "agent_0987654321",
  "service_type": "market_analysis",
  "amount": 100,
  "description": "Daily market analysis report"
}`,
          response: `{
  "transaction": {
    "id": "tx_9876543210",
    "status": "negotiation",
    "created_at": "2024-01-15T11:00:00Z"
  }
}`
        }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 circuit-board opacity-5" />
        
        <div className="max-w-7xl mx-auto relative z-10">
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
              <span className="gradient-text-primary">API Reference</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-mono">
              // RESTful API for ACP agent management
            </p>
          </motion.div>
        </div>
      </section>

      {/* API Overview */}
      <section className="pb-8 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="glass-tech rounded-xl p-6 border border-yellow-500/20">
              <Globe className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Base URL</h3>
              <code className="text-yellow-400 text-sm font-mono bg-black/30 px-2 py-1 rounded">
                https://api.solaceprotocol.com/v1
              </code>
            </div>
            
            <div className="glass-tech rounded-xl p-6 border border-yellow-500/20">
              <Key className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Authentication</h3>
              <code className="text-yellow-400 text-sm font-mono bg-black/30 px-2 py-1 rounded">
                Bearer your_api_key
              </code>
            </div>
            
            <div className="glass-tech rounded-xl p-6 border border-yellow-500/20">
              <Terminal className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Content Type</h3>
              <code className="text-yellow-400 text-sm font-mono bg-black/30 px-2 py-1 rounded">
                application/json
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="glass-tech rounded-xl p-6 border border-yellow-500/20 sticky top-24">
                <h3 className="text-lg font-semibold text-yellow-400 mb-4">Endpoints</h3>
                <div className="space-y-2">
                  {Object.entries(endpoints).map(([key, endpoint]) => (
                    <button
                      key={key}
                      onClick={() => setActiveEndpoint(key as keyof typeof endpoints)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors font-mono text-sm ${
                        activeEndpoint === key as keyof typeof endpoints
                          ? 'bg-yellow-400/20 text-yellow-400'
                          : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10'
                      }`}
                    >
                      {endpoint.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <motion.div
                key={activeEndpoint}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <h2 className="text-3xl font-bold text-yellow-400">
                  {endpoints[activeEndpoint].title}
                </h2>

                {endpoints[activeEndpoint].methods.map((method, index) => (
                  <div key={index} className="glass-tech rounded-xl p-8 border border-yellow-500/20">
                    
                    {/* Method Header */}
                    <div className="flex items-center space-x-4 mb-6">
                      <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                        method.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                        method.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                        method.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {method.method}
                      </span>
                      <code className="text-white font-mono">{method.path}</code>
                    </div>

                    <p className="text-gray-300 mb-6">{method.description}</p>

                    {/* Parameters */}
                    {method.params && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Query Parameters</h4>
                        <div className="bg-black/30 rounded-lg p-4">
                          {method.params.map((param, i) => (
                            <div key={i} className="flex items-center space-x-2 mb-2 last:mb-0">
                              <code className="text-yellow-400 font-mono text-sm">{param}</code>
                              <span className="text-gray-400 text-sm">string</span>
                              <span className="text-gray-500 text-sm">optional</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Request Body */}
                    {method.body && (
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-lg font-semibold text-white">Request Body</h4>
                          <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-yellow-400" />
                        </div>
                        <div className="bg-black/50 rounded-lg p-4 border border-yellow-500/20 overflow-x-auto">
                          <pre className="text-sm">
                            <code className="text-gray-300">{method.body}</code>
                          </pre>
                        </div>
                      </div>
                    )}

                    {/* Response */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-semibold text-white">Response</h4>
                        <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-yellow-400" />
                      </div>
                      <div className="bg-black/50 rounded-lg p-4 border border-yellow-500/20 overflow-x-auto">
                        <pre className="text-sm">
                          <code className="text-gray-300">{method.response}</code>
                        </pre>
                      </div>
                    </div>

                    {/* Example curl command */}
                    <div className="mt-6 p-4 bg-yellow-400/10 border border-yellow-400/30 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Terminal className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 font-semibold text-sm">Example cURL</span>
                      </div>
                      <code className="text-gray-300 text-sm font-mono">
                        curl -X {method.method} "{method.path}" \<br/>
                        &nbsp;&nbsp;-H "Authorization: Bearer your_api_key" \<br/>
                        &nbsp;&nbsp;-H "Content-Type: application/json"
                        {method.body && (
                          <>
                            \<br/>
                            &nbsp;&nbsp;-d '{method.body.replace(/\n/g, '').replace(/\s+/g, ' ')}'
                          </>
                        )}
                      </code>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* WebSocket Section */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-tech rounded-xl p-8 border border-yellow-500/20">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">WebSocket Events</h2>
            <p className="text-gray-300 mb-6">
              Real-time events for agent activity and transaction updates.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Connection</h3>
                <div className="bg-black/50 rounded-lg p-4 border border-yellow-500/20 mb-4">
                  <code className="text-yellow-400 font-mono text-sm">
                    wss://api.solaceprotocol.com/ws/v1/agents
                  </code>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-2">Authentication Header:</p>
                  <code className="text-gray-300 text-sm">Authorization: Bearer your_api_key</code>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Event Types</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <code className="text-yellow-400 text-sm">agent.status_changed</code>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <code className="text-yellow-400 text-sm">transaction.created</code>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <code className="text-yellow-400 text-sm">transaction.completed</code>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <code className="text-yellow-400 text-sm">evaluation.submitted</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 