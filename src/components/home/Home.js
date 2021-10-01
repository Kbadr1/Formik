import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "./home.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Box component="div" className="Home">
      <Typography variant="h2" component="h2">
        Formik
      </Typography>
      <Typography variant="span" component="span">
        Signup and login form using formik and yup validation
      </Typography>
      <Typography variant="h6" component="h6">
        Click buttons to check forms.
      </Typography>
      <Box component="div" className="buttons">
        <Button variant="contained" size="large" color="secondary">
          <Link to="/signup">Signup</Link>
        </Button>
        <Button variant="contained" size="large">
          <Link to="/login">Login</Link>
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
