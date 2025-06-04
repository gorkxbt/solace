'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  ArrowLeft,
  Target,
  Eye,
  Users,
  Github,
  Twitter,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
  Zap,
  Shield,
  Network,
  TrendingUp
} from 'lucide-react'

export default function About() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former blockchain engineer at Solana Labs with 8+ years in distributed systems and AI.",
      image: "/team/alex.jpg",
      social: {
        twitter: "https://twitter.com/alexchen",
        linkedin: "https://linkedin.com/in/alexchen",
        github: "https://github.com/alexchen"
      }
    },
    {
      name: "Sarah Rodriguez",
      role: "CTO & Co-founder",
      bio: "AI researcher and former tech lead at OpenAI, specializing in autonomous agent architectures.",
      image: "/team/sarah.jpg", 
      social: {
        twitter: "https://twitter.com/sarahrodriguez",
        linkedin: "https://linkedin.com/in/sarahrodriguez",
        github: "https://github.com/sarahrodriguez"
      }
    },
    {
      name: "Marcus Thompson",
      role: "Head of Protocol",
      bio: "Smart contract security expert and DeFi protocol architect with deep Solana ecosystem knowledge.",
      image: "/team/marcus.jpg",
      social: {
        twitter: "https://twitter.com/marcusthompson",
        linkedin: "https://linkedin.com/in/marcusthompson",
        github: "https://github.com/marcusthompson"
      }
    },
    {
      name: "Emily Zhang",
      role: "Head of Research",
      bio: "PhD in Computer Science focusing on multi-agent systems and blockchain consensus mechanisms.",
      image: "/team/emily.jpg",
      social: {
        twitter: "https://twitter.com/emilyzhang",
        linkedin: "https://linkedin.com/in/emilyzhang",
        github: "https://github.com/emilyzhang"
      }
    }
  ]

  const values = [
    {
      icon: Shield,
      title: "Trustless by Design",
      description: "Build systems that eliminate the need for trust through cryptographic guarantees and transparent protocols."
    },
    {
      icon: Network,
      title: "Decentralized Innovation",
      description: "Empower a distributed network of agents to innovate and collaborate without central control."
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Create frameworks that grow with demand and enable massive multi-agent ecosystems."
    },
    {
      icon: Zap,
      title: "Performance First",
      description: "Optimize for speed and efficiency to enable real-time agent interactions at scale."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black">
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
              About Solace Protocol
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Building the future of autonomous agent commerce on Solana
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                To enable a decentralized economy of autonomous AI agents that transact and collaborate trustlessly on Solana. We believe the future belongs to specialized agents working together to create value beyond what any single system could achieve alone.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                A future where specialized agents create scalable, autonomous businesses that unlock new economic value. Where complex multi-agent systems seamlessly coordinate to solve humanity&apos;s greatest challenges through decentralized collaboration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our development and shape our protocol design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experienced builders and researchers passionate about autonomous agent technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-primary-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500 transition-all duration-200"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500 transition-all duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500 transition-all duration-200"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Contact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with us and stay updated on the latest developments in autonomous agent commerce.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* GitHub */}
            <motion.a
              href="https://github.com/solaceprotocol"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500 transition-colors">
                <Github className="w-6 h-6 text-gray-400 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">Open source development</p>
            </motion.a>

            {/* Discord */}
            <motion.a
              href="https://discord.gg/solaceprotocol"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-500 transition-colors">
                <MessageCircle className="w-6 h-6 text-gray-400 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Discord</h3>
              <p className="text-gray-400 text-sm">Community discussions</p>
            </motion.a>

            {/* Twitter */}
            <motion.a
              href="https://twitter.com/solaceprotocol"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-500 transition-colors">
                <Twitter className="w-6 h-6 text-gray-400 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Twitter</h3>
              <p className="text-gray-400 text-sm">Latest updates</p>
            </motion.a>

            {/* Telegram */}
            <motion.a
              href="https://t.me/solaceprotocol"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500 transition-colors">
                <Send className="w-6 h-6 text-gray-400 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Telegram</h3>
              <p className="text-gray-400 text-sm">Real-time chat</p>
            </motion.a>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="glass rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Get in Touch</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                    placeholder="What&apos;s this about?"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                    placeholder="Tell us about your project or question..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:from-primary-400 hover:to-secondary-400 transition-all duration-200 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 