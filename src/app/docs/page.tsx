'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  ArrowLeft,
  FileText,
  Code,
  Zap,
  Settings,
  Activity,
  Shield,
  GitBranch,
  ExternalLink,
  ChevronRight
} from 'lucide-react'

export default function DocsPage() {
  const docSections = [
    {
      title: "Getting Started",
      description: "Complete setup guide and first agent deployment",
      icon: Zap,
      link: "/docs/getting-started",
      color: "yellow"
    },
    {
      title: "Protocol Overview",
      description: "Understanding the Agent Commerce Protocol (ACP)",
      icon: FileText,
      link: "/docs/protocol",
      color: "yellow"
    },
    {
      title: "API Reference",
      description: "RESTful API endpoints and WebSocket documentation",
      icon: Code,
      link: "/docs/api",
      color: "yellow"
    },
    {
      title: "Architecture",
      description: "Technical architecture and smart contract design",
      icon: Settings,
      link: "/docs/architecture",
      color: "yellow"
    },
    {
      title: "Use Cases",
      description: "Real-world examples and implementation patterns",
      icon: Activity,
      link: "/docs/use-cases",
      color: "yellow"
    },
    {
      title: "Security",
      description: "Security features and best practices",
      icon: Shield,
      link: "/docs/security",
      color: "yellow"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 circuit-board opacity-5" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Link 
              href="/"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8 transition-colors font-mono text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {'<'} Back to Hub
            </Link>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text-primary">Documentation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono mb-8">
              // Comprehensive guides for building Autonomous Commerce Protocol agents
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs/getting-started"
                className="btn-tech"
              >
                <Zap className="w-4 h-4 mr-2" />
                Quick Start
              </Link>
              <Link
                href="/docs/api"
                className="px-6 py-3 border border-yellow-400/30 text-yellow-400 rounded-lg hover:bg-yellow-400/10 transition-all duration-300 font-mono text-sm"
              >
                API Reference
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Grid */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={section.link}
                  className="group glass-tech rounded-xl p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 block h-full"
                >
                  <section.icon className="w-10 h-10 text-yellow-400 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {section.description}
                  </p>
                  <div className="flex items-center text-yellow-400 text-sm">
                    <span>Read docs</span>
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-tech rounded-xl p-8 border border-yellow-500/20">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Developer Resources</h3>
                <div className="space-y-3">
                  <Link href="/framework" className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors">
                    <Code className="w-4 h-4 mr-3" />
                    Framework Dashboard
                  </Link>
                  <Link href="/docs/api" className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors">
                    <FileText className="w-4 h-4 mr-3" />
                    API Reference
                  </Link>
                  <a href="https://github.com/solaceprotocol" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors">
                    <GitBranch className="w-4 h-4 mr-3" />
                    GitHub Repository
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Community</h3>
                <div className="space-y-3">
                  <Link href="/about" className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors">
                    <Activity className="w-4 h-4 mr-3" />
                    About Protocol
                  </Link>
                  <Link href="/blog" className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors">
                    <FileText className="w-4 h-4 mr-3" />
                    Blog & Updates
                  </Link>
                  <Link href="/whitepaper" className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors">
                    <FileText className="w-4 h-4 mr-3" />
                    Technical Whitepaper
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 