import React from "react";
import { Box, Typography, Container } from "@mui/material";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <Box className="smart-water-management-container">
      <Container maxWidth="md" className="smart-water-management-text-container">
        <Typography
          variant="h3"
          className="smart-water-management-heading"
          gutterBottom
        >
          Smart Water Management Solutions
        </Typography>
        <Typography
          variant="h5"
          className="smart-water-management-subheading"
          gutterBottom
        >
          with IoT and AI
        </Typography>
        <Typography className="smart-water-management-body">
          Lorem ipsum dolor sit amet consectetur. Maecenas pretium blandit luctus diam in
          mollis. Tellus dui amet nisi vitae. Nunc aliquam aliquam odio amet ipsum nec
          donec. Non pharetra ligula dis pharetra lacus accumsan aenean urna.
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
