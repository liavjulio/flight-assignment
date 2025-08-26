const express = require('express');
const { getFlights, searchFlights, createFlight } = require('../controllers/flightController');

const router = express.Router();

router.get('/', getFlights);
router.get('/search', searchFlights);
router.post('/', createFlight);

module.exports = router;
