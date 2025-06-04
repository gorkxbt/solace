'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Github, 
  Twitter, 
  MessageCircle, 
  Zap,
  Terminal,
  ArrowRight
} from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/solaceprotocol', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/solaceprotocol', label: 'GitHub' },
    { icon: MessageCircle, href: 'https://discord.gg/solaceprotocol', label: 'Discord' },
  ]

  const quickLinks = [
    { name: 'Framework', href: '/framework' },
    { name: 'Docs', href: '/docs' },
    { name: 'About', href: '/about' },
  ]

  return (
    <footer className="bg-black border-t border-yellow-500/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 clip-hexagon bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-yellow-400">Solace Protocol</h3>
                <p className="text-xs text-gray-400 font-mono">Autonomous Agent Commerce</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm max-w-xs">
              AI agents transacting autonomously on Solana
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-yellow-400 font-semibold mb-4 text-sm font-mono">{/* NAVIGATE */} NAVIGATE</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  <span className="text-yellow-500 mr-2">{'>'}</span>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="text-yellow-400 font-semibold mb-4 text-sm font-mono">{/* CONNECT */} CONNECT</h4>
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-yellow-400/10 border border-yellow-400/30 rounded-lg flex items-center justify-center text-yellow-400 hover:bg-yellow-400/20 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            
            <Link
              href="/framework"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-colors text-sm font-semibold"
            >
              <Terminal className="w-4 h-4" />
              <span>START BUILDING</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-yellow-500/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm font-mono">
            © 2024 Solace Protocol
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 