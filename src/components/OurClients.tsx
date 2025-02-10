import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Grid, Button } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import '../styles/OurClients.css'; // Importing the CSS file

interface Client {
  name: string;
  description: string;
  logo: string;
}

const clients: Client[] = [
  { name: "Client 1", description: "iaculis. Eros posuere aliquam sed id eget ipsum pellentesque. Libero dis facilisi sed massa elit congue adipiscing velit commodo. Sagittis odio feugiat orci tristique quam pharetra. Sit laoreet placerat aliquet et proin.", logo: "https://via.placeholder.com/100" },
  { name: "Client 2", description: "Libero dis facilisi sed massa elit congue adipiscing velit commodo.", logo: "https://via.placeholder.com/100" },
  { name: "Client 3", description: "Sagittis odio feugiat orci tristique quam pharetra.", logo: "https://via.placeholder.com/100" },
  { name: "Client 4", description: "Sit laoreet placerat aliquet et proin.", logo: "https://via.placeholder.com/100" },
  { name: "Client 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", logo: "https://via.placeholder.com/100" },
  { name: "Client 6", description: "Pellentesque habitant morbi tristique senectus et netus.", logo: "https://via.placeholder.com/100" },
  { name: "Client 7", description: "Vestibulum ante ipsum primis in faucibus.", logo: "https://via.placeholder.com/100" },
  { name: "Client 8", description: "Curabitur vulputate diam at orci viverra, at feugiat leo vehicula.", logo: "https://via.placeholder.com/100" },
  { name: "Client 9", description: "Donec sit amet nisl at libero vehicula euismod.", logo: "https://via.placeholder.com/100" },
  { name: "Client 10", description: "Aenean non ligula non nunc malesuada fermentum.", logo: "https://via.placeholder.com/100" },
];

const OurClients: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1); // Default to 1 box for mobile

  // Adjust the number of items per page based on window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setItemsPerPage(1); // Mobile (1 box)
      } else if (window.innerWidth <= 900) {
        setItemsPerPage(2); // Tablet (2 boxes)
      } else {
        setItemsPerPage(3); // Desktop (3 boxes)
      }
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize); // Update on window resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  const filteredClients = clients;

  const handleNext = () => {
    if (startIndex + itemsPerPage < filteredClients.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <Box className="our-clients-wrapper" sx={{ textAlign: "center", padding: "50px", backgroundColor: "#F8F9FA" }}>
      <Typography variant="h4" fontWeight="bold" mb={4} sx={{ color: "#143D3C" }}>
        Our Clients
      </Typography>

      <Grid container justifyContent="center" spacing={itemsPerPage === 1 ? 0 : 3}> {/* Adjust spacing based on screen size */}
        {filteredClients.slice(startIndex, startIndex + itemsPerPage).map((client, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} className="client-card">
            <Card sx={{ borderRadius: "12px", boxShadow: 3, textAlign: "center", maxWidth: "448px", height: "563px", margin: "auto" }}>
              <CardContent sx={{ backgroundColor: "#EEEFF1", width: "448px", height: "350px" }}>
                <Typography variant="body2" color="textSecondary">
                  {client.description}
                </Typography>
              </CardContent>

              <Box sx={{ backgroundColor: "#0A3039", padding: "20px", color: "white", width: "448px", height: "213px", position: "relative" }}>
                <Box sx={{
                  position: "absolute",
                  top: "-90px",
                  width: "100px",
                  height: "120px",
                  left: "30%",
                  transform: "translateX(-50%)",
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px"
                }}>
                  <img src={client.logo} alt={client.name} width="60px" />
                </Box>
                <Typography variant="h6" sx={{ position: "absolute", bottom: "10px", width: "100%", textAlign: "center" }}>
                  {client.name}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination controls */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 5, px: 5, flexDirection: { xs: "row", sm: "row" } }}>
        <Typography variant="body2" sx={{ color: "#666", width: "100%", textAlign: "left", marginBottom: { xs: "0", sm: "0" } }}>
          {startIndex + 1} of {filteredClients.length}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", width: "100%" }}>
          <Button sx={{ minWidth: 40, mx: 0, borderRadius: "50%" }} variant="outlined" onClick={handlePrev}>
            <ArrowBack />
          </Button>
          <Button sx={{ minWidth: 40, mx: 0, borderRadius: "50%", backgroundColor: "#0A3039" }} variant="outlined" onClick={handleNext}>
            <ArrowForward />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OurClients;
