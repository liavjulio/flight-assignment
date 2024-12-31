const { Flight } = require('../models');

// Fetch all flights
const getFlights = async (req, res) => {
    try {
        console.log('Querying Flights...');
        const flights = await Flight.findAll();
        console.log('Flights fetched:', JSON.stringify(flights, null, 2));  // Log the result
        res.json(flights);
    } catch (error) {
        console.error('Error fetching flights:', error);  // Log any error
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
    createFlight,
};