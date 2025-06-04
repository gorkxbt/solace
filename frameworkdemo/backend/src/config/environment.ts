import dotenv from 'dotenv';
import Joi from 'joi';

// Load environment variables
dotenv.config();

/**
 * Environment configuration schema for validation
 */
const envSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
  PORT: Joi.number().port().default(3002),
  
  // Database Configuration
  DATABASE_URL: Joi.string().required(),
  
  // JWT Configuration
  JWT_SECRET: Joi.string().min(32).required(),
  JWT_EXPIRES_IN: Joi.string().default('24h'),
  
  // Redis Configuration
  REDIS_URL: Joi.string().default('redis://localhost:6379'),
  
  // Solana Configuration
  SOLANA_RPC_URL: Joi.string().uri().default('https://api.devnet.solana.com'),
  SOLANA_NETWORK: Joi.string().valid('devnet', 'testnet', 'mainnet-beta').default('devnet'),
  
  // API Configuration
  API_RATE_LIMIT: Joi.number().positive().default(100),
  API_RATE_WINDOW_MS: Joi.number().positive().default(900000), // 15 minutes
  
  // WebSocket Configuration
  WS_PORT: Joi.number().port().default(3003),
  
  // Logging Configuration
  LOG_LEVEL: Joi.string().valid('error', 'warn', 'info', 'debug').default('info'),
  
  // Security Configuration
  CORS_ORIGIN: Joi.string().default('http://localhost:3001'),
  ENCRYPTION_KEY: Joi.string().length(32).required(),
}).unknown();

const { error, value: envVars } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Environment validation error: ${error.message}`);
}

/**
 * Validated and typed environment configuration
 */
export const config = {
  env: envVars.NODE_ENV as 'development' | 'production' | 'test',
  port: envVars.PORT as number,
  
  database: {
    url: envVars.DATABASE_URL as string,
  },
  
  jwt: {
    secret: envVars.JWT_SECRET as string,
    expiresIn: envVars.JWT_EXPIRES_IN as string,
  },
  
  redis: {
    url: envVars.REDIS_URL as string,
  },
  
  solana: {
    rpcUrl: envVars.SOLANA_RPC_URL as string,
    network: envVars.SOLANA_NETWORK as 'devnet' | 'testnet' | 'mainnet-beta',
  },
  
  api: {
    rateLimit: envVars.API_RATE_LIMIT as number,
    rateLimitWindow: envVars.API_RATE_WINDOW_MS as number,
  },
  
  websocket: {
    port: envVars.WS_PORT as number,
  },
  
  logging: {
    level: envVars.LOG_LEVEL as 'error' | 'warn' | 'info' | 'debug',
  },
  
  security: {
    corsOrigin: envVars.CORS_ORIGIN as string,
    encryptionKey: envVars.ENCRYPTION_KEY as string,
  },
} as const;

/**
 * Helper function to check if running in production
 */
export const isProduction = (): boolean => config.env === 'production';

/**
 * Helper function to check if running in development
 */
export const isDevelopment = (): boolean => config.env === 'development';

/**
 * Helper function to check if running in test environment
 */
export const isTest = (): boolean => config.env === 'test'; 