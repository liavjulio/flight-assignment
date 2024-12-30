
const flightRoutes = require('./routes/flightRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const express = require('express');
const cors = require('cors'); // Import cors

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS
app.use(express.json());

// Your routes
app.use('/flights', flightRoutes);
app.use('/bookings', bookingRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;