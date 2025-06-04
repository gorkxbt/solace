'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { NAV_ITEMS } from '@/constants/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="hidden lg:flex items-center">
      <div className="flex items-center space-x-1">
        {NAV_ITEMS.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.1 + 0.5,
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="relative"
          >
            <Link
              href={item.href}
              className={`group relative block px-4 py-3 rounded-lg transition-all duration-300 ${
                pathname === item.href
                  ? 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/30'
                  : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/5'
              }`}
            >
              {/* Background scan effect */}
              <div className="absolute inset-0 scan-line opacity-0 group-hover:opacity-100" />
              
              <div className="relative z-10 flex items-center space-x-2">
                <item.icon className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-all duration-300" />
                <span className="font-medium text-sm">{item.label}</span>
                
                {/* Tech indicator */}
                <div className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Active indicator with circuit pattern */}
              {pathname === item.href && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-400/5 rounded-lg border border-yellow-400/30"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              {/* Hover tooltip */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-black/90 border border-yellow-400/30 rounded-lg px-3 py-2 text-xs font-mono text-yellow-400">
                  {item.description}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black border-l border-t border-yellow-400/30 rotate-45" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </nav>
  )
} 