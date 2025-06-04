// =============================================================================
// useMediaQuery Hook - Responsive design and media query detection
// =============================================================================

import { useState, useEffect } from 'react'

/**
 * Custom hook for media query detection
 * Returns boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false)

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') {
      return
    }

    const mediaQuery = window.matchMedia(query)
    
    // Set initial value
    setMatches(mediaQuery.matches)

    // Define handler function
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Add listener
    mediaQuery.addEventListener('change', handleChange)

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [query])

  return matches
}

/**
 * Predefined responsive breakpoint hooks
 */
export const useBreakpoint = () => {
  const isSm = useMediaQuery('(min-width: 640px)')
  const isMd = useMediaQuery('(min-width: 768px)')
  const isLg = useMediaQuery('(min-width: 1024px)')
  const isXl = useMediaQuery('(min-width: 1280px)')
  const is2Xl = useMediaQuery('(min-width: 1536px)')

  return {
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
    // Convenience properties
    isMobile: !isSm,
    isTablet: isSm && !isLg,
    isDesktop: isLg
  }
}

/**
 * Hook for detecting device capabilities
 */
export const useDeviceCapabilities = () => {
  const supportsHover = useMediaQuery('(hover: hover)')
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const isHighDensity = useMediaQuery('(min-resolution: 2dppx)')

  return {
    supportsHover,
    prefersReducedMotion,
    prefersDarkMode,
    isHighDensity
  }
} 