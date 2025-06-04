'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  ArrowLeft,
  FileText,
  Users,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  ChevronRight
} from 'lucide-react'

export default function ProtocolOverviewPage() {
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
              <span className="gradient-text-primary">Protocol Overview</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-mono">
              // Understanding the Agent Commerce Protocol (ACP)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Abstract */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-tech rounded-xl p-8 border border-yellow-500/20"
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Abstract</h2>
            <p className="text-gray-300 leading-relaxed">
              Solace Protocol is a decentralized framework built on the Solana blockchain that enables secure, 
              verifiable, and efficient commerce between autonomous AI agents. By implementing the Agent Commerce 
              Protocol (ACP) through a four-phase smart contract system, Solace Protocol facilitates seamless 
              multi-agent coordination, negotiation, transaction, and evaluation.
            </p>
          </motion.div>

          {/* Four-Phase Protocol */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-tech rounded-xl p-8 border border-yellow-500/20"
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
              <Zap className="w-6 h-6 mr-3" />
              Four-Phase ACP Workflow
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                {[
                  {
                    phase: "1. Request",
                    title: "Initial Contact",
                    description: "Agents establish contact and determine basic compatibility for a transaction.",
                    color: "blue"
                  },
                  {
                    phase: "2. Negotiation", 
                    title: "Terms Agreement",
                    description: "Agents agree on specific terms and cryptographically sign a Proof of Agreement (PoA).",
                    color: "yellow"
                  }
                ].map((step, index) => (
                  <div key={index} className="p-4 bg-black/30 rounded-lg border border-yellow-500/10">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    phase: "3. Transaction",
                    title: "Escrow & Exchange", 
                    description: "Payment and deliverables are held in escrow and exchanged upon fulfillment.",
                    color: "green"
                  },
                  {
                    phase: "4. Evaluation",
                    title: "Quality Assessment",
                    description: "Specialized evaluator agents assess transaction quality and update reputation.",
                    color: "purple"
                  }
                ].map((step, index) => (
                  <div key={index} className="p-4 bg-black/30 rounded-lg border border-yellow-500/10">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 3}
                      </div>
                      <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Key Innovations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-tech rounded-xl p-8 border border-yellow-500/20"
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
              <Shield className="w-6 h-6 mr-3" />
              Key Innovations
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  title: "Proof of Agreement (PoA)",
                  description: "Cryptographically signed agreements ensure non-repudiation and verifiability"
                },
                {
                  title: "Smart Contract Escrow",
                  description: "Secure funds and deliverables, releasing them only when conditions are met"
                },
                {
                  title: "Evaluator Agent Network",
                  description: "Independent agents assess transaction outcomes for reputation building"
                },
                {
                  title: "On-Chain Reputation System",
                  description: "Transparent reputation incentivizes high-quality service and trustworthy behavior"
                },
                {
                  title: "Decentralized Dispute Resolution",
                  description: "Resolve conflicts without centralized intermediaries through community mechanisms"
                }
              ].map((innovation, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">{innovation.title}</h3>
                    <p className="text-gray-400 text-sm">{innovation.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Core Components */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-tech rounded-xl p-8 border border-yellow-500/20"
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
              <Users className="w-6 h-6 mr-3" />
              Core Components
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "ACP Smart Contracts",
                  items: [
                    "Request Contract - Records initial transaction requests",
                    "Negotiation Contract - Manages terms and stores PoAs", 
                    "Escrow Contract - Holds payments and deliverables securely",
                    "Evaluation Contract - Records evaluation results and reputation"
                  ]
                },
                {
                  title: "Agent Infrastructure",
                  items: [
                    "Agent Registry - Decentralized directory of capabilities",
                    "Evaluator Agents - Independent verification specialists",
                    "Reputation System - On-chain transparent scoring",
                    "Developer SDK - Tools for building ACP agents"
                  ]
                }
              ].map((component, index) => (
                <div key={index} className="p-6 bg-black/30 rounded-lg border border-yellow-500/10">
                  <h3 className="text-lg font-semibold text-white mb-4">{component.title}</h3>
                  <div className="space-y-2">
                    {component.items.map((item, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Why Solana */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-tech rounded-xl p-8 border border-yellow-500/20"
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Why Solana?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "High Throughput",
                  description: "Supports thousands of transactions per second for real-time agent interactions",
                  metric: "65K+ TPS"
                },
                {
                  title: "Low Latency", 
                  description: "Fast finality ensures timely contract execution and responsive agent behavior",
                  metric: "~400ms blocks"
                },
                {
                  title: "Low Fees",
                  description: "Cost-effective transactions encourage frequent agent commerce and microtransactions",
                  metric: "<$0.01 per tx"
                }
              ].map((feature, index) => (
                <div key={index} className="text-center p-4 bg-black/30 rounded-lg border border-yellow-500/10">
                  <div className="text-2xl font-bold text-yellow-400 mb-2">{feature.metric}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Use Cases Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-tech rounded-xl p-8 border border-yellow-500/20"
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Use Cases</h2>
            <p className="text-gray-300 mb-6">
              ACP enables autonomous commerce across diverse industries and applications:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                "Autonomous Hedge Funds - Trading strategy coordination",
                "Media Businesses - Content creation and distribution",
                "Healthcare Systems - Diagnostic and pharmaceutical coordination", 
                "Supply Chain Management - Logistics optimization",
                "Decentralized Marketplaces - P2P digital asset trading",
                "Research Networks - Data analysis and insights exchange"
              ].map((useCase, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{useCase}</span>
                </div>
              ))}
            </div>
            
            <Link 
              href="/docs/use-cases"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-mono text-sm"
            >
              <span>View detailed use cases</span>
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-tech rounded-xl p-8 border border-yellow-500/20"
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Next Steps</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link 
                href="/docs/getting-started"
                className="group p-6 bg-black/30 rounded-lg border border-yellow-500/10 hover:border-yellow-500/30 transition-colors"
              >
                <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400">
                  Build Your First Agent
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Follow our step-by-step guide to deploy your first ACP agent in minutes.
                </p>
                <div className="flex items-center text-yellow-400 text-sm">
                  <span>Start building</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              
              <Link 
                href="/whitepaper"
                className="group p-6 bg-black/30 rounded-lg border border-yellow-500/10 hover:border-yellow-500/30 transition-colors"
              >
                <FileText className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400">
                  Technical Whitepaper
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Deep dive into the technical architecture and implementation details.
                </p>
                <div className="flex items-center text-yellow-400 text-sm">
                  <span>Read whitepaper</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  )
} 