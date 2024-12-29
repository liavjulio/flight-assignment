const express = require('express');
const { getFlights, createFlight } = require('../controllers/flightController');
const router = express.Router();

router.get('/', getFlights);
router.post('/', createFlight);

module.exports = router;