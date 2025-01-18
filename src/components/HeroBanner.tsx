

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // For scroll-triggered animations
import "../styles/HeroBanner.css";

const HeroBanner: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  return (
    <Box
      ref={ref}
      className="hero-banner"
      style={{
        backgroundImage: `url('https://cdn.dribbble.com/users/806561/screenshots/17456061/media/4d4272c098199594c612fc9367d1702f.jpg?resize=1000x750&vertical=center')`,
      }}
    >
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <Typography variant="h2" className="hero-headline">
        Smart Water Management Solutions with IoT and AI 
        </Typography>
        <Typography variant="h5" className="hero-subheadline">
        Empowering sustainable water usage across industries 
        </Typography>
        <Button variant="contained" color="secondary" className="hero-cta">
          Call to Action
        </Button>
      </motion.div>
    </Box>
  );
};

export default HeroBanner;
