# ✈️ Flight Booking System v2.0

<div align="center">

![Flight Booking System](https://img.shields.io/badge/Flight%20Booking-v2.0-blue?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-v18+-green?style=for-the-badge&logo=node.js)
![React](https://img.shields.io/badge/React-v18+-blue?style=for-the-badge&logo=react)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v15+-blue?style=for-the-badge&logo=postgresql)
![Docker](https://img.shields.io/badge/Docker-Enabled-blue?style=for-the-badge&logo=docker)

A modern, full-stack flight booking system built with cutting-edge technologies and best practices.

[🚀 Live Demo](https://your-demo-url.com) • [📚 Documentation](https://your-docs-url.com) • [🐛 Report Bug](https://github.com/liavjulio/flight-assignment/issues) • [💡 Request Feature](https://github.com/liavjulio/flight-assignment/issues)

</div>

## 🌟 Features

### 🎯 Core Functionality
- **Flight Search & Booking**: Comprehensive flight search with advanced filtering
- **Real-time Updates**: Live flight information and booking status
- **Responsive Design**: Seamless experience across all devices
- **Dark/Light Theme**: User preference-based theming

### 🔧 Technical Features
- **Modern UI**: Material-UI components with custom theming
- **State Management**: Zustand for efficient state handling
- **API Integration**: RESTful API with comprehensive error handling
- **Real-time Queries**: React Query for efficient data fetching
- **Form Validation**: React Hook Form with comprehensive validation
- **Error Boundaries**: Graceful error handling and recovery

### 🛡️ Security & Quality
- **Security Headers**: Helmet.js for enhanced security
- **Rate Limiting**: Protection against API abuse
- **Input Validation**: Server-side validation with Joi
- **Code Quality**: ESLint, Prettier, and Husky for code standards
- **Testing**: Comprehensive unit, integration, and E2E tests

## 🏗️ Architecture

```
flight-booking-system/
├── 📱 frontend/          # React.js application
│   ├── 🎨 src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Route components
│   │   ├── services/     # API integration
│   │   ├── store/        # State management
│   │   └── theme/        # UI theming
│   └── 🧪 cypress/       # E2E testing
├── 🖥️  backend/          # Node.js API server
│   ├── controllers/      # Request handlers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   └── tests/           # Unit tests
├── 🐳 docker/            # Docker configurations
└── 🔄 .github/          # CI/CD workflows
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 8.0.0
- **Docker** & **Docker Compose** (optional)
- **PostgreSQL** >= 15 (if running locally)

### 🎯 One-Command Setup

```bash
# Clone the repository
git clone https://github.com/liavjulio/flight-assignment.git
cd flight-assignment

# Install all dependencies
npm run install:all

# Start development servers
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:3001
- **Backend API**: http://localhost:3000
- **API Documentation**: http://localhost:3000/api-docs

### 🐳 Docker Setup

```bash
# Start with Docker Compose
npm run docker:up

# Stop services
npm run docker:down

# Clean up (remove containers, volumes, images)
npm run docker:clean
```

## 🛠️ Development

### Environment Setup

1. **Backend Environment** (`.env` in backend directory):
```env
NODE_ENV=development
PORT=3000

# Database
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=postgres
DB_NAME=flight_booking_dev

# Test Database
DB_TEST_HOST=localhost
DB_TEST_PORT=5432
DB_TEST_USER=postgres
DB_TEST_PASS=postgres
DB_TEST_NAME=flight_booking_test
```

2. **Frontend Environment** (`.env` in frontend directory):
```env
REACT_APP_API_URL=http://localhost:3000
```

### 📝 Available Scripts

#### Root Level
```bash
npm run dev              # Start both frontend and backend
npm run build           # Build both applications
npm run test            # Run all tests
npm run lint            # Lint all code
npm run format          # Format all code
```

#### Backend
```bash
cd backend
npm run dev             # Start development server
npm run test            # Run unit tests
npm run test:coverage   # Run tests with coverage
npm run lint            # Lint backend code
npm run db:migrate      # Run database migrations
npm run db:seed         # Seed database with sample data
```

#### Frontend
```bash
cd frontend
npm start               # Start development server
npm run build           # Build for production
npm run test            # Run unit tests
npm run test:coverage   # Run tests with coverage
npm run cypress:open    # Open Cypress E2E tests
npm run lint            # Lint frontend code
```

## 🧪 Testing

### Test Coverage Goals
- **Backend**: > 90% coverage
- **Frontend**: > 85% coverage
- **E2E**: Critical user journeys covered

### Running Tests
```bash
# All tests
npm run test

# Backend unit tests
npm run test:backend

# Frontend unit tests
npm run test:frontend

# E2E tests
npm run test:e2e

# Test coverage
npm run test:coverage
```

## 🚀 Deployment

### Production Build
```bash
# Build applications
npm run build

# Build Docker images
docker-compose -f docker-compose.prod.yml build

# Deploy to production
docker-compose -f docker-compose.prod.yml up -d
```

### Environment Variables (Production)
```env
NODE_ENV=production
DATABASE_URL=postgresql://user:pass@host:port/db
API_URL=https://your-api-domain.com
FRONTEND_URL=https://your-frontend-domain.com
```

## 📖 API Documentation

### Interactive API Docs
Visit `/api-docs` when the server is running for interactive Swagger documentation.

### Key Endpoints

#### Flights
- `GET /api/flights` - List all flights
- `GET /api/flights/:id` - Get flight by ID
- `GET /api/flights/search` - Search flights

#### Bookings
- `GET /api/bookings` - List all bookings
- `POST /api/bookings` - Create new booking
- `GET /api/bookings/:id` - Get booking by ID
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Cancel booking

#### System
- `GET /health` - Health check
- `GET /` - API information

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md).

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests for your changes
5. Ensure all tests pass (`npm run test`)
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

### Code Standards
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **Husky**: Pre-commit hooks
- **Conventional Commits**: Commit message format

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Material-UI](https://mui.com/) for the beautiful UI components
- [React Query](https://tanstack.com/query) for excellent data fetching
- [Zustand](https://github.com/pmndrs/zustand) for simple state management
- [Express.js](https://expressjs.com/) for the robust backend framework
- [Sequelize](https://sequelize.org/) for database management

## 📞 Support

- 📧 **Email**: support@flightbooking.com
- 💬 **Discord**: [Join our community](https://discord.gg/flightbooking)
- 📝 **Issues**: [GitHub Issues](https://github.com/liavjulio/flight-assignment/issues)
- 📚 **Documentation**: [Full Documentation](https://docs.flightbooking.com)

---

<div align="center">

**Built with ❤️ by [Liav Julio](https://github.com/liavjulio)**

⭐ **Star this repo if you find it helpful!**

</div>
