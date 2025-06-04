// Animation duration constants
export const ANIMATION_DURATIONS = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.2,
  extraSlow: 2.0,
} as const

// Easing curves
export const EASING = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  bounce: [0.6, 0.01, -0.05, 0.95],
  spring: [0.4, 0.0, 0.2, 1],
} as const

// Common animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 }
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 }
}

export const fadeInRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
}

export const slideInDown = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -100, opacity: 0 }
}

// Stagger animation configs
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: EASING.smooth
    }
  }
} 