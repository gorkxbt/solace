# Solace Protocol ACP Backend

A robust, modular backend implementation for the Autonomous Commerce Protocol (ACP) system built with Node.js, Express, and TypeScript.

## 🏗️ Architecture

This backend follows clean architecture principles with strict separation of concerns:

```
src/
├── config/           # Environment configuration and validation
├── models/           # TypeScript interfaces and data models
├── services/         # Business logic layer
├── routes/           # API route handlers
├── utils/            # Shared utilities (logging, error handling)
├── middleware/       # Custom Express middleware
└── server.ts         # Application entry point
```

## 🚀 Features

- **Agent Management**: Complete CRUD operations for ACP agents
- **Blockchain Integration**: Solana network support for agent deployment
- **Real-time Monitoring**: WebSocket support for live agent status
- **Robust Error Handling**: Custom error classes with structured logging
- **Input Validation**: Joi-based request validation
- **Security**: Helmet, CORS, rate limiting, JWT authentication
- **Logging**: Structured logging with Winston
- **Type Safety**: Full TypeScript implementation

## 📦 Installation

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit environment variables
nano .env

# Build TypeScript
npm run build

# Start development server
npm run dev
```

## 🔧 Environment Variables

```bash
# Environment
NODE_ENV=development
PORT=3002

# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/solace_acp

# Security
JWT_SECRET=your-super-secret-jwt-key-must-be-at-least-32-chars-long
ENCRYPTION_KEY=your-32-character-encryption-key
CORS_ORIGIN=http://localhost:3001

# Solana
SOLANA_RPC_URL=https://api.devnet.solana.com
SOLANA_NETWORK=devnet

# Redis
REDIS_URL=redis://localhost:6379

# Logging
LOG_LEVEL=info
```

## 🌐 API Endpoints

### Health & Status
```
GET  /health              # Health check
GET  /api/status          # Service status
```

### Agents
```
POST   /api/agents           # Create new agent
GET    /api/agents           # List all agents (with filters)
GET    /api/agents/my        # Get authenticated user's agents
GET    /api/agents/:id       # Get specific agent
PUT    /api/agents/:id       # Update agent
DELETE /api/agents/:id       # Delete agent

POST   /api/agents/:id/deploy   # Deploy agent to blockchain
POST   /api/agents/:id/pause    # Pause agent
POST   /api/agents/:id/resume   # Resume agent
GET    /api/agents/:id/statistics # Get agent statistics
```

## 📝 Agent Model

```typescript
interface Agent {
  id: string;
  name: string;
  description: string;
  type: AgentType;
  status: AgentStatus;
  ownerId: string;
  ownerWallet: string;
  network: SolanaNetwork;
  capabilities: AgentCapability[];
  configuration: AgentConfiguration;
  reputation: AgentReputation;
  statistics: AgentStatistics;
  version: string;
  tags: string[];
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

## 🔐 Authentication

Currently uses mock authentication for development. In production:

```typescript
// JWT Token required in Authorization header
Authorization: Bearer <jwt_token>

// Token should contain:
{
  "id": "user_123",
  "wallet": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
}
```

## 📊 API Usage Examples

### Create Agent
```bash
curl -X POST http://localhost:3002/api/agents \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "name": "trading-bot-alpha",
    "description": "Automated trading agent with risk management",
    "type": "trading",
    "network": "devnet",
    "capabilities": [{
      "name": "market_analysis",
      "description": "Real-time market analysis",
      "version": "1.0.0"
    }],
    "configuration": {
      "maxTransactionAmount": 1000,
      "dailyTransactionLimit": 5000,
      "allowedTokens": ["SOL", "USDC"],
      "riskThreshold": 75,
      "notifications": {
        "email": "user@example.com"
      }
    },
    "tags": ["trading", "automated"],
    "isPublic": true
  }'
```

### List Agents with Filters
```bash
curl "http://localhost:3002/api/agents?type=trading&status=active&network=devnet&sortBy=reputation&sortOrder=desc&limit=10"
```

### Deploy Agent
```bash
curl -X POST http://localhost:3002/api/agents/agent_123/deploy \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "network": "devnet",
    "wallet": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    "initialFunding": 0.1,
    "computeUnits": 200000
  }'
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate test coverage
npm run test:coverage
```

## 📋 Code Quality

```bash
# Linting
npm run lint
npm run lint:fix

# Type checking
npx tsc --noEmit
```

## 🏗️ Production Deployment

```bash
# Build for production
npm run build

# Start production server
npm start

# Using PM2
pm2 start dist/server.js --name "solace-acp-backend"
```

## 🔍 Monitoring & Logging

The backend includes comprehensive logging with structured output:

```json
{
  "timestamp": "2024-01-01T12:00:00.000Z",
  "level": "info",
  "message": "Agent Operation: create_agent_success",
  "type": "agent_operation",
  "operation": "create_agent_success",
  "agentId": "agent_1704110400000_abc123",
  "ownerId": "user_123",
  "service": "solace-acp-backend",
  "environment": "development"
}
```

## 🛡️ Security Features

- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: API rate limiting
- **Input Validation**: Joi schema validation
- **Error Sanitization**: Safe error responses
- **Structured Logging**: Security event logging

## 🎯 Key Design Patterns

1. **Service Layer Pattern**: Business logic separated in services
2. **Repository Pattern**: Data access abstraction
3. **Factory Pattern**: Error creation utilities
4. **Middleware Pattern**: Request/response processing
5. **Singleton Pattern**: Service instances
6. **Observer Pattern**: Event-driven architecture

## 🤝 Contributing

1. Follow TypeScript strict mode
2. Use ESLint configuration
3. Write comprehensive tests
4. Document public APIs
5. Follow conventional commits

## 📄 License

MIT License - see LICENSE file for details

---

**Built for the Solace Protocol Autonomous Commerce Protocol (ACP) system** 🚀 