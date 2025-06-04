// =============================================================================
// UTILITY FUNCTIONS - Reusable helper functions
// =============================================================================

import type { APIResponse } from '@/types'

/**
 * Utility function to merge CSS classes
 * Simple implementation without external dependencies
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Format numbers with proper localization and units
 */
export const formatNumber = (
  value: number,
  options: {
    style?: 'decimal' | 'currency' | 'percent'
    currency?: string
    minimumFractionDigits?: number
    maximumFractionDigits?: number
    notation?: 'standard' | 'scientific' | 'engineering' | 'compact'
  } = {}
): string => {
  const {
    style = 'decimal',
    currency = 'USD',
    minimumFractionDigits = 0,
    maximumFractionDigits = 2,
    notation = 'standard'
  } = options

  return new Intl.NumberFormat('en-US', {
    style,
    currency: style === 'currency' ? currency : undefined,
    minimumFractionDigits,
    maximumFractionDigits,
    notation
  }).format(value)
}

/**
 * Format dates with various options
 */
export const formatDate = (
  date: string | Date,
  options: {
    style?: 'full' | 'long' | 'medium' | 'short'
    relative?: boolean
    includeTime?: boolean
  } = {}
): string => {
  const {
    style = 'medium',
    relative = false,
    includeTime = false
  } = options

  const dateObj = typeof date === 'string' ? new Date(date) : date

  if (relative) {
    const now = new Date()
    const diffMs = now.getTime() - dateObj.getTime()
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Yesterday'
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
    return `${Math.floor(diffDays / 365)} years ago`
  }

  const formatOptions: Intl.DateTimeFormatOptions = {
    dateStyle: style,
    timeStyle: includeTime ? 'short' : undefined
  }

  return new Intl.DateTimeFormat('en-US', formatOptions).format(dateObj)
}

/**
 * Debounce function to limit the rate of function calls
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      func.apply(null, args)
    }, delay)
  }
}

/**
 * Throttle function to limit function calls to once per interval
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func.apply(null, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Sleep utility for async delays
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Generate random ID strings
 */
export const generateId = (prefix?: string, length: number = 8): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  
  return prefix ? `${prefix}_${result}` : result
}

/**
 * Deep clone objects
 */
export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj.getTime()) as T
  if (Array.isArray(obj)) return obj.map(item => deepClone(item)) as T
  
  const cloned = {} as T
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key])
    }
  }
  
  return cloned
}

/**
 * Check if value is empty (null, undefined, empty string, empty array, empty object)
 */
export const isEmpty = (value: any): boolean => {
  if (value === null || value === undefined) return true
  if (typeof value === 'string') return value.trim().length === 0
  if (Array.isArray(value)) return value.length === 0
  if (typeof value === 'object') return Object.keys(value).length === 0
  return false
}

/**
 * Capitalize first letter of string
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

/**
 * Convert string to kebab-case
 */
export const toKebabCase = (str: string): string => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}

/**
 * Convert string to camelCase
 */
export const toCamelCase = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
}

/**
 * Truncate text with ellipsis
 */
export const truncate = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength - 3) + '...'
}

/**
 * Parse and validate JSON safely
 */
export const safeParseJSON = <T = any>(
  json: string,
  fallback: T | null = null
): T | null => {
  try {
    return JSON.parse(json)
  } catch {
    return fallback
  }
}

/**
 * Local Storage utilities with error handling
 */
export const storage = {
  get: <T>(key: string, fallback: T | null = null): T | null => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : fallback
    } catch {
      return fallback
    }
  },

  set: <T>(key: string, value: T): boolean => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      return true
    } catch {
      return false
    }
  },

  remove: (key: string): boolean => {
    try {
      localStorage.removeItem(key)
      return true
    } catch {
      return false
    }
  },

  clear: (): boolean => {
    try {
      localStorage.clear()
      return true
    } catch {
      return false
    }
  }
}

/**
 * URL manipulation utilities
 */
