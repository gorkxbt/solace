'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { createGlitchEffect } from '@/utils/animations'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { useMounted } from '@/hooks/useMounted'
import Logo from '@/components/layout/Logo'
import Navigation from '@/components/layout/Navigation'
import SocialLinks from '@/components/layout/SocialLinks'
import CTAButton from '@/components/layout/CTAButton'
import MobileMenu from '@/components/layout/MobileMenu'
import { Zap } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const glitchRef = useRef<HTMLDivElement>(null)
  const mounted = useMounted()
  const scrolled = useScrollPosition(20)
  
  const { scrollYProgress } = useScroll()
  const logoScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9])
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -10])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      
      // Advanced parallax effect for header elements
      if (headerRef.current) {
        const transform = `translate3d(0, ${scrollPosition * 0.1}px, 0)`
        headerRef.current.style.transform = transform
      }
    }

    // GSAP glitch animation for tech effect
    if (mounted && glitchRef.current) {
      createGlitchEffect(glitchRef.current, 3)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [mounted])

  // Don't render animations until mounted
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-black" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-yellow-400">Solace Protocol</h1>
                <p className="text-xs text-gray-400 -mt-1">Autonomous Agents</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <>
      {/* Main Header */}
      <motion.header
        ref={headerRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ y: headerY }}
        transition={{ 
          duration: 1.2, 
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2 
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled 
            ? 'bg-black/95 backdrop-blur-2xl border-b border-yellow-500/30 shadow-2xl shadow-yellow-500/10' 
            : 'bg-transparent'
        }`}
      >
        {/* Glitch overlay effect */}
        <div 
          ref={glitchRef}
          className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent opacity-0 pointer-events-none"
        />

        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 circuit-board opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Section */}
            <Logo logoScale={logoScale} />

            {/* Desktop Navigation */}
            <Navigation />

            {/* Right Section - Social & CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              
              {/* Social Links */}
              <SocialLinks />

              {/* CTA Button */}
              <CTAButton />
            </div>

            {/* Mobile Menu */}
            <MobileMenu 
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </div>
        </div>

        {/* Bottom border with circuit pattern */}
        <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`} />
      </motion.header>
    </>
  )
} 