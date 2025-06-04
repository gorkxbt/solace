// =============================================================================
// CORE TYPES - Central type definitions for the entire application
// =============================================================================

export interface BaseComponent {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

// Navigation Types
export interface NavigationItem {
  label: string;
  href: string;
  icon?: React.ComponentType<any>;
  isExternal?: boolean;
  description?: string;
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

// Animation Types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string | number[];
  stagger?: number;
}

export interface MotionVariants {
  initial: Record<string, any>;
  animate: Record<string, any>;
  exit?: Record<string, any>;
  transition?: AnimationConfig;
}

// Component State Types
export interface LoadingState {
  isLoading: boolean;
  progress?: number;
  message?: string;
}

export interface ErrorState {
  hasError: boolean;
  message?: string;
  code?: string | number;
}

// UI Component Types
export interface ButtonProps extends BaseComponent {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'tech';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  icon?: React.ComponentType<any>;
  iconPosition?: 'left' | 'right';
}

export interface CardProps extends BaseComponent {
  variant?: 'default' | 'glass' | 'tech' | 'glow';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  glitch?: boolean;
}

// Tech/Protocol Types
export interface TechMetric {
  label: string;
  value: string | number;
  unit?: string;
  trend?: 'up' | 'down' | 'stable';
  color?: string;
}

export interface AgentStats {
  activeAgents: number;
  totalTransactions: number;
  networkUptime: number;
  avgLatency: number;
}

export interface ProtocolFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  status: 'active' | 'beta' | 'coming-soon';
  metrics?: TechMetric[];
}

// Content Types
export interface UseCase {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  category: string;
  complexity: 'simple' | 'intermediate' | 'advanced';
  estimatedTime: string;
  features: string[];
  codeExample?: string;
  demoUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  featured?: boolean;
  readTime: number;
}

// Form Types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'textarea' | 'select' | 'checkbox';
  placeholder?: string;
  required?: boolean;
  validation?: {
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
    custom?: (value: any) => string | null;
  };
  options?: { value: string; label: string; }[];
}

export interface FormState {
  values: Record<string, any>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  isValid: boolean;
}

// API Types
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code: string | number;
    details?: any;
  };
  meta?: {
    pagination?: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
    timestamp: string;
    version: string;
  };
}

// Theme Types
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: {
      primary: string;
      secondary: string;
      accent: string;
    };
    border: string;
    success: string;
    warning: string;
    error: string;
  };
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
  shadows: Record<string, string>;
  animations: Record<string, string>;
}

// Hook Types
export interface UseScrollPositionReturn {
  scrollY: number;
  scrollX: number;
  scrollDirection: 'up' | 'down' | 'left' | 'right' | null;
  isScrolling: boolean;
}

export interface UseMousePositionReturn {
  x: number;
  y: number;
  elementX: number;
  elementY: number;
}

export interface UseLocalStorageReturn<T> {
  value: T;
  setValue: (value: T | ((val: T) => T)) => void;
  removeValue: () => void;
}

// Utility Types
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type OptionalFields<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Event Types
export interface CustomEvent<T = any> {
  type: string;
  payload?: T;
  timestamp: number;
  source?: string;
}

// Environment Types
export interface EnvironmentConfig {
  NODE_ENV: 'development' | 'production' | 'test';
  API_BASE_URL: string;
  SOLANA_NETWORK: 'mainnet-beta' | 'devnet' | 'testnet';
  ENABLE_ANALYTICS: boolean;
  DEBUG_MODE: boolean;
} 