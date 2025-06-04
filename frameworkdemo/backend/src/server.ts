/**
 * Main server entry point for Solace Protocol ACP Backend
 */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import { config } from './config/environment';
import { log, requestLogger } from './utils/logger';
import { errorHandler, notFoundHandler } from './utils/error-handler';
import agentRoutes from './routes/agent.routes';

/**
 * Create Express application
 */
const app: Application = express();

/**
 * Security middleware
 */
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
  crossOriginEmbedderPolicy: false,
}));

/**
 * CORS configuration
 */
app.use(cors({
  origin: config.security.corsOrigin,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'X-Requested-With',
    'X-Request-ID',
  ],
}));

/**
 * General middleware
 */
app.use(compression()); // Enable gzip compression
app.use(express.json({ limit: '10mb' })); // Parse JSON bodies
app.use(express.urlencoded({ extended: true, limit: '10mb' })); // Parse URL-encoded bodies

/**
 * Logging middleware
 */
if (config.env !== 'test') {
  app.use(morgan('combined', {
    stream: {
      write: (message: string) => {
        log.info(message.trim(), { type: 'http_access' });
      }
    }
  }));
}
app.use(requestLogger);

/**
 * Health check endpoint
 */
app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    environment: config.env,
    uptime: process.uptime(),
  });
});

/**
 * API status endpoint
 */
app.get('/api/status', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: {
      service: 'Solace Protocol ACP Backend',
      version: '1.0.0',
      environment: config.env,
      timestamp: new Date().toISOString(),
      features: {
        agents: true,
        transactions: true,
        blockchain: true,
        websockets: true,
      },
      networks: {
        solana: {
          devnet: config.solana.network === 'devnet',
          testnet: config.solana.network === 'testnet',
          mainnet: config.solana.network === 'mainnet-beta',
        },
      },
    },
  });
});

/**
 * API Routes
 */
app.use('/api/agents', agentRoutes);

/**
 * Root endpoint
 */
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Solace Protocol ACP Backend API',
    version: '1.0.0',
    documentation: '/api/docs',
    health: '/health',
    status: '/api/status',
  });
});

/**
 * 404 handler for unknown routes
 */
app.use('*', notFoundHandler);

/**
 * Global error handler (must be last)
 */
app.use(errorHandler);

/**
 * Graceful shutdown handler
 */
const gracefulShutdown = (signal: string) => {
  log.info(`Received ${signal}, starting graceful shutdown`);
  
  // Close server
  server.close((err) => {
    if (err) {
      log.error('Error during server shutdown', {}, err);
      process.exit(1);
    }
    
    log.info('Server closed successfully');
    process.exit(0);
  });
  
  // Force close after 30 seconds
  setTimeout(() => {
    log.error('Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 30000);
};

/**
 * Start server
 */
const server = app.listen(config.port, () => {
  log.info(`🚀 Solace Protocol ACP Backend started`, {
    port: config.port,
    environment: config.env,
    corsOrigin: config.security.corsOrigin,
    solanaNetwork: config.solana.network,
    rpcUrl: config.solana.rpcUrl,
  });

  log.info('📡 Available endpoints:', {
    health: `http://localhost:${config.port}/health`,
    status: `http://localhost:${config.port}/api/status`,
    agents: `http://localhost:${config.port}/api/agents`,
  });
});

/**
 * Handle unhandled promise rejections
 */
process.on('unhandledRejection', (reason: any, promise: Promise<any>) => {
  log.error('Unhandled Promise Rejection', { reason, promise });
  gracefulShutdown('UNHANDLED_REJECTION');
});

/**
 * Handle uncaught exceptions
 */
process.on('uncaughtException', (error: Error) => {
  log.error('Uncaught Exception', {}, error);
  gracefulShutdown('UNCAUGHT_EXCEPTION');
});

/**
 * Handle SIGTERM signal
 */
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));

/**
 * Handle SIGINT signal (Ctrl+C)
 */
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

export default app; 