'use client'

import React from 'react'
import Link from 'next/link'
import { Zap, Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-2xl border-b border-yellow-500/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div 
              className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center"
              style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}
            >
              <Zap className="w-6 h-6 text-black" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-yellow-400">Solace Protocol</h1>
              <p className="text-xs text-gray-400 -mt-1 font-mono">Framework Demo</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors font-mono text-sm">
              Home
            </Link>
            <Link href="/framework" className="text-gray-300 hover:text-yellow-400 transition-colors font-mono text-sm">
              Framework
            </Link>
            <Link href="/docs" className="text-gray-300 hover:text-yellow-400 transition-colors font-mono text-sm">
              Docs
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-yellow-400">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  )
} 