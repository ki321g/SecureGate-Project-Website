import React from 'react';
import { Paper, Typography, Box, Avatar, Divider, Button, Grid } from '@mui/material';
import { LinkedIn, GitHub, Email, Work, School } from '@mui/icons-material';
import { SecurityOutlined } from '@mui/icons-material'

const LeftSection = () => {
  // Developer information - replace with your actual details
  const developer = {
    name: "Kieron Garvey",
    photo: "/kieron.jpeg", // Replace with your actual photo path
    commercialTitle: "SecureGate",
    academicTitle: "IoT security project for granting controlled access to infrastructure using multi factor authentication",
    links: [
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/kierongarvey/",
        icon: <LinkedIn />
      },
      {
        title: "GitHub",
        url: "https://github.com/ki321g",
        icon: <GitHub />
      },
      {
        title: "Email",
        url: "mailto:garveykieron@gmail.com?subject=SecureGate%20Project%20Inquiry",
        icon: <Email />
      }
    ]
  };

  return (
    <Paper elevation={3} sx={{ 
      p: 3, 
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Side by side layout for profile and contact links */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {/* Left side - Profile Photo and Name */}
        <Grid item xs={12} sm={6} md={5} sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Avatar 
            src={developer.photo} 
            alt={developer.name}
            sx={{ 
              width: { xs: 140, sm: 150, md: 180 }, // Increased size
              height: { xs: 140, sm: 150, md: 180 }, // Increased size
              mb: 2,
              border: '4px solid',
              borderColor: 'primary.main',
              boxShadow: 3
            }}
          />
          <Typography variant="h4" component="h1" align="center" sx={{ fontWeight: 'bold' }}> {/* Increased from h5 to h4 */}
            {developer.name}
          </Typography>
        </Grid>
        
        {/* Right side - Contact Links */}
        <Grid item xs={12} sm={6} md={7} sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}> {/* Changed from h6 to subtitle1 */}
            Connect with me
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: 1.5 // Reduced gap from 2 to 1.5
          }}>
            
            {developer.links.map((link, index) => (
            <Button
                key={index}
                variant="contained"
                size="small"
                startIcon={link.icon}
                href={link.title !== "Email" ? link.url : undefined} // Only use href for non-email links
                onClick={link.title === "Email" ? (e) => {
                e.preventDefault();
                window.location.href = link.url;
                } : undefined} // Use onClick for email
                target={link.title !== "Email" ? "_blank" : undefined}
                rel={link.title !== "Email" ? "noopener noreferrer" : undefined}
                fullWidth
                sx={{
                py: 1,
                textTransform: 'none',
                borderRadius: 2,
                fontWeight: 'bold',
                boxShadow: 1,
                fontSize: '0.85rem',
                transition: 'all 0.3s',
                '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 3,
                }
                }}
            >
                {link.title}
            </Button>
            ))}
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ mb: 3 }} />

      {/* Developer Information - Full width as before */}
      <Box sx={{ 
        mb: 3,
        backgroundColor: 'background.paper',
        borderRadius: 2,
        p: 2,
        boxShadow: 1
      }}>
        {/* Commercial Title */}
        <Box sx={{ mb: 2 }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 1,
            color: 'primary.main'
          }}>
            <Work sx={{ mr: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Commercial Title
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center',}}>
                <SecurityOutlined sx={{ fontSize: { xs: 30, sm: 40, md: 60 }, marginRight: 1,}}/>
                <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{
                    fontSize: { xs: 20, sm: 30, md: 40 },
                    fontWeight: '900',
                    mb: 0,
                    }}  
                >
                    {developer.commercialTitle}
                </Typography>
            </Box>
        </Box>
        
        {/* Academic Title */}
        <Box>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 1,
            color: 'primary.main'
          }}>
            <School sx={{ mr: 1 }} />
            <Typography variant="h6" 
                sx={{ 
                    fontWeight: 'bold',
                }}>
                Academic Title
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ 
            ml: 4,
            color: 'text.secondary',
            lineHeight: 1.6,
            fontSize: { xs: 16, sm: 18, md: 25 },
            pb: 1,
            mb: 1.8
          }}>
            {developer.academicTitle}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default LeftSection;
