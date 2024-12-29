const express = require('express');
const flightRoutes = require('./routes/flightRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
const port = 3000;

app.use(express.json());

// Routes
app.use('/flights', flightRoutes);
app.use('/bookings', bookingRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});