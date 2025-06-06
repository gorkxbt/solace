import { 
  Home,
  Info,
  Terminal,
  Github,
  Twitter
} from 'lucide-react'

// Navigation items
export const NAV_ITEMS = [
  { 
    href: '/', 
    label: 'Home', 
    icon: Home, 
    description: 'Landing page' 
  },
  { 
    href: '/info', 
    label: 'Info', 
    icon: Info, 
    description: 'Protocol docs' 
  },
  { 
    href: '/terminal', 
    label: 'Terminal', 
    icon: Terminal, 
    description: 'ACP Smart Contracts' 
  },
] as const

// Social media links
export const SOCIAL_ITEMS = [
  { 
    href: 'https://github.com/solaceprotocol', 
    icon: Github, 
    label: 'GitHub',
    color: 'hover:text-yellow-400'
  },
  { 
    href: 'https://twitter.com/solaceprotocol', 
    icon: Twitter, 
    label: 'Twitter',
    color: 'hover:text-yellow-400'
  },
] as const 