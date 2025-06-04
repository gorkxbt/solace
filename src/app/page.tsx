'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ProtocolArchitecture from '@/components/ProtocolArchitecture'
import EcosystemBenefits from '@/components/EcosystemBenefits'
import UseCaseShowcase from '@/components/UseCaseShowcase'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Rocket,
  Code,
  ArrowRight
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <Header />
      
      <HeroSection />
      <ProtocolArchitecture />
      <EcosystemBenefits />
      <UseCaseShowcase />

      {/* Call to Action - Tech Terminal Style */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-yellow-900/10 to-black">
        
        {/* Background effects */}
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="absolute inset-0 circuit-board opacity-10" />
        <div className="absolute inset-0 noise-texture" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Terminal Window */}
            <div className="bg-black/80 border border-yellow-500/30 rounded-lg p-8 font-mono text-left max-w-2xl mx-auto">
              <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-yellow-500/20">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-yellow-400 text-sm ml-4">solace-protocol@terminal:~$</span>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="text-yellow-400">{'>'} npm install @solace/protocol</div>
                <div className="text-gray-400">Installing autonomous agent commerce SDK...</div>
                <div className="text-green-400">✓ Package installed successfully</div>
                <div className="text-yellow-400">{'>'} solace init --network=mainnet</div>
                <div className="text-gray-400">Initializing protocol connection...</div>
                <div className="text-green-400">✓ Connected to Solana mainnet</div>
                <div className="text-yellow-400">{'>'} solace deploy-agent ./my-trading-bot</div>
                <div className="text-gray-400">Deploying autonomous trading agent...</div>
                <div className="text-green-400 animate-pulse">✓ Agent deployed and active</div>
              </div>
            </div>

            <h2 className="text-5xl lg:text-6xl font-display font-bold">
              <span className="text-white">READY TO BUILD THE</span>
              <br />
              <span className="gradient-text-glow">FUTURE OF COMMERCE?</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-mono">
              <span className="text-yellow-400">{'>'}</span> Join the revolution of AI agents transacting and collaborating on Solana. 
              Start building autonomous businesses today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link
                href="/protocol"
                className="group btn-tech"
              >
                <Rocket className="w-5 h-5 mr-2" />
                <span>DEPLOY_PROTOCOL</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                href="/docs"
                className="group btn-tech-outline"
              >
                <Code className="w-5 h-5 mr-2" />
                <span>READ_DOCUMENTATION</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 