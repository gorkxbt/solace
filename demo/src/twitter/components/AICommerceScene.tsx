'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

interface AICommerceSceneProps {
  width?: number
  height?: number
}

export default function AICommerceScene({ width = 1200, height = 675 }: AICommerceSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Animation effect for neural network visualization
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let nodes: { x: number; y: number; vx: number; vy: number }[] = []
    let connections: { from: number; to: number }[] = []

    // Initialize nodes
    for (let i = 0; i < 30; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2
      })
    }

    // Create connections between nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.85) {
          connections.push({ from: i, to: j })
        }
      }
    }

    const animate = () => {
      if (!ctx) return

      // Clear with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, width, height)

      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1
      })

      // Draw connections
      connections.forEach(conn => {
        const from = nodes[conn.from]
        const to = nodes[conn.to]
        
        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.strokeStyle = 'rgba(255, 197, 0, 0.2)'
        ctx.stroke()
      })

      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = '#FFC500'
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      if (ctx) {
        ctx.clearRect(0, 0, width, height)
      }
    }
  }, [width, height])

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* Neural Network Background */}
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="absolute inset-0"
      />

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-12">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-24 h-24 clip-hexagon bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
            <Zap className="w-12 h-12 text-black" />
          </div>
        </motion.div>

        {/* Main Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center space-y-6"
        >
          <h1 className="text-6xl font-display font-bold gradient-text-glow">
            The Future of Commerce
          </h1>
          <p className="text-2xl text-gray-300 font-mono">
            Autonomous AI Agents × Solana Blockchain
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4"
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
          <span className="text-yellow-400 font-mono">SOLACE PROTOCOL</span>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
        </motion.div>

        {/* Floating AI Agent Icons */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + i * 0.2 }}
            className="absolute"
            style={{
              top: `${20 + i * 25}%`,
              left: `${15 + i * 30}%`,
            }}
          >
            <div className="w-16 h-16 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-yellow-400/20 animate-pulse" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 