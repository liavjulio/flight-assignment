'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Remove duplicate flights, keeping only the newest ones
    await queryInterface.sequelize.query(`
      DELETE FROM "Flights" 
      WHERE id IN (17, 18, 19);
    `);
  },

  async down(queryInterface, Sequelize) {
    // This migration is not easily reversible since we're deleting data
    // We could restore the data if needed, but for simplicity, we'll leave it empty
    console.log('This migration removes duplicate data and is not easily reversible');
  },
};
