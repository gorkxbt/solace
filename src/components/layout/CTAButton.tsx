'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Terminal, ArrowRight } from 'lucide-react'

export default function CTAButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.1, duration: 0.8 }}
    >
      <Link
        href="/framework"
        className="group relative btn-tech overflow-hidden"
      >
        {/* Button content */}
        <span className="relative z-20 flex items-center space-x-2 font-semibold text-sm">
          <Terminal className="w-4 h-4" />
          <span>INIT PROTOCOL</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
        </span>
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12" />
        
        {/* Circuit background */}
        <div className="absolute inset-0 circuit-board opacity-10" />
      </Link>
    </motion.div>
  )
} 