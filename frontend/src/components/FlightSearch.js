import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Chip,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Search as SearchIcon, SwapHoriz as SwapIcon } from '@mui/icons-material';

const FlightSearch = ({ onSearch, compareMode = false }) => {
  const [searchParams, setSearchParams] = useState({
    departure: '',
    arrival: '',
    date: null,
    passengers: 1,
    tripType: 'oneWay',
  });

  const popularDestinations = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Miami',
    'San Francisco',
    'Boston',
  ];

  const handleInputChange = field => event => {
    setSearchParams(prev => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleDateChange = date => {
    setSearchParams(prev => ({
      ...prev,
      date,
    }));
  };

  const handleSwapLocations = () => {
    setSearchParams(prev => ({
      ...prev,
      departure: prev.arrival,
      arrival: prev.departure,
    }));
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchParams);
    }
  };

  const handleQuickSelect = (destination, field) => {
    setSearchParams(prev => ({
      ...prev,
      [field]: destination,
    }));
  };

  return (
    <Card elevation={3}>
      <CardContent sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {/* Trip Type */}
          <Grid item xs={12}>
            <FormControl size="small">
              <InputLabel>Trip Type</InputLabel>
              <Select
                value={searchParams.tripType}
                onChange={handleInputChange('tripType')}
                label="Trip Type"
              >
                <MenuItem value="oneWay">One Way</MenuItem>
                <MenuItem value="roundTrip">Round Trip</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Departure */}
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="From"
              value={searchParams.departure}
              onChange={handleInputChange('departure')}
              placeholder="Enter departure city"
            />
            <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {popularDestinations.slice(0, 3).map(city => (
                <Chip
                  key={city}
                  label={city}
                  size="small"
                  variant="outlined"
                  onClick={() => handleQuickSelect(city, 'departure')}
                  sx={{ cursor: 'pointer' }}
                />
              ))}
            </Box>
          </Grid>

          {/* Swap Button */}
          <Grid
            item
            xs={12}
            md={1}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              variant="outlined"
              onClick={handleSwapLocations}
              sx={{ minWidth: 'auto', p: 1 }}
            >
              <SwapIcon />
            </Button>
          </Grid>

          {/* Arrival */}
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="To"
              value={searchParams.arrival}
              onChange={handleInputChange('arrival')}
              placeholder="Enter destination city"
            />
            <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {popularDestinations.slice(3, 6).map(city => (
                <Chip
                  key={city}
                  label={city}
                  size="small"
                  variant="outlined"
                  onClick={() => handleQuickSelect(city, 'arrival')}
                  sx={{ cursor: 'pointer' }}
                />
              ))}
            </Box>
          </Grid>

          {/* Date */}
          <Grid item xs={12} md={3}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Departure Date"
                value={searchParams.date}
                onChange={handleDateChange}
                slotProps={{ textField: { fullWidth: true } }}
                minDate={new Date()}
              />
            </LocalizationProvider>
          </Grid>

          {/* Passengers */}
          <Grid item xs={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Passengers</InputLabel>
              <Select
                value={searchParams.passengers}
                onChange={handleInputChange('passengers')}
                label="Passengers"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <MenuItem key={num} value={num}>
                    {num} {num === 1 ? 'Passenger' : 'Passengers'}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Search Button */}
          <Grid item xs={6} md={3}>
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={handleSearch}
              startIcon={<SearchIcon />}
              disabled={!searchParams.departure || !searchParams.arrival}
            >
              Search Flights
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FlightSearch;
