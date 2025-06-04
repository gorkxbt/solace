'use client'

import React, { useRef, useEffect } from 'react'
import { createMatrixRain, createBinaryRain } from '@/utils/animations'

interface BackgroundEffectsProps {
  mounted: boolean
}

export default function BackgroundEffects({ mounted }: BackgroundEffectsProps) {
  const matrixRef = useRef<HTMLDivElement>(null)
  const binaryRainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      // Hero section matrix animation
      if (matrixRef.current) {
        createMatrixRain(matrixRef.current, '01', 50)
      }

      // Binary rain effect
      if (binaryRainRef.current) {
        createBinaryRain(binaryRainRef.current, 30)
      }
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <>
      {/* Matrix Background Effect */}
      <div 
        ref={matrixRef}
        className="matrix-rain fixed inset-0 pointer-events-none z-10"
      />

      {/* Binary Rain Background */}
      <div 
        ref={binaryRainRef}
        className="fixed inset-0 pointer-events-none z-5 opacity-20"
      />
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute inset-0 circuit-board opacity-10" />
      
      {/* Animated Tech Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-yellow-500 to-transparent" />
      <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-yellow-500 to-transparent" />
    </>
  )
} 