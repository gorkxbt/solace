// =============================================================================
// BUTTON COMPONENT - Reusable button with multiple variants
// =============================================================================

import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ButtonProps } from '@/types'

/**
 * Reusable Button component with tech-themed variants
 * Supports both button and link functionality with consistent styling
 */
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ 
    children, 
    className, 
    variant = 'primary', 
    size = 'md', 
    disabled = false, 
    isLoading = false,
    onClick,
    href,
    icon: Icon,
    iconPosition = 'left',
    ...props 
  }, ref) => {
    
    // Base styles that apply to all variants
    const baseStyles = cn(
      'relative inline-flex items-center justify-center font-mono font-semibold',
      'transition-all duration-300 ease-out transform-gpu',
      'focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:ring-offset-2 focus:ring-offset-black',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
      'group overflow-hidden'
    )

    // Size variants
    const sizeStyles = {
      sm: 'px-3 py-2 text-sm h-9',
      md: 'px-6 py-3 text-sm h-11',
      lg: 'px-8 py-4 text-base h-12',
      xl: 'px-10 py-5 text-lg h-14'
    }

    // Variant styles with tech themes
    const variantStyles = {
      primary: cn(
        'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black',
        'border border-yellow-400/50 shadow-lg shadow-yellow-400/25',
        'hover:from-yellow-300 hover:to-yellow-400 hover:shadow-xl hover:shadow-yellow-400/40',
        'active:scale-95 hover:scale-105'
      ),
      secondary: cn(
        'bg-gradient-to-r from-gray-800 to-gray-900 text-white',
        'border border-gray-600 shadow-lg shadow-gray-900/50',
        'hover:from-gray-700 hover:to-gray-800 hover:border-gray-500',
        'active:scale-95 hover:scale-105'
      ),
      outline: cn(
        'bg-transparent text-yellow-400 border-2 border-yellow-400/50',
        'hover:bg-yellow-400/10 hover:border-yellow-400',
        'active:scale-95 hover:scale-105'
      ),
      ghost: cn(
        'bg-transparent text-gray-300 border border-transparent',
        'hover:bg-yellow-400/10 hover:text-yellow-400',
        'active:scale-95'
      ),
      tech: cn(
        'bg-black/80 text-yellow-400 border border-yellow-400/30',
        'backdrop-blur-sm shadow-lg shadow-yellow-400/10',
        'hover:bg-yellow-400/5 hover:border-yellow-400/50 hover:shadow-yellow-400/20',
        'active:scale-95 hover:scale-105',
        'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-yellow-400/10 before:to-transparent',
        'before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700'
      )
    }

    // Combine all styles
    const buttonStyles = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    )

    // Loading spinner component
    const LoadingSpinner = () => (
      <motion.div
        className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
    )

    // Icon with proper positioning
    const renderIcon = () => {
      if (!Icon && !isLoading) return null
      
      const iconElement = isLoading ? <LoadingSpinner /> : Icon && <Icon className="w-4 h-4" />
      
      return (
        <span className={cn(
          'flex items-center',
          iconPosition === 'right' ? 'ml-2' : 'mr-2'
        )}>
          {iconElement}
        </span>
      )
    }

    // Content with proper icon positioning
    const content = (
      <>
        {iconPosition === 'left' && renderIcon()}
        <span className={cn(isLoading && 'opacity-70')}>
          {children}
        </span>
        {iconPosition === 'right' && renderIcon()}
      </>
    )

    // Render as Link component if href is provided
    if (href) {
      return (
        <Link
          href={href}
          className={buttonStyles}
          {...(props as any)}
          ref={ref as any}
        >
          {content}
        </Link>
      )
    }

    // Render as button
    return (
      <motion.button
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        className={buttonStyles}
        disabled={disabled || isLoading}
        onClick={onClick}
        ref={ref as any}
        {...props}
      >
        {content}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button 