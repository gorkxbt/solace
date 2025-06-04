'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MessageCircle,
  User2,
  CreditCard,
  Star,
  Terminal,
  ArrowRight,
  Cpu
} from 'lucide-react'

export default function ProtocolArchitecture() {
  const [currentPhase, setCurrentPhase] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    if (mounted) {
      const phaseInterval = setInterval(() => {
        setCurrentPhase(prev => (prev + 1) % 4)
      }, 3000)

      return () => clearInterval(phaseInterval)
    }
  }, [mounted])

  const protocolPhases = [
    {
      icon: MessageCircle,
      title: "HANDSHAKE",
      description: "Cryptographic agent verification and capability assessment protocols",
      color: "from-yellow-500 to-yellow-600",
      code: "INIT_HANDSHAKE()",
      phase: 1
    },
    {
      icon: User2,
      title: "NEGOTIATE",
      description: "Automated smart contract terms generation with Proof of Agreement",
      color: "from-yellow-400 to-yellow-500",
      code: "EXECUTE_TERMS()",
      phase: 2
    },
    {
      icon: CreditCard,
      title: "TRANSACT", 
      description: "Atomic swap execution with escrow validation and deliverable verification",
      color: "from-yellow-600 to-yellow-700",
      code: "ATOMIC_SWAP()",
      phase: 3
    },
    {
      icon: Star,
      title: "VALIDATE",
      description: "Decentralized reputation scoring and quality assurance protocols",
      color: "from-yellow-300 to-yellow-400",
      code: "UPDATE_SCORE()",
      phase: 4
    },
  ]

  return (
    <section className="py-32 relative bg-gradient-to-b from-black to-yellow-900/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-sm font-mono mb-8">
            <Cpu className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400">PROTOCOL_ARCHITECTURE</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-display font-bold mb-6">
            <span className="text-white">FOUR-PHASE</span>
            <br />
            <span className="gradient-text-glow">AGENT COMMERCE</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-mono">
            <span className="text-yellow-400">{'>'}</span> Cryptographically secure multi-agent coordination through 
            our revolutionary four-phase transaction lifecycle with atomic guarantees.
          </p>
        </motion.div>

        {/* Protocol Flow Grid */}
        <div className="relative">
          
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Floating particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400/20 rounded-full"
                animate={{
                  x: [0, Math.random() * 200 - 100],
                  y: [0, Math.random() * 200 - 100],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5]
                }}
                transition={{
                  duration: Math.random() * 8 + 6,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}

            {/* Binary streams */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`binary-${i}`}
                className="absolute text-yellow-400/10 font-mono text-xs select-none"
                initial={{ opacity: 0, y: -50 }}
                animate={{
                  opacity: [0, 0.4, 0],
                  y: [0, 400]
                }}
                transition={{
                  duration: Math.random() * 8 + 6,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "linear"
                }}
                style={{
                  left: `${20 + Math.random() * 60}%`,
                }}
              >
                {Array.from({ length: 12 }, () => Math.round(Math.random())).join('')}
              </motion.div>
            ))}
          </div>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {protocolPhases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  rotate: currentPhase === index ? 0 : [-2, 2, -1, 1][index]
                }}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02, 
                  rotate: 0,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className={`relative h-80 bg-gradient-to-br ${phase.color} rounded-2xl border-2 ${
                  currentPhase === index ? 'border-yellow-200 shadow-yellow-glow-lg' : 'border-yellow-400/30'
                } overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-all duration-500`}>
                  
                  {/* Circuit background */}
                  <div className="absolute inset-0 circuit-board opacity-20" />
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12" />
                  
                  {/* Phase indicator */}
                  <div className="absolute top-6 right-6 bg-black/30 rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="text-white font-mono text-sm font-bold">P{index + 1}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                    
                    {/* Header */}
                    <div>
                      <div className={`w-16 h-16 bg-black/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <phase.icon className="w-8 h-8 text-black" />
                      </div>
                      
                      <div className="mb-4">
                        <div className="text-sm font-mono text-black/80 mb-2">PHASE_{index + 1}</div>
                        <h3 className="text-2xl font-display font-bold text-black mb-2">{phase.title}</h3>
                        <div className="text-sm font-mono text-black/70 bg-black/10 px-3 py-1 rounded-md inline-block">
                          {phase.code}
                        </div>
                      </div>
                      
                      <p className="text-black/80 leading-relaxed font-mono">{phase.description}</p>
                    </div>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center text-black/80 font-mono text-sm group-hover:translate-x-2 transition-transform duration-300">
                        <Terminal className="w-5 h-5 mr-3" />
                        <span>EXECUTE_PHASE</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Active phase glow */}
                  {currentPhase === index && (
                    <motion.div
                      className="absolute inset-0 bg-yellow-400/20 rounded-2xl"
                      animate={{ opacity: [0.2, 0.5, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}

                  {/* Scan line effect */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black/50 to-transparent scan-line opacity-0 group-hover:opacity-100" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Flow Arrows - Between Grid Items */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 800 600">
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffd700" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#f5c500" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              
              {/* Flowing arrows between phases */}
              <motion.path
                d="M 380,150 Q 420,180 420,200 Q 420,220 380,250"
                stroke="url(#flowGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="8,4"
                markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
              
              <motion.path
                d="M 380,350 Q 420,380 420,400 Q 420,420 380,450"
                stroke="url(#flowGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="8,4"
                markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 2 }}
              />

              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                        refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#ffd700" opacity="0.6" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
} 