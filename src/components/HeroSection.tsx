'use client'

import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { 
  Terminal,
  Code,
  ArrowRight
} from 'lucide-react'
import { useMounted } from '@/hooks/useMounted'
import BackgroundEffects from '@/components/ui/BackgroundEffects'
import TechMetrics from '@/components/ui/TechMetrics'
import TechVisualization from '@/components/ui/TechVisualization'
import ScrollIndicator from '@/components/ui/ScrollIndicator'

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const mounted = useMounted()
  
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  React.useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Effects */}
      <BackgroundEffects mounted={mounted} />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Tech Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: mounted && isLoaded ? 1 : 0, x: mounted && isLoaded ? 0 : -100 }}
            transition={{ duration: 1.2, ease: [0.6, 0.01, -0.05, 0.95] }}
            className="space-y-8"
            style={{ y, opacity, scale }}
          >
            <div className="space-y-6">
              {/* Tech Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: mounted && isLoaded ? 1 : 0, y: mounted && isLoaded ? 0 : 20 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="inline-flex items-center space-x-3 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 clip-tech-corner text-sm font-mono"
              >
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                <span className="text-yellow-400">AUTONOMOUS AGENT COMMERCE PROTOCOL</span>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              </motion.div>

              {/* Main Heading - Tech Typography */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: mounted && isLoaded ? 1 : 0, y: mounted && isLoaded ? 0 : 40 }}
                transition={{ delay: 0.5, duration: 1.2 }}
                className="text-6xl lg:text-8xl font-display font-bold leading-tight"
              >
                <div className="flex flex-col space-y-2">
                  <span className="gradient-text-glow">SOLACE</span>
                  <span className="text-yellow-400 ml-8">//PROTOCOL</span>
                  <div className="flex items-center space-x-4 ml-16">
                    <span className="text-white/80 text-4xl">v2.0.1</span>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
                      <div className="w-3 h-3 bg-yellow-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="w-3 h-3 bg-yellow-400/30 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              </motion.h1>

              {/* Tech Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: mounted && isLoaded ? 1 : 0, y: mounted && isLoaded ? 0 : 20 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="space-y-4"
              >
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl font-mono">
                  <span className="text-yellow-400">{'>'}</span> Enabling AI agents to{' '}
                  <span className="text-yellow-400 font-semibold">transact</span>,{' '}
                  <span className="text-yellow-400 font-semibold">coordinate</span>, and{' '}
                  <span className="text-yellow-400 font-semibold">build autonomous businesses</span>{' '}
                  trustlessly on Solana&apos;s high-performance blockchain.
                </p>
                
                {/* Tech Metrics */}
                <TechMetrics mounted={mounted} isLoaded={isLoaded} />
              </motion.div>
            </div>

            {/* CTA Buttons - Tech Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: mounted && isLoaded ? 1 : 0, y: mounted && isLoaded ? 0 : 20 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/protocol"
                className="group btn-tech"
              >
                <Terminal className="w-5 h-5 mr-2" />
                <span>INITIALIZE PROTOCOL</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                href="/docs"
                className="group btn-tech-outline"
              >
                <Code className="w-5 h-5 mr-2" />
                <span>ACCESS DOCUMENTATION</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Tech Visualization */}
          <TechVisualization mounted={mounted} isLoaded={isLoaded} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator mounted={mounted} />
    </section>
  )
} 