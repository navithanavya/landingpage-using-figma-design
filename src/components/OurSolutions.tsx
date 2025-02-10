import React from "react";
import { Container, Box, Typography } from "@mui/material";
import "../styles/OurSolutions.css"; // Import the CSS file

const solutions = [
  { title: "Industry 4.0", image: "assets/industry 2.png", description: " iaculis. Eros posuere aliquam sed id eget ipsum pellentesque. Libero dis facilisi sed massa elit congue adipiscing velit commodo. Sagittis odio feugiat orci tristique quam pharetra. Sit laoreet placerat aliquet et proin.Lorem ipsum dolor sit amet consectetur. Neque facilisis in eget tortor. Sit et et sodales scelerisque. Adipiscing et nisi vitae diam. Egestas nisl condimentum ma" },
  { title: "Cities", image: "assets/city-buildings 2.png", description: " iaculis. Eros posuere aliquam sed id eget ipsum pellentesque. Libero dis facilisi sed massa elit congue adipiscing velit commodo. Sagittis odio feugiat orci tristique quam pharetra. Sit laoreet placerat aliquet et proin.Lorem ipsum dolor sit amet consectetur. Neque facilisis in eget tortor. Sit et et sodales scelerisque. Adipiscing et nisi vitae diam. Egestas nisl condimentum ma" },
  { title: "Hospitals", image: "assets/hospital.png", description: " iaculis. Eros posuere aliquam sed id eget ipsum pellentesque. Libero dis facilisi sed massa elit congue adipiscing velit commodo. Sagittis odio feugiat orci tristique quam pharetra. Sit laoreet placerat aliquet et proin.Lorem ipsum dolor sit amet consectetur. Neque facilisis in eget tortor. Sit et et sodales scelerisque. Adipiscing et nisi vitae diam. Egestas nisl condimentum ma" },
  { title: "Housing Societies",image: "assets/house 2.png", description: " iaculis. Eros posuere aliquam sed id eget ipsum pellentesque. Libero dis facilisi sed massa elit congue adipiscing velit commodo. Sagittis odio feugiat orci tristique quam pharetra. Sit laoreet placerat aliquet et proin.Lorem ipsum dolor sit amet consectetur. Neque facilisis in eget tortor. Sit et et sodales scelerisque. Adipiscing et nisi vitae diam. Egestas nisl condimentum ma" },
  { title: "Farming", image: "assets/farming.png", description: " iaculis. Eros posuere aliquam sed id eget ipsum pellentesque. Libero dis facilisi sed massa elit congue adipiscing velit commodo. Sagittis odio feugiat orci tristique quam pharetra. Sit laoreet placerat aliquet et proin.Lorem ipsum dolor sit amet consectetur. Neque facilisis in eget tortor. Sit et et sodales scelerisque. Adipiscing et nisi vitae diam. Egestas nisl condimentum ma" },
];

const OurSolutions: React.FC = () => {
  return (
    <Container sx={{ paddingTop: "40px", paddingBottom: "40px" }}>
      <Typography variant="h4" gutterBottom >
        Our Solutions
      </Typography>

      <Box sx={{  flexDirection: "column" }}>
        {solutions.map((solution, index) => (
          <Box
          key={index}
          className="solution-box"
        >
          <img src={solution.image} alt={solution.title} className="solution-image" />
          <div className="solution-content"> 
            <Typography variant="h6">{solution.title}</Typography>
            <Typography variant="body2">{solution.description}</Typography>
          </div>
        </Box>
        
        
        ))}
      </Box>
    </Container>
  );
};

export default OurSolutions;
