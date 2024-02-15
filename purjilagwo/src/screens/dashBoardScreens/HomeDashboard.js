import React from 'react';
import { Box, Typography } from '@mui/material';


const HomeDashboard = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography variant="h6" gutterBottom>
            Total Users
          </Typography>
          <Typography variant="body1">100</Typography>
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom>
            Total Sales
          </Typography>
          <Typography variant="body1">$1000</Typography>
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom>
            Total Orders
          </Typography>
          <Typography variant="body1">50</Typography>
        </Box>
      </Box>
      <Box mt={3}>
        <Typography variant="h5" gutterBottom>
          Recent Orders
        </Typography>
        <Box>
          {/* Render recent orders here */}
          {/* Example: */}
          <Typography variant="body1">Order #1234 - $50</Typography>
          <Typography variant="body1">Order #1235 - $30</Typography>
          <Typography variant="body1">Order #1236 - $20</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeDashboard;
