import React from 'react';
import { Box } from '@mui/material';

const PageLayout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px)', // Account for navbar
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        '@media (max-width: 600px)': {
          minHeight: 'calc(100vh - 56px)', // Mobile navbar is shorter
        },
      }}
    >
      {children}
    </Box>
  );
};

export default PageLayout;
