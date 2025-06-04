'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ScrollIndicatorProps {
  mounted: boolean
}

export default function ScrollIndicator({ mounted }: ScrollIndicatorProps) {
  if (!mounted) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
    >
      <span className="text-sm font-mono text-yellow-400">SCROLL_TO_EXPLORE</span>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center"
      >
        <motion.div
          animate={{ y: [2, 16, 2] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1 h-3 bg-yellow-400 rounded-full mt-2"
        />
      </motion.div>
    </motion.div>
  )
} 