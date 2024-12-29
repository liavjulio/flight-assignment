const { Flight } = require('../models');

// Fetch all flights
const getFlights = async (req, res) => {
    try {
        const flights = await Flight.findAll();
        res.json(flights);
    } catch (error) {
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