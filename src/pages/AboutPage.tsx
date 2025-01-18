

import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { motion } from "framer-motion"; // For animation
import { useInView } from "react-intersection-observer"; // For scroll-triggered animations
import data from "../data/data.json";
import "../styles/AboutPage.css"; // Import the separate CSS file

const AboutPage: React.FC = () => {
  const { mission, vision, team } = data.about;

  // Intersection Observer hook for scroll visibility
  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% is visible
  });
  const { ref: visionRef, inView: visionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: teamRef, inView: teamInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box className="about-container">
      <motion.div
        className={`fade-in ${missionInView ? "fade-in-visible" : ""}`}
        ref={missionRef}
      >
        <Typography variant="h3" className="about-title">
          About Us
        </Typography>
        <Typography variant="h5" className="about-subtitle">
          Mission
        </Typography>
        <Typography variant="body1" className="about-paragraph">
          {mission}
        </Typography>
      </motion.div>

      <motion.div
        className={`fade-in ${visionInView ? "fade-in-visible" : ""}`}
        ref={visionRef}
      >
        <Typography variant="h5" className="about-subtitle">
          Vision
        </Typography>
        <Typography variant="body1" className="about-paragraph">
          {vision}
        </Typography>
      </motion.div>

      <motion.div
        className={`fade-in ${teamInView ? "fade-in-visible" : ""}`}
        ref={teamRef}
      >
        <Typography variant="h5" className="about-subtitle">
          Meet Our Team
        </Typography>
        <List className="about-team-list">
          {team.map((member, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${member.name} - ${member.role}`} />
            </ListItem>
          ))}
        </List>
      </motion.div>
    </Box>
  );
};

export default AboutPage;
