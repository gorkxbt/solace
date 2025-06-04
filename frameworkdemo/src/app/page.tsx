'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { 
  Terminal,
  Power,
  Wifi,
  Shield,
  Zap,
  Eye
} from 'lucide-react'

export default function MysteriousTerminal() {
  const [mounted, setMounted] = useState(false)
  const [currentLine, setCurrentLine] = useState(0)
  const terminalRef = useRef<HTMLDivElement>(null)

  const terminalOutput = [
    { delay: 0, text: "SOLACE PROTOCOL - ACP TERMINAL v2.1.7", className: "text-yellow-400 font-bold" },
    { delay: 1000, text: "Initializing secure connection...", className: "text-gray-400" },
    { delay: 1500, text: "✓ Quantum encryption enabled", className: "text-green-400" },
    { delay: 2000, text: "✓ Neural network synchronized", className: "text-green-400" },
    { delay: 2500, text: "", className: "" },
    { delay: 3000, text: "AUTONOMOUS COMMERCE PROTOCOL ACTIVE", className: "text-yellow-400 font-semibold" },
    { delay: 3500, text: "Monitoring agent network...", className: "text-cyan-400" },
    { delay: 4000, text: "", className: "" },
    
    // Phase 1: Handshake
    { delay: 4500, text: "> PHASE_1: HANDSHAKE_INITIATED", className: "text-purple-400 font-mono" },
    { delay: 5000, text: "  Agent_7A2F requesting commerce verification", className: "text-gray-300" },
    { delay: 5500, text: "  └─ Cryptographic challenge: [REDACTED]", className: "text-gray-500" },
    { delay: 6000, text: "  └─ Identity confirmed: trading_bot_alpha", className: "text-green-400" },
    { delay: 6500, text: "  └─ Capabilities: [market_analysis, risk_mgmt, atomic_swap]", className: "text-blue-400" },
    { delay: 7000, text: "  ✓ HANDSHAKE_COMPLETE", className: "text-green-400 font-semibold" },
    { delay: 7500, text: "", className: "" },
    
    // Phase 2: Negotiate
    { delay: 8000, text: "> PHASE_2: NEGOTIATION_PROTOCOL", className: "text-orange-400 font-mono" },
    { delay: 8500, text: "  Smart contract terms being generated...", className: "text-gray-300" },
    { delay: 9000, text: "  └─ Escrow amount: 2.5 SOL", className: "text-yellow-400" },
    { delay: 9500, text: "  └─ Service type: market_data_feed", className: "text-blue-400" },
    { delay: 10000, text: "  └─ Duration: 24h continuous", className: "text-cyan-400" },
    { delay: 10500, text: "  └─ Quality threshold: 99.5% uptime", className: "text-green-400" },
    { delay: 11000, text: "  ✓ TERMS_AGREED - Contract hash: 0xa7b3c9...", className: "text-green-400 font-semibold" },
    { delay: 11500, text: "", className: "" },
    
    // Phase 3: Transact
    { delay: 12000, text: "> PHASE_3: ATOMIC_TRANSACTION", className: "text-red-400 font-mono" },
    { delay: 12500, text: "  Executing on-chain transaction...", className: "text-gray-300" },
    { delay: 13000, text: "  └─ Escrow deployed: EscrowAccount_9x4K", className: "text-purple-400" },
    { delay: 13500, text: "  └─ Funds locked: ✓", className: "text-green-400" },
    { delay: 14000, text: "  └─ Service delivery initiated...", className: "text-yellow-400" },
    { delay: 14500, text: "  └─ Data stream: [LIVE] 847 ms latency", className: "text-cyan-400" },
    { delay: 15000, text: "  ✓ TRANSACTION_COMPLETE", className: "text-green-400 font-semibold" },
    { delay: 15500, text: "", className: "" },
    
    // Phase 4: Validate
    { delay: 16000, text: "> PHASE_4: VALIDATION_PROTOCOL", className: "text-pink-400 font-mono" },
    { delay: 16500, text: "  Quality assessment in progress...", className: "text-gray-300" },
    { delay: 17000, text: "  └─ Uptime: 99.97% ✓", className: "text-green-400" },
    { delay: 17500, text: "  └─ Latency avg: 234ms ✓", className: "text-green-400" },
    { delay: 18000, text: "  └─ Data integrity: 100% ✓", className: "text-green-400" },
    { delay: 18500, text: "  └─ Reputation score updated: A+ (97/100)", className: "text-yellow-400" },
    { delay: 19000, text: "  ✓ VALIDATION_COMPLETE", className: "text-green-400 font-semibold" },
    { delay: 19500, text: "", className: "" },
    
    // Network Status
    { delay: 20000, text: "NETWORK STATUS:", className: "text-yellow-400 font-bold" },
    { delay: 20500, text: "  Active agents: 3,247", className: "text-cyan-400" },
    { delay: 21000, text: "  Transactions/min: 892", className: "text-green-400" },
    { delay: 21500, text: "  Success rate: 99.94%", className: "text-green-400" },
    { delay: 22000, text: "  Network hash rate: [CLASSIFIED]", className: "text-red-400" },
    { delay: 22500, text: "", className: "" },
    { delay: 23000, text: "Monitoring continuous...", className: "text-gray-500" },
    { delay: 24000, text: "_", className: "text-yellow-400 animate-pulse" },
  ]

  useEffect(() => {
    setMounted(true)
    
    const showNextLine = () => {
      if (currentLine < terminalOutput.length - 1) {
        setCurrentLine(prev => prev + 1)
      }
    }

    const timer = setTimeout(showNextLine, terminalOutput[currentLine]?.delay || 1000)
    
    return () => clearTimeout(timer)
  }, [currentLine])

  // Auto-scroll terminal to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [currentLine])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-yellow-400 font-mono">INITIALIZING...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Matrix rain effect */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-yellow-400/20 font-mono text-xs"
              animate={{
                y: ['-100px', '100vh'],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 8,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
              style={{
                left: `${Math.random() * 100}%`,
              }}
            >
              {Array.from({ length: 20 }, () => Math.round(Math.random())).join('')}
            </motion.div>
          ))}
        </div>

        {/* Circuit patterns */}
        <div className="absolute inset-0 circuit-board opacity-3" />
        
        {/* Atmospheric glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center space-x-4">
            <div 
              className="w-12 h-12 bg-gradient-to-br from-yellow-400/60 to-yellow-600/60 flex items-center justify-center"
              style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}
            >
              <Eye className="w-6 h-6 text-black/70" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-widest text-yellow-400/80">
                SOLACE_PROTOCOL
              </h1>
              <p className="text-yellow-400/50 font-mono text-sm tracking-[0.3em]">
                ACP_MONITORING_STATION
              </p>
            </div>
          </div>
          
          {/* Status Indicators */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 font-mono text-sm">ONLINE</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 font-mono text-sm">SECURE</span>
            </div>
            <div className="flex items-center space-x-2">
              <Wifi className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 font-mono text-sm">3247_AGENTS</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Terminal */}
      <div className="relative z-10 px-6 pb-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="glass-tech rounded-xl border border-yellow-500/20 overflow-hidden max-w-6xl mx-auto"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between p-4 bg-black/70 border-b border-yellow-500/20">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500/80 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400/80 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500/80 rounded-full"></div>
              </div>
              <Terminal className="w-4 h-4 text-yellow-400/70" />
              <span className="text-gray-400/80 font-mono text-sm">acp://neural-interface-v2.1.7</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-xs font-mono text-gray-500">[CLASSIFIED_ACCESS]</div>
              <Power className="w-4 h-4 text-red-400/70" />
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6">
            <div 
              ref={terminalRef}
              className="bg-black/80 rounded-lg p-6 h-[600px] overflow-y-auto font-mono text-sm border border-yellow-500/10"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#ffd700 transparent'
              }}
            >
              {terminalOutput.slice(0, currentLine + 1).map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-1 ${line.className}`}
                >
                  {line.text}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Data Streams */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs font-mono text-yellow-400/10"
            animate={{
              x: ['-100px', '100vw'],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear"
            }}
            style={{
              top: `${Math.random() * 100}%`,
            }}
          >
            ACP_{Math.random().toString(36).substr(2, 6)}_STREAM
          </motion.div>
        ))}
      </div>

      {/* Scan Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"
          animate={{
            y: ['-10px', '100vh']
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  )
} 