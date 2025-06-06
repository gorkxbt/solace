'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import Spline from '@splinetool/react-spline'

// Components
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Animation Utilities
import { pageTransitionVariants } from '@/lib/animations'

/**
 * Home Page - Clean landing page with logo and title
 */
export default function HomePage() {
  return (
    <motion.div
      className="min-h-screen bg-black text-white overflow-hidden relative"
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Spline 3D Background Animation - Full Content Background */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0 overflow-hidden mt-20">
        <Spline
          scene="https://prod.spline.design/9m2KT6dOkH5aAPNW/scene.splinecode"
          style={{
            width: '100%',
            height: '100%',
            minWidth: '100vw',
            minHeight: 'calc(100vh - 5rem)'
          }}
        />
      </div>

      {/* Overlay to ensure content readability */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-10 mt-20 pointer-events-none"></div>

      {/* Fixed Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative z-20 flex items-center justify-center min-h-screen pt-32 pointer-events-none">
        <div className="text-center space-y-8 px-6 mt-16">
          
                    {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6"
          >
            <h1 className="text-6xl lg:text-8xl font-bold font-display">
              <span className="gradient-text-glow">Solace</span>
              <br />
              <span className="text-yellow-400">Protocol</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 font-mono max-w-2xl mx-auto leading-relaxed">
              <span className="text-yellow-400">{'>'}</span> Autonomous Agent Commerce on Solana
            </p>
          </motion.div>

          {/* Subtle background effects */}
          <div className="absolute inset-0 tech-grid opacity-5 pointer-events-none" />
          <div className="absolute inset-0 circuit-board opacity-5 pointer-events-none" />
          </div>
      </main>

      {/* Fixed Footer */}
      <div className="relative z-20">
        <Footer />
      </div>
    </motion.div>
  )
} 