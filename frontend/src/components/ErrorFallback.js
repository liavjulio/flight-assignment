import React from 'react';
import { Box, Typography, Button, Paper, Alert, AlertTitle } from '@mui/material';
import { ErrorOutline as ErrorIcon } from '@mui/icons-material';

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '50vh',
      p: 3,
    }}
  >
    <Paper
      elevation={3}
      sx={{
        p: 4,
        maxWidth: 500,
        textAlign: 'center',
      }}
    >
      <ErrorIcon color="error" sx={{ fontSize: 60, mb: 2 }} />

      <Typography variant="h5" gutterBottom>
        Oops! Something went wrong
      </Typography>

      <Alert severity="error" sx={{ mt: 2, mb: 3 }}>
        <AlertTitle>Error Details</AlertTitle>
        {error?.message || 'An unexpected error occurred'}
      </Alert>

      <Typography variant="body2" color="text.secondary" paragraph>
        We apologize for the inconvenience. Please try refreshing the page or contact support if the
        problem persists.
      </Typography>

      <Button variant="contained" onClick={resetErrorBoundary} sx={{ mt: 2 }}>
        Try Again
      </Button>
    </Paper>
  </Box>
);

export default ErrorFallback;
