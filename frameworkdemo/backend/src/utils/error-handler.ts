import { Request, Response, NextFunction } from 'express';
import { log } from './logger';

/**
 * Base application error class
 */
export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code: string;
  public readonly isOperational: boolean;
  public readonly context?: Record<string, any>;

  constructor(
    message: string,
    statusCode: number = 500,
    code: string = 'INTERNAL_ERROR',
    isOperational: boolean = true,
    context?: Record<string, any>
  ) {
    super(message);
    
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = isOperational;
    this.context = context;

    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Validation error for input validation failures
 */
export class ValidationError extends AppError {
  constructor(message: string, context?: Record<string, any>) {
    super(message, 400, 'VALIDATION_ERROR', true, context);
  }
}

/**
 * Authentication error for auth failures
 */
export class AuthenticationError extends AppError {
  constructor(message: string = 'Authentication failed', context?: Record<string, any>) {
    super(message, 401, 'AUTHENTICATION_ERROR', true, context);
  }
}

/**
 * Authorization error for permission failures
 */
export class AuthorizationError extends AppError {
  constructor(message: string = 'Insufficient permissions', context?: Record<string, any>) {
    super(message, 403, 'AUTHORIZATION_ERROR', true, context);
  }
}

/**
 * Not found error for missing resources
 */
export class NotFoundError extends AppError {
  constructor(resource: string, context?: Record<string, any>) {
    super(`${resource} not found`, 404, 'NOT_FOUND_ERROR', true, context);
  }
}

/**
 * Conflict error for resource conflicts
 */
export class ConflictError extends AppError {
  constructor(message: string, context?: Record<string, any>) {
    super(message, 409, 'CONFLICT_ERROR', true, context);
  }
}

/**
 * Rate limit error
 */
export class RateLimitError extends AppError {
  constructor(message: string = 'Rate limit exceeded', context?: Record<string, any>) {
    super(message, 429, 'RATE_LIMIT_ERROR', true, context);
  }
}

/**
 * Blockchain error for Solana/blockchain related errors
 */
export class BlockchainError extends AppError {
  constructor(message: string, context?: Record<string, any>) {
    super(message, 502, 'BLOCKCHAIN_ERROR', true, context);
  }
}

/**
 * Agent error for ACP agent related errors
 */
export class AgentError extends AppError {
  constructor(message: string, context?: Record<string, any>) {
    super(message, 422, 'AGENT_ERROR', true, context);
  }
}

/**
 * Transaction error for transaction related errors
 */
export class TransactionError extends AppError {
  constructor(message: string, context?: Record<string, any>) {
    super(message, 422, 'TRANSACTION_ERROR', true, context);
  }
}

/**
 * Error response interface
 */
interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    statusCode: number;
    timestamp: string;
    requestId?: string;
    context?: Record<string, any>;
    stack?: string;
  };
}

/**
 * Format error for API response
 */
const formatErrorResponse = (
  error: AppError,
  requestId?: string,
  includeStack: boolean = false
): ErrorResponse => {
  return {
    success: false,
    error: {
      code: error.code,
      message: error.message,
      statusCode: error.statusCode,
      timestamp: new Date().toISOString(),
      requestId,
      context: error.context,
      ...(includeStack && { stack: error.stack }),
    },
  };
};

/**
 * Express error handling middleware
 */
export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Convert unknown errors to AppError
  let appError: AppError;
  
  if (error instanceof AppError) {
    appError = error;
  } else {
    // Handle known error types
    if (error.name === 'ValidationError') {
      appError = new ValidationError(error.message);
    } else if (error.name === 'CastError') {
      appError = new ValidationError('Invalid data format');
    } else if (error.name === 'MongoError' && (error as any).code === 11000) {
      appError = new ConflictError('Duplicate entry');
    } else {
      // Unknown error - treat as internal server error
      appError = new AppError(
        'Internal server error',
        500,
        'INTERNAL_ERROR',
        false
      );
    }
  }

  // Log the error
  log.error('Request error', {
    requestId: (req as any).requestId,
    userId: (req as any).user?.id,
    path: req.path,
    method: req.method,
    statusCode: appError.statusCode,
    errorCode: appError.code,
    context: appError.context,
  }, appError);

  // Send error response
  const errorResponse = formatErrorResponse(
    appError,
    (req as any).requestId,
    process.env.NODE_ENV === 'development'
  );

  res.status(appError.statusCode).json(errorResponse);
};

/**
 * Handle async route functions
 */
export const asyncHandler = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

/**
 * Handle 404 errors for unknown routes
 */
export const notFoundHandler = (req: Request, res: Response, next: NextFunction): void => {
  const error = new NotFoundError(`Route ${req.method} ${req.path}`);
  next(error);
};

/**
 * Utility function to throw validation error
 */
export const throwValidationError = (message: string, context?: Record<string, any>): never => {
  throw new ValidationError(message, context);
};

/**
 * Utility function to throw not found error
 */
export const throwNotFoundError = (resource: string, context?: Record<string, any>): never => {
  throw new NotFoundError(resource, context);
};

/**
 * Utility function to throw authorization error
 */
export const throwAuthorizationError = (message?: string, context?: Record<string, any>): never => {
  throw new AuthorizationError(message, context);
};

/**
 * Utility function to throw authentication error
 */
export const throwAuthenticationError = (message?: string, context?: Record<string, any>): never => {
  throw new AuthenticationError(message, context);
}; 