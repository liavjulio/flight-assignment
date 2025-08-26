# Contributing to Flight Booking System

First off, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to the Flight Booking System. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Process](#development-process)
- [Coding Standards](#coding-standards)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps which reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps**
- **Explain which behavior you expected to see instead and why**
- **Include screenshots or animated GIFs if applicable**

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and explain which behavior you expected to see instead**
- **Explain why this enhancement would be useful**

### 🔧 Your First Code Contribution

Unsure where to begin contributing? You can start by looking through these beginner-friendly issues:

- `good-first-issue` - issues which should only require a few lines of code
- `help-wanted` - issues which should be a bit more involved than beginner issues

## Development Process

### 1. Fork & Clone

```bash
# Fork the repo on GitHub, then:
git clone https://github.com/yourusername/flight-assignment.git
cd flight-assignment
```

### 2. Set Up Development Environment

```bash
# Install dependencies
npm run install:all

# Set up environment variables
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Start development servers
npm run dev
```

### 3. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 4. Make Your Changes

- Write clear, readable code
- Add tests for new functionality
- Update documentation as needed
- Follow the existing code style

### 5. Test Your Changes

```bash
# Run all tests
npm run test

# Run linting
npm run lint

# Run formatting
npm run format
```

### 6. Commit Your Changes

```bash
git add .
git commit -m "feat: add amazing new feature"
```

### 7. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## Coding Standards

### General Guidelines

- **Code Quality**: Write clean, readable, and maintainable code
- **Documentation**: Document your code, especially complex logic
- **Testing**: Write tests for new features and bug fixes
- **Performance**: Consider performance implications of your changes

### Frontend (React)

- Use functional components with hooks
- Follow Material-UI design patterns
- Use TypeScript where beneficial
- Write accessible components (ARIA labels, semantic HTML)
- Use React Query for data fetching
- Follow the established folder structure

### Backend (Node.js)

- Use Express.js best practices
- Implement proper error handling
- Use middleware for cross-cutting concerns
- Follow RESTful API design principles
- Write comprehensive API documentation
- Use Sequelize ORM patterns

### Database

- Write proper migrations
- Include rollback migrations
- Add appropriate indexes
- Use foreign key constraints
- Write efficient queries

## Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

### Examples

```
feat(auth): add user authentication system
fix(booking): resolve booking confirmation email issue
docs: update API documentation for flights endpoint
style: format code according to prettier rules
```

## Pull Request Process

### Before Submitting

1. **Update Documentation**: Include any necessary documentation updates
2. **Add Tests**: Ensure your changes are covered by tests
3. **Run Tests**: All tests must pass
4. **Code Review**: Self-review your code for any obvious issues
5. **Rebase**: Rebase your branch on the latest main branch

### Pull Request Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] E2E tests pass
- [ ] Manual testing completed

## Checklist

- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tests added/updated
```

### Review Process

1. **Automated Checks**: All CI/CD checks must pass
2. **Code Review**: At least one maintainer review required
3. **Testing**: Changes must be tested in a staging environment
4. **Approval**: Maintainer approval required before merging

## Development Environment

### Required Tools

- Node.js >= 18.0.0
- npm >= 8.0.0
- Git
- Docker (optional but recommended)
- PostgreSQL (if not using Docker)

### Recommended Tools

- VS Code with recommended extensions
- Postman or similar API testing tool
- Database management tool (pgAdmin, DBeaver, etc.)

### VS Code Extensions

- ESLint
- Prettier
- ES7+ React/Redux/React-Native snippets
- Auto Rename Tag
- Bracket Pair Colorizer
- GitLens

## Getting Help

- **Documentation**: Check the README and docs folder
- **Issues**: Search existing GitHub issues
- **Discussions**: Use GitHub Discussions for questions
- **Discord**: Join our community Discord server

## Recognition

Contributors are recognized in our README.md file and release notes. We appreciate all contributions, no matter how small!

## License

By contributing to Flight Booking System, you agree that your contributions will be licensed under the MIT License.
