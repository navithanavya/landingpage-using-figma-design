import React from "react";
import { Box, Grid, Typography, TextField, IconButton, Link } from "@mui/material";
import { Facebook, LinkedIn, Twitter, YouTube, Send } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#033333", color: "white", padding: "2rem 1rem" }}>
      {/* Top Section */}
      <Grid container spacing={2}> {/* Reduced the spacing to 2 */}
        {/* Logo and Email Section */}
        <Grid item xs={12} md={3} display="flex" flexDirection="column" alignItems="center" sx={{ mt: "5%" }}>
          <Typography variant="h6" fontWeight="bold">
            ADYANTA
          </Typography>
          <Box mt={6} width="100%" display="flex" justifyContent="center">
            <TextField
              variant="outlined"
              placeholder="Enter Your Email"
              fullWidth
              InputProps={{
                endAdornment: (
                  <IconButton
                    sx={{
                      color: "#00FF00", // Green color for the send icon
                      "&:hover": { color: "#00CC00" },
                    }}
                  >
                    <Send sx={{ transform: "rotate(-45deg)", fontSize: "20px" }} />
                  </IconButton>
                ),
              }}
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                maxWidth: "85%",
                height: "40px",
                "& .MuiOutlinedInput-root": {
                  height: "40px",
                  fontSize: "14px",
                },
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={9} sx={{ mt: "5%" }}>
          <Grid container spacing={2}> {/* Reduced the spacing to 2 */}
            {/* Home Section */}
            <Grid item xs={6} md={2}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Home
              </Typography>
              <Typography variant="body2" mb={0.5}> {/* Reduced margin-bottom */}
                <Link href="#" color="inherit" underline="hover">Hero Section</Link>
              </Typography>
              <Typography variant="body2" mb={0.5}>
                <Link href="#" color="inherit" underline="hover">Features</Link>
              </Typography>
              <Typography variant="body2" mb={0.5}>
                <Link href="#" color="inherit" underline="hover">Properties</Link>
              </Typography>
              <Typography variant="body2" mb={0.5}>
                <Link href="#" color="inherit" underline="hover">Testimonials</Link>
              </Typography>
              <Typography variant="body2">
                <Link href="#" color="inherit" underline="hover">FAQs</Link>
              </Typography>
            </Grid>

            {/* About Us Section */}
            <Grid item xs={6} md={2}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" mb={0.5}>
                <Link href="#" color="inherit" underline="hover">Our Story</Link>
              </Typography>
              <Typography variant="body2" mb={0.5}>
                <Link href="#" color="inherit" underline="hover">Our Works</Link>
              </Typography>
              <Typography variant="body2" mb={0.5}>
                <Link href="#" color="inherit" underline="hover">How It Works</Link>
              </Typography>
              <Typography variant="body2" mb={0.5}>
                <Link href="#" color="inherit" underline="hover">Our Team</Link>
              </Typography>
              <Typography variant="body2">
                <Link href="#" color="inherit" underline="hover">Our Clients</Link>
              </Typography>
            </Grid>

            {/* Properties Section */}
            <Grid item xs={6} md={2}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Properties
              </Typography>
              <Typography variant="body2" mb={0.5}>
                <Link href="#" color="inherit" underline="hover">Portfolio</Link>
              </Typography>
              <Typography variant="body2">
                <Link href="#" color="inherit" underline="hover">Categories</Link>
              </Typography>
            </Grid>

            {/* Services Section */}
            <Grid item xs={6} md={3}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Services
              </Typography>
              <Typography variant="body2" mb={0.5}>
                <Link href="#" color="inherit" underline="hover">Valuation Mastery</Link>
              </Typography>
              <Typography variant="body2" mb={0.5}>
                <Link href="#" color="inherit" underline="hover">Strategic Marketing</Link>
              </Typography>
              <Typography variant="body2" mb={0.5}>
                <Link href="#" color="inherit" underline="hover">Negotiation Wizardry</Link>
              </Typography>
              <Typography variant="body2" mb={0.5}>
                <Link href="#" color="inherit" underline="hover">Closing Success</Link>
              </Typography>
              <Typography variant="body2">
                <Link href="#" color="inherit" underline="hover">Property Management</Link>
              </Typography>
            </Grid>

            {/* Contact Us Section */}
            <Grid item xs={3} md={2} sx={{ ml: "0%" }}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" mb={0.5}>
                <Link href="#" color="inherit" underline="hover">Contact Form</Link>
              </Typography>
              <Typography variant="body2">
                <Link href="#" color="inherit" underline="hover">Our Offices</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Box
        mt={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        sx={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)", pt: 2 }}
      >
        <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
          ©2023 Estatein. All Rights Reserved. <Link href="#" color="inherit">Terms & Conditions</Link>
        </Typography>
        <Box mt={2} sx={{ display: "flex", gap: "1rem" }}>
          <Facebook fontSize="large" />
          <LinkedIn fontSize="large" />
          <Twitter fontSize="large" />
          <YouTube fontSize="large" />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
