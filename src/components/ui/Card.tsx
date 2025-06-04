// =============================================================================
// CARD COMPONENT - Reusable card container with tech variants
// =============================================================================

import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { CardProps } from '@/types'

/**
 * Reusable Card component with tech-themed variants
 * Provides consistent styling for content containers
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    children, 
    className, 
    variant = 'default', 
    padding = 'md', 
    hover = false,
    glitch = false,
    ...props 
  }, ref) => {
    
    // Base styles that apply to all variants
    const baseStyles = cn(
      'relative rounded-lg transition-all duration-300 ease-out',
      'transform-gpu backface-hidden'
    )

    // Padding variants
    const paddingStyles = {
      none: 'p-0',
      sm: 'p-3',
      md: 'p-6', 
      lg: 'p-8',
      xl: 'p-12'
    }

    // Variant styles with tech themes
    const variantStyles = {
      default: cn(
        'bg-gray-900/80 border border-gray-700',
        'backdrop-blur-sm shadow-lg'
      ),
      glass: cn(
        'bg-black/30 border border-yellow-400/20',
        'backdrop-blur-xl shadow-2xl shadow-yellow-400/5',
        'before:absolute before:inset-0 before:rounded-lg',
        'before:bg-gradient-to-br before:from-yellow-400/5 before:to-transparent',
        'before:pointer-events-none'
      ),
      tech: cn(
        'bg-black/80 border border-yellow-400/30',
        'shadow-lg shadow-yellow-400/10',
        'relative overflow-hidden',
        // Circuit pattern overlay
        'after:absolute after:inset-0 after:opacity-5',
        'after:bg-[url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffd700\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]',
        'after:pointer-events-none'
      ),
      glow: cn(
        'bg-gradient-to-br from-black/80 to-yellow-900/20',
        'border border-yellow-400/40 shadow-2xl shadow-yellow-400/20',
        'relative',
        // Glow effect
        'before:absolute before:inset-0 before:rounded-lg before:p-[1px]',
        'before:bg-gradient-to-br before:from-yellow-400/50 before:to-yellow-600/30',
        'before:-z-10 before:blur-sm'
      )
    }

    // Hover effects
    const hoverStyles = hover ? cn(
      'hover:scale-105 hover:shadow-xl',
      variant === 'glass' && 'hover:bg-black/40 hover:border-yellow-400/30',
      variant === 'tech' && 'hover:border-yellow-400/50 hover:shadow-yellow-400/20',
      variant === 'glow' && 'hover:shadow-yellow-400/30',
      'cursor-pointer'
    ) : ''

    // Glitch effect styles
    const glitchStyles = glitch ? cn(
      'animate-pulse',
      'hover:animate-none',
      'relative',
      // Glitch overlay
      'before:absolute before:inset-0 before:bg-gradient-to-r',
      'before:from-transparent before:via-yellow-400/10 before:to-transparent',
      'before:translate-x-[-100%] hover:before:translate-x-[100%]',
      'before:transition-transform before:duration-1000'
    ) : ''

    // Combine all styles
    const cardStyles = cn(
      baseStyles,
      paddingStyles[padding],
      variantStyles[variant],
      hoverStyles,
      glitchStyles,
      className
    )

    return (
      <motion.div
        ref={ref}
        className={cardStyles}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        whileHover={hover ? { 
          scale: 1.02,
          transition: { duration: 0.2 }
        } : undefined}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

// Compound components for better organization
export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6 pb-3', className)}
      {...props}
    />
  )
)
CardHeader.displayName = 'CardHeader'

export const CardTitle = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-2xl font-semibold leading-none tracking-tight text-yellow-400', className)}
      {...props}
    />
  )
)
CardTitle.displayName = 'CardTitle'

export const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-gray-400', className)}
      {...props}
    />
  )
)
CardDescription.displayName = 'CardDescription'

export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn('p-6 pt-0', className)} 
      {...props} 
    />
  )
)
CardContent.displayName = 'CardContent'

export const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  )
)
CardFooter.displayName = 'CardFooter'

export default Card 