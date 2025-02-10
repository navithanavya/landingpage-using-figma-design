// src/App.tsx
import React from 'react';
import { Box } from '@mui/material';
import Header from './components/Header';
import OurSolutions from './components/OurSolutions';
import Products from './components/Products';
import OurClients from './components/OurClients';
import HeroSection from './components/HeroSection';
import SmartWaterManagement from './components/SmartWaterManagement';
import Footer from './components/Footer'; // Import the Footer component




const App: React.FC = () => {
  return (
    <Box sx={{ width: "100vw", overflowX: "hidden" }}>
      <Header />
      <SmartWaterManagement/>
      <HeroSection/>
      <OurSolutions />
      <Products/>
      <OurClients />
      <Footer />
    </Box>
  );
};

export default App;