import React, { useState } from "react";
import { 
  Container, Typography, Grid, Box, Paper, Tabs, Tab, 
  IconButton, Drawer, List, ListItem, ListItemText 
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import '../styles/Products.css';

const Products = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  // Detect Mobile View
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    setMobileOpen(false); // Close menu on selection
  };

  return (
    <Box sx={{ width: "100%", backgroundColor: "#EEEFF1", paddingY: 4 }}>
      <Container sx={{ backgroundColor: "#EEEFF1", maxWidth: "1200px", width: "100%", paddingY: 4 }}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          Products
        </Typography>

        {/* Mobile Hamburger Menu (only for mobile view) */}
        {isMobile && (
          <>
            <Paper elevation={3} sx={{ borderRadius: "10px", padding: 1, backgroundColor: "#1A3D36", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="h6">Smart Home Products</Typography>
              <IconButton onClick={handleDrawerToggle} sx={{ color: "#fff" }}>
                <MenuIcon />
              </IconButton>
            </Paper>

            <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
              <List>
                {["Smart Home Products", "Smart Farm Products", "Industry Products", "R&D"].map((text, index) => (
                  <ListItem 
                    key={text} 
                    onClick={(event) => handleTabChange(event as unknown as React.SyntheticEvent, index)}
                    component="button"
                    sx={{ textAlign: "left" }} 
                  >
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        )}

        {/* Desktop and Tablet View (Tabs for larger screens) */}
        {!isMobile && (
          <Paper elevation={3} sx={{ borderRadius: "10px", overflow: "hidden", marginBottom: 4 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant="fullWidth"
              textColor="inherit"
              indicatorColor="primary"
              sx={{ backgroundColor: "#1A3D36", color: "#fff" }}
            >
              <Tab label="Smart Home Products" />
              <Tab label="Smart Farm Products" />
              <Tab label="Industry Products" />
              <Tab label="R&D" />
            </Tabs>
          </Paper>
        )}

        {/* Product Details Section */}
        <Paper elevation={2} sx={{ padding: 3, borderRadius: "10px", backgroundColor: "#fff" }}>
          <Grid container spacing={3}>
            {/* Left Side - Product Image */}
            <Grid item xs={12} md={5.8}>
              <Typography variant="h6" gutterBottom>
                Product 1
              </Typography>
              <Box sx={{ width: "100%", height: 240, backgroundColor: "#ccc", borderRadius: "8px" }} />
            </Grid>

            {/* Right Side - Specifications */}
            <Grid item xs={12} md={5.5}>
              <Typography variant="h6" gutterBottom>
                Specifications
              </Typography>
              <Typography variant="body1">
                iaculis. Eros posuere aliquam sed id eget ipsum pellentesque. Libero dis facilisi sed massa elit congue adipiscing velit commodo. Sagittis odio feugiat orci tristique quam pharetra.
              </Typography>
            </Grid>
          </Grid>

          {/* Certifications Section */}
          <Box mt={4}>
            <Typography variant="h6" gutterBottom>
              Certifications
            </Typography>

            <Grid container spacing={3}>
              {/* Left Certification Image */}
              <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
                <Box
                  sx={{
                    width: "100%",
                    height: 180,
                    backgroundColor: "#ccc",
                    borderRadius: "8px",
                  }}
                />
              </Grid>

              {/* Right Certification Image */}
              <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
                <Box
                  sx={{
                    width: "100%",
                    height: 180,
                    backgroundColor: "#ccc",
                    borderRadius: "8px",
                  }}
                />
              </Grid>
            </Grid>

            {/* Certification Descriptions */}
            <Grid container spacing={3} mt={2}>
              <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
                <Typography variant="body1">
                  iaculis. Eros posuere aliquam sed id eget ipsum pellentesque. Libero dis facilisi sed massa elit congue adipiscing velit commodo. Sagittis odio feugiat orci tristique quam pharetra.
                </Typography>
              </Grid>

              <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
                <Typography variant="body1">
                  iaculis. Eros posuere aliquam sed id eget ipsum pellentesque. Libero dis facilisi sed massa elit congue adipiscing velit commodo. Sagittis odio feugiat orci tristique quam pharetra.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Products;
