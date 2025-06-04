import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Yellow System - Tech-focused vibrant yellows
        yellow: {
          50: '#fffdf0',
          100: '#fffbe0',
          200: '#fff5b8',
          300: '#ffec80',
          400: '#ffe347',
          500: '#ffd700', // Primary brand yellow
          600: '#f5c500',
          700: '#e6b800',
          800: '#cc9f00',
          900: '#b38600',
          950: '#997300',
        },
        
        // Extended Black System - Multiple shades for depth
        black: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e0e0e0',
          300: '#c7c7c7',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
          975: '#050505',
          DEFAULT: '#000000',
        },

        // Tech Accent Colors - Limited palette for highlights
        tech: {
          green: '#00ff88',
          blue: '#0099ff',
          purple: '#8855ff',
          red: '#ff3366',
          orange: '#ff6600',
        },

        // Semantic Colors using yellow/black system
        primary: {
          50: '#fffdf0',
          100: '#fffbe0',
          200: '#fff5b8',
          300: '#ffec80',
          400: '#ffe347',
          500: '#ffd700',
          600: '#f5c500',
          700: '#e6b800',
          800: '#cc9f00',
          900: '#b38600',
          950: '#997300',
          DEFAULT: '#ffd700',
        },

        secondary: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e0e0e0',
          300: '#c7c7c7',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
          DEFAULT: '#171717',
        },

        accent: {
          50: '#fffdf0',
          100: '#fffbe0',
          200: '#fff5b8',
          300: '#ffec80',
          400: '#ffe347',
          500: '#ffd700',
          600: '#f5c500',
          700: '#e6b800',
          800: '#cc9f00',
          900: '#b38600',
          950: '#997300',
          DEFAULT: '#ffd700',
        },

        neutral: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e0e0e0',
          300: '#c7c7c7',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
          DEFAULT: '#404040',
        },

        // Background system
        background: {
          primary: '#000000',
          secondary: '#0a0a0a',
          tertiary: '#171717',
          quaternary: '#262626',
        },

        // Surface colors for cards/components
        surface: {
          primary: '#0a0a0a',
          secondary: '#171717',
          tertiary: '#262626',
          elevated: '#404040',
        },

        // Border colors
        border: {
          primary: 'rgba(255, 215, 0, 0.2)',
          secondary: 'rgba(255, 215, 0, 0.1)',
          subtle: 'rgba(255, 255, 255, 0.1)',
          strong: 'rgba(255, 215, 0, 0.4)',
        },
      },

      fontFamily: {
        sans: [
          'Inter', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          'Segoe UI', 
          'Roboto', 
          'Oxygen', 
          'Ubuntu', 
          'Cantarell', 
          'sans-serif'
        ],
        mono: [
          'JetBrains Mono', 
          'Fira Code', 
          'SF Mono', 
          'Monaco', 
          'Inconsolata', 
          'Roboto Mono', 
          'monospace'
        ],
        display: [
          'Space Grotesk',
          'Inter', 
          'system-ui', 
          'sans-serif'
        ],
      },

      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.025em' }],
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.025em' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.025em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.025em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.025em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.025em' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '8xl': ['6rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '9xl': ['8rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
      },

      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
      },

      animation: {
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
        'slide-up-fade': 'slideUpFade 0.6s ease-out',
        'slide-down-fade': 'slideDownFade 0.6s ease-out',
        'slide-left-fade': 'slideLeftFade 0.6s ease-out',
        'slide-right-fade': 'slideRightFade 0.6s ease-out',
        'scale-fade-in': 'scaleFadeIn 0.5s ease-out',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
        'pulse-yellow': 'pulseYellow 2s ease-in-out infinite',
        'shimmer-yellow': 'shimmerYellow 2s linear infinite',
        'typewriter': 'typewriter 3s steps(40) infinite',
        'blink': 'blink 1s infinite',
        'matrix-rain': 'matrixRain 10s linear infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'scan-line': 'scanLine 2s linear infinite',
        'data-flow': 'dataFlow 3s ease-in-out infinite',
        'circuit-pulse': 'circuitPulse 1.5s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-slow': 'float 8s ease-in-out infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-delayed': 'fadeIn 1s ease-out 0.5s both',
        'scale-in': 'scaleIn 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
        'particle-float': 'particleFloat 20s linear infinite',
      },

      keyframes: {
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(255, 215, 0, 0.3), 0 0 40px rgba(255, 215, 0, 0.1)',
            opacity: '1'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 215, 0, 0.2)',
            opacity: '0.8'
          },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(5px) rotate(-1deg)' },
        },
        slideUpFade: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDownFade: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeftFade: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRightFade: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleFadeIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-3%)' },
        },
        pulseYellow: {
          '0%, 100%': { 
            backgroundColor: 'rgba(255, 215, 0, 0.1)',
            borderColor: 'rgba(255, 215, 0, 0.3)'
          },
          '50%': { 
            backgroundColor: 'rgba(255, 215, 0, 0.2)',
            borderColor: 'rgba(255, 215, 0, 0.6)'
          },
        },
        shimmerYellow: {
          '0%': { transform: 'translateX(-100%) skewX(-15deg)' },
          '100%': { transform: 'translateX(200%) skewX(-15deg)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '50%': { width: '100%' },
          '100%': { width: '0' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        matrixRain: {
          '0%': { transform: 'translateY(-100vh)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        glitch: {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-2px)' },
          '40%': { transform: 'translateX(2px)' },
          '60%': { transform: 'translateX(-1px)' },
          '80%': { transform: 'translateX(1px)' },
          '100%': { transform: 'translateX(0)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)', opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        dataFlow: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(50px)', opacity: '0' },
        },
        circuitPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-5%)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(255, 215, 0, 0.8)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        particleFloat: {
          '0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -30px) rotate(120deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(240deg)' },
          '100%': { transform: 'translate(0px, 0px) rotate(360deg)' },
        },
      },

      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-yellow': 'linear-gradient(135deg, #ffd700, #ffec80)',
        'gradient-yellow-dark': 'linear-gradient(135deg, #e6b800, #cc9f00)',
        'gradient-tech': 'linear-gradient(135deg, #000000, #171717, #262626)',
        'grid-pattern': 'radial-gradient(circle at 1px 1px, rgba(255,215,0,0.15) 1px, transparent 0)',
        'noise': 'url("data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.4"/%3E%3C/svg%3E")',
        'circuit': 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffd700" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      },

      boxShadow: {
        'yellow-glow': '0 0 20px rgba(255, 215, 0, 0.3)',
        'yellow-glow-lg': '0 0 40px rgba(255, 215, 0, 0.4)',
        'yellow-glow-xl': '0 0 60px rgba(255, 215, 0, 0.5)',
        'black-depth': '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
        'tech-card': '0 8px 32px rgba(255, 215, 0, 0.1), 0 0 0 1px rgba(255, 215, 0, 0.05)',
        'inner-yellow': 'inset 0 2px 4px 0 rgba(255, 215, 0, 0.1)',
        'brutal': '8px 8px 0px 0px rgba(255, 215, 0, 1)',
        'inner-lg': 'inset 0 10px 15px -3px rgba(0, 0, 0, 0.1), inset 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'neon': '0 0 20px rgba(255, 215, 0, 0.6)',
        'neon-lg': '0 0 40px rgba(255, 215, 0, 0.8)',
      },

      dropShadow: {
        'yellow': '0 4px 8px rgba(255, 215, 0, 0.3)',
        'yellow-lg': '0 8px 16px rgba(255, 215, 0, 0.4)',
      },

      screens: {
        'xs': '475px',
        '3xl': '1600px',
        '4xl': '1920px',
      },

      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },

      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'snappy': 'cubic-bezier(0.4, 0, 0.6, 1)',
      },

      transformOrigin: {
        'center-center': 'center center',
        'top-left-corner': 'top left',
        'top-right-corner': 'top right',
        'bottom-left-corner': 'bottom left',
        'bottom-right-corner': 'bottom right',
      },

      perspective: {
        '500': '500px',
        '1000': '1000px',
        '2000': '2000px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    function({ addUtilities, addComponents }: any) {
      const newUtilities = {
        '.perspective-500': {
          perspective: '500px',
        },
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.perspective-2000': {
          perspective: '2000px',
        },
        '.preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.transform-style-3d': {
          transformStyle: 'preserve-3d',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0,0,0,0.2)',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.clip-polygon-1': {
          clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
        },
        '.clip-polygon-2': {
          clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
        },
        '.clip-diagonal': {
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
        },
        '.gpu-accelerated': {
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          perspective: '1000px',
        },
        '.will-change-transform': {
          willChange: 'transform',
        },
        '.will-change-opacity': {
          willChange: 'opacity',
        },
        '.will-change-contents': {
          willChange: 'contents',
        },
        '.clip-tech-corner': {
          clipPath: 'polygon(0 0, calc(100% - 1rem) 0, 100% 1rem, 100% 100%, 0 100%)',
        },
        '.clip-tech-angle': {
          clipPath: 'polygon(0 0, 100% 0, calc(100% - 2rem) 100%, 0 100%)',
        },
        '.clip-hexagon': {
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
        },
        '.clip-arrow': {
          clipPath: 'polygon(0 0, calc(100% - 2rem) 0, 100% 50%, calc(100% - 2rem) 100%, 0 100%)',
        },
        '.text-shadow-yellow': {
          textShadow: '0 0 10px rgba(255, 215, 0, 0.5)',
        },
        '.text-shadow-glow': {
          textShadow: '0 0 20px rgba(255, 215, 0, 0.8)',
        },
        '.scrollbar-yellow': {
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(0, 0, 0, 0.1)',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'linear-gradient(180deg, #ffd700, #e6b800)',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: 'linear-gradient(180deg, #ffec80, #ffd700)',
          },
        },
        '.grid-dots': {
          backgroundImage: 'radial-gradient(circle, rgba(255,215,0,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        },
        '.grid-lines': {
          backgroundImage: 'linear-gradient(rgba(255,215,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        },
      }

      const newComponents = {
        '.btn-tech': {
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.75rem 2rem',
          fontSize: '0.875rem',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: '#000000',
          backgroundColor: '#ffd700',
          border: 'none',
          clipPath: 'polygon(0 0, calc(100% - 1rem) 0, 100% 1rem, 100% 100%, 0 100%)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#ffec80',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(255, 215, 0, 0.4)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        '.btn-tech-outline': {
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.75rem 2rem',
          fontSize: '0.875rem',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: '#ffd700',
          backgroundColor: 'transparent',
          border: '2px solid #ffd700',
          clipPath: 'polygon(0 0, calc(100% - 1rem) 0, 100% 1rem, 100% 100%, 0 100%)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#ffd700',
            color: '#000000',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(255, 215, 0, 0.4)',
          },
        },
        '.card-tech': {
          position: 'relative',
          backgroundColor: 'rgba(10, 10, 10, 0.8)',
          border: '1px solid rgba(255, 215, 0, 0.2)',
          backdropFilter: 'blur(10px)',
          borderRadius: '0.5rem',
          padding: '1.5rem',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: 'rgba(255, 215, 0, 0.4)',
            boxShadow: '0 8px 32px rgba(255, 215, 0, 0.1)',
            transform: 'translateY(-4px)',
          },
        },
      }

      addUtilities(newUtilities)
      addComponents(newComponents)
    },
  ],
}

export default config 