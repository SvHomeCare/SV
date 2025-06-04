import React from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VerifiedIcon from '@mui/icons-material/Verified';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import TvIcon from '@mui/icons-material/Tv';

// Theme setup
const theme = createTheme({
  palette: {
    primary: {
      main: '#2E3B55'
    },
    secondary: {
      main: '#ed155d'
    },
    background: {
      default: '#f9fafc'
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif'
  }
});

// Dummy service data
const services = [
 {
  title: 'AC Repair',
  description: 'Split, Window & Central AC servicing and gas refill.',
  icon: <AcUnitIcon sx={{ fontSize: 40, color: '#2E3B55' }} />
},
{
  title: 'Refrigerator',
  description: 'Cooling issues, compressor failure, gas leak & more.',
  icon: <KitchenIcon sx={{ fontSize: 40, color: '#2E3B55' }} />
},
{
  title: 'Washing Machine',
  description: 'Top/Front load drum repair, motor issues, water blockage.',
  icon: <LocalLaundryServiceIcon sx={{ fontSize: 40, color: '#2E3B55' }} />
},
{
  title: 'Microwave Oven',
  description: 'Heating coil issues, plate not rotating, sparking, etc.',
  icon: <MicrowaveIcon sx={{ fontSize: 40, color: '#2E3B55' }} />
},
{
  title: 'TV Repair',
  description: 'Screen issues, sound problems, remote control fixes & more.',
  icon: <TvIcon sx={{ fontSize: 40, color: '#2E3B55' }} />
}

];

function Landing() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Hero Section */}
     {/* Redesigned Hero Section */}
<Box
  sx={{
    position: 'relative',
    height: { xs: '90vh', md: '90vh' },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
    backgroundImage:
      'url("https://images.unsplash.com/photo-1581093588401-9f7c49f4d3ed?auto=format&fit=crop&w=1400&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden'
  }}
>


  <Container sx={{ position: 'relative', zIndex: 2 }}>
   <Typography
  variant="h2"
  sx={{
    fontWeight: 800,
    mb: 2,
    fontSize: { xs: '2.2rem', sm: '3rem', md: '3.5rem' },
    lineHeight: 1.2,
    color: '#393E46' // Set the main text color to black
  }}
>
  Fast, Friendly & Trusted by Thousands — 10,000+ Happy Homes!{' '}
  <Box component="span" sx={{ color: '#FF3F33', display: 'inline' }}>
    Coimbatore & Tiruppur
  </Box>
</Typography>


    <Typography
      variant="h6"
      sx={{
        maxWidth: 700,
        mx: 'auto',
        mb: 4,
        fontWeight: 400,
        color: 'black',
        fontSize: { xs: '1rem', md: '1.2rem' }
      }}
    >
      AC, Fridge, Washing Machine, Microwave & more — Trusted by 10,000+ happy customers!
    </Typography>

    <Button
      variant="contained"
      size="large"
       href="tel:+916385255152"
      sx={{
        px: 5,
        py: 1.8,
        fontWeight: 'bold',
        fontSize: '1.1rem',
        borderRadius: 8,
        textTransform: 'none',
        
      }}
    >
      Book a Technician
    </Button>
  </Container>
</Box>


      {/* Why Choose Us */}
      <Box sx={{ bgcolor: '#ffffff', py: { xs: 8, md: 12 } }}>
  <Container maxWidth="lg">
    <Typography
      variant="h4"
      align="center"
      sx={{ fontWeight: 800, mb: 8, color: '#2E3B55' }}
    >
      Why Choose Us?
    </Typography>

    <Grid container spacing={4}>
      {[
        {
          title: 'Same Day Service',
          description: 'Get your appliance fixed the same day — fast and reliable.',
          icon: <AccessTimeIcon fontSize="inherit" />
        },
        {
          title: 'Certified Technicians',
          description: 'Trained and verified experts who fix it right the first time.',
          icon: <VerifiedIcon fontSize="inherit" />
        },
        {
          title: 'Transparent Pricing',
          description: 'You’ll know exactly what you’re paying for. No surprises.',
          icon: <MonetizationOnIcon fontSize="inherit" />
        },
        {
          title: '24/7 Support',
          description: 'We’re here for you anytime, day or night.',
          icon: <SupportAgentIcon fontSize="inherit" />
        }
      ].map((item, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              p: 3,
              borderRadius: 3,
              boxShadow: 3,
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                boxShadow: 6,
                transform: 'translateY(-4px)'
              },
              backgroundColor: '#f5f7fa'
            }}
          >
            <Box
              sx={{
                minWidth: 60,
                height: 60,
                mr: 3,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #ed155d, #ff598f)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 32
              }}
            >
              {item.icon}
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>

      {/* Services Section */}
      {/* Our Services - Redesigned */}
<Box sx={{ bgcolor: '#ffffff', py: { xs: 8, md: 12 } }}>
  <Container maxWidth="lg">
    <Typography
      variant="h4"
      align="center"
      sx={{ fontWeight: 800, mb: 8, color: '#2E3B55' }}
    >
      Our Services
    </Typography>

    <Grid container spacing={4}>
      {services.map((service, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Paper
            elevation={4}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              p: 3,
              borderRadius: 4,
              boxShadow: 3,
              transition: 'all 0.3s ease-in-out',
              bgcolor: '#f7f9fc',
              '&:hover': {
                boxShadow: 6,
                transform: 'translateY(-5px)'
              }
            }}
          >
            <Box
              sx={{
                minWidth: 60,
                height: 60,
                mr: 3,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #2E3B55, #54698d)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 32
              }}
            >
              {service.icon}
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>

    </ThemeProvider>
  );
}

export default Landing;
