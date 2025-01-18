



import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import data from "../data/data.json";
import "../styles/Header.css"; // Importing the CSS file

const Header: React.FC = () => {
  const { logo, navigation } = data.header;

  return (
    <AppBar position="sticky" className="header-appbar">
      <Toolbar className="header-toolbar">
        <Typography variant="h6" className="header-logo">
          {logo}
        </Typography>
        <div className="header-navigation">
          {navigation.map((item, index) => (
            <Button
              key={index}
              className="header-button"
              color="inherit"
              component={Link}
              to={item.path}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
