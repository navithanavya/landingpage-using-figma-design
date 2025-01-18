import React from 'react';
import { Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import '../styles/SuccessStories.css';

interface CaseStudy {
  name: string;
  description: string;
  image: string;
}

interface SuccessStoriesProps {
  title: string;
  content: string;
  caseStudies?: CaseStudy[];
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ title, content, caseStudies = [] }) => {
  return (
    <section className="success-stories">
      <Typography variant="h4" gutterBottom className="success-stories-title">
        {title}
      </Typography>
      <Typography variant="h6" paragraph className="success-stories-content">
        {content}
      </Typography>
      <Grid container spacing={4} className="success-stories-grid">
        {caseStudies.map((caseStudy, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }} // Start hidden and slightly offset
              whileInView={{ opacity: 1, y: 0 }} // Animate into view
              transition={{ duration: 0.6, delay: index * 0.2 }} // Stagger animations
              viewport={{ once: true }} // Trigger animation once
            >
              <Card className="success-stories-card">
                <CardMedia
                  component="img"
                  height="200"
                  image={caseStudy.image || 'https://via.placeholder.com/200'}
                  alt={caseStudy.name}
                  className="success-stories-image"
                />
                <CardContent>
                  <Typography variant="h6" className="success-stories-name">
                    {caseStudy.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className="success-stories-description"
                  >
                    {caseStudy.description}
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

export default SuccessStories;