export const url = {
  /**
   * Add query parameters to URL
   */
  addParams: (baseUrl: string, params: Record<string, string | number | boolean>): string => {
    const url = new URL(baseUrl, window.location.origin)
    
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, String(value))
    })
    
    return url.toString()
  },

  /**
   * Remove query parameters from URL
   */
  removeParams: (baseUrl: string, paramsToRemove: string[]): string => {
    const url = new URL(baseUrl, window.location.origin)
    
    paramsToRemove.forEach(param => {
      url.searchParams.delete(param)
    })
    
    return url.toString()
  },

  /**
   * Get query parameter value
   */
  getParam: (name: string, defaultValue: string = ''): string => {
    const params = new URLSearchParams(window.location.search)
    return params.get(name) || defaultValue
  }
}

/**
 * Math utilities
 */
export const math = {
  /**
   * Clamp number between min and max
   */
  clamp: (value: number, min: number, max: number): number => {
    return Math.min(Math.max(value, min), max)
  },

  /**
   * Linear interpolation between two values
   */
  lerp: (start: number, end: number, factor: number): number => {
    return start + (end - start) * factor
  },

  /**
   * Map value from one range to another
   */
  mapRange: (
    value: number,
    fromMin: number,
    fromMax: number,
    toMin: number,
    toMax: number
  ): number => {
    return toMin + ((value - fromMin) * (toMax - toMin)) / (fromMax - fromMin)
  },

  /**
   * Generate random number between min and max
   */
  random: (min: number = 0, max: number = 1): number => {
    return Math.random() * (max - min) + min
  },

  /**
   * Round number to specified decimal places
   */
  round: (value: number, decimals: number = 2): number => {
    return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
  }
}

/**
 * API response handlers
 */
export const api = {
  /**
   * Create standardized API response
   */
  createResponse: <T = any>(
    success: boolean,
    data?: T,
    error?: { message: string; code: string | number; details?: any }
  ): APIResponse<T> => {
    return {
      success,
      data,
      error,
      meta: {
        timestamp: new Date().toISOString(),
        version: '1.0.0'
      }
    } as APIResponse<T>
  },

  /**
   * Handle fetch with proper error handling
   */
  fetch: async <T = any>(
    url: string,
    options: RequestInit = {}
  ): Promise<APIResponse<T>> => {
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      })

      const data = await response.json()

      if (!response.ok) {
        return api.createResponse<T>(false, undefined, {
          message: data.message || 'Request failed',
          code: response.status
        })
      }

      return api.createResponse<T>(true, data)
    } catch (error) {
      return api.createResponse<T>(false, undefined, {
        message: error instanceof Error ? error.message : 'Network error',
        code: 'NETWORK_ERROR'
      })
    }
  }
}

/**
 * Performance utilities
 */
export const performance = {
  /**
   * Measure function execution time
   */
  measure: async <T>(name: string, fn: () => Promise<T> | T): Promise<T> => {
    const start = Date.now()
    const result = await fn()
    const end = Date.now()
    
    console.log(`[Performance] ${name}: ${end - start}ms`)
    
    return result
  },

  /**
   * Create performance observer for monitoring
   */
  observe: (types: string[], callback: (entries: PerformanceEntry[]) => void) => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        callback(list.getEntries())
      })
      
      observer.observe({ entryTypes: types })
      
      return () => observer.disconnect()
    }
    
    return () => {}
  }
}

/**
 * Device detection utilities
 */
export const device = {
  isMobile: (): boolean => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  },

  isTablet: (): boolean => {
    return /iPad|Android(?!.*Mobile)/i.test(navigator.userAgent)
  },

  isDesktop: (): boolean => {
    return !device.isMobile() && !device.isTablet()
  },

  getScreenSize: (): 'sm' | 'md' | 'lg' | 'xl' | '2xl' => {
    const width = window.innerWidth
    
    if (width < 640) return 'sm'
    if (width < 768) return 'md'
    if (width < 1024) return 'lg'
    if (width < 1280) return 'xl'
    return '2xl'
  },

  supportsHover: (): boolean => {
    return window.matchMedia('(hover: hover)').matches
  },

  prefersReducedMotion: (): boolean => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
} 