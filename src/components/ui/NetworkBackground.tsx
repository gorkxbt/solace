'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface NetworkBackgroundProps {
  nodeCount?: number
  streamCount?: number
}

export default function NetworkBackground({ 
  nodeCount = 15, 
  streamCount = 8 
}: NetworkBackgroundProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Floating network nodes */}
      {[...Array(nodeCount)].map((_, i) => (
        <motion.div
          key={`network-${i}`}
          className="absolute"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            scale: 0
          }}
          animate={{
            scale: [0, 1, 0.8, 1],
            opacity: [0.2, 0.6, 0.3, 0.6],
            rotate: [0, 360]
          }}
          transition={{
            duration: Math.random() * 8 + 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        >
          <div className="w-2 h-2 bg-yellow-400/30 rounded-full">
            <div className="w-full h-full bg-yellow-400/50 rounded-full animate-ping" />
          </div>
        </motion.div>
      ))}

      {/* Flowing data streams */}
      {[...Array(streamCount)].map((_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute w-px h-32 bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${10 + Math.random() * 80}%`,
            transform: `rotate(${Math.random() * 90 - 45}deg)`
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scaleY: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
} 