import React from "react";
import "./signup.css";
import { useFormik } from "formik";
import { TextField, Box, Button, Typography, Container } from "@mui/material";

import * as Yup from "yup";

const SignupForm = () => {
  const { handleBlur, handleSubmit, handleChange, values, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .min(8, "Username must be between 8 and 32 characters long.")
          .max(16, "Username must be between 8 and 32 characters long.")
          .required("Required"),
        email: Yup.string().email("Enter a valid email").required("Required"),
        password: Yup.string()
          .min(8, "Password is too short - should be 8 chars minimum.")
          .required("Required"),
        passwordConfirmation: Yup.string()
          .oneOf([Yup.ref("password")], "password didn’t match")
          .required("Required"),
      }),
      validateOnChange: false,
    });

  return (
    <Container maxWidth="xs">
      <Box component="form" className="Signup" onSubmit={handleSubmit}>
        <Typography className="title" variant="h4" component="h4">
          Sign up
        </Typography>

        <TextField
          error={touched.name && errors.name ? true : false}
          helperText={touched.name && errors.name}
          margin="normal"
          fullWidth
          size="small"
          label="Username"
          variant="outlined"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
          type="text"
          id="name"
          name="name"
        />
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
        <TextField
          error={
            touched.passwordConfirmation && errors.passwordConfirmation
              ? true
              : false
          }
          helperText={
            touched.passwordConfirmation && errors.passwordConfirmation
          }
          margin="normal"
          fullWidth
          size="small"
          label="Re-type password"
          variant="outlined"
          value={values.passwordConfirmation}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          id="passwordConfirmation"
          name="passwordConfirmation"
        />
        <Button
          className="submit-button"
          fullWidth
          size="medium"
          variant="contained"
          type="submit"
        >
          Sign up
        </Button>
      </Box>
    </Container>
  );
};

export default SignupForm;
