import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  config => {
    // Add any auth tokens here if needed
    return config;
  },
  error => Promise.reject(new Error(error.message || 'Request failed'))
);

// Response interceptor
api.interceptors.response.use(
  response => response,
  error => {
    const message = error.response?.data?.message || error.message || 'An error occurred';

    // Handle specific error cases
    if (error.response?.status === 401) {
      // Handle unauthorized access
      console.error('Unauthorized access');
    } else if (error.response?.status >= 500) {
      // Handle server errors
      console.error('Server error:', message);
    }

    return Promise.reject(new Error(message));
  }
);

// Flight API functions
export const flightsApi = {
  getAll: () => api.get('/api/flights'),
  getById: id => api.get(`/api/flights/${id}`),
  search: params => api.get('/api/flights/search', { params }),
};

// Booking API functions
export const bookingsApi = {
  getAll: () => api.get('/api/bookings'),
  getById: id => api.get(`/api/bookings/${id}`),
  create: data => api.post('/api/bookings', data),
  update: (id, data) => api.put(`/api/bookings/${id}`, data),
  delete: id => api.delete(`/api/bookings/${id}`),
};

// Health check
export const healthApi = {
  check: () => api.get('/health'),
};

export default api;
