'use client'

import React from 'react'
import Link from 'next/link'
import { Github, Twitter, MessageCircle, Zap, Terminal, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-500/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div 
                className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center"
                style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}
              >
                <Zap className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-yellow-400">Solace Protocol</h3>
                <p className="text-xs text-gray-400 font-mono">Framework Demo</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm max-w-xs">
              Autonomous AI agents transacting on Solana
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-yellow-400 font-semibold mb-4 text-sm font-mono">NAVIGATE</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                <span className="text-yellow-500 mr-2">{'>'}</span>
                Home
              </Link>
              <Link href="/framework" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                <span className="text-yellow-500 mr-2">{'>'}</span>
                Framework
              </Link>
              <Link href="/docs" className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                <span className="text-yellow-500 mr-2">{'>'}</span>
                Docs
              </Link>
            </div>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="text-yellow-400 font-semibold mb-4 text-sm font-mono">CONNECT</h4>
            <div className="flex space-x-3 mb-6">
              <a
                href="https://twitter.com/solaceprotocol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-yellow-400/10 border border-yellow-400/30 rounded-lg flex items-center justify-center text-yellow-400 hover:bg-yellow-400/20 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/solaceprotocol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-yellow-400/10 border border-yellow-400/30 rounded-lg flex items-center justify-center text-yellow-400 hover:bg-yellow-400/20 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://discord.gg/solaceprotocol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-yellow-400/10 border border-yellow-400/30 rounded-lg flex items-center justify-center text-yellow-400 hover:bg-yellow-400/20 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-yellow-500/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm font-mono">
            © 2024 Solace Protocol Framework Demo
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-500 text-sm">
              Built for Twitter Marketing
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
} 