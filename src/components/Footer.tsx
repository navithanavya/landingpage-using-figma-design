import React from 'react';
import { Box, Typography } from '@mui/material';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <Box className="footer">
      <Typography variant="body2" className="footer-text">
        © 2025 Landing Page. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
