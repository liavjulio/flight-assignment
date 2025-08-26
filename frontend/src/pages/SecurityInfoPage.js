import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Button,
} from '@mui/material';
import {
  Security as SecurityIcon,
  Shield as ShieldIcon,
  Lock as LockIcon,
  Verified as VerifiedIcon,
  Payment as PaymentIcon,
  Cloud as CloudIcon,
  PrivacyTip as PrivacyIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const SecurityInfoPage = () => {
  const navigate = useNavigate();

  const securityFeatures = [
    {
      icon: <LockIcon color="primary" />,
      title: 'SSL/TLS Encryption',
      description: 'All data transmission is encrypted using industry-standard SSL/TLS protocols',
    },
    {
      icon: <PaymentIcon color="primary" />,
      title: 'PCI DSS Compliance',
      description: 'Payment processing meets the highest security standards for card data protection',
    },
    {
      icon: <CloudIcon color="primary" />,
      title: '24/7 Security Monitoring',
      description: 'Continuous monitoring and threat detection to protect your information',
    },
    {
      icon: <PrivacyIcon color="primary" />,
      title: 'Privacy Protection',
      description: 'Your personal data is handled according to strict privacy policies and regulations',
    },
    {
      icon: <VerifiedIcon color="primary" />,
      title: 'Multi-Factor Authentication',
      description: 'Optional additional security layers to protect your account access',
    },
    {
      icon: <ShieldIcon color="primary" />,
      title: 'Fraud Protection',
      description: 'Advanced fraud detection systems to secure your transactions',
    },
  ];

  const certifications = [
    'ISO 27001 Certified',
    'PCI DSS Level 1',
    'SOC 2 Type II',
    'GDPR Compliant',
    'CCPA Compliant',
  ];

  return (
    <PageLayout>
      <Container maxWidth="xl" sx={{ py: { xs: 2, md: 4 } }}>
        {/* Back Button */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
          sx={{ mb: 3 }}
          variant="outlined"
        >
          Back to Home
        </Button>

      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
        <SecurityIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          fontWeight="bold"
          sx={{ fontSize: { xs: '1.75rem', md: '3rem' } }}
        >
          Enterprise-Level Security
        </Typography>
        <Typography 
          variant="h6" 
          color="text.secondary" 
          sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
        >
          Your safety and security are our top priorities
        </Typography>
      </Box>

      {/* Security Features */}
      <Typography variant="h4" gutterBottom sx={{ mb: 3, textAlign: 'center' }}>
        Security Features
      </Typography>
      
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {securityFeatures.map((feature, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {feature.icon}
                  <Typography variant="h6" sx={{ ml: 1, fontWeight: 'bold' }}>
                    {feature.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Certifications */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Security Certifications
              </Typography>
              <List>
                {certifications.map((cert, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <VerifiedIcon color="success" />
                    </ListItemIcon>
                    <ListItemText primary={cert} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Data Protection
              </Typography>
              <Typography variant="body1" paragraph>
                We employ multiple layers of security to protect your personal and financial information:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                <Chip label="256-bit Encryption" color="primary" variant="outlined" />
                <Chip label="Secure Servers" color="primary" variant="outlined" />
                <Chip label="Regular Audits" color="primary" variant="outlined" />
                <Chip label="Access Controls" color="primary" variant="outlined" />
              </Box>
              <Typography variant="body2" color="text.secondary">
                Your data is never shared with third parties without your explicit consent, 
                and we maintain strict access controls to ensure only authorized personnel 
                can access sensitive information.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Contact Section */}
      <Box sx={{ textAlign: 'center', mt: 6, p: 4, backgroundColor: 'primary.light', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom color="primary.contrastText">
          Questions About Security?
        </Typography>
        <Typography variant="body1" color="primary.contrastText" paragraph>
          Our security team is available 24/7 to address any concerns you may have.
        </Typography>
        <Button 
          variant="contained" 
          sx={{ 
            backgroundColor: 'white', 
            color: 'primary.main',
            '&:hover': { backgroundColor: 'grey.100' }
          }}
        >
          Contact Security Team
        </Button>
      </Box>
    </Container>
    </PageLayout>
  );
};

export default SecurityInfoPage;
