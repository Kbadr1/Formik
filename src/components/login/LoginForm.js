import React from "react";
import "./login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Box,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Container,
} from "@mui/material";

const LoginForm = () => {
  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string().email("Enter a valid email").required("Required"),
        password: Yup.string().required("Required"),
      }),
      validateOnChange: false,
    });

  return (
    <Container maxWidth="xs">
      <Box component="form" className="Login" onSubmit={handleSubmit}>
        <Typography className="title" variant="h4" component="h4">
          Sign in
        </Typography>

        <TextField
          error={touched.email && errors.email ? true : false}
          helperText={touched.email && errors.email}
          margin="normal"
          fullWidth
          size="small"
          label="Email"
          variant="outlined"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          id="email"
          name="email"
        />
        <TextField
          error={touched.password && errors.password ? true : false}
          helperText={touched.password && errors.password}
          margin="normal"
          fullWidth
          size="small"
          label="Password"
          variant="outlined"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          id="password"
          name="password"
        />
        <FormGroup style={{ float: "left" }}>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Remember me"
          />
        </FormGroup>
        <Button
          className="submit-button"
          fullWidth
          size="medium"
          variant="contained"
          type="submit"
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LoginForm;
