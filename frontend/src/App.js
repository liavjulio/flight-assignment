import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { ErrorBoundary } from 'react-error-boundary';

import { lightTheme, darkTheme } from './theme/theme';
import { useThemeStore } from './store/store';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FlightsPage from './pages/FlightsPage';
import BookingsPage from './pages/BookingsPage';
import SecurityInfoPage from './pages/SecurityInfoPage';
import ErrorFallback from './components/ErrorFallback';
import './App.css';

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const globalStyles = (
  <GlobalStyles
    styles={{
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      html: {
        height: '100%',
        width: '100%',
        overflow: 'auto',
        overflowX: 'hidden',
      },
      body: {
        height: '100%',
        width: '100%',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        overflow: 'auto',
        overflowX: 'hidden',
      },
      '#root': {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      },
      // Ensure MUI containers are consistent
      '.MuiContainer-maxWidthXl': {
        maxWidth: '1920px !important',
        '@media (min-width: 0px)': {
          paddingLeft: '16px',
          paddingRight: '16px',
        },
        '@media (min-width: 600px)': {
          paddingLeft: '24px',
          paddingRight: '24px',
        },
        '@media (min-width: 1200px)': {
          paddingLeft: '32px',
          paddingRight: '32px',
        },
      },
    }}
  />
);

const App = () => {
  const { isDarkMode } = useThemeStore();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {globalStyles}
          <Router>
            <div className="app">
              <Navbar />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/flights" element={<FlightsPage />} />
                  <Route path="/bookings" element={<BookingsPage />} />
                  <Route path="/security-info" element={<SecurityInfoPage />} />
                </Routes>
              </main>
            </div>
          </Router>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: theme.palette.background.paper,
                color: theme.palette.text.primary,
              },
            }}
          />
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
