# Components Architecture

This directory contains all React components organized in a modular, maintainable structure for the Solace Protocol website.

## Directory Structure

```
src/components/
├── README.md                 # This file
├── index.ts                  # Component exports
├── Header.tsx               # Main header component
├── Footer.tsx               # Main footer component  
├── HeroSection.tsx          # Hero section component
├── UseCaseShowcase.tsx      # Use cases section
├── EcosystemBenefits.tsx    # Benefits section
├── ProtocolArchitecture.tsx # Architecture section
├── layout/                  # Layout-specific components
│   ├── Logo.tsx            # Site logo with animations
│   ├── Navigation.tsx      # Desktop navigation
│   ├── SocialLinks.tsx     # Social media links
│   ├── CTAButton.tsx       # Call-to-action button
│   └── MobileMenu.tsx      # Mobile navigation menu
├── ui/                     # Reusable UI components
│   ├── UseCaseCard.tsx     # Individual use case card
│   ├── NetworkBackground.tsx # Network animation effects
│   ├── TechMetrics.tsx     # Technical metrics display
│   ├── BackgroundEffects.tsx # Matrix/binary rain effects
│   ├── TechVisualization.tsx # 3D tech visualization
│   └── ScrollIndicator.tsx # Animated scroll indicator
└── sections/               # Section-specific components
    └── SectionHeader.tsx   # Reusable section headers
```

## Component Categories

### Main Components
Large, page-level components that compose multiple smaller components.

### Layout Components  
Header/navigation related components for consistent site layout.

### UI Components
Small, reusable components focused on specific UI elements.

### Section Components
Components used across multiple sections for consistency.

## Design Principles

1. **Single Responsibility**: Each component has one clear purpose
2. **Composability**: Components can be easily combined
3. **Reusability**: Components are designed for reuse across pages
4. **Type Safety**: All components use TypeScript interfaces
5. **Performance**: Components are optimized for client-side rendering

## Usage Examples

```tsx
// Import individual components
import { Logo, Navigation } from '@/components'

// Import from specific directories
import UseCaseCard from '@/components/ui/UseCaseCard'
import SectionHeader from '@/components/sections/SectionHeader'

// Use with props
<SectionHeader
  badge={{ icon: Rocket, text: "FEATURE" }}
  title="Component"
  subtitle="Architecture"
  description="Modular design for better maintainability"
/>
```

## Shared Dependencies

### Constants
- `@/constants/animations.ts` - Animation configurations
- `@/constants/navigation.ts` - Navigation items and social links  
- `@/constants/useCases.ts` - Use case data

### Hooks
- `@/hooks/useMousePosition.ts` - Mouse position tracking
- `@/hooks/useScrollPosition.ts` - Scroll position detection
- `@/hooks/useMounted.ts` - Client-side mounting state

### Utilities
- `@/utils/animations.ts` - GSAP animation helpers

## Development Guidelines

1. **Component Naming**: Use PascalCase for component files
2. **Props Interface**: Define interfaces for all component props
3. **Default Props**: Use default parameters for optional props
4. **Animation**: Prefer Framer Motion for React animations, GSAP for DOM manipulation
5. **Styling**: Use Tailwind CSS classes consistently
6. **Performance**: Use React.memo() for expensive components if needed

## Migration Notes

This architecture was refactored from large monolithic components to improve:
- **Developer Experience**: Easier to find and modify specific functionality
- **Code Reusability**: Components can be reused across pages
- **Testing**: Smaller components are easier to test in isolation
- **Bundle Size**: Tree-shaking eliminates unused code
- **Team Collaboration**: Multiple developers can work on different components

Each component maintains the same visual appearance and functionality as before the refactor. 