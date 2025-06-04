'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'

interface TechVisualizationProps {
  mounted: boolean
  isLoaded: boolean
}

export default function TechVisualization({ mounted, isLoaded }: TechVisualizationProps) {
  const protocolRef = useRef(null)

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: mounted && isLoaded ? 1 : 0, x: mounted && isLoaded ? 0 : 100 }}
      transition={{ duration: 1.2, delay: 0.6, ease: [0.6, 0.01, -0.05, 0.95] }}
      className="relative perspective-2000"
    >
      <div className="relative w-full h-[700px] preserve-3d" ref={protocolRef}>
        
        {/* Central Processing Hub */}
        <motion.div
          animate={mounted ? { 
            rotateY: [0, 360],
            rotateX: [0, 15, 0],
            rotateZ: [0, 5, 0]
          } : {}}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-yellow-400 to-yellow-600 clip-hexagon flex items-center justify-center shadow-yellow-glow-xl border-4 border-yellow-300/30"
        >
          <Globe className="w-20 h-20 text-black" />
          
          {/* Rotating Data Rings */}
          <div className="absolute inset-0 border-4 border-yellow-400/40 rounded-full animate-spin-slow" />
          <div className="absolute inset-4 border-2 border-yellow-400/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
        </motion.div>

        {/* Floating Tech Indicators */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-yellow-400 rounded-full opacity-60"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`
            }}
          />
        ))}
      </div>
    </motion.div>
  )
} 