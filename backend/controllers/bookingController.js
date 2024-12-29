const { Booking } = require('../models');

// Fetch all bookings
const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.findAll();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new booking
const createBooking = async (req, res) => {
    try {
        const { flight_id, user_name, email } = req.body;
        const booking = await Booking.create({ flight_id, user_name, email });
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getBookings,
    createBooking,
};