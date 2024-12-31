const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
// Allow requests from the frontend origin
const allowedOrigins = ['https://flight-client-ellt.onrender.com']; // Replace with your frontend Render URL

app.use(cors({
    origin: allowedOrigins,
    credentials: true, // If you need cookies or authorization headers
}));

app.use(cors(corsOptions));
// Routes
const flightRoutes = require('./routes/flightRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

app.use('/flights', flightRoutes);
app.use('/bookings', bookingRoutes);

// Start the server only if not in test environment
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

module.exports = app;