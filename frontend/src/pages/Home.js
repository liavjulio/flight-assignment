import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Chip,
} from '@mui/material';
import {
  Flight as FlightIcon,
  BookOnline as BookingIcon,
  TrendingUp as TrendingIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const Home = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    // Navigate to a dedicated security/info page or show modal
    navigate('/security-info');
  };

  const handleComparePrices = () => {
    // Navigate to flights with search params for price comparison
    navigate('/flights?compare=true');
  };

  const features = [
    {
      icon: <FlightIcon color="primary" sx={{ fontSize: 40 }} />,
      title: 'Search Flights',
      description: 'Find the best flights with our comprehensive search engine',
      action: () => navigate('/flights'),
      buttonText: 'Browse Flights',
    },
    {
      icon: <BookingIcon color="secondary" sx={{ fontSize: 40 }} />,
      title: 'Manage Bookings',
      description: 'View and manage all your flight bookings in one place',
      action: () => navigate('/bookings'),
      buttonText: 'View Bookings',
    },
    {
      icon: <TrendingIcon color="success" sx={{ fontSize: 40 }} />,
      title: 'Best Prices',
      description: 'Get the most competitive prices for your travel needs',
      action: handleComparePrices,
      buttonText: 'Compare Prices',
    },
    {
      icon: <SecurityIcon color="info" sx={{ fontSize: 40 }} />,
      title: 'Secure Booking',
      description: 'Your data and payments are protected with enterprise-level security',
      action: handleLearnMore,
      buttonText: 'Learn More',
    },
  ];

  return (
    <PageLayout>
      <Container maxWidth="xl" sx={{ flex: 1, py: { xs: 2, md: 4 } }}>
        {/* Hero Section */}
        <Box
          sx={{
            textAlign: 'center',
            py: { xs: 4, md: 8 },
            px: { xs: 2, md: 4 },
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: 2,
            color: 'white',
            mb: { xs: 4, md: 6 },
            minHeight: { xs: 'auto', md: '400px' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom 
            fontWeight="bold"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.75rem' },
              mb: { xs: 2, md: 3 }
            }}
          >
            Flight Booking System
          </Typography>
          <Typography 
            variant="h5" 
            paragraph 
            sx={{ 
              opacity: 0.9,
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
              mb: { xs: 2, md: 3 }
            }}
          >
            Your gateway to seamless travel experiences
          </Typography>
          <Chip 
            label="v2.0 - Now with Modern UI" 
            color="secondary" 
            sx={{ 
              mb: { xs: 2, md: 3 },
              alignSelf: 'center'
            }} 
          />
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 1, sm: 2 },
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/flights')}
              sx={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                minWidth: { xs: '200px', sm: 'auto' },
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.3)',
                },
              }}
            >
              Start Booking
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/bookings')}
              sx={{
                color: 'white',
                borderColor: 'white',
                minWidth: { xs: '200px', sm: 'auto' },
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              View Bookings
            </Button>
          </Box>
        </Box>

        {/* Features Section */}
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          textAlign="center" 
          mb={4}
          sx={{
            fontSize: { xs: '1.75rem', md: '2.125rem' }
          }}
        >
          Why Choose Our Platform?
        </Typography>

        <Grid container spacing={{ xs: 2, md: 4 }} sx={{ mb: { xs: 6, md: 8 } }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease-in-out',
                  minHeight: '280px',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: { xs: 2, md: 3 } }}>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography gutterBottom variant="h6" component="h3">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button size="small" variant="contained" onClick={feature.action}>
                    {feature.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Stats Section */}
        <Box 
          id="stats-section"
          sx={{ 
            textAlign: 'center',
            py: { xs: 4, md: 6 },
            px: { xs: 2, md: 4 },
            backgroundColor: 'background.paper',
            borderRadius: 2,
            boxShadow: 1
          }}
        >
          <Typography 
            variant="h5" 
            gutterBottom
            sx={{
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              mb: { xs: 2, md: 3 }
            }}
          >
            Trusted by Travelers Worldwide
          </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} sm={4}>
              <Typography 
                variant="h3" 
                color="primary" 
                fontWeight="bold"
                sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
              >
                10K+
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Flights Booked
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography 
                variant="h3" 
                color="primary" 
                fontWeight="bold"
                sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
              >
                50+
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Airlines Partners
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography 
                variant="h3" 
                color="primary" 
                fontWeight="bold"
                sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
              >
                99.9%
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Uptime Reliability
              </Typography>
            </Grid>
          </Grid>
          
          {/* Security Information - Expanded for "Learn More" */}
          <Box sx={{ 
            mt: { xs: 4, md: 6 }, 
            p: { xs: 2, md: 3 },
            backgroundColor: 'primary.light',
            borderRadius: 2,
            color: 'primary.contrastText'
          }}>
            <Typography variant="h6" gutterBottom>
              🔒 Enterprise-Level Security
            </Typography>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} md={4}>
                <Typography variant="body2">
                  ✅ SSL Encryption
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="body2">
                  ✅ PCI DSS Compliant
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="body2">
                  ✅ 24/7 Monitoring
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </PageLayout>
  );
};

export default Home;
