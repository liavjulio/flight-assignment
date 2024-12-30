require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_DEV_USER || "postgres",
    password: process.env.DB_DEV_PASS || "postgres",
    database: process.env.DB_DEV_NAME || "flight_booking_dev",
    host: process.env.DB_DEV_HOST || "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: process.env.DB_TEST_USER || "test_user",
    password: process.env.DB_TEST_PASS || "test_password",
    database: process.env.DB_TEST_NAME || "flight_booking_test",
    host: process.env.DB_TEST_HOST || "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: process.env.DB_PROD_USER || "prod_user",
    password: process.env.DB_PROD_PASS || "prod_password",
    database: process.env.DB_PROD_NAME || "flight_booking_prod",
    host: process.env.DB_PROD_HOST || "prod-db-host",
    dialect: "postgres"
  }
};