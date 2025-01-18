import React from "react";
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion"; // For animation
import { useInView } from "react-intersection-observer"; // For scroll-triggered animations
import "../styles/Section.css"; // Import the separate CSS file

interface SectionProps {
  title: string;
  content: string;
  benefits?: string[];
  image?: string; // Image prop for the background
}

const Section: React.FC<SectionProps> = ({ title, content, benefits, image }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  return (
    <Box
  ref={ref}
  className="section-container"
  sx={{
    backgroundImage: `url(${image})`, // Set background image dynamically

    backgroundSize: "100%", // Fit the image inside the box without cropping
    backgroundPosition: "center", // Center the image
    backgroundRepeat: "no-repeat", // Prevent tiling
    padding: "2rem",
    height: "300px", // Set a fixed height to control the container size
    borderRadius: "8px", // Optional: Add rounded corners
    color: "#fff", // Ensure text contrast
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Optional: Add a shadow for better visuals
    marginBottom: "2rem",
    display: "flex", // Optional: Align content within the box
    flexDirection: "column", // Optional: Arrange content vertically
    justifyContent: "center", // Optional: Center content vertically
    alignItems: "center", // Optional: Center content horizontally
    

  }}
>
      <motion.div
        className="section-content"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 2 }}>
          {title}
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 4 }}>
          {content}
        </Typography>
        {benefits && (
          <List>
            {benefits.map((benefit, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={benefit} />
              </ListItem>
            ))}
          </List>
        )}
      </motion.div>
    </Box>
  );
};

export default Section;
