



import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Button } from "@mui/material";
import data from "../data/data.json";
import { motion } from "framer-motion"; // For animation
import { useInView } from "react-intersection-observer"; // For scroll-triggered animations
import "../styles/DashboardPage.css"; // Import the separate CSS file

const DashboardPage: React.FC = () => {
  const { features, cta } = data.dashboard;

  return (
    <Box className="dashboard-container">
      <Typography
        variant="h3"
        className="dashboard-title"
        sx={{ mb: 4 }}
      >
        Dashboard Features
      </Typography>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="features-list"
      >
        <List>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.3 }} // Staggered animations
              className="feature-item"
            >
              <ListItem>
                <ListItemText primary={feature} />
              </ListItem>
            </motion.div>
          ))}
        </List>
      </motion.div>

      <Box textAlign="center" sx={{ mt: 4 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: features.length * 0.3 }}
        >
          <Button variant="contained" color="primary">
            {cta}
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default DashboardPage;


