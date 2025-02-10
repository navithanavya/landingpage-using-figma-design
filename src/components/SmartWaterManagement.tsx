import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import "../styles/SmartWaterManagement.css"; // Ensure the CSS file is updated

function SmartWaterManagement() {
  // State to track screen width
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth > 768 && window.innerWidth <= 1024);

  // Update the state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box className="smart-water-container">
      
      {/* Section One: Why Smart Water Management? */}
      <Grid container className="section section-one">
        <Grid item xs={12} className="title-container">
          <h1 className="Howitworks">Why Smart Water Management?</h1>
        </Grid>

        <Grid item xs={12} sm={6} className="box">
          <img src="assets/box1.png" alt="Box 1 Image" />
        </Grid>

        <Grid item xs={12} sm={6} className="box">
  <button className="get-a-call-button">
    GetaCall
  </button>
  <img src="assets/box2.png" alt="Box 2 Image" />
</Grid>

      </Grid>

      {/* Section Two: How It Works? */}
      <Grid container className="section section-two">
        <Grid item xs={12} className="title-container">
        <h1 className="works" style={{ right: "50%" }}>How It Works?</h1>
        </Grid>

        <Grid item xs={12} sm={6} className="box">
          <img src="assets/box 3.png" alt="Box 3 Image" />
        </Grid>

        <Grid item xs={12} sm={6} className="box">
          <img src="assets/box4.png" alt="Box 4 Image" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default SmartWaterManagement;
