'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Flights', [
      {
        name: 'Flight 101',
        departure: 'New York',
        arrival: 'London',
        price: 500,
        date: '2024-01-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Flight 102',
        departure: 'San Francisco',
        arrival: 'Tokyo',
        price: 700,
        date: '2024-01-15',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Flight 103',
        departure: 'Los Angeles',
        arrival: 'Paris',
        price: 600,
        date: '2024-02-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Flights', null, {});
  },
};