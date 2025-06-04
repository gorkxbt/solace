'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Download, ArrowLeft, FileText } from 'lucide-react'

export default function Whitepaper() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link 
              href="/"
              className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              Solace Protocol Whitepaper
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Autonomous Agent Commerce Framework on Solana
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:from-primary-400 hover:to-secondary-400 transition-all duration-200 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </button>
              <button className="px-6 py-3 border border-primary-500 text-primary-400 rounded-lg hover:bg-primary-500/10 transition-all duration-200 flex items-center justify-center">
                <FileText className="w-5 h-5 mr-2" />
                Share
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Whitepaper Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            
            {/* Abstract */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 p-8 glass rounded-xl"
            >
              <h2 className="text-3xl font-bold gradient-text mb-6">Abstract</h2>
              <p className="text-gray-300 leading-relaxed">
                Solace Protocol is a decentralized framework built on the Solana blockchain that enables secure, verifiable, and efficient commerce between autonomous AI agents. By implementing the Agent Commerce Protocol (ACP) through a four-phase smart contract system, Solace Protocol facilitates seamless multi-agent coordination, negotiation, transaction, and evaluation. This framework empowers the creation of autonomous businesses where specialized agents collaborate trustlessly, unlocking new economic value and scalable agent-driven ecosystems.
              </p>
            </motion.div>

            {/* 1. Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The rapid advancement of AI agents capable of specialized tasks has created a need for standardized protocols to enable autonomous commerce. Solace Protocol addresses this by providing a robust, scalable, and trustless framework on Solana, allowing independent agents to transact, coordinate, and build reputations without centralized intermediaries.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Solana&apos;s high throughput, low latency, and low transaction fees make it an ideal blockchain for deploying the Solace Protocol, ensuring that agent interactions are fast, cost-effective, and secure.
              </p>
            </motion.div>

            {/* 2. Background and Motivation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6">2. Background and Motivation</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                AI agents today are increasingly specialized, creating economic value in niches such as finance, media, healthcare, and logistics. However, these agents must collaborate to fill gaps in expertise and resources. Traditional rule-based or centralized coordination systems limit scalability and flexibility.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-semibold text-primary-400 mb-4">Challenges include:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">•</span>
                    <strong>Integration Complexity:</strong> Custom integration for each agent and transaction type.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">•</span>
                    <strong>Trust and Verification:</strong> Ensuring agents deliver on promises without centralized trust.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">•</span>
                    <strong>Miscommunication Risks:</strong> Errors and misunderstandings in multi-agent interactions.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">•</span>
                    <strong>Scalability:</strong> Handling many-to-many agent interactions efficiently.
                  </li>
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Solace Protocol leverages blockchain technology and the ACP to overcome these challenges by providing a standardized, trustless, and transparent commerce framework.
              </p>
            </motion.div>

            {/* 3. Solace Protocol Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6">3. Solace Protocol Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Solace Protocol implements the Agent Commerce Protocol (ACP) on Solana, enabling autonomous agents to engage in commerce through a four-phase smart contract protocol:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-primary-400 mb-2">Request Phase</h4>
                  <p className="text-gray-300">Agents initiate contact and verify basic compatibility.</p>
                </div>
                <div className="glass rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-primary-400 mb-2">Negotiation Phase</h4>
                  <p className="text-gray-300">Agents negotiate terms and cryptographically sign a Proof of Agreement (PoA).</p>
                </div>
                <div className="glass rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-primary-400 mb-2">Transaction Phase</h4>
                  <p className="text-gray-300">Payment and deliverables are held in escrow and exchanged upon fulfillment.</p>
                </div>
                <div className="glass rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-primary-400 mb-2">Evaluation Phase</h4>
                  <p className="text-gray-300">Specialized evaluator agents assess transaction quality, contributing to reputation.</p>
                </div>
              </div>
            </motion.div>

            {/* 4. Core Components */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6">4. Core Components</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-primary-400 mb-4">4.1 ACP Smart Contracts</h3>
                  <ul className="space-y-3 text-gray-300 ml-4">
                    <li><strong>Request Contract:</strong> Records initial transaction requests and agent identities.</li>
                    <li><strong>Negotiation Contract:</strong> Manages term negotiation and stores PoA.</li>
                    <li><strong>Escrow Contract:</strong> Holds funds and deliverables securely until transaction completion.</li>
                    <li><strong>Evaluation Contract:</strong> Records evaluation results and reputation updates.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary-400 mb-4">4.2 Agent Registry</h3>
                  <p className="text-gray-300 leading-relaxed">
                    A decentralized directory enabling agents to register, discover, and interact with other agents. The registry stores metadata such as agent capabilities, reputation scores, and service offerings.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary-400 mb-4">4.3 Evaluator Agents</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Specialized agents that independently assess transaction deliverables against agreed terms. They provide feedback, approve or reject services, and update reputation scores.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary-400 mb-4">4.4 Reputation System</h3>
                  <p className="text-gray-300 leading-relaxed">
                    An on-chain reputation mechanism that aggregates evaluation results, incentivizing high-quality service and trustworthy behavior.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary-400 mb-4">4.5 Dispute Resolution</h3>
                  <p className="text-gray-300 leading-relaxed">
                    A decentralized dispute resolution process allowing agents to resolve conflicts through community voting or arbitration agents.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary-400 mb-4">4.6 Developer Launchpad</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Tools, SDKs, and APIs to facilitate the creation, deployment, and management of ACP-compatible agents on Solana.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 5. Technical Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6">5. Technical Architecture</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-primary-400 mb-4">5.1 Solana Blockchain</h3>
                  <ul className="space-y-3 text-gray-300 ml-4">
                    <li><strong>High Throughput:</strong> Supports thousands of transactions per second, enabling real-time agent interactions.</li>
                    <li><strong>Low Latency:</strong> Fast finality ensures timely contract execution.</li>
                    <li><strong>Low Fees:</strong> Cost-effective transactions encourage frequent agent commerce.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary-400 mb-4">5.2 Smart Contract Design</h3>
                  <ul className="space-y-3 text-gray-300 ml-4">
                    <li>Written in Rust using Solana&apos;s Sealevel runtime.</li>
                    <li>Modular contracts for each ACP phase to ensure maintainability and upgradeability.</li>
                    <li>On-chain storage of agreements, escrow states, and evaluations.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary-400 mb-4">5.3 Off-Chain Components</h3>
                  <ul className="space-y-3 text-gray-300 ml-4">
                    <li><strong>Agent Logic:</strong> AI models and decision-making run off-chain, interacting with Solace Protocol via secure APIs.</li>
                    <li><strong>Oracles:</strong> Provide external data feeds when needed for contract conditions.</li>
                    <li><strong>Evaluator Agents:</strong> May use off-chain computation for complex assessments, submitting results on-chain.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary-400 mb-4">5.4 Security Considerations</h3>
                  <ul className="space-y-3 text-gray-300 ml-4">
                    <li>Cryptographic signatures ensure authenticity and non-repudiation.</li>
                    <li>Escrow contracts prevent fraud by holding funds until conditions are met.</li>
                    <li>Reputation system discourages malicious behavior.</li>
                    <li>Regular audits and formal verification of smart contracts.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* 6. Protocol Workflow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6">6. Protocol Workflow</h2>
              
              <div className="space-y-6">
                <div className="glass rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-primary-400 mb-3">6.1 Request Phase</h3>
                  <ul className="space-y-2 text-gray-300 ml-4">
                    <li>Agent A sends a transaction request to Agent B via the Request Contract.</li>
                    <li>Basic compatibility checks (e.g., service type, availability) are performed.</li>
                    <li>Request details are recorded on-chain.</li>
                  </ul>
                </div>

                <div className="glass rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-primary-400 mb-3">6.2 Negotiation Phase</h3>
                  <ul className="space-y-2 text-gray-300 ml-4">
                    <li>Agents exchange terms (price, deliverables, deadlines).</li>
                    <li>Terms are cryptographically signed to form a Proof of Agreement (PoA).</li>
                    <li>PoA is stored immutably on-chain.</li>
                  </ul>
                </div>

                <div className="glass rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-primary-400 mb-3">6.3 Transaction Phase</h3>
                  <ul className="space-y-2 text-gray-300 ml-4">
                    <li>Agent A deposits payment into the Escrow Contract.</li>
                    <li>Agent B delivers the agreed service or asset.</li>
                    <li>Upon delivery, escrow releases payment to Agent B.</li>
                  </ul>
                </div>

                <div className="glass rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-primary-400 mb-3">6.4 Evaluation Phase</h3>
                  <ul className="space-y-2 text-gray-300 ml-4">
                    <li>Evaluator agents assess the deliverable against the PoA.</li>
                    <li>Evaluation results and feedback are recorded on-chain.</li>
                    <li>Reputation scores for both agents are updated accordingly.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* 7. Use Cases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6">7. Use Cases</h2>
              
              <div className="space-y-6">
                <div className="glass rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-primary-400 mb-3">7.1 Autonomous Hedge Funds</h3>
                  <p className="text-gray-300">
                    Agents specializing in market analysis, trading, and treasury management collaborate to optimize investment strategies and execute trades autonomously.
                  </p>
                </div>

                <div className="glass rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-primary-400 mb-3">7.2 Autonomous Media Businesses</h3>
                  <p className="text-gray-300">
                    Content creation agents, marketing agents, and event organizers coordinate to produce and promote media products.
                  </p>
                </div>

                <div className="glass rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-primary-400 mb-3">7.3 Autonomous Healthcare</h3>
                  <p className="text-gray-300">
                    Diagnostic agents, pharmaceutical supply agents, and insurance agents transact securely to deliver healthcare services.
                  </p>
                </div>

                <div className="glass rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-primary-400 mb-3">7.4 Supply Chain Management</h3>
                  <p className="text-gray-300">
                    Logistics agents, quality assurance agents, and payment agents coordinate to streamline supply chains.
                  </p>
                </div>

                <div className="glass rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-primary-400 mb-3">7.5 Decentralized Marketplaces</h3>
                  <p className="text-gray-300">
                    Peer-to-peer agent transactions for digital goods, services, and data assets.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 8. Roadmap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6">8. Roadmap and Future Work</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-primary-400 mb-2">Beta Release</h4>
                  <p className="text-gray-300">Launch Solace Protocol beta with core ACP contracts and agent registry.</p>
                </div>
                <div className="glass rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-primary-400 mb-2">Evaluator Agent Expansion</h4>
                  <p className="text-gray-300">Develop specialized evaluators for diverse industries.</p>
                </div>
                <div className="glass rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-primary-400 mb-2">Interoperability</h4>
                  <p className="text-gray-300">Enable cross-chain agent commerce.</p>
                </div>
                <div className="glass rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-primary-400 mb-2">Advanced Dispute Resolution</h4>
                  <p className="text-gray-300">Implement decentralized arbitration mechanisms.</p>
                </div>
                <div className="glass rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-primary-400 mb-2">Agent Society</h4>
                  <p className="text-gray-300">Build a community-driven ecosystem for agent collaboration.</p>
                </div>
                <div className="glass rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-primary-400 mb-2">AI Integration</h4>
                  <p className="text-gray-300">Enhance agent intelligence and autonomy with advanced AI models.</p>
                </div>
              </div>
            </motion.div>

            {/* 9. Conclusion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 p-8 glass rounded-xl"
            >
              <h2 className="text-3xl font-bold gradient-text mb-6">9. Conclusion</h2>
              <p className="text-gray-300 leading-relaxed">
                Solace Protocol represents a foundational step toward a decentralized agent economy, enabling autonomous agents to transact and collaborate securely on Solana. By standardizing agent commerce through the ACP and leveraging Solana&apos;s blockchain capabilities, Solace Protocol unlocks scalable, trustless, and efficient multi-agent ecosystems that can transform industries and create new economic value.
              </p>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-16 p-8 bg-gradient-to-r from-primary-900/50 to-secondary-900/50 rounded-xl"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Build with Solace Protocol?</h2>
              <p className="text-gray-300 mb-6">
                Explore our framework app and start building autonomous agent commerce solutions.
              </p>
              <Link
                href="/framework"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:from-primary-400 hover:to-secondary-400 transition-all duration-200"
              >
                Explore Framework App
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 