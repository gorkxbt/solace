'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, Terminal } from 'lucide-react'
import { NAV_ITEMS, SOCIAL_ITEMS } from '@/constants/navigation'

interface MobileMenuProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export default function MobileMenu({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden w-12 h-12 bg-black-900/50 border border-yellow-400/20 rounded-lg flex items-center justify-center text-yellow-400 transition-all duration-300 hover:bg-yellow-400/10 hover:border-yellow-400/40"
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 120,
                opacity: { duration: 0.3 }
              }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-black/95 backdrop-blur-2xl border-l border-yellow-500/30 z-50 lg:hidden overflow-y-auto"
            >
              {/* Mobile menu content */}
              <div className="p-6 pt-24">
                
                {/* Navigation Links */}
                <nav className="space-y-3">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`group flex items-center justify-between w-full px-4 py-4 rounded-xl transition-all duration-300 ${
                          pathname === item.href
                            ? 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/30'
                            : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/5 border border-transparent hover:border-yellow-400/20'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-6 h-6" />
                          <div>
                            <span className="font-medium text-lg">{item.label}</span>
                            <p className="text-sm opacity-60 font-mono">{item.description}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 opacity-60 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 pt-8 border-t border-yellow-500/20"
                >
                  <p className="text-sm text-gray-400 mb-4 font-mono">{/* Connect */} Connect</p>
                  <div className="flex space-x-4">
                    {SOCIAL_ITEMS.map((social, index) => (
                      <motion.a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.7 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/30 rounded-xl flex items-center justify-center text-yellow-400 hover:bg-yellow-400/20 transition-all duration-300"
                      >
                        <social.icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8"
                >
                  <Link
                    href="/terminal"
                    onClick={() => setIsMenuOpen(false)}
                    className="btn-tech w-full justify-center"
                  >
                    <Terminal className="w-5 h-5 mr-2" />
                    VIEW TERMINAL
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
} 