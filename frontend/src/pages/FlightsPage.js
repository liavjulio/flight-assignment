import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Alert } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import FlightList from '../components/FlightList';
import FlightSearch from '../components/FlightSearch';
import PageLayout from '../components/PageLayout';

const FlightsPage = () => {
  const [searchParams, setSearchParams] = useState(null);
  const [urlSearchParams] = useSearchParams();
  const isCompareMode = urlSearchParams.get('compare') === 'true';

  const handleSearch = (params) => {
    setSearchParams(params);
  };

  return (
    <PageLayout>
      <Container maxWidth="xl" sx={{ py: { xs: 2, md: 4 } }}>
        <Box sx={{ mb: { xs: 2, md: 4 } }}>
          {isCompareMode && (
            <Alert severity="info" sx={{ mb: 2 }}>
              💰 Price Comparison Mode: Showing all available flights with pricing details
            </Alert>
          )}
          
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            textAlign="center"
            sx={{ fontSize: { xs: '1.75rem', md: '3rem' } }}
          >
            {isCompareMode ? 'Compare Flight Prices' : 'Find Your Perfect Flight'}
          </Typography>
          <Typography 
            variant="subtitle1" 
            color="text.secondary" 
            textAlign="center" 
            paragraph
            sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}
          >
            {isCompareMode 
              ? 'Compare prices across multiple airlines and find the best deals'
              : 'Search and book flights from our extensive network of airline partners'
            }
          </Typography>

          <Box sx={{ mb: { xs: 3, md: 4 } }}>
            <FlightSearch onSearch={handleSearch} compareMode={isCompareMode} />
          </Box>

          <FlightList searchParams={searchParams} compareMode={isCompareMode} />
        </Box>
      </Container>
    </PageLayout>
  );
};

export default FlightsPage;
