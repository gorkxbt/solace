'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Globe } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

interface UseCaseCardProps {
  icon: LucideIcon
  title: string
  description: string
  techStack: readonly string[]
  gradient: string
  borderGlow: string
  featured?: boolean
  index?: number
  delay?: number
}

export default function UseCaseCard({ 
  icon: Icon, 
  title, 
  description, 
  techStack, 
  gradient, 
  borderGlow, 
  featured = false,
  index = 0,
  delay = 0
}: UseCaseCardProps) {
  
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 60, delay }}
        viewport={{ once: true }}
        className="group"
      >
        <div className={`relative overflow-hidden rounded-3xl border ${borderGlow} bg-gradient-to-br ${gradient} p-12 transform hover:scale-[1.01] transition-all duration-700`}>
          
          {/* Featured Badge */}
          <div className="absolute top-8 right-8 bg-yellow-500/20 border border-yellow-500/50 rounded-full px-6 py-3">
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-mono text-sm">PRIORITY_ALPHA</span>
            </div>
          </div>

          {/* Decorative Grid */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(255, 212, 0, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 212, 0, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-20 h-20 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-10 h-10 text-yellow-400" />
                </div>
                <div>
                  <div className="text-sm font-mono text-yellow-400/60 mb-1">USE_CASE_01</div>
                  <div className="text-2xl font-display font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {title}
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed font-mono mb-8">
                {description}
              </p>

              <div className="flex items-center text-yellow-400 font-mono text-lg group-hover:translate-x-3 transition-transform duration-300">
                <span>EXECUTE_PROTOCOL</span>
                <ArrowRight className="ml-2 w-6 h-6" />
              </div>
            </div>

            {/* Tech Stack Visualization */}
            <div className="space-y-4">
              <div className="text-sm font-mono text-yellow-400/60 mb-4">TECH_STACK//</div>
              <div className="grid grid-cols-2 gap-3">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.5 }}
                    className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-3 text-center"
                  >
                    <span className="text-sm font-mono text-yellow-400">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay + index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className={`relative overflow-hidden rounded-2xl border ${borderGlow} bg-gradient-to-br ${gradient} p-8 transform hover:scale-105 transition-all duration-500`}>
        
        {/* Icon and Title */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
            <Icon className="w-6 h-6 text-yellow-400" />
          </div>
          <div>
            <div className="text-xs font-mono text-yellow-400/60 mb-1">USE_CASE_{String(index + 2).padStart(2, '0')}</div>
            <h3 className="text-lg font-display font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
              {title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 font-mono text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="space-y-3">
          <div className="text-xs font-mono text-yellow-400/60">STACK//</div>
          <div className="flex flex-wrap gap-2">
            {techStack.slice(0, 2).map((tech) => (
              <span 
                key={tech}
                className="text-xs font-mono text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 rounded px-2 py-1"
              >
                {tech}
              </span>
            ))}
            {techStack.length > 2 && (
              <span className="text-xs font-mono text-yellow-400/60">
                +{techStack.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Hover Indicator */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowRight className="w-5 h-5 text-yellow-400" />
        </div>
      </div>
    </motion.div>
  )
} 