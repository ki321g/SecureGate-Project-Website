import React, { useState } from 'react';
import { Paper, Typography, Box, Grid, Card, CardContent, CardActionArea, Link, Modal, IconButton } from '@mui/material';
import { GitHub, YouTube, Assignment, Description, Close } from '@mui/icons-material';

const RightSection = () => {
  // Add state for modal
  const [modalOpen, setModalOpen] = useState(false);
  
  const handleOpenModal = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Card data
  const cards = [
    {
      title: 'YouTube',
      description: 'Watch the demo video of this project',
      icon: <YouTube fontSize="large" />,
      link: 'https://youtu.be/NhTK9tTKvMk',
      color: '#FF0000',
      bgColor: '#0a0a0a',
      action: handleOpenModal // Add custom action for YouTube card
    },
    {
      title: 'GitHub',
      description: 'View the source code repository',
      icon: <GitHub fontSize="large" />,
      link: 'https://github.com/ki321g/SecureGate',
      color: '#333333',
      bgColor: '#0a0a0a'
    },
    {
      title: 'Planning',
      description: 'See the project planning documentation',
      icon: <Assignment fontSize="large" />,
      link: 'https://trello.com/b/EV3ZwiZu',
      color: '#4285F4',
      bgColor: '#0a0a0a'
    },
    {
      title: 'Report',
      description: 'Read the full project report',
      icon: <Description fontSize="large" />,
      link: 'https://github.com/ki321g/SecureGate/tree/main/Documentation',
      color: '#0F9D58',
      bgColor: '#0a0a0a'
    }
  ];

  // YouTube video modal style
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: '80%', md: '70%' },
    maxWidth: 900,
    bgcolor: 'primary.main', // Your chosen background color
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    outline: 'none',
    position: 'relative', // Add this to make absolute positioning work relative to the modal
  };

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
          <Paper elevation={2} sx={{  
                p: 2, 
                mb: 3,
                backgroundColor: 'background.dark',
                borderRadius: 2,
                boxShadow: 1
            }}>
            <Typography variant="body1" paragraph sx={{ 
                textAlign: 'left',
                ml: 1,
                color: 'text.secondary',
                lineHeight: 1.4,
                fontSize: { xs: 10, sm: 12, md: 18 },
              }}
            >
              SecureGate is an innovative security management system designed to provide robust access control and monitoring capabilities. 
              The platform integrates cutting-edge authentication methods with user-friendly interfaces to ensure maximum security without compromising on usability.
            </Typography>
            <Typography variant="body1"sx={{ 
                textAlign: 'left',
                ml: 1,
                color: 'text.secondary',
                lineHeight: 1.4,
                fontSize: { xs: 10, sm: 12, md: 18 },
              }}
            >
              This project demonstrates the implementation of multi factor authentication with a card reader, pin entry, and facial recognition.
              The system is built using Python FastAPI for the backend, SupaBase for a Realtime DB, React for the frontend and incorporates Material UI for a clean, professional appearance.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Cards Section - First Row */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {cards.slice(0, 2).map((card, index) => (
          <Grid item xs={12} sm={6} key={index} >
            <Card 
              sx={{
                height: '100%',
                backgroundColor: card.bgColor || 'background.dark',
                transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 8,
                  backgroundColor: '#90caf9'
                }
              }}
            >
              <CardActionArea 
                component={Link}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ height: '100%' }}
                onClick={card.action} // Use custom action if provided
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
                    transition: 'transform 0.3s, filter 0.3s',
                    filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.3))',
                    '.MuiCardActionArea-root:hover &': {
                        transform: 'scale(1.8)',
                        filter: `drop-shadow(0 0 6px ${card.color})`,
                    }
                  }}>
                    {card.icon}
                  </Box>
                  <Typography variant="h5" component="div" gutterBottom
                    sx={{
                    fontSize: { xs: 20, sm: 30, md: 30 },
                    fontWeight: '900',
                    mb: 0,
                    '.MuiCardActionArea-root:hover &': {
                      color: '#373737'  // White text on hover
                    }
                    }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary"
                    sx={{
                        transition: 'color 0.3s',
                        '.MuiCardActionArea-root:hover &': {
                        color: '#373737'  // White text on hover
                        }
                    }}
                    >
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
                backgroundColor: card.bgColor || 'background.dark',
                transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 8,
                  backgroundColor: '#90caf9'
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
                    transition: 'transform 0.3s, filter 0.3s',
                    filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.3))',
                    '.MuiCardActionArea-root:hover &': {
                        transform: 'scale(1.8)',
                        filter: `drop-shadow(0 0 6px ${card.color})`,
                    }
                   }}>
                    {card.icon}
                  </Box>
                  <Typography variant="h5" component="div" gutterBottom
                    sx={{
                    fontSize: { xs: 20, sm: 30, md: 30 },
                    fontWeight: '900',
                    mb: 0,
                    '.MuiCardActionArea-root:hover &': {
                      color: '#373737'  // White text on hover
                    }
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary"
                    sx={{
                        transition: 'color 0.3s',
                        '.MuiCardActionArea-root:hover &': {
                        color: '#373737'  
                        }
                    }}
                    >
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* YouTube Video Modal */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="youtube-video-modal"
        aria-describedby="modal-displaying-youtube-video"
      >
        <Box sx={modalStyle}>
          {/* Position the close button absolutely */}
          <IconButton 
            onClick={handleCloseModal} 
            aria-label="close"
            sx={{
              position: 'absolute',
              top: -16,
              right: -16,
              color: 'black',
              backgroundColor: 'rgba(255, 0, 0, 0.6)',
              '&:hover': {
                backgroundColor: 'rgba(255, 0, 0, 0.8)',
              },
              zIndex: 1,
            }}
          >
            <Close />
          </IconButton>
          
          <Box sx={{ 
            position: 'relative',
            paddingTop: '56.25%', // 16:9 aspect ratio
            width: '100%',
            overflow: 'hidden'
          }}>
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              src="https://www.youtube.com/embed/NhTK9tTKvMk"
              title="SecureGate Project Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
        </Box>
      </Modal>
    </Paper>
  );
};

export default RightSection;
