import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import BookingList from '../components/BookingList';
import BookingForm from '../components/BookingForm';
import PageLayout from '../components/PageLayout';

const BookingsPage = () => (
  <PageLayout>
    <Container maxWidth="xl" sx={{ py: { xs: 2, md: 4 } }}>
      <Box sx={{ mb: { xs: 3, md: 4 } }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          textAlign="center"
          sx={{ fontSize: { xs: '1.75rem', md: '3rem' } }}
        >
          Manage Your Bookings
        </Typography>
        <Typography 
          variant="subtitle1" 
          color="text.secondary" 
          textAlign="center" 
          paragraph
          sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}
        >
          View, modify, or cancel your flight reservations
        </Typography>
      </Box>

      <Box sx={{ mb: { xs: 4, md: 6 } }}>
        <BookingForm />
      </Box>

      <BookingList />
    </Container>
  </PageLayout>
);

export default BookingsPage;
