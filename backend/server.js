const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
// Allow requests from the frontend origin
const corsOptions = {
    origin: ['http://localhost:3001', 'https://flight-client-ellt.onrender.com'], // Replace with your frontend's URLs
    credentials: false,
};

app.use(cors(corsOptions));
// Routes
const flightRoutes = require('./routes/flightRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

app.use('/flights', flightRoutes);
app.use('/bookings', bookingRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to the Flight Booking API');
});
console.log('Environment:', process.env.NODE_ENV);
console.log('Database Config:', {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
});
// Start the server only if not in test environment
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

module.exports = app;