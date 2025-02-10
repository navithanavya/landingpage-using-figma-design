import React from "react";
import { Box, Grid, Typography, TextField, IconButton, Link } from "@mui/material";
import { LinkedIn, Twitter, YouTube } from "@mui/icons-material"; // Import other icons
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <>
      {/* Main Footer Section */}
      <Box
        sx={{
          backgroundColor: "#0A3039",
          color: "white",
          padding: "2rem 1rem",
          width: "98%",
        }}
      >
        <Grid
          container
          spacing={1} // Reduced the gap to 10px between sections
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
                src={`${process.env.PUBLIC_URL}/assets/Adayanta.png`}
                alt="Adyanta Logo"
                className="logo"
                style={{
                  width: "40px",
                  height: "40px",
                  marginRight: "20px",
                  marginLeft: "25px",
                  backgroundColor: "#0A3039",
                }}
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                align="left"
                sx={{
                  marginLeft: "5px",
                  fontFamily: "Krona One, sans-serif",
                  textDecoration: "none", // Removes underline
                  color: "#006F4E", // Sets text color to green
                }}
              >
                ADYANTA
              </Typography>
            </Box>
            <Box mt={7} width="100%">
              <TextField
                variant="outlined"
                placeholder=" Enter Your Email"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <IconButton sx={{ color: "#262626", display: "flex" }}>
                      <img
                        src="/assets/Email.png" // Replace with your image URL for Email icon
                        alt="email"
                        style={{
                          width: "20px", // Adjust size of the image as needed
                          height: "20px",
                          marginLeft: "8px", // Adjust spacing
                          justifyContent:"flex-start"
                        }}
                      />
                    </IconButton>
                  ),
                  endAdornment: (
                    <IconButton
                      sx={{
                        color: "#262626",
                        "&:hover": { color: "#00CC00" },
                      }}
                    >
                      <img
                        src="/assets/sends.png" // Replace with your image URL for Send icon
                        alt="send"
                        style={{
                          width: "20px", // Adjust size of the image as needed
                          height: "20px",
                        }}
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
          <Grid item xs={12} md={8} sx={{ mt: "3%", columnGap: "30px" }}>
            <Grid container spacing={2} justifyContent="space-between">
              {[
                { title: "Home", links: ["Hero Section", "Features", "Properties", "Testimonials", "FAQs"] },
                { title: "About Us", links: ["Our Story", "Our Works", "How It Works", "Our Team", "Our Clients"] },
                { title: "Properties", links: ["Portfolio", "Categories"] },
                { title: "Services", links: ["Valuation Mastery", "Strategic Marketing", "Negotiation Wizardry", "Closing Success", "Property Management"] },
                { title: "Contact Us", links: ["Contact Form", "Our Offices"] },
              ].map((section, index) => (
                <Grid
                  item
                  xs={4}
                  md={2}
                  key={index}
                  sx={{
                    padding: 0,
                    marginBottom: index < 3 ? { xs: "100px", sm: "10px" } : "0",
                  }}
                >
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom color="grey" sx={{ marginBottom: "5px" }}>
                    {section.title}
                  </Typography>
                  {section.links.map((link, i) => (
                    <Typography variant="body2" mb={1} key={i} sx={{ whiteSpace: "nowrap" }}>
                      <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
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

      <Box mt={0} display="flex" justifyContent={{ xs: "center", md: "space-between" }} alignItems="center" flexWrap="wrap" sx={{ backgroundColor: "white", borderTop: "1px solid rgba(255, 255, 255, 0.2)", pt: 2, padding: "1rem 0", width: "100%", boxSizing: "border-box", minHeight: "50px", paddingTop: "10px" }}>
        <Typography variant="body2" sx={{ color: "#033333", paddingLeft: "5rem", paddingRight: "5rem", flexGrow: 1, textAlign: "left" }}>
          ©2023 Estatein. AllRightsReserved. <Link href="#" color="inherit" sx={{ textDecoration: "none", marginLeft: "1rem" }}>Terms & Conditions</Link>
        </Typography>
        <Box sx={{ display: "flex", gap: "0.8rem", paddingRight: { xs: "0", md: "5rem" }, justifyContent: "flex-end" }}>
          {["Button.png", "Button2.png", "Button3.png", "Button4.png"].map((icon, i) => (
            <Box key={i} sx={{ padding: "0rem", borderRadius: "50%" }}>
              <img src={`/assets/${icon}`} alt="Social Media Icon" />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Footer;
