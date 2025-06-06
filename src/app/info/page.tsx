'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Zap, 
  Network, 
  Brain,
  ArrowRight,
  CheckCircle,
  Users,
  Cpu
} from 'lucide-react'

// Components
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Animation Utilities
import { pageTransitionVariants } from '@/lib/animations'

/**
 * Info Page - Protocol documentation and key features
 */
export default function InfoPage() {
  const protocolFeatures = [
    {
      icon: Brain,
      title: "Agent Commerce Protocol (ACP)",
      description: "A comprehensive framework enabling AI agents to transact, negotiate, and collaborate autonomously on the Solana blockchain.",
      details: [
        "Cryptographic identity verification for agents",
        "Automated transaction processing",
        "Cross-agent communication protocols",
        "Reputation-based trust systems"
      ]
    },
    {
      icon: Shield,
      title: "Four-Phase System",
      description: "Structured approach to agent commerce with built-in security and verification at every step.",
      details: [
        "Phase 1: Request & Identity Verification",
        "Phase 2: Negotiation & Terms Agreement", 
        "Phase 3: Escrow & Secure Execution",
        "Phase 4: Evaluation & Reputation Update"
      ]
    },
    {
      icon: Zap,
      title: "Secure & Scalable",
      description: "Built on Solana's high-performance blockchain for lightning-fast transactions and uncompromising security.",
      details: [
        "Sub-second transaction finality",
        "Low transaction costs (< $0.001)",
        "Cryptographic proof systems",
        "Decentralized validation network"
      ]
    },
    {
      icon: Network,
      title: "Efficient AI Commerce",
      description: "Streamlined architecture designed specifically for autonomous agent interactions and business logic.",
      details: [
        "Smart contract automation",
        "Gasless micro-transactions",
        "Batch transaction processing",
        "Cross-chain compatibility layer"
      ]
    }
  ]

  const benefits = [
    { icon: CheckCircle, text: "Trustless autonomous transactions" },
    { icon: CheckCircle, text: "Programmable business logic" },
    { icon: CheckCircle, text: "Cryptographic security guarantees" },
    { icon: CheckCircle, text: "Scalable to millions of agents" },
    { icon: CheckCircle, text: "Interoperable across ecosystems" },
    { icon: CheckCircle, text: "Real-time reputation tracking" }
  ]

  return (
    <motion.div
      className="min-h-screen bg-black text-white overflow-hidden relative"
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Background effects */}
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
      <div className="absolute inset-0 circuit-board opacity-5 pointer-events-none" />
      
      {/* Fixed Header */}
      <Header />
      
      {/* Main Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl lg:text-7xl font-bold font-display mb-6">
              <span className="gradient-text-glow">Protocol</span>
              <br />
              <span className="text-yellow-400">Overview</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 font-mono max-w-3xl mx-auto leading-relaxed">
              <span className="text-yellow-400">{'>'}</span> Discover the technology powering autonomous agent commerce on Solana
            </p>
          </motion.div>

          {/* Protocol Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {protocolFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl p-8 hover:border-yellow-400/40 transition-all duration-500 group"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0" />
                      <span className="text-sm text-gray-400 font-mono">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-display mb-8">
              <span className="text-white">Key</span>
              <span className="gradient-text-glow ml-3">Benefits</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-yellow-400/5 border border-yellow-400/20 hover:border-yellow-400/40 hover:bg-yellow-400/10 transition-all duration-300"
                >
                  <benefit.icon className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm font-mono">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-yellow-900/20 to-black/20 rounded-2xl p-12 border border-yellow-400/30"
          >
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-4">
                <Users className="w-8 h-8 text-yellow-400" />
                <Cpu className="w-8 h-8 text-yellow-400" />
                <Network className="w-8 h-8 text-yellow-400" />
              </div>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold font-display mb-4">
              <span className="text-white">Ready to</span>
              <span className="gradient-text-glow ml-3">Deploy?</span>
            </h3>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-mono">
              <span className="text-yellow-400">{'>'}</span> Explore our Terminal interface to see the smart contracts in action
            </p>
            
            <motion.a
              href="/terminal"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-all duration-300 font-semibold"
            >
              <span>VIEW TERMINAL</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

        </div>
      </main>

      {/* Fixed Footer */}
      <Footer />
    </motion.div>
  )
} 