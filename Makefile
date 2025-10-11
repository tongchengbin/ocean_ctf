.PHONY: help lint lint-flake8 format format-black format-isort install-dev install-uv install-dev-uv clean test docker-dev docker-build docker-shell docker-test setup-dev setup-test

# Default target
help:
	@echo "Available commands:"
	@echo "  make help         - Show this help message"
	@echo "  make lint         - Run all linters (flake8)"
	@echo "  make lint-flake8  - Run flake8 linter"
	@echo "  make format       - Run all formatters (black, isort)"
	@echo "  make format-black - Run black formatter"
	@echo "  make format-isort - Run isort formatter"
	@echo "  make install-dev   - Install development dependencies with pip"
	@echo "  make install-uv    - Install uv package manager"
	@echo "  make install-dev-uv - Install development dependencies with uv (faster)"
	@echo "  make clean         - Remove Python cache files"
	@echo "  make test          - Run tests"
	@echo "  make docker-dev    - Start development environment with Docker"
	@echo "  make docker-build  - Build Docker images"
	@echo "  make docker-shell  - Open shell in app container"
	@echo "  make docker-test   - Run tests in Docker environment"
	@echo "  make setup-dev     - Setup development environment (.env.dev)"
	@echo "  make setup-test    - Setup test environment (.env.test)"

# Install development dependencies
install-dev:
	pip install -e ".[dev,test]"

# Install uv package manager
install-uv:
	pip install uv
	@echo "uv installed successfully"

# Install development dependencies with uv
install-dev-uv:
	uv pip install -e ".[dev,test]"
	@echo "Dependencies installed with uv successfully"

# Linting
lint: lint-flake8

lint-flake8:
	@echo "Running flake8..."
	flake8 app main.py tests


# Formatting
format: format-black format-isort

format-black:
	@echo "Running black..."
	black app main.py tests

format-isort:
	@echo "Running isort..."
	isort app main.py tests

# Clean up
clean:
	@echo "Cleaning Python cache files..."
	find . -type d -name "__pycache__" -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete
	find . -type f -name "*.pyo" -delete
	find . -type f -name "*.pyd" -delete
	find . -type f -name ".coverage" -delete
	find . -type d -name "*.egg-info" -exec rm -rf {} +
	find . -type d -name "*.egg" -exec rm -rf {} +
	find . -type d -name ".pytest_cache" -exec rm -rf {} +
	find . -type d -name ".coverage" -exec rm -rf {} +
	find . -type d -name "htmlcov" -exec rm -rf {} +
	find . -type d -name ".tox" -exec rm -rf {} +
	find . -type d -name "dist" -exec rm -rf {} +
	find . -type d -name "build" -exec rm -rf {} +

# Testing
test:
	@echo "Running tests..."
	pytest tests/

# Docker development commands
docker-dev:
	@echo "Starting development environment..."
	docker-compose -f docker-compose.dev.yml up

docker-build:
	@echo "Building Docker images..."
	docker-compose -f docker-compose.dev.yml build

docker-shell:
	@echo "Opening shell in app container..."
	docker-compose -f docker-compose.dev.yml run --rm app bash

docker-test:
	@echo "Running tests in Docker..."
	docker-compose -f docker-compose.test.yml up --build --exit-code-from app

# Environment setup commands
setup-dev:
	@echo "Setting up development environment..."
	@if [ ! -f .env.dev ]; then \
		echo "Creating .env.dev from example..."; \
		cp .env.dev.example .env.dev; \
	else \
		echo ".env.dev already exists, skipping..."; \
	fi
	@echo "Run 'make docker-dev' to start the development environment"

setup-test:
	@echo "Setting up test environment..."
	@if [ ! -f .env.test ]; then \
		echo "Creating .env.test from example..."; \
		cp .env.test.example .env.test; \
	else \
		echo ".env.test already exists, skipping..."; \
	fi
	@echo "Run 'make docker-test' to run tests"
