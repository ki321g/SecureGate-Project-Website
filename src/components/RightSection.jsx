import React from 'react';
import { Paper, Typography, Box, Grid, Card, CardContent, CardActionArea, Link } from '@mui/material';
import { GitHub, YouTube, Assignment, Description } from '@mui/icons-material';

const RightSection = () => {
  // Card data
  const cards = [
    {
      title: 'YouTube',
      description: 'Watch the demo video of this project',
      icon: <YouTube fontSize="large" />,
      link: 'https://youtube.com',
      color: '#FF0000'
    },
    {
      title: 'GitHub',
      description: 'View the source code repository',
      icon: <GitHub fontSize="large" />,
      link: 'https://github.com/ki321g/SecureGate',
      color: '#333333'
    },
    {
      title: 'Planning',
      description: 'See the project planning documentation',
      icon: <Assignment fontSize="large" />,
      link: 'https://trello.com/b/EV3ZwiZu',
      color: '#4285F4'
    },
    {
      title: 'Report',
      description: 'Read the full project report',
      icon: <Description fontSize="large" />,
      link: 'https://github.com/ki321g/SecureGate/tree/main/Documentation',
      color: '#0F9D58'
    }
  ];

  return (
    <Paper elevation={3} sx={{ 
      p: 3, 
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      
    }}>
      {/* Project Description Section */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
            {/* <Typography variant="h4" gutterBottom>
              SecureGate Project
            </Typography> */}
            <Typography variant="body1" paragraph>
              SecureGate is an innovative security management system designed to provide robust access control and monitoring capabilities. 
              The platform integrates cutting-edge authentication methods with user-friendly interfaces to ensure maximum security without compromising on usability.
            </Typography>
            <Typography variant="body1">
              This project demonstrates the implementation of modern security practices, real-time monitoring, and responsive design principles.
              The system is built using React for the frontend and incorporates Material UI for a clean, professional appearance.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Cards Section - First Row */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {cards.slice(0, 2).map((card, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card 
              sx={{ 
                height: '100%',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 8,
                }
              }}
            >
              <CardActionArea 
                component={Link}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ height: '100%' }}
              >
                <CardContent sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 3
                }}>
                  <Box sx={{ 
                    color: card.color, 
                    mb: 2,
                    transform: 'scale(1.5)',
                    transition: 'transform 0.3s',
                    '.MuiCardActionArea-root:hover &': {
                      transform: 'scale(1.8)',
                    }
                  }}>
                    {card.icon}
                  </Box>
                  <Typography variant="h5" component="div" gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Cards Section - Second Row */}
      <Grid container spacing={3}>
        {cards.slice(2, 4).map((card, index) => (
          <Grid item xs={12} sm={6} key={index + 2}>
            <Card 
              sx={{ 
                height: '100%',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 8,
                }
              }}
            >
              <CardActionArea 
                component={Link}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ height: '100%' }}
              >
                <CardContent sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 3
                }}>
                  <Box sx={{ 
                    color: card.color, 
                    mb: 2,
                    transform: 'scale(1.5)',
                    transition: 'transform 0.3s',
                    '.MuiCardActionArea-root:hover &': {
                      transform: 'scale(1.8)',
                    }
                  }}>
                    {card.icon}
                  </Box>
                  <Typography variant="h5" component="div" gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default RightSection;
