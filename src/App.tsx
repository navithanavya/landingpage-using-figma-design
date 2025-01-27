// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer'; // Import the Footer component
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Header />

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              padding: '2rem',
              backgroundColor: '#f5f5f5',
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Other routes */}
            </Routes>
          </Box>

          <Footer /> {/* Render the Footer component here */}
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;