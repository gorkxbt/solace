// =============================================================================
// ANIMATION UTILITIES - Reusable animation functions and presets
// =============================================================================

import { type Variants } from 'framer-motion'
import { math } from './utils'

/**
 * Common animation durations for consistency
 */
export const DURATIONS = {
  instant: 0,
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  slower: 0.75,
  slowest: 1
} as const

/**
 * Common easing curves for smooth animations
 */
export const EASINGS = {
  linear: [0, 0, 1, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  backIn: [0.36, 0, 0.66, -0.56],
  backOut: [0.34, 1.56, 0.64, 1],
  backInOut: [0.68, -0.6, 0.32, 1.6],
  anticipate: [0.25, 0.46, 0.45, 0.94]
} as const

/**
 * Stagger animation utilities
 */
export const createStagger = (
  delayChildren: number = 0.1,
  staggerChildren: number = 0.1
): Variants => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren,
      delayChildren
    }
  }
})

/**
 * Fade animation variants
 */
export const fadeVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

/**
 * Slide animation variants factory
 */
export const createSlideVariants = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  distance: number = 50
): Variants => {
  const transforms = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance }
  }

  return {
    initial: { 
      opacity: 0, 
      ...transforms[direction] 
    },
    animate: { 
      opacity: 1, 
      x: 0, 
      y: 0 
    },
    exit: { 
      opacity: 0, 
      ...transforms[direction] 
    }
  }
}

/**
 * Scale animation variants
 */
export const scaleVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
}

/**
 * Rotation animation variants
 */
export const rotateVariants: Variants = {
  initial: { opacity: 0, rotate: -10 },
  animate: { opacity: 1, rotate: 0 },
  exit: { opacity: 0, rotate: 10 }
}

/**
 * Tech-specific glitch animation
 */
export const glitchVariants: Variants = {
  initial: { 
    opacity: 0,
    filter: 'hue-rotate(0deg) saturate(1) brightness(1)',
    x: 0
  },
  animate: { 
    opacity: 1,
    filter: [
      'hue-rotate(0deg) saturate(1) brightness(1)',
      'hue-rotate(90deg) saturate(1.5) brightness(1.2)',
      'hue-rotate(-30deg) saturate(0.8) brightness(0.9)',
      'hue-rotate(0deg) saturate(1) brightness(1)'
    ],
    x: [0, -2, 2, 0],
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
      times: [0, 0.2, 0.8, 1]
    }
  }
}

/**
 * Loading spinner animation
 */
export const spinVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear'
    }
  }
}

/**
 * Pulse animation for elements that need attention
 */
export const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

/**
 * Typewriter animation for text
 */
export const createTypewriterVariants = (text: string): Variants => ({
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
})

export const typewriterLetterVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3
    }
  }
}

/**
 * Magnetic hover effect for interactive elements
 */
export const magneticVariants: Variants = {
  rest: { 
    scale: 1,
    x: 0,
    y: 0 
  },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: EASINGS.backOut
    }
  }
}

/**
 * Card reveal animation for grid layouts
 */
export const cardRevealVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 60,
    rotateX: -15
  },
  animate: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: EASINGS.backOut
    }
  }
}

/**
 * Page transition variants
 */
export const pageTransitionVariants: Variants = {
  initial: { 
    opacity: 0,
    x: -200,
    scale: 0.8
  },
  animate: { 
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: EASINGS.easeOut
    }
  },
  exit: { 
    opacity: 0,
    x: 200,
    scale: 0.8,
    transition: {
      duration: 0.3,
      ease: EASINGS.easeIn
    }
  }
}

/**
 * Parallax scrolling utility
 */
export const createParallaxTransform = (
  scrollProgress: number,
  speed: number = 0.5
): { y: string } => ({
  y: `${scrollProgress * speed * 100}%`
})

/**
 * Mouse parallax effect
 */
export const createMouseParallax = (
  mouseX: number,
  mouseY: number,
  strength: number = 0.1
): { x: number; y: number } => ({
  x: (mouseX - window.innerWidth / 2) * strength,
  y: (mouseY - window.innerHeight / 2) * strength
})

/**
 * GSAP-style animation helper (for complex animations)
 */
export const createComplexAnimation = (
  element: HTMLElement,
  duration: number = 1,
  delay: number = 0
) => {
  const timeline = [
    { opacity: 0, transform: 'translateY(50px) rotateX(-15deg)' },
    { opacity: 1, transform: 'translateY(0px) rotateX(0deg)' }
  ]

  return element.animate(timeline, {
    duration: duration * 1000,
    delay: delay * 1000,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    fill: 'both'
  })
}

/**
 * Create scroll-triggered animation observer
 */
export const createScrollObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver => {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '-50px 0px',
    ...options
  }

  return new IntersectionObserver(callback, defaultOptions)
}

/**
 * Random animation delay for organic feel
 */
export const getRandomDelay = (min: number = 0, max: number = 0.5): number => {
  return math.random(min, max)
}

/**
 * Animation sequence builder
 */
export class AnimationSequence {
  private sequence: Array<{
    element: string
    animation: Variants
    delay?: number
  }> = []

  add(element: string, animation: Variants, delay: number = 0): this {
    this.sequence.push({ element, animation, delay })
    return this
  }

  build(): Record<string, Variants> {
    const result: Record<string, Variants> = {}
    
    this.sequence.forEach(({ element, animation }) => {
      result[element] = animation
    })

    return result
  }

  getTotalDuration(): number {
    return this.sequence.reduce((total, { delay = 0 }) => total + delay, 0)
  }
}

/**
 * Create responsive animation that adapts to screen size
 */
export const createResponsiveAnimation = (
  baseAnimation: Variants,
  screenWidth: number
): Variants => {
  const isMobile = screenWidth < 768
  const isTablet = screenWidth < 1024
  
  if (isMobile) {
    // Reduce motion on mobile
    return {
      ...baseAnimation,
      animate: {
        ...baseAnimation.animate,
        transition: {
          ...(baseAnimation.animate as any)?.transition,
          duration: ((baseAnimation.animate as any)?.transition?.duration || 0.5) * 0.7
        }
      }
    }
  }
  
  if (isTablet) {
    return {
      ...baseAnimation,
      animate: {
        ...baseAnimation.animate,
        transition: {
          ...(baseAnimation.animate as any)?.transition,
          duration: ((baseAnimation.animate as any)?.transition?.duration || 0.5) * 0.85
        }
      }
    }
  }
  
  return baseAnimation
} 