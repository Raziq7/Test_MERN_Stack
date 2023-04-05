import React from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';

function Subscribe() {
  return (
    <Box sx={{ backgroundColor: '#1976d2', py: 4, marginTop:"25px" }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="h2" sx={{ color: '#fff', mr: 2 }}>
            Sign up for our Newsletter
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              label="Email address"
              variant="outlined"
              size="small"
              sx={{ mr: 2, bgcolor: '#fff', '& fieldset': { borderColor: '#fff' } }}
            />

            <Button variant="contained" size="medium">
              Subscribe
            </Button>
          </Box>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" sx={{ color: '#fff' }}>
            Get exclusive discounts, early access to new products, and more.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Subscribe;
