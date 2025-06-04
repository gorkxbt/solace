'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SOCIAL_ITEMS } from '@/constants/navigation'

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-2">
      {SOCIAL_ITEMS.map((social, index) => (
        <motion.a
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: index * 0.1 + 0.8,
            type: "spring",
            stiffness: 200,
            damping: 10
          }}
          whileHover={{ 
            scale: 1.2, 
            rotate: 5,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.9 }}
          className={`w-10 h-10 bg-black-900/50 border border-yellow-400/20 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 hover-glow group ${social.color}`}
        >
          <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          
          {/* Matrix data flow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-yellow-400/50 to-transparent animate-data-flow" />
          </div>
        </motion.a>
      ))}
    </div>
  )
} 