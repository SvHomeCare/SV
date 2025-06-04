import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar
      position="fixed"
      elevation={3}
      sx={{
        bgcolor: '#393E46',
        color: '#fff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.7)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: { xs: 1, md: 3 },
            minHeight: 64,
          }}
        >
          {/* Hamburger menu for mobile */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="nav-menu"
              aria-haspopup="true"
              onClick={open ? handleMenuClose : handleMenuOpen}
              color="inherit"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>

            <Menu
              id="nav-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
              <Divider />
              <MenuItem onClick={handleMenuClose}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: 'F2F2F2',
                    color: '#fff',
                    fontWeight: 700,
                    '&:hover': { bgcolor: '#6a0dad' },
                  }}
                >
                  Call Now
                </Button>
              </MenuItem>
            </Menu>
          </Box>

          {/* Logo centered on all screen sizes */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexGrow: 1,
              justifyContent: 'center',
              cursor: 'pointer',
              userSelect: 'none',
              textDecoration: 'none',
            }}
            component={Link}
            to="/"
          >
            <Box
              component="img"
              src="/SV.png"
              alt="SV Home Services Logo"
              sx={{ height: 36, width: 36, mr: 1 }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                letterSpacing: '0.1em',
                color: '#F2F2F2',
                userSelect: 'none',
              }}
            >
              SV Home Care
            </Typography>
          </Box>

          {/* Call Now Button visible on md+ */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: 'green',
                color: '#fff',
                fontWeight: 700,
                px: 4,
                py: 1,
                borderRadius: 3,
                boxShadow: '0 4px 12px rgba(176, 53, 53, 0.5)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'green',
                  boxShadow: '0 6px 16px rgba(214, 66, 58, 0.8)',
                  transform: 'translateY(-2px)',
                },
                textTransform: 'none',
              }}
               href="tel:+916385255152"
            >
              Call Now
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
