const { Flight } = require('../models');
const { Op } = require('sequelize');

// Fetch all flights
const getFlights = async (req, res) => {
  try {
    console.log('Querying Flights...');
    const flights = await Flight.findAll();
    console.log('Flights fetched:', JSON.stringify(flights, null, 2)); // Log the result
    res.json(flights);
  } catch (error) {
    console.error('Error fetching flights:', error); // Log any error
    res.status(500).json({ error: error.message });
  }
};

// Search flights with filters
const searchFlights = async (req, res) => {
  try {
    const { departure, arrival, date, passengers } = req.query;
    console.log('Search parameters:', { departure, arrival, date, passengers });
    
    let whereClause = {};
    
    // Filter by departure city (case-insensitive partial match)
    if (departure) {
      whereClause.departure = {
        [Op.iLike]: `%${departure}%`
      };
    }
    
    // Filter by arrival city (case-insensitive partial match)  
    if (arrival) {
      whereClause.arrival = {
        [Op.iLike]: `%${arrival}%`
      };
    }
    
    // Filter by date (if provided)
    if (date) {
      const searchDate = new Date(date);
      const nextDay = new Date(searchDate);
      nextDay.setDate(nextDay.getDate() + 1);
      
      whereClause.date = {
        [Op.gte]: searchDate,
        [Op.lt]: nextDay
      };
    }
    
    const flights = await Flight.findAll({
      where: whereClause,
      order: [['price', 'ASC']] // Order by price ascending by default
    });
    
    console.log('Search results:', flights.length, 'flights found');
    res.json(flights);
  } catch (error) {
    console.error('Error searching flights:', error);
    res.status(500).json({ error: error.message });
  }
};

// Create a new flight
const createFlight = async (req, res) => {
  try {
    const { name, departure, arrival, price, date } = req.body;
    const flight = await Flight.create({ name, departure, arrival, price, date });
    res.status(201).json(flight);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getFlights,
  searchFlights,
  createFlight,
};
