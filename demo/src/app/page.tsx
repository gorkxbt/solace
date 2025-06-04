'use client'

import React from 'react'
import SolaceFrameworkBanner from '../twitter/components/CommerceRevolutionPath'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Instructions */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/90 backdrop-blur-sm rounded-xl p-4 text-center border border-yellow-400/20">
          <p className="text-yellow-400 font-mono text-sm tracking-wider">
            💡 Right-click and "Save image as..." to download Twitter banner
          </p>
          <p className="text-gray-400 text-xs mt-1">
            1600×900px • Framework Section Design
          </p>
        </div>
      </div>

      {/* Scene Display */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="border border-yellow-400/30 rounded-lg overflow-hidden shadow-2xl">
          <SolaceFrameworkBanner />
        </div>
      </div>
    </main>
  )
} 