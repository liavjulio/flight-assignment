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
    username: process.env.DB_TEST_USER ,
    password: process.env.DB_TEST_PASS ,
    database: process.env.DB_TEST_NAME ,
    host: process.env.DB_TEST_HOST ,
    dialect: "postgres"
  },
  production: {
    username: process.env.DB_PROD_USER ,
    password: process.env.DB_PROD_PASS ,
    database: process.env.DB_PROD_NAME ,
    host: process.env.DB_PROD_HOST ,
    dialect: "postgres"
  }
};