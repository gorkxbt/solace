'use client'

import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion, MotionValue } from 'framer-motion'
import { Zap } from 'lucide-react'
import { applyMouseParallax } from '@/utils/animations'
import { useMousePosition } from '@/hooks/useMousePosition'

interface LogoProps {
  logoScale: MotionValue<number>
}

export default function Logo({ logoScale }: LogoProps) {
  const logoRef = useRef<HTMLDivElement>(null)
  const mousePosition = useMousePosition()

  useEffect(() => {
    if (logoRef.current) {
      applyMouseParallax(logoRef.current, mousePosition.x, mousePosition.y)
    }
  }, [mousePosition])

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
      style={{ scale: logoScale }}
    >
      <Link href="/" className="group relative block">
        <div 
          ref={logoRef}
          className="relative perspective-1000 preserve-3d"
        >
          {/* Main logo container */}
          <div className="relative flex items-center space-x-4">
            
            {/* Hexagonal logo with tech effects */}
            <div className="relative">
              <div className="w-12 h-12 clip-hexagon bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center group-hover:shadow-yellow-glow transition-all duration-500 rotate-0 group-hover:rotate-180">
                <Zap className="w-7 h-7 text-black transform group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              {/* Rotating rings */}
              <div className="absolute inset-0 border-2 border-yellow-400/30 rounded-full animate-spin-slow opacity-60" />
              <div className="absolute inset-1 border border-yellow-400/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
              
              {/* Pulse effect */}
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full animate-ping opacity-20" />
            </div>

            {/* Brand text with typewriter effect */}
            <div className="hidden sm:block">
              <h1 className="text-xl font-display font-bold">
                <span className="gradient-text-primary">Solace</span>
                <span className="text-yellow-400 ml-1">Protocol</span>
              </h1>
              <p className="text-xs font-mono text-gray-400 -mt-1 opacity-80">
                <span className="text-yellow-500">{'>'}</span> Autonomous Agent Commerce
              </p>
            </div>
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
        </div>
      </Link>
    </motion.div>
  )
} 