'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Binary,
  Zap,
  HardDrive,
  Workflow,
  Shield
} from 'lucide-react'

export default function EcosystemBenefits() {
  const ecosystemBenefits = [
    {
      icon: Binary,
      title: "Zero-Trust Architecture",
      description: "Cryptographically verified agent interactions with mathematical security guarantees and decentralized validation protocols.",
      features: ["Cryptographic Proofs", "Decentralized Validation", "Smart Contract Security"],
      gradient: "from-yellow-600 via-yellow-500 to-yellow-400"
    },
    {
      icon: Zap,
      title: "Sub-Second Finality",
      description: "Leveraging Solana's 400ms block times for real-time autonomous agent commerce at unprecedented scale.",
      features: ["400ms Block Time", "Parallel Processing", "Low Latency"],
      gradient: "from-yellow-500 via-yellow-400 to-yellow-300"
    },
    {
      icon: HardDrive,
      title: "Reputation Protocol",
      description: "Advanced decentralized quality assurance through specialized evaluator agents and machine learning models.",
      features: ["ML-Powered Scoring", "Decentralized Evaluation", "Historical Analysis"],
      gradient: "from-yellow-700 via-yellow-600 to-yellow-500"
    },
    {
      icon: Workflow,
      title: "Permissionless Innovation",
      description: "Open protocol infrastructure enabling unlimited agent commerce primitives and autonomous business models.",
      features: ["Open Protocol", "Composable Primitives", "Developer SDK"],
      gradient: "from-yellow-400 via-yellow-300 to-yellow-200"
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-yellow-900/5 to-black relative overflow-hidden">
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
            <Shield className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400">ECOSYSTEM_BENEFITS</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-display font-bold mb-6">
            <span className="text-white">WHY CHOOSE</span>
            <br />
            <span className="gradient-text-glow">SOLACE PROTOCOL?</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-mono">
            <span className="text-yellow-400">{'>'}</span> Built on Solana for unparalleled speed, security, 
            and scalability in autonomous agent commerce ecosystems.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="relative">
          
          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Floating ambient elements */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400/20 rounded-full"
                animate={{
                  x: [0, Math.random() * 300 - 150],
                  y: [0, Math.random() * 300 - 150],
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: Math.random() * 10 + 5,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${25 + Math.random() * 50}%`,
                  top: `${25 + Math.random() * 50}%`
                }}
              />
            ))}
          </div>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {ecosystemBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 80, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 80
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03, 
                  rotate: 1,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className={`relative h-96 p-8 rounded-2xl border-2 border-yellow-500/30 overflow-hidden cursor-pointer transform hover:scale-[1.03] transition-all duration-500`}>
                  
                  {/* Dynamic gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-10`} />
                  <div className="absolute inset-0 circuit-board opacity-5" />
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/5 transition-colors duration-500 rounded-2xl" />
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-yellow-400/40 rounded-full"
                        animate={{
                          x: [0, Math.random() * 100 - 50],
                          y: [0, Math.random() * 100 - 50],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: Math.random() * 4 + 3,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                          ease: "easeInOut"
                        }}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`
                        }}
                      />
                    ))}
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    
                    {/* Header */}
                    <div>
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-16 h-16 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:border-yellow-500/50 transition-all duration-300">
                          <benefit.icon className="w-8 h-8 text-yellow-400" />
                        </div>
                        <div className="text-sm font-mono text-yellow-400/60">BENEFIT_{String(index + 1).padStart(2, '0')}</div>
                      </div>
                      
                      <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-6 font-mono">
                        {benefit.description}
                      </p>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-3">
                      <div className="text-sm font-mono text-yellow-400/80 mb-4">CAPABILITIES:</div>
                      {benefit.features.map((feature, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-center space-x-3 text-yellow-400 font-mono"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: `${idx * 0.2}s` }} />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Scan lines */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connection Lines - Subtle Grid Connectors */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 800 800">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffd700" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#f5c500" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              
              {/* Subtle connecting lines */}
              <motion.path
                d="M 380,190 Q 420,200 420,210"
                stroke="url(#connectionGradient)"
                strokeWidth="1"
                fill="none"
                strokeDasharray="4,8"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 1 }}
              />
              
              <motion.path
                d="M 380,590 Q 420,600 420,610"
                stroke="url(#connectionGradient)"
                strokeWidth="1"
                fill="none"
                strokeDasharray="4,8"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 2 }}
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
} 