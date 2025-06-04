import { 
  Terminal,
  Code2,
  Database,
  Github,
  Twitter,
  MessageCircle
} from 'lucide-react'

// Navigation items
export const NAV_ITEMS = [
  { 
    href: '/', 
    label: 'Home', 
    icon: Terminal, 
    description: 'Neural hub' 
  },
  { 
    href: '/framework', 
    label: 'Framework', 
    icon: Code2, 
    description: 'Dev platform' 
  },
  { 
    href: '/docs', 
    label: 'Docs', 
    icon: Database, 
    description: 'Knowledge base' 
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
  { 
    href: 'https://discord.gg/solaceprotocol', 
    icon: MessageCircle, 
    label: 'Discord',
    color: 'hover:text-yellow-400'
  },
] as const 