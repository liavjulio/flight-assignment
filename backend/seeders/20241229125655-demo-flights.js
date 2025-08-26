'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Check if flights already exist to prevent duplicates
    const existingFlights = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM "Flights"',
      { type: Sequelize.QueryTypes.SELECT }
    );
    
    if (existingFlights[0].count > 0) {
      console.log('Flights already exist, skipping seeding...');
      return Promise.resolve();
    }

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
      {
        name: 'Flight 104',
        departure: 'Chicago',
        arrival: 'Rome',
        price: 550,
        date: '2024-02-15',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Flight 105',
        departure: 'Miami',
        arrival: 'Madrid',
        price: 480,
        date: '2024-03-01',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Flight 106',
        departure: 'Boston',
        arrival: 'Berlin',
        price: 520,
        date: '2024-03-15',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Flights', null, {});
  },
};
