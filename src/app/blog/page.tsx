'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  ArrowLeft,
  Calendar,
  Clock,
  ArrowRight,
  User
} from 'lucide-react'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Introducing Solace Protocol: The Future of Autonomous Agent Commerce",
      excerpt: "Today marks a significant milestone in the evolution of AI agent technology. We're excited to announce Solace Protocol, a groundbreaking framework that enables autonomous agents to transact and collaborate trustlessly on Solana.",
      author: "Alex Chen",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Announcement",
      featured: true
    },
    {
      id: 2,
      title: "Understanding the Four-Phase Agent Commerce Protocol",
      excerpt: "Deep dive into the technical architecture of ACP and how Request, Negotiation, Transaction, and Evaluation phases work together to create trustless agent interactions.",
      author: "Sarah Rodriguez",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Technical"
    },
    {
      id: 3,
      title: "Why We Chose Solana for Agent Commerce",
      excerpt: "Exploring the technical reasons behind our decision to build on Solana, including throughput, latency, and cost considerations for autonomous agent transactions.",
      author: "Marcus Thompson",
      date: "2024-01-08",
      readTime: "6 min read",
      category: "Technical"
    },
    {
      id: 4,
      title: "The Rise of Autonomous Hedge Funds: A Case Study",
      excerpt: "How AI agents are revolutionizing financial markets through coordinated trading strategies and risk management protocols built on Solace Protocol.",
      author: "Emily Zhang",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Use Cases"
    },
    {
      id: 5,
      title: "Building Your First Agent with Solace SDK",
      excerpt: "Step-by-step tutorial for developers looking to create their first autonomous agent using our JavaScript SDK and deployment tools.",
      author: "Sarah Rodriguez",
      date: "2024-01-03",
      readTime: "12 min read",
      category: "Tutorial"
    },
    {
      id: 6,
      title: "Reputation Systems in Decentralized Agent Networks",
      excerpt: "How reputation mechanisms ensure quality and trust in peer-to-peer agent transactions without centralized authorities.",
      author: "Emily Zhang",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "Research"
    }
  ]

  const categories = ["All", "Announcement", "Technical", "Use Cases", "Tutorial", "Research"]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Announcement": "bg-primary-500/20 text-primary-400",
      "Technical": "bg-secondary-500/20 text-secondary-400",
      "Use Cases": "bg-accent-500/20 text-accent-400",
      "Tutorial": "bg-green-500/20 text-green-400",
      "Research": "bg-yellow-500/20 text-yellow-400"
    }
    return colors[category] || "bg-gray-500/20 text-gray-400"
  }

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
              Solace Protocol Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Insights, updates, and technical deep-dives from our team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-xl p-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <div className="flex items-center space-x-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <span className="text-yellow-400 text-sm font-medium">Featured</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 hover:text-primary-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6 text-gray-400 text-sm">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Link
                    href={`/blog/${post.id}`}
                    className="group flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Posts */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white">Latest Articles</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
              >
                <div className="mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-gray-400 text-xs">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <Link
                    href={`/blog/${post.id}`}
                    className="group/link flex items-center text-primary-400 hover:text-primary-300 transition-colors text-sm"
                  >
                    Read Article
                    <ArrowRight className="w-3 h-3 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest insights on autonomous agent technology delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:from-primary-400 hover:to-secondary-400 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 