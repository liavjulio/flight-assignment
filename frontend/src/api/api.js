import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3000', // Backend server URL
});


export const createFlight = (flight) => API.post('/flights', flight);
export const getFlights = (page = 1, limit = 5) =>
    API.get(`/flights?page=${page}&limit=${limit}`);
export const getBookings = (page = 1, limit = 5) =>
    API.get(`/bookings?page=${page}&limit=${limit}`);
export const createBooking = (booking) => API.post('/bookings', booking);
