


import React from "react";
import { Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion"; // For animations
import "../styles/SmartWaterMgmt.css";

interface Benefit {
  name: string;
  image: string;
}

interface SmartWaterMgmtProps {
  title: string;
  content: string;
  benefits?: Benefit[];
}

const SmartWaterMgmt: React.FC<SmartWaterMgmtProps> = ({ title, content, benefits = [] }) => {
  return (
    <section className="smart-water-mgmt">
      <Typography variant="h4" gutterBottom className="smart-water-title">
        {title}
      </Typography>
      <Typography variant="h6" paragraph className="smart-water-content">
        {content}
      </Typography>
      <Grid container spacing={4} className="benefits-grid">
        {benefits.map((benefit, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }} // Start hidden and offset
              whileInView={{ opacity: 1, y: 0 }} // Animate into view
              transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered delay
              viewport={{ once: true }} // Animate once when in view
              className="motion-card"
            >
              <Card className="benefit-card">
                <CardMedia
                  component="img"
                  height="140"
                  image={
                    benefit.image ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_krPG8_7LrZRdrdrms6cDYfugMF6rNrMXQA&s" // Placeholder image
                  }
                  alt={benefit.name}
                  className="benefit-image"
                />
                <CardContent>
                  <Typography variant="h6" className="benefit-name">
                    {benefit.name}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default SmartWaterMgmt;
