import winston from 'winston';
import { config } from '../config/environment';

/**
 * Custom log levels for the ACP system
 */
const logLevels = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
  trace: 4,
};

/**
 * Custom format for log messages
 */
const logFormat = winston.format.combine(
  winston.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss.SSS',
  }),
  winston.format.errors({ stack: true }),
  winston.format.json(),
  winston.format.printf(({ timestamp, level, message, ...meta }) => {
    const logEntry = {
      timestamp,
      level,
      message,
      ...meta,
    };
    
    if (config.env === 'development') {
      // Pretty format for development
      return `${timestamp} [${level.toUpperCase()}]: ${message} ${
        Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''
      }`;
    }
    
    // JSON format for production
    return JSON.stringify(logEntry);
  })
);

/**
 * Create winston logger instance
 */
const logger = winston.createLogger({
  levels: logLevels,
  level: config.logging.level,
  format: logFormat,
  defaultMeta: {
    service: 'solace-acp-backend',
    environment: config.env,
  },
  transports: [
    // Console transport for all environments
    new winston.transports.Console({
      handleExceptions: true,
      handleRejections: true,
    }),
    
    // File transports for production
    ...(config.env === 'production' ? [
      new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error',
        maxsize: 5242880, // 5MB
        maxFiles: 5,
      }),
      new winston.transports.File({
        filename: 'logs/combined.log',
        maxsize: 5242880, // 5MB
        maxFiles: 5,
      }),
    ] : []),
  ],
});

/**
 * Structured logging interface for different log types
 */
export interface LogContext {
  userId?: string;
  agentId?: string;
  transactionId?: string;
  requestId?: string;
  ipAddress?: string;
  userAgent?: string;
  [key: string]: any;
}

/**
 * Enhanced logger with context support
 */
class ContextualLogger {
  private baseLogger: winston.Logger;

  constructor(baseLogger: winston.Logger) {
    this.baseLogger = baseLogger;
  }

  /**
   * Log error messages with context
   */
  error(message: string, context?: LogContext, error?: Error): void {
    this.baseLogger.error(message, {
      ...context,
      error: error ? {
        name: error.name,
        message: error.message,
        stack: error.stack,
      } : undefined,
    });
  }

  /**
   * Log warning messages with context
   */
  warn(message: string, context?: LogContext): void {
    this.baseLogger.warn(message, context);
  }

  /**
   * Log info messages with context
   */
  info(message: string, context?: LogContext): void {
    this.baseLogger.info(message, context);
  }

  /**
   * Log debug messages with context
   */
  debug(message: string, context?: LogContext): void {
    this.baseLogger.debug(message, context);
  }

  /**
   * Log API requests
   */
  apiRequest(method: string, path: string, context?: LogContext): void {
    this.info(`API Request: ${method} ${path}`, {
      type: 'api_request',
      method,
      path,
      ...context,
    });
  }

  /**
   * Log API responses
   */
  apiResponse(method: string, path: string, statusCode: number, responseTime: number, context?: LogContext): void {
    this.info(`API Response: ${method} ${path} - ${statusCode} (${responseTime}ms)`, {
      type: 'api_response',
      method,
      path,
      statusCode,
      responseTime,
      ...context,
    });
  }

  /**
   * Log agent operations
   */
  agentOperation(operation: string, agentId: string, context?: LogContext): void {
    this.info(`Agent Operation: ${operation}`, {
      type: 'agent_operation',
      operation,
      agentId,
      ...context,
    });
  }

  /**
   * Log transaction events
   */
  transaction(event: string, transactionId: string, context?: LogContext): void {
    this.info(`Transaction: ${event}`, {
      type: 'transaction',
      event,
      transactionId,
      ...context,
    });
  }

  /**
   * Log security events
   */
  security(event: string, context?: LogContext): void {
    this.warn(`Security Event: ${event}`, {
      type: 'security',
      event,
      ...context,
    });
  }

  /**
   * Log blockchain interactions
   */
  blockchain(action: string, context?: LogContext): void {
    this.info(`Blockchain: ${action}`, {
      type: 'blockchain',
      action,
      ...context,
    });
  }
}

/**
 * Export the enhanced logger instance
 */
export const log = new ContextualLogger(logger);

/**
 * Express middleware for request logging
 */
export const requestLogger = (req: any, res: any, next: any): void => {
  const start = Date.now();
  const requestId = req.headers['x-request-id'] || `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  // Add request ID to request object for use in other middlewares
  req.requestId = requestId;
  
  log.apiRequest(req.method, req.path, {
    requestId,
    ipAddress: req.ip,
    userAgent: req.headers['user-agent'],
    userId: req.user?.id,
  });

  res.on('finish', () => {
    const responseTime = Date.now() - start;
    log.apiResponse(req.method, req.path, res.statusCode, responseTime, {
      requestId,
      ipAddress: req.ip,
      userId: req.user?.id,
    });
  });

  next();
};

export default log; 