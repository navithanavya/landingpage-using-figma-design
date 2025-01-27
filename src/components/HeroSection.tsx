import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check for mobile screens

  const heroContent = { // Content for the Hero Section
    title: "Smart Water Management Solutions",
    subtitle: "with IoT and AI",
    description: "Lorem ipsum dolor sit amet consectetur. Maecenas pretium blandit luctus diam in morbi. Tellus duis amet nisl vitae. Nunc aliquam aliquam odio amet ipsum nec donec. Non pharetra ligula dis pharetra lacus accumsan aenean urna.",
  };

  return (
    <Box // Material UI's Box for layout and styling
      sx={{
        display: 'flex', // Use Flexbox for layout
        flexDirection: 'column', // Arrange items vertically
        alignItems: 'center', // Center horizontally
        justifyContent: 'center', // Center vertically
        minHeight: '60vh', // Minimum height of the Hero Section (60% of viewport height)
        padding: isMobile ? '3rem 2rem' : '6rem 4rem', // Adjust padding for mobile
        textAlign: 'center', // Center text
        backgroundColor: '#FFFFFF', // White background
      }}
    >
      <Typography // Material UI's Typography for styled text
        variant={isMobile ? 'h4' : 'h2'} // Heading size based on screen size
        sx={{
          fontWeight: 700, // Bold font weight
          marginBottom: '1rem', // Space below the title
          color: '#000080', // Dark blue text color
        }}
      >
        {heroContent.title} {/* Display the title */}
      </Typography>
      <Typography
        variant={isMobile ? 'h6' : 'h5'} // Subheading size
        sx={{
          fontWeight: 500,
          marginBottom: '2rem',
          maxWidth: isMobile ? '90%' : '70%', // Limit subtitle width on larger screens
          color: '#000080',
        }}
      >
        {heroContent.subtitle} {/* Display the subtitle */}
      </Typography>
      <Typography
        variant={isMobile ? 'body2' : 'body1'} // Paragraph text style
        sx={{
          maxWidth: '800px', // Maximum width for the description
          lineHeight: 1.7, // Line height for better readability
          color: '#008000', // Dark green text color
        }}
      >
        {heroContent.description} {/* Display the description */}
      </Typography>
    </Box>
  );
};

export default HeroSection;