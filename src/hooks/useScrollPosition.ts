import { useState, useEffect } from 'react'

export function useScrollPosition(threshold: number = 20) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > threshold)
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold])

  return scrolled
} 