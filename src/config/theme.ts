// =============================================================================
// THEME CONFIGURATION - Centralized design system
// =============================================================================

import type { ThemeConfig } from '@/types'

export const theme: ThemeConfig = {
  colors: {
    primary: '#ffd700', // Solace Gold
    secondary: '#000000', // Deep Black
    accent: '#ffec80', // Light Gold
    background: '#000000',
    surface: '#0a0a0a',
    text: {
      primary: '#ffffff',
      secondary: '#a3a3a3',
      accent: '#ffd700'
    },
    border: 'rgba(255, 215, 0, 0.2)',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444'
  },
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
    '4xl': '6rem',    // 96px
    '5xl': '8rem',    // 128px
  },
  borderRadius: {
    none: '0',
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(255, 215, 0, 0.05)',
    md: '0 4px 6px -1px rgba(255, 215, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(255, 215, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(255, 215, 0, 0.1)',
    glow: '0 0 20px rgba(255, 215, 0, 0.3)',
    'glow-strong': '0 0 40px rgba(255, 215, 0, 0.6)'
  },
  animations: {
    'fade-in': 'fadeIn 0.5s ease-in-out',
    'slide-up': 'slideUp 0.5s ease-out',
    'slide-down': 'slideDown 0.5s ease-out',
    'scale-in': 'scaleIn 0.3s ease-out',
    'glow-pulse': 'glowPulse 2s ease-in-out infinite',
    'matrix-rain': 'matrixRain 3s linear infinite'
  }
}

// CSS Custom Properties Generator
export const generateCSSVariables = (theme: ThemeConfig) => {
  return {
    '--color-primary': theme.colors.primary,
    '--color-secondary': theme.colors.secondary,
    '--color-accent': theme.colors.accent,
    '--color-background': theme.colors.background,
    '--color-surface': theme.colors.surface,
    '--color-text-primary': theme.colors.text.primary,
    '--color-text-secondary': theme.colors.text.secondary,
    '--color-text-accent': theme.colors.text.accent,
    '--color-border': theme.colors.border,
    '--color-success': theme.colors.success,
    '--color-warning': theme.colors.warning,
    '--color-error': theme.colors.error,
    
    '--spacing-xs': theme.spacing.xs,
    '--spacing-sm': theme.spacing.sm,
    '--spacing-md': theme.spacing.md,
    '--spacing-lg': theme.spacing.lg,
    '--spacing-xl': theme.spacing.xl,
    '--spacing-2xl': theme.spacing['2xl'],
    '--spacing-3xl': theme.spacing['3xl'],
    '--spacing-4xl': theme.spacing['4xl'],
    '--spacing-5xl': theme.spacing['5xl'],
    
    '--radius-sm': theme.borderRadius.sm,
    '--radius-md': theme.borderRadius.md,
    '--radius-lg': theme.borderRadius.lg,
    '--radius-xl': theme.borderRadius.xl,
    '--radius-2xl': theme.borderRadius['2xl'],
    '--radius-full': theme.borderRadius.full,
    
    '--shadow-sm': theme.shadows.sm,
    '--shadow-md': theme.shadows.md,
    '--shadow-lg': theme.shadows.lg,
    '--shadow-xl': theme.shadows.xl,
    '--shadow-glow': theme.shadows.glow,
    '--shadow-glow-strong': theme.shadows['glow-strong']
  }
}

// Responsive Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const

// Animation Variants for Framer Motion
export const motionVariants = {
  // Fade Animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  
  // Slide Animations
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }
  },
  
  slideDown: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 }
  },
  
  slideLeft: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  },
  
  slideRight: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
  },
  
  // Scale Animations
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  },
  
  // Tech-specific Animations
  glitch: {
    initial: { 
      opacity: 0,
      filter: 'hue-rotate(0deg) saturate(1) brightness(1)'
    },
    animate: { 
      opacity: 1,
      filter: [
        'hue-rotate(0deg) saturate(1) brightness(1)',
        'hue-rotate(10deg) saturate(1.2) brightness(1.1)',
        'hue-rotate(-5deg) saturate(0.8) brightness(0.9)',
        'hue-rotate(0deg) saturate(1) brightness(1)'
      ]
    },
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'easeInOut'
    }
  },
  
  // Container Animations
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  },
  
  // Loading Animation
  loading: {
    initial: { rotate: 0 },
    animate: { 
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  }
}

// Tech-specific Design Tokens
export const techTokens = {
  fonts: {
    mono: '"JetBrains Mono", "Fira Code", monospace',
    display: '"Space Grotesk", sans-serif',
    body: '"Inter", sans-serif'
  },
  
  gradients: {
    primary: 'linear-gradient(135deg, #ffd700, #ffec80)',
    dark: 'linear-gradient(135deg, #000000, #171717, #262626)',
    glow: 'linear-gradient(135deg, #ffd700, #ffec80, #f5c500)',
    tech: 'linear-gradient(90deg, rgba(255,215,0,0.1) 0%, rgba(255,215,0,0.05) 50%, rgba(255,215,0,0.1) 100%)'
  },
  
  patterns: {
    circuit: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffd700' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    grid: 'linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)',
    dots: 'radial-gradient(circle, rgba(255, 215, 0, 0.15) 1px, transparent 1px)',
    noise: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`
  },
  
  effects: {
    glass: {
      background: 'rgba(10, 10, 10, 0.7)',
      backdropFilter: 'blur(20px) saturate(1.8)',
      border: '1px solid rgba(255, 215, 0, 0.2)',
      boxShadow: '0 8px 32px rgba(255, 215, 0, 0.1), inset 0 1px 0 rgba(255, 215, 0, 0.1)'
    },
    
    glassStrong: {
      background: 'rgba(10, 10, 10, 0.85)',
      backdropFilter: 'blur(25px) saturate(2)',
      border: '1px solid rgba(255, 215, 0, 0.3)',
      boxShadow: '0 12px 40px rgba(255, 215, 0, 0.15), inset 0 1px 0 rgba(255, 215, 0, 0.2)'
    }
  }
}

export default theme 