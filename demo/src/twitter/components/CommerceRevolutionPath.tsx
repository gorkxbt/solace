'use client'

import React from 'react'
import { 
  MessageCircle,
  User2,
  CreditCard,
  Star,
  Terminal,
  Cpu,
  Eye,
  Brain,
  Lock,
  Code
} from 'lucide-react'

export default function SolaceFrameworkBanner() {
  return (
    <div className="relative w-[1600px] h-[900px] bg-black overflow-hidden">
      
      {/* Enhanced Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
      
      {/* Multiple Circuit Patterns */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffd700' fill-opacity='0.4'%3E%3Cpath d='M60 60h30v30H60V60zm0-30h30v30H60V30zm-30 30h30v30H30V60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffd700' fill-opacity='0.2'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3Ccircle cx='60' cy='60' r='1'/%3E%3Ccircle cx='20' cy='60' r='1'/%3E%3Ccircle cx='60' cy='20' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
          backgroundPosition: '40px 40px'
        }}
      />
      
      {/* Atmospheric Layers */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 50% 45%, rgba(255, 215, 0, 0.03) 0%, transparent 70%),
              radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.02) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(255, 215, 0, 0.02) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(0, 0, 0, 0.9) 0%, transparent 60%),
              radial-gradient(circle at 20% 80%, rgba(0, 0, 0, 0.8) 0%, transparent 60%)
            `
          }}
        />
        
        <div 
          className="absolute inset-0 opacity-8"
          style={{
            background: `
              linear-gradient(45deg, transparent 48%, rgba(255, 215, 0, 0.1) 49%, rgba(255, 215, 0, 0.1) 51%, transparent 52%),
              linear-gradient(-45deg, transparent 48%, rgba(255, 215, 0, 0.05) 49%, rgba(255, 215, 0, 0.05) 51%, transparent 52%)
            `,
            backgroundSize: '200px 200px, 150px 150px'
          }}
        />
      </div>
      
      {/* Main Branding */}
      <div className="absolute top-8 left-8 z-40">
        <div className="flex items-center space-x-4 mb-6">
          <div 
            className="w-12 h-12 bg-gradient-to-br from-yellow-400/60 to-yellow-600/60 flex items-center justify-center"
            style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}
          >
            <Eye className="w-6 h-6 text-black/70" />
          </div>
          <div>
            <h1 
              className="text-4xl font-black tracking-widest text-yellow-400/80"
              style={{filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.4))'}}
            >
              SOLACE
            </h1>
            <p className="text-yellow-400/50 font-mono text-sm tracking-[0.3em]">
              PROTOCOL_FRAMEWORK
            </p>
          </div>
        </div>
        
        <div className="bg-black/60 border border-yellow-400/20 px-5 py-3 rounded-lg backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-yellow-400/60 rounded-full" />
            <span className="text-yellow-400/70 font-mono text-sm tracking-wider">
              AUTONOMOUS_COMMERCE_PROTOCOL
            </span>
            <Cpu className="w-4 h-4 text-yellow-400/50" />
          </div>
        </div>
      </div>

      {/* Protocol Card 1 - HANDSHAKE - Position: 16px from left */}
      <div className="absolute top-36 left-4 z-30">
        <div className="bg-black/40 border border-yellow-400/15 rounded-xl p-6 w-[380px] h-[280px] backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/30 hover:bg-black/60">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-400/20 border border-yellow-400/30 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-yellow-400/70" />
              </div>
              <div className="text-yellow-400/40 font-mono text-lg">01</div>
            </div>
            
            <h3 className="text-white/80 font-mono text-xl font-bold tracking-wider mb-3">
              HANDSHAKE
            </h3>
            <div className="text-yellow-400/50 font-mono text-sm bg-black/30 px-4 py-2 rounded inline-block">
              INIT_HANDSHAKE()
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-400/70 text-base leading-relaxed">
              Cryptographic verification process for autonomous agent identity and capability validation
            </p>
            
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-400/40 rounded-full" />
                <span className="text-yellow-400/60 font-mono text-base">STANDBY</span>
              </div>
              <Terminal className="w-5 h-5 text-yellow-400/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Protocol Card 2 - NEGOTIATE - Position: 16 + 380 + 16 = 412px from left */}
      <div className="absolute top-36 left-[412px] z-30">
        <div className="bg-black/40 border border-yellow-400/15 rounded-xl p-6 w-[380px] h-[280px] backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/30 hover:bg-black/60">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-400/20 border border-yellow-400/30 rounded-xl flex items-center justify-center">
                <User2 className="w-6 h-6 text-yellow-400/70" />
              </div>
              <div className="text-yellow-400/40 font-mono text-lg">02</div>
            </div>
            
            <h3 className="text-white/80 font-mono text-xl font-bold tracking-wider mb-3">
              NEGOTIATE
            </h3>
            <div className="text-yellow-400/50 font-mono text-sm bg-black/30 px-4 py-2 rounded inline-block">
              EXECUTE_TERMS()
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-400/70 text-base leading-relaxed">
              Smart contract generation and terms negotiation between autonomous commerce agents
            </p>
            
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-400/40 rounded-full" />
                <span className="text-yellow-400/60 font-mono text-base">READY</span>
              </div>
              <Terminal className="w-5 h-5 text-yellow-400/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Protocol Card 3 - TRANSACT - Position: 412 + 380 + 16 = 808px from left */}
      <div className="absolute top-36 left-[808px] z-30">
        <div className="bg-black/40 border border-yellow-400/15 rounded-xl p-6 w-[380px] h-[280px] backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/30 hover:bg-black/60">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-400/20 border border-yellow-400/30 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-yellow-400/70" />
              </div>
              <div className="text-yellow-400/40 font-mono text-lg">03</div>
            </div>
            
            <h3 className="text-white/80 font-mono text-xl font-bold tracking-wider mb-3">
              TRANSACT
            </h3>
            <div className="text-yellow-400/50 font-mono text-sm bg-black/30 px-4 py-2 rounded inline-block">
              ATOMIC_SWAP()
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-400/70 text-base leading-relaxed">
              Secure escrow validation and atomic transaction execution on Solana blockchain
            </p>
            
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-400/40 rounded-full" />
                <span className="text-yellow-400/60 font-mono text-base">SECURE</span>
              </div>
              <Terminal className="w-5 h-5 text-yellow-400/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Protocol Card 4 - VALIDATE - Position: 808 + 380 + 16 = 1204px from left */}
      <div className="absolute top-36 left-[1204px] z-30">
        <div className="bg-black/40 border border-yellow-400/15 rounded-xl p-6 w-[380px] h-[280px] backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/30 hover:bg-black/60">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-400/20 border border-yellow-400/30 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-400/70" />
              </div>
              <div className="text-yellow-400/40 font-mono text-lg">04</div>
            </div>
            
            <h3 className="text-white/80 font-mono text-xl font-bold tracking-wider mb-3">
              VALIDATE
            </h3>
            <div className="text-yellow-400/50 font-mono text-sm bg-black/30 px-4 py-2 rounded inline-block">
              UPDATE_SCORE()
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-400/70 text-base leading-relaxed">
              Post-transaction reputation scoring and network consensus validation protocol
            </p>
            
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-400/40 rounded-full" />
                <span className="text-yellow-400/60 font-mono text-base">ACTIVE</span>
              </div>
              <Terminal className="w-5 h-5 text-yellow-400/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Terminal - Bottom Center */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-30">
        <div className="bg-black/70 border border-yellow-400/20 rounded-xl p-6 w-[520px] h-[200px] backdrop-blur-sm">
          <div className="flex items-center space-x-2 mb-5">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-400/60 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400/60 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400/60 rounded-full"></div>
            </div>
            <div className="text-gray-500 font-mono text-sm flex-1 text-center">
              ACP_TERMINAL_v1.0.0
            </div>
            <Lock className="w-4 h-4 text-yellow-400/40" />
          </div>
          
          <div className="font-mono text-sm space-y-2 h-[100px] overflow-hidden">
            <div className="text-yellow-400/60">Solace Protocol Framework</div>
            <div className="text-gray-500/60">$ acp status --network mainnet</div>
            <div className="text-green-400/50">✓ Framework initialized</div>
            <div className="text-cyan-400/50">✓ 4 protocol phases loaded</div>
            <div className="text-gray-600/50">$ acp agents --list</div>
            <div className="text-yellow-400/40">█ Agents: [CLASSIFIED]</div>
            <div className="text-purple-400/40">█ Network: [ENCRYPTED]</div>
            <div className="text-blue-400/40">█ TPS: 65,000+</div>
          </div>
          
          <div className="border-t border-yellow-400/10 pt-4 mt-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <Brain className="w-4 h-4 text-yellow-400/50" />
                <span className="text-yellow-400/50 font-mono">ACP_ACTIVE</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-green-400/50" />
                <div className="text-gray-600/60 font-mono">SECURE</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Perfect Static Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 opacity-15">
        <defs>
          <linearGradient id="staticFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor: '#ffd700', stopOpacity: 0}} />
            <stop offset="50%" style={{stopColor: '#ffd700', stopOpacity: 0.4}} />
            <stop offset="100%" style={{stopColor: '#ffd700', stopOpacity: 0}} />
          </linearGradient>
        </defs>
        
        {/* Horizontal connection line across all 4 cards */}
        <line x1="16" y1="380" x2="1584" y2="380" stroke="url(#staticFlow)" strokeWidth="2" strokeDasharray="8,12" />
        
        {/* Vertical lines down to terminal */}
        <line x1="204" y1="380" x2="540" y2="700" stroke="url(#staticFlow)" strokeWidth="1" strokeDasharray="4,8" opacity="0.6" />
        <line x1="1394" y1="380" x2="1060" y2="700" stroke="url(#staticFlow)" strokeWidth="1" strokeDasharray="4,8" opacity="0.6" />
        
        {/* Connection nodes at card centers */}
        <circle cx="204" cy="380" r="3" fill="#ffd700" opacity="0.4" />
        <circle cx="602" cy="380" r="3" fill="#ffd700" opacity="0.4" />
        <circle cx="998" cy="380" r="3" fill="#ffd700" opacity="0.4" />
        <circle cx="1394" cy="380" r="3" fill="#ffd700" opacity="0.4" />
        <circle cx="800" cy="700" r="4" fill="#ffd700" opacity="0.6" />
      </svg>

      {/* Enhanced Atmospheric Effects */}
      <div className="absolute inset-0 pointer-events-none z-35">
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.6) 100%)`
          }}
        />
        
        <div 
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 3px,
              rgba(255, 215, 0, 0.05) 3px,
              rgba(255, 215, 0, 0.05) 6px
            )`
          }}
        />
      </div>
    </div>
  )
} 