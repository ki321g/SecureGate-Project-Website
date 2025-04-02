import React from 'react';
import { Typography, Box, Link, Grid } from '@mui/material';
import { SecurityOutlined } from '@mui/icons-material'

const FooterSection = () => {
  return (
    <Grid container spacing={2} sx={{ maxWidth: 'xl', width: '100%'}}>
      <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SecurityOutlined sx={{ fontSize: { xs: 25, sm: 35, md: 40 }, marginRight: 1, color: 'primary.main', }} />
          <Typography 
            variant="h6" 
            gutterBottom
            sx={{
              fontSize: { xs: 15, sm: 25, md: 30 },
              color: 'primary.main',
              fontWeight: '900',
              mb: 0, // Remove bottom margin from Typography
            }}  
          >
            SecureGate
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography 
          variant="body2"
          sx={{
            fontWeight: '800',
            textAlign: 'center',
            color: 'text.secondary',
            pt: 2
          }}
        >
          © {new Date().getFullYear()} Kieron Garvey. All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FooterSection;
