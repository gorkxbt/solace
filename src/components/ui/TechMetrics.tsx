'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Timer,
  Shield,
  Network,
  Activity
} from 'lucide-react'

const TECH_METRICS = [
  {
    icon: Timer,
    label: "Execution Speed",
    value: "<400ms",
    description: "Solana block time"
  },
  {
    icon: Shield,
    label: "Security Level",
    value: "99.99%",
    description: "Cryptographic proof"
  },
  {
    icon: Network,
    label: "Agent Network", 
    value: "∞",
    description: "Unlimited scalability"
  },
  {
    icon: Activity,
    label: "Uptime",
    value: "24/7",
    description: "Autonomous operation"
  }
]

interface TechMetricsProps {
  mounted: boolean
  isLoaded: boolean
}

export default function TechMetrics({ mounted, isLoaded }: TechMetricsProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
      {TECH_METRICS.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: mounted && isLoaded ? 1 : 0, scale: mounted && isLoaded ? 1 : 0 }}
          transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
          className="text-center p-3 bg-black/50 border border-yellow-500/20 rounded-lg hover:border-yellow-500/40 transition-colors duration-300"
        >
          <metric.icon className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
          <div className="text-lg font-bold text-yellow-400 font-mono">{metric.value}</div>
          <div className="text-xs text-gray-400 font-mono">{metric.label}</div>
        </motion.div>
      ))}
    </div>
  )
} 