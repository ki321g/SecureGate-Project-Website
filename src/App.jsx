import React, { useState } from 'react';
import './App.css'
import { Box, Grid, Container, useTheme } from '@mui/material'
import LogoComponent from './components/LogoComponent'
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';
import FooterSection from './components/FooterSection';

function App() {
  const theme = useTheme();
  const [enableDetectFace, setEnableDetectFace] = useState(false);

  // Estimate header and footer heights - adjust these values based on your actual components
  const headerHeight = 40;
  const footerHeight = 40; // Estimate for footer height

  return (
    <>
      {/* Fixed Logo Header - Full Width */}
      <Box 
        sx={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          width: '100%',
          backgroundColor: 'background.paper',
          zIndex: 1100,
          display: 'flex',
          justifyContent: 'center',
          pt: "10px",
          pb: "12px",
          boxShadow: 2
        }}
      >
        <LogoComponent />
      </Box>
      
      {/* Main Content with padding to account for fixed header and footer */}
      <Box sx={{ 
        position: 'relative',
        top: '0px',
        // top: headerHeight + 'px',
        // bottom: footerHeight + 'px',
        pt: headerHeight + 'px',
        pb: footerHeight + 'px',
        width: '100%',
        height: 'auto', 
        // maxHeight: '80vh',
        // overflow: 'auto',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <Container maxWidth="xl" sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Grid container spacing={3}>
            {/* Main Content Row */}
            <Grid item xs={12}>
              <Grid container spacing={3}>
                {/* Left Section */}
                <Grid item xs={12} md={6}>
                  <LeftSection />
                </Grid>
                
                {/* Right Section */}
                <Grid item xs={12} md={6}>
                  <RightSection />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Fixed Footer - Full Width */}
      <Box 
        sx={{ 
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: "45px",
          // height: footerHeight,
          width: '100%',
          backgroundColor: 'background.paper',
          zIndex: 1100,
          display: 'flex',
          justifyContent: 'center',
          pt: 0,
          pb: 0,
          boxShadow: '0 -2px 4px rgba(0,0,0,0.1)' // Shadow on top instead of bottom
        }}
      >
        <FooterSection />
      </Box>
    </>
  )
}

export default App
