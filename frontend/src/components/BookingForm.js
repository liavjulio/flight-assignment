import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Alert,
  CircularProgress,
  Grid,
} from '@mui/material';
import {
  Flight as FlightIcon,
  Person as PersonIcon,
  Email as EmailIcon,
} from '@mui/icons-material';
import { flightsApi, bookingsApi } from '../services/api.js';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    flight_id: '',
    user_name: '',
    email: '',
  });

  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [flightsLoading, setFlightsLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Fetch available flights
  useEffect(() => {
    const fetchFlights = async () => {
      try {
        setFlightsLoading(true);
        const { data } = await flightsApi.getAll();
        setFlights(data);
      } catch (error) {
        console.error('Error fetching flights:', error);
        setError('Failed to load flights. Please try again.');
      } finally {
        setFlightsLoading(false);
      }
    };

    fetchFlights();
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(''); // Clear error when user starts typing
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await bookingsApi.create(formData);
      setSuccess(true);
      setFormData({ flight_id: '', user_name: '', email: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error('Error creating booking:', error);
      setError('Booking failed. Please check your information and try again.');
    } finally {
      setLoading(false);
    }
  };

  if (flightsLoading) {
    return (
      <Card>
        <CardContent sx={{ textAlign: 'center', py: 4 }}>
          <CircularProgress />
          <Typography variant="body1" sx={{ mt: 2 }}>
            Loading available flights...
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card 
      elevation={3} 
      sx={{ 
        maxWidth: { xs: '100%', sm: 600, md: 800 }, 
        mx: 'auto',
        mb: 4 
      }}
    >
      <CardContent sx={{ p: { xs: 2, md: 4 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <FlightIcon color="primary" sx={{ mr: 1, fontSize: 28 }} />
          <Typography variant="h5" component="h2" fontWeight="bold">
            Book Your Flight
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mb: 3 }}>
            Booking successful! Check your email for confirmation details.
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel id="flight-select-label">Select Flight</InputLabel>
                <Select
                  labelId="flight-select-label"
                  name="flight_id"
                  value={formData.flight_id}
                  label="Select Flight"
                  onChange={handleChange}
                  disabled={loading}
                >
                  <MenuItem value="">
                    <em>Choose a flight...</em>
                  </MenuItem>
                  {flights.map(flight => (
                    <MenuItem key={flight.id} value={flight.id}>
                      <Box sx={{ width: '100%' }}>
                        <Typography variant="body1" fontWeight="medium">
                          {flight.name} - ${flight.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {flight.departure} → {flight.arrival}
                        </Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                name="user_name"
                label="Full Name"
                value={formData.user_name}
                onChange={handleChange}
                disabled={loading}
                InputProps={{
                  startAdornment: <PersonIcon color="action" sx={{ mr: 1 }} />,
                }}
                placeholder="Enter your full name"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                type="email"
                name="email"
                label="Email Address"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                InputProps={{
                  startAdornment: <EmailIcon color="action" sx={{ mr: 1 }} />,
                }}
                placeholder="Enter your email"
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                disabled={loading || !formData.flight_id || !formData.user_name || !formData.email}
                sx={{
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  textTransform: 'none',
                }}
              >
                {loading ? (
                  <>
                    <CircularProgress size={20} sx={{ mr: 1 }} />
                    Processing Booking...
                  </>
                ) : (
                  'Book Flight'
                )}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
