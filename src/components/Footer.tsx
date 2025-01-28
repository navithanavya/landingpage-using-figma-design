import React from "react";
import { Box, Grid, Typography, TextField, IconButton, Link } from "@mui/material";
import { Facebook, LinkedIn, Twitter, YouTube, Send, Email } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <>
      {/* Main Footer Section */}
      <Box
        sx={{
          backgroundColor: "#0A3039",
          color: "white",
          padding: "2rem 1rem",
          width: "100%",
        }}
      >
        <Grid
          container
          spacing={{ xs: 4, md: 0 }}
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {/* Logo and Email Section */}
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            sx={{ mt: "2%" }}
          >
            <Box display="flex" alignItems="center" justifyContent="flex-start">
              <img
                src="/path-to-your-logo.png" // Replace with the actual path to your logo image
                alt="Logo"
                style={{
                  width: "40px",
                  height: "40px",
                  marginRight: "20px",
                  marginLeft: "25px",
                }}
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                align="left"
                sx={{ marginLeft: "5px" }}
              >
                ADYANTA
              </Typography>
            </Box>
            <Box mt={6} width="100%">
              <TextField
                variant="outlined"
                placeholder=" Enter Your Email"
                fullWidth
                InputProps={{

                  startAdornment: (
                    <IconButton
                      sx={{
                        color: "#262626",
                      }}
                    >
                      <Email sx={{ fontSize: "20px" }} />
                    </IconButton>
                  ),
                  endAdornment: (
                    <IconButton
                      sx={{
                        color: "#262626",
                        "&:hover": { color: "#00CC00" },
                      }}
                    >
                      <Send
                        sx={{ transform: "rotate(-45deg)", fontSize: "20px" }}
                      />
                    </IconButton>
                  ),
                }}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  maxWidth: "85%",
                  height: "40px",
                  marginLeft: "20px",
                  marginRight: "5px",
                  "& .MuiOutlinedInput-root": {
                    height: "40px",
                    fontSize: "14px",
                  },
                }}
              />
            </Box>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} md={8} sx={{ mt: "2%" }}>
            <Grid container spacing={{ xs: 4, md: 0 }} justifyContent="space-between">
              {/* Sections for Navigation */}
              {[
                { title: "Home", links: ["Hero Section", "Features", "Properties", "Testimonials", "FAQs"] },
                { title: "About Us", links: ["Our Story", "Our Works", "How It Works", "Our Team", "Our Clients"] },
                { title: "Properties", links: ["Portfolio", "Categories"] },
                { title: "Services", links: ["Valuation Mastery", "Strategic Marketing", "Negotiation Wizardry", "Closing Success", "Property Management"] },
                { title: "Contact Us", links: ["Contact Form", "Our Offices"] },
              ].map((section, index) => (
                <Grid item xs={4} md={2} key={index}>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    gutterBottom
                    color="grey"
                  >
                    {section.title}
                  </Typography>
                  {section.links.map((link, i) => (
                    <Typography variant="body2" mb={1.5} key={i}>
                      <Link href="#" color="inherit" underline="hover">
                        {link}
                      </Link>
                    </Typography>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Secondary Footer Section */}
<Box
  mt={0}
  display="flex"
  justifyContent="space-between"
  alignItems="center"
  flexWrap="wrap"
  sx={{
    backgroundColor: "white",
    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
    pt: 2,
    padding: "1rem 0",
    width: "100%",
    boxSizing: "border-box",
  }}
>
  {/* Footer Text */}
  <Typography
    variant="body2"
    sx={{
      color: "#033333",
      paddingLeft: "6rem",
      paddingRight: "5rem",
      flexGrow: 1,
      textAlign: "left",
    }}
  >
    ©2023 Estatein. All Rights Reserved.{" "}
    <Link
      href="#"
      color="inherit"
      sx={{
        textDecoration: "none",  // Remove the underline
        marginLeft: "3rem",  // Add space between text and link
      }}
    >
      Terms & Conditions
    </Link>
  </Typography>

  {/* Social Media Icons */}
  <Box
    mt={2}
    sx={{
      display: "flex",
      gap: "0.5rem",
      paddingRight: "5rem",
      paddingLeft: "8rem",  // Adjusted padding for alignment
      justifyContent: "flex-start",  // Align icons to the left
      flexShrink: 0,
    }}
  >
    {[Facebook, LinkedIn, Twitter, YouTube].map((Icon, index) => (
      <Icon
        key={index}
        fontSize="large"
        sx={{
          color: index === 0 ? "#fff" : "white",  // Change Facebook 'F' to white
          backgroundColor: index === 0 ? "#000033" : "#000033", // Facebook blue background
          padding: "0.5rem",
          borderRadius: "50%",
        }}
      />
    ))}
  </Box>
</Box>

    </>
  );
};

export default Footer;
