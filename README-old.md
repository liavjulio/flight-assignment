# Flight Booking System

A full-stack flight booking system that allows users to search for flights, view flight details, and make bookings. This application is built using **Node.js** for the backend, **PostgreSQL** as the database, and **Docker** for containerization. The frontend is built with **React**. The app also includes automation scripts for deploying the app in different environments and a CI/CD pipeline for testing and deployment.

## Project Overview

The Flight Booking System allows users to:

- **Search for available flights**.
- **Book flights**.

The backend is built using **Node.js** and **Sequelize** (for ORM). The database is powered by **PostgreSQL**, and the entire application is containerized using **Docker**. The frontend is developed using **React** and communicates with the backend via RESTful API.

## Project Structure

- **Backend** (Node.js):
  - `/controllers`: Contains the logic for handling requests.
  - `/models`: Defines the Sequelize models for Flights and Bookings.
  - `/routes`: Contains the Express routes for API endpoints.
  - `/migrations`: Contains Sequelize migration files for creating tables.
  - `/config`: Configuration files, including environment variables and database configuration.
  - `/Dockerfile`: Containerizes the backend service.
  - `/docker-compose.yml`: Defines how the backend and database services interact in Docker.

- **Frontend** (React):
  - `/public`: Public assets like images, icons, etc.
  - `/src`: Source code for the frontend application.
    - `/components`: Reusable components for the UI.
    - `/services`: Services for making API requests.
    - `/App.js`: Main application file for routing and UI.

- **Docker**:
  - The backend and database are containerized using **Docker**.
  - **Docker Compose** is used to manage multi-container services for the backend and database.

## Technologies Used

- **Backend**: Node.js, Express, Sequelize (for ORM), PostgreSQL
- **Frontend**: React
- **Database**: PostgreSQL
- **Containerization**: Docker, Docker Compose
- **CI/CD**: GitHub Actions, Render (for deployment)
- **Testing**: Jest, Supertest, E2E

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/flight-assignment.git
cd flight-assignment
```

## 2. Backend Setup

### A. Running the Backend with Docker

- Navigate to the backend directory:
  - `cd backend`
- Create a `.env` file in the backend directory and configure the environment variables to connect to the database:
  - Example `.env`:
    ```
    DB_PROD_HOST=db
    DB_PROD_PORT=5432
    DB_PROD_USER=postgres
    DB_PROD_PASS=postgres
    DB_PROD_NAME=flight_booking_prod
    ```
- Ensure Docker and Docker Compose are installed on your system.
- Start the backend and the PostgreSQL database with Docker Compose:
  - `docker-compose up --build`

### B. Running the Backend Locally (Without Docker)

- Navigate to the backend directory:
  - `cd backend`
- Install dependencies:
  - `npm install`
- Start the backend:
  - `npm start`
- The backend will be available at `http://localhost:3000`.

### C. Running Migrations

- To apply Sequelize migrations to set up the database schema:
  - If running with Docker:
    - `docker exec -it flight-backend npx sequelize-cli db:migrate`
  - If running locally (without Docker):
    - `npx sequelize-cli db:migrate`

---

## 3. Database Setup

- To set up the database, the `docker-compose.yml` file will spin up a PostgreSQL container. It should automatically create the necessary environment. However, if you want to manually check and set things up:
  - `docker exec -it flight-db psql -U postgres`
- Check the tables:
  - `\dt`
- Insert sample data into the tables:
  INSERT INTO “Flights” (name, departure, arrival, price, date, createdAt, updatedAt) VALUES
  (‘Flight 1’, ‘New York’, ‘Los Angeles’, 200.00, ‘2024-01-15’, now(), now()),
  (‘Flight 2’, ‘Los Angeles’, ‘Chicago’, 150.00, ‘2024-01-16’, now(), now());

---

## 4. Running Tests

### A. Backend Tests

- Navigate to the backend directory:
- `cd backend`
- Run the following command to execute backend tests:
- `npm test`

### B. Frontend Tests

- Navigate to the frontend directory:
- `cd frontend`
- Run the following command to execute frontend tests:
- `npm run test`

---

## 5. CI/CD Pipeline

### A. GitHub Actions

- This project uses GitHub Actions for CI/CD. The pipeline is set up to automatically test, build, and deploy the application when changes are pushed to the repository.
- The `.github/workflows/ci.yml` file defines the CI/CD pipeline for:
- Testing the application.
- Building the application.
- Deploying the application.

### B. On Every Push to the Repository

- The pipeline will:
- Build the application.
- Run tests.
- Deploy the application to Render or your preferred hosting platform.

---

## 6. Deployment

- Deployment is managed using **Render** (or another hosting platform).
- The pipeline automatically deploys the backend and frontend after a successful test run.
