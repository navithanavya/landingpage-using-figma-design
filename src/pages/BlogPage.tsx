

import React from "react";
import { Box, Typography, Card, CardContent, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // For scroll-triggered animations
import data from "../data/data.json";
import "../styles/BlogPage.css"; // Import the separate CSS file

const BlogPage: React.FC = () => {
  const blogs = data.blog;

  if (!blogs || blogs.length === 0) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" textAlign="center">
          No blogs available at the moment.
        </Typography>
      </Box>
    );
  }

  return (
    <Box className="blog-container">
      <motion.div
        className="fade-in"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h3" className="blog-title">
          Blog
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {blogs.map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            {/* Using useInView for scroll-triggered animation */}
            <BlogCard blog={blog} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

interface BlogCardProps {
  blog: {
    title: string;
    excerpt: string;
    link: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation once when the card comes into view
    threshold: 0.2, // Trigger when 20% of the card is visible
  });

  return (
    <motion.div
      ref={ref}
      className={`fade-in ${inView ? "fade-in-visible" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1 }}
    >
      <Card className="blog-card">
        <CardContent>
          <Typography variant="h5">{blog.title}</Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {blog.excerpt}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-button"
          >
            Read More
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BlogPage;
