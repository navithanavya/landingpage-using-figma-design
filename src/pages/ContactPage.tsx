

import React from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import data from "../data/data.json";
import "../styles/ContactPage.css"; // Import the CSS file for styling

const ContactPage: React.FC = () => {
  const { formFields, support } = data.contact;

  return (
    <Box className="contact-container">
      <Typography variant="h3" className="contact-title" sx={{ mb: 4 }}>
        Contact Us
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" className="contact-section-title" sx={{ mb: 2 }}>
            Get in Touch
          </Typography>
          <form>
            {formFields.map((field, index) => (
              <TextField
                key={index}
                label={field}
                fullWidth
                margin="normal"
                variant="outlined"
                className="contact-input"
              />
            ))}
            <Button variant="contained" color="primary" className="contact-submit-button">
              Submit
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" className="contact-section-title" sx={{ mb: 2 }}>
            Support Information
          </Typography>
          <Typography variant="body1">Phone: {support.phone}</Typography>
          <Typography variant="body1">Email: {support.email}</Typography>
          <Typography variant="body1">Address: {support.address}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactPage;
