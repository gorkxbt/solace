'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface SectionHeaderProps {
  badge?: {
    icon: LucideIcon
    text: string
  }
  title: string
  subtitle?: string
  description: string
  delay?: number
}

export default function SectionHeader({ 
  badge, 
  title, 
  subtitle, 
  description, 
  delay = 0 
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      {badge && (
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-sm font-mono mb-8">
          <badge.icon className="w-4 h-4 text-yellow-400" />
          <span className="text-yellow-400">{badge.text}</span>
        </div>
      )}
      
      <h2 className="text-5xl lg:text-7xl font-display font-bold mb-6">
        <span className="gradient-text-glow">{title}</span>
        {subtitle && (
          <>
            <br />
            <span className="text-white">{subtitle}</span>
          </>
        )}
      </h2>
      
      <p className="text-xl text-gray-300 max-w-4xl mx-auto font-mono">
        <span className="text-yellow-400">{'>'}</span> {description}
      </p>
    </motion.div>
  )
} 