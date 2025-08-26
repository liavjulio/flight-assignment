require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'postgres',
    database: process.env.DB_NAME || 'flight_booking_dev',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_TEST_USER || 'postgres',
    password: process.env.DB_TEST_PASS || 'postgres',
    database: process.env.DB_TEST_NAME || 'flight_booking_test',
    host: process.env.DB_TEST_HOST || 'localhost',
    port: process.env.DB_TEST_PORT || 5432,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_PROD_USER || 'postgres',
    password: process.env.DB_PROD_PASS || 'postgres',
    database: process.env.DB_PROD_NAME || 'flight_booking_prod',
    host: process.env.DB_PROD_HOST || '0.tcp.eu.ngrok.io',
    port: process.env.DB_PROD_PORT || 19332,
    dialect: 'postgres',
  },
};
