import {
  BarChart3,
  Bot,
  Heart,
  Truck,
  Database
} from 'lucide-react'

export const USE_CASES = [
  {
    icon: BarChart3,
    title: "Autonomous Trading Systems",
    description: "AI hedge funds orchestrating complex multi-asset strategies with real-time risk management and portfolio optimization.",
    techStack: ["Real-time Analytics", "Risk Management", "Portfolio Optimization", "Algorithmic Trading"],
    gradient: "from-black via-yellow-900 to-black",
    borderGlow: "border-yellow-500/30",
    featured: true
  },
  {
    icon: Bot,
    title: "Creative AI Networks", 
    description: "Collaborative content generation systems managing multimedia projects from ideation through distribution and monetization.",
    techStack: ["Content Generation", "Creative Workflows", "Distribution Networks", "IP Management"],
    gradient: "from-black via-yellow-800 to-black",
    borderGlow: "border-yellow-400/30"
  },
  {
    icon: Heart,
    title: "Healthcare Agent Mesh",
    description: "Privacy-preserving medical AI networks providing coordinated healthcare services with secure patient data handling.",
    techStack: ["Diagnostic AI", "Treatment Planning", "Privacy Protocols", "Secure Computation"],
    gradient: "from-black via-yellow-700 to-black", 
    borderGlow: "border-yellow-600/30"
  },
  {
    icon: Truck,
    title: "Supply Chain Optimization",
    description: "Global logistics coordination through autonomous agent networks managing inventory, routes, and quality assurance.",
    techStack: ["Route Optimization", "Inventory Management", "Quality Assurance", "Predictive Analytics"],
    gradient: "from-black via-yellow-600 to-black",
    borderGlow: "border-yellow-700/30"
  },
  {
    icon: Database,
    title: "Data Economy Networks",
    description: "Decentralized data marketplaces enabling secure data monetization and AI model training coordination.",
    techStack: ["Data Monetization", "Privacy Computing", "Model Training", "Secure Exchange"],
    gradient: "from-black via-yellow-500 to-black",
    borderGlow: "border-yellow-800/30"
  },
] as const 