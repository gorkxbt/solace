'use client'

import React from 'react'
import { Rocket } from 'lucide-react'
import { USE_CASES } from '@/constants/useCases'
import SectionHeader from '@/components/sections/SectionHeader'
import NetworkBackground from '@/components/ui/NetworkBackground'
import UseCaseCard from '@/components/ui/UseCaseCard'

export default function UseCaseShowcase() {
  const [featuredUseCase, ...otherUseCases] = USE_CASES

  return (
    <section className="py-32 relative bg-gradient-to-b from-black to-yellow-900/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge={{
            icon: Rocket,
            text: "USE_CASE_MATRIX"
          }}
          title="TRANSFORMING"
          subtitle="INDUSTRIES"
          description="Discover how autonomous agents revolutionize sectors through trustless collaboration and intelligent coordination protocols."
        />

        {/* Network Background */}
        <NetworkBackground />

        {/* Main Layout */}
        <div className="relative z-10 space-y-12">
          
          {/* Featured Card - Full Width Hero */}
          <UseCaseCard
            {...featuredUseCase}
            featured={true}
            delay={0.2}
          />

          {/* Grid Layout for Other Use Cases */}
          <div className="grid lg:grid-cols-2 gap-8">
            {otherUseCases.map((useCase, index) => (
              <UseCaseCard
                key={useCase.title}
                {...useCase}
                index={index}
                delay={0.4 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 