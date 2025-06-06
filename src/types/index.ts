// =============================================================================
// CORE TYPES - Central type definitions for the entire application
// =============================================================================

export interface BaseComponent {
  id?: string;
  className?: string;
  children?: React.ReactNode;
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