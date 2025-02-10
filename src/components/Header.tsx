import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItemButton, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; // Import hamburger icon
import '../styles/Header.css';
import "@fontsource/krona-one"; // Import Krona One font


const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)}>
      <List>
        <ListItemButton component={Link} to="/" >
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton component={Link} to="/products">
          <ListItemText primary="Products" />
        </ListItemButton>
        <ListItemButton component={Link} to="/offers">
          <ListItemText primary="Offers" />
        </ListItemButton>
        <ListItemButton component={Link} to="/solutions">
          <ListItemText primary="Solutions" />
        </ListItemButton>
        <ListItemButton component={Link} to="/blog">
          <ListItemText primary="Blog" />
        </ListItemButton>
        <ListItemButton component={Link} to="/contact">
          <ListItemText primary="Contact Us" />
        </ListItemButton>

        {/* Sign In Button inside Drawer for Mobile */}
        <ListItemButton component={Link} to="/signin">
          <ListItemText primary="Sign In" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" className="header">
      <Toolbar className="toolbar">
        <Box className="logo-container" sx={{ marginLeft: '45px' }}>
          <IconButton edge="start" color="inherit" aria-label="menu" className="icon-button" sx={{
            backgroundColor: 'white',
            borderRadius: '50%',
            padding: '8px',
          }}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Adayanta.png`}
              style={{
                width: "40px",
                height: "40px",
              }}
            />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              fontFamily: "Krona One, sans-serif",
              textDecoration: "none",
              color: "#006F4E",
              textAlign: { xs: "center", sm: "left" },
              width: { xs: "60%", sm: "auto" },
              gap: "2px"
            }}
          >
            ADYANTA
          </Typography>
        </Box>

        {/* Hamburger Menu visible only on mobile */}
        {isMobile && (
          <IconButton color="inherit" onClick={() => toggleDrawer(true)} className="hamburger-menu">
            <MenuIcon />
          </IconButton>
        )}

        {/* Drawer for mobile */}
        <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
          {drawerList}
        </Drawer>

        {/* Desktop view: Show navigation buttons */}
        {!isMobile && (
          <Box className="nav-buttons">
            <Button component={Link} to="/" className="nav-button">Home</Button>
            <Button component={Link} to="/products" className="nav-button">Products</Button>
            <Button component={Link} to="/offers" className="nav-button">Offers</Button>
            <Button component={Link} to="/solutions" className="nav-button">Solutions</Button>
            <Button component={Link} to="/blog" className="nav-button">Blog</Button>
            <Button component={Link} to="/contact" className="nav-button">Contact Us</Button>
          </Box>
        )}

        {/* Desktop view: Show sign-in button */}
        {!isMobile && (
          <Box>
            <Button variant="contained" className="sign-in-button" sx={{ marginRight: '40px', borderRadius: "10px" }}>
              Sign In
            </Button>
          </Box>
        )}
      </Toolbar>

                
    </AppBar>
  );
};

export default Header;
