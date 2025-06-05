import React from 'react';
import { Box, Typography, Container, Button, Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 4, md: 5 },
        px: { xs: 3, md: 6 },
        mt: 'auto',
        backgroundColor: '#2E3B45', // dark slate gray
        color: '#ccc', // light gray text
        userSelect: 'none',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
            mb: 5,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.3rem', md: '1.6rem' },
              color: '#fff',
            }}
          >
            Urgent Repair? We’ve Got You!
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              px: 6,
              py: 1.75,
              fontSize: '1.15rem',
              fontWeight: 700,
              borderRadius: '12px',
              backgroundColor: '#EAE4D5', // coral accent
              color: 'black',
              boxShadow: '#2E3B55',
              textTransform: 'none',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#F2F2F2',
                boxShadow: '0 8px 20px rgba(229, 91, 74, 0.6)',
                transform: 'translateY(-3px)',
              },
            }}
             href="tel:+916380738971"
            aria-label="Call now"
          >
            📞 +91 6380738971
          </Button>
        </Box>

        <Divider
          sx={{
            backgroundColor: 'rgba(255,255,255,0.15)',
            height: '1.5px',
            mb: 4,
          }}
        />

        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="body2"
            sx={{
              opacity: 0.7,
              fontSize: '0.95rem',
              letterSpacing: '0.06em',
            }}
          >
           Trusted Service • Round-the-Clock Assistance • Licensed Professionals
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
