'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Components
import Header from '@/components/Header'

// Animation Utilities
import { pageTransitionVariants } from '@/lib/animations'

/**
 * Terminal Page - Full-screen terminal interface showing ACP Smart Contracts
 */
const terminalContent = [
  "solace-protocol@terminal:~$ cat smart-contracts.md",
  "",
  "### ACP Smart Contracts",
  "",
  "- Request Contract: Records initial transaction requests, agent identities,",
  "  and compatibility checks.",
  "",
  "- Negotiation Contract: Manages negotiation of terms, stores",
  "  cryptographically signed PoAs.",
  "",
  "- Escrow Contract: Holds payments and deliverables securely, automates",
  "  conditional release.",
  "",
  "- Evaluation Contract: Records evaluation results, feedback, and updates",
  "  reputation scores.",
  "",
  "solace-protocol@terminal:~$ system status",
  "✓ All contracts deployed and operational",
  "✓ Network latency: <10ms",
  "✓ Active agents: 1,247",
  "✓ Transactions processed: 894,273",
  "",
  "solace-protocol@terminal:~$ █"
]

export default function TerminalPage() {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayedText, setDisplayedText] = useState<string[]>([])
  const [showCursor, setShowCursor] = useState(true)

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 600)

    return () => clearInterval(cursorInterval)
  }, [])

  // Typing animation effect
  useEffect(() => {
    if (currentLine < terminalContent.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => [...prev, terminalContent[currentLine]])
        setCurrentLine(prev => prev + 1)
      }, 150)

      return () => clearTimeout(timer)
    }
  }, [currentLine])

  return (
    <motion.div
      className="min-h-screen bg-black text-white overflow-hidden relative"
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Fixed Header */}
      <Header />
      
      {/* Terminal Interface - Full Screen */}
      <main className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto h-[calc(100vh-12rem)]">
          
          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="h-full bg-black border border-yellow-500/30 rounded-lg overflow-hidden shadow-2xl shadow-yellow-500/20"
          >
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-gray-900/50 border-b border-yellow-500/20">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400 text-sm font-mono">solace-protocol@terminal</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono">
                <span>Solana Mainnet</span>
                <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                <span>Connected</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="h-full p-6 overflow-y-auto bg-black font-mono text-sm leading-relaxed">
              
              {/* Welcome message */}
              <div className="mb-6 text-yellow-400">
                <div>Welcome to Solace Protocol Terminal v2.1.0</div>
                <div className="text-gray-400">Autonomous Agent Commerce Platform</div>
                <div className="text-gray-500 text-xs">Type 'help' for available commands</div>
              </div>

              {/* Terminal content with typing effect */}
              <div className="space-y-1">
                {displayedText.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    className={`${
                      line.startsWith('solace-protocol@terminal:~$') 
                        ? 'text-yellow-400' 
                        : line.startsWith('✓')
                        ? 'text-green-400'
                        : line.startsWith('###')
                        ? 'text-yellow-300 font-bold'
                        : line.startsWith('-')
                        ? 'text-blue-300'
                        : line.includes('and')
                        ? 'text-gray-400 ml-2'
                        : 'text-gray-300'
                    }`}
                  >
                    {line || '\u00A0'}
                  </motion.div>
                ))}
                
                {/* Blinking cursor */}
                {currentLine >= terminalContent.length && (
                  <motion.div
                    className="inline-block"
                    animate={{ opacity: showCursor ? 1 : 0 }}
                    transition={{ duration: 0 }}
                  >
                    <span className="text-yellow-400 bg-yellow-400 text-black">█</span>
                  </motion.div>
                )}
              </div>

              {/* Additional terminal decorations */}
              <div className="absolute bottom-6 right-6 text-xs text-gray-600 font-mono">
                <div>Memory: 2.1GB / 8GB</div>
                <div>Uptime: 99.97%</div>
                <div>Network: Solana Mainnet-Beta</div>
              </div>

            </div>
          </motion.div>

          {/* Terminal footer info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-4 text-center"
          >
            <div className="text-gray-500 text-xs font-mono">
              <span className="text-yellow-400">{'>'}</span> Terminal interface for Solace Protocol Smart Contract monitoring
            </div>
          </motion.div>
        </div>
      </main>

      {/* Compact Footer for Terminal */}
      <div className="absolute bottom-0 w-full bg-black border-t border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-xs font-mono">
              © 2025 Solace Protocol
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://twitter.com/solaceprotocol" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-yellow-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/solaceprotocol" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-yellow-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 