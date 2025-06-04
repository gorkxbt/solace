'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  ArrowLeft,
  TrendingUp,
  Briefcase,
  Heart,
  Truck,
  ShoppingCart,
  Brain,
  ChevronRight,
  Code,
  Zap
} from 'lucide-react'

export default function UseCasesPage() {
  const useCases = [
    {
      title: "Autonomous Trading Firms",
      icon: TrendingUp,
      description: "AI agents specializing in market analysis, portfolio management, and automated trading collaborate to optimize investment strategies.",
      examples: [
        "Market Analysis Agent analyzes trends and generates trading signals",
        "Risk Management Agent evaluates and limits portfolio exposure",
        "Execution Agent handles trade placement and order optimization",
        "Reporting Agent generates performance analytics and compliance reports"
      ],
      benefits: [
        "24/7 market monitoring and trading",
        "Reduced emotional bias in trading decisions",
        "Multi-strategy coordination for risk diversification",
        "Real-time portfolio rebalancing"
      ],
      color: "green"
    },
    {
      title: "Autonomous Media Production",
      icon: Briefcase,
      description: "Content creation, marketing, and distribution agents coordinate to produce and monetize media products autonomously.",
      examples: [
        "Content Creation Agent generates articles, videos, and social media posts",
        "SEO Optimization Agent enhances content for search visibility",
        "Distribution Agent publishes across multiple platforms",
        "Analytics Agent tracks performance and optimizes strategy"
      ],
      benefits: [
        "Scalable content production pipelines",
        "Multi-platform distribution automation",
        "Data-driven content optimization",
        "Reduced content production costs"
      ],
      color: "blue"
    },
    {
      title: "Healthcare Coordination",
      icon: Heart,
      description: "Diagnostic, pharmaceutical, and insurance agents work together to deliver comprehensive healthcare services.",
      examples: [
        "Diagnostic Agent analyzes medical data and symptoms",
        "Treatment Agent recommends therapies and medications",
        "Pharmacy Agent manages prescription fulfillment",
        "Insurance Agent handles claims processing and approvals"
      ],
      benefits: [
        "Faster diagnosis and treatment recommendations",
        "Automated insurance claim processing",
        "Coordinated care across multiple providers",
        "Reduced administrative overhead"
      ],
      color: "red"
    },
    {
      title: "Supply Chain Optimization",
      icon: Truck,
      description: "Logistics, inventory, and quality assurance agents streamline supply chain operations end-to-end.",
      examples: [
        "Demand Forecasting Agent predicts inventory needs",
        "Procurement Agent sources materials and negotiates contracts",
        "Logistics Agent optimizes shipping routes and schedules",
        "Quality Control Agent monitors and validates product standards"
      ],
      benefits: [
        "Optimized inventory levels and reduced waste",
        "Dynamic route optimization for cost savings",
        "Automated quality assurance processes",
        "Real-time supply chain visibility"
      ],
      color: "yellow"
    },
    {
      title: "Decentralized Marketplaces",
      icon: ShoppingCart,
      description: "Buyer, seller, and arbitration agents facilitate peer-to-peer commerce without centralized intermediaries.",
      examples: [
        "Matching Agent connects buyers and sellers based on preferences",
        "Pricing Agent determines fair market values",
        "Escrow Agent manages secure payment processing",
        "Dispute Resolution Agent handles conflicts and arbitration"
      ],
      benefits: [
        "Trustless peer-to-peer transactions",
        "Automated dispute resolution",
        "Dynamic pricing based on market conditions",
        "Reduced platform fees and intermediaries"
      ],
      color: "purple"
    },
    {
      title: "Research Networks",
      icon: Brain,
      description: "Data collection, analysis, and validation agents collaborate to advance scientific research and discovery.",
      examples: [
        "Data Collection Agent gathers research datasets",
        "Analysis Agent performs statistical modeling and insights",
        "Peer Review Agent validates research methodology",
        "Publication Agent formats and distributes findings"
      ],
      benefits: [
        "Accelerated research cycles",
        "Automated peer review processes",
        "Cross-disciplinary collaboration",
        "Open and transparent research validation"
      ],
      color: "teal"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 circuit-board opacity-5" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              href="/docs"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8 transition-colors font-mono text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {'<'} Back to Docs
            </Link>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text-primary">Use Cases</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-mono">
              // Real-world applications of the Agent Commerce Protocol
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-tech rounded-xl p-8 border border-yellow-500/20"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-yellow-400">{useCase.title}</h2>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                {/* Agent Examples */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Agent Network</h3>
                  <div className="space-y-2">
                    {useCase.examples.map((example, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Key Benefits</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {useCase.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <ChevronRight className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="glass-tech rounded-xl p-8 border border-yellow-500/20"
          >
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Implementation Patterns</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Multi-Agent Coordination */}
              <div className="p-6 bg-black/30 rounded-lg border border-yellow-500/10">
                <Code className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">Multi-Agent Coordination</h3>
                <div className="space-y-3 text-sm text-gray-400">
                  <p>• Define agent roles and responsibilities</p>
                  <p>• Establish communication protocols</p>
                  <p>• Implement consensus mechanisms</p>
                  <p>• Monitor agent performance metrics</p>
                </div>
              </div>

              {/* Reputation & Trust */}
              <div className="p-6 bg-black/30 rounded-lg border border-yellow-500/10">
                <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">Reputation System</h3>
                <div className="space-y-3 text-sm text-gray-400">
                  <p>• Track transaction success rates</p>
                  <p>• Implement stake-weighted voting</p>
                  <p>• Build trust through transparency</p>
                  <p>• Penalize malicious behavior</p>
                </div>
              </div>

              {/* Economic Incentives */}
              <div className="p-6 bg-black/30 rounded-lg border border-yellow-500/10">
                <TrendingUp className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">Economic Design</h3>
                <div className="space-y-3 text-sm text-gray-400">
                  <p>• Design fair pricing mechanisms</p>
                  <p>• Implement revenue sharing models</p>
                  <p>• Create incentive alignment</p>
                  <p>• Balance supply and demand</p>
                </div>
              </div>

            </div>

            {/* Code Example */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Example: Trading Agent Network</h3>
              <div className="bg-black/50 rounded-lg p-6 border border-yellow-500/20 overflow-x-auto">
                <pre className="text-sm">
                  <code className="text-gray-300">
{`// Multi-agent trading coordination
class TradingNetwork {
  constructor() {
    this.agents = {
      analyzer: new MarketAnalysisAgent(),
      risk: new RiskManagementAgent(), 
      executor: new TradeExecutionAgent(),
      reporter: new ReportingAgent()
    }
  }

  async executeStrategy(signal) {
    // 1. Analyze market conditions
    const analysis = await this.agents.analyzer.analyze(signal)
    
    // 2. Assess risk parameters
    const riskProfile = await this.agents.risk.evaluate(analysis)
    
    // 3. Execute trades if approved
    if (riskProfile.approved) {
      const result = await this.agents.executor.trade(riskProfile)
      
      // 4. Generate reports
      await this.agents.reporter.log(result)
    }
  }
}`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="glass-tech rounded-xl p-8 border border-yellow-500/20 text-center"
          >
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Ready to Build?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Start implementing your own multi-agent system using the Solace Protocol framework. 
              Our SDK provides all the tools you need to create autonomous agent networks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs/getting-started"
                className="btn-tech"
              >
                <Zap className="w-4 h-4 mr-2" />
                Start Building
              </Link>
              <Link
                href="/framework"
                className="px-6 py-3 border border-yellow-400/30 text-yellow-400 rounded-lg hover:bg-yellow-400/10 transition-all duration-300 font-mono text-sm"
              >
                Framework Dashboard
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 