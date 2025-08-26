import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Alert,
  CircularProgress,
  Box,
  Chip,
  Button,
  Divider,
} from '@mui/material';
import {
  Flight as FlightIcon,
  Schedule as ScheduleIcon,
  AttachMoney as MoneyIcon,
} from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { flightsApi } from '../services/api';

const FlightList = ({ searchParams, compareMode = false }) => {
  const [sortBy, setSortBy] = useState('price'); // For compare mode sorting
  
  const {
    data: flights = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['flights', searchParams, compareMode],
    queryFn: async () => {
      if (searchParams && (searchParams.departure || searchParams.arrival)) {
        // Use search API if search parameters are provided
        const response = await flightsApi.search(searchParams);
        return response.data;
      } else {
        // Otherwise get all flights
        const response = await flightsApi.getAll();
        return response.data;
      }
    },
    onError: err => {
      toast.error(`Error fetching flights: ${err.message}`);
    },
  });

  // Sort flights based on compare mode
  const sortedFlights = React.useMemo(() => {
    if (!compareMode) return flights;
    
    return [...flights].sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [flights, compareMode, sortBy]);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert
        severity="error"
        action={
          <Button color="inherit" size="small" onClick={() => refetch()}>
            Retry
          </Button>
        }
      >
        Error loading flights: {error.message}
      </Alert>
    );
  }

  if (flights.length === 0) {
    return (
      <Card>
        <CardContent sx={{ textAlign: 'center', py: 4 }}>
          <FlightIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h6" color="text.secondary">
            No flights available
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Check back later for new flight options
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Box>
      {compareMode && (
        <Box sx={{ mb: 3, p: 2, backgroundColor: 'primary.light', borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom color="primary.contrastText">
            💰 Price Comparison Mode
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            <Typography variant="body2" color="primary.contrastText">
              Sort by:
            </Typography>
            <Button
              variant={sortBy === 'price' ? 'contained' : 'outlined'}
              size="small"
              onClick={() => setSortBy('price')}
              sx={{ 
                minWidth: 'auto',
                color: sortBy === 'price' ? 'primary.main' : 'primary.contrastText',
                borderColor: 'primary.contrastText',
                backgroundColor: sortBy === 'price' ? 'white' : 'transparent'
              }}
            >
              Price (Low to High)
            </Button>
            <Button
              variant={sortBy === 'name' ? 'contained' : 'outlined'}
              size="small"
              onClick={() => setSortBy('name')}
              sx={{ 
                minWidth: 'auto',
                color: sortBy === 'name' ? 'primary.main' : 'primary.contrastText',
                borderColor: 'primary.contrastText',
                backgroundColor: sortBy === 'name' ? 'white' : 'transparent'
              }}
            >
              Airline
            </Button>
          </Box>
        </Box>
      )}
      
      <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
        {compareMode ? 'Compare Flight Prices' : 'Available Flights'} ({sortedFlights.length})
      </Typography>

      <Grid container spacing={3}>
        {sortedFlights.map((flight, index) => (
          <Grid item xs={12} md={compareMode ? 12 : 6} lg={compareMode ? 6 : 4} key={flight.id}>
            <Card
              elevation={compareMode ? 3 : 2}
              sx={{
                height: '100%',
                transition: 'all 0.2s ease-in-out',
                border: compareMode && index === 0 ? '2px solid gold' : 'none',
                position: 'relative',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 4,
                },
              }}
            >
              {compareMode && index === 0 && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: -10,
                    right: 10,
                    backgroundColor: 'gold',
                    color: 'black',
                    padding: '4px 8px',
                    borderRadius: 1,
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    zIndex: 1,
                  }}
                >
                  BEST PRICE
                </Box>
              )}
              <CardContent sx={{ p: 3 }}>
                {/* Flight Header */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    mb: 2,
                  }}
                >
                  <Typography variant="h6" component="h3" fontWeight="bold">
                    {flight.name}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Chip 
                      label={`$${flight.price}`} 
                      color={compareMode && index === 0 ? 'success' : 'primary'} 
                      icon={<MoneyIcon />} 
                      sx={{ mb: compareMode ? 1 : 0 }}
                    />
                    {compareMode && index > 0 && (
                      <Typography variant="caption" color="text.secondary">
                        +${flight.price - sortedFlights[0].price} vs best
                      </Typography>
                    )}
                  </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Route Information */}
                <Box sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mb: 1,
                    }}
                  >
                    <Typography variant="body1" fontWeight="medium">
                      {flight.departure}
                    </Typography>
                    <FlightIcon color="primary" sx={{ transform: 'rotate(90deg)' }} />
                    <Typography variant="body1" fontWeight="medium">
                      {flight.arrival}
                    </Typography>
                  </Box>
                </Box>

                {/* Flight Details */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 2,
                  }}
                >
                  <ScheduleIcon fontSize="small" color="action" />
                  <Typography variant="body2" color="text.secondary">
                    {flight.date ? format(new Date(flight.date), 'MMM dd, yyyy') : 'Date TBD'}
                  </Typography>
                </Box>

                {/* Action Button */}
                <Button
                  variant="contained"
                  fullWidth
                  color={compareMode && index === 0 ? 'success' : 'primary'}
                  sx={{ mt: 2 }}
                  onClick={() => {
                    toast.success(`Selected flight: ${flight.name} - $${flight.price}`);
                  }}
                >
                  {compareMode && index === 0 ? 'Select Best Price' : 'Select Flight'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FlightList;
