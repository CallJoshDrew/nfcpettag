"use client";
import {
  TextField,
  Button,
  Stack,
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Paper,
  CardActions,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
export default function Register() {
  const [isClient, setIsClient] = useState(false);
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    setIsClient(true);
    setAuth(require("../../../FirebaseConfig").auth);
  }, []);

  const handleGoogle = (e) => {
    if (isClient) {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // Handle the successful sign-in
          console.log("Signed in successfully:", result.user);
        })
        .catch((error) => {
          // Handle errors during sign-in
          console.error("Error signing in with Google:", error);
        });
    }
  };
  const handleApple = (e) => {};
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Box>
      <CardMedia
        component="img"
        height="240"
        image="/registeration.jpg"
        alt="Registeration"
      />
      <Box backgroundColor="#0E4B17" align="center" padding="10px 0px">
        <Typography variant="h7" fontWeight="bold" color="white">
          Welcome to Our Communities!
        </Typography>
      </Box>
      <Paper>
        <Typography variant="body1" align="center" padding="10px 15px">
          Please sign in/register to use our services. <br />
          All terms and conditions applied.
        </Typography>
      </Paper>
      <Box padding="20px 50px">
        <Stack spacing={1}>
          <Typography
            align="center"
            variant="h7"
            color="#2e7d32"
            fontWeight="bold"
          >
            New Member
          </Typography>
          <Button
            fullWidth
            variant="contained"
            onClick={handleGoogle}
            startIcon={<GoogleIcon fontSize="small" />}
            size="large"
          >
            Sign in with Google
          </Button>
          <Typography align="center" color="grey">
            or
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              fullWidth
              size="small"
              sx={{marginBottom:"10px"}}
              label="Your Email"
              type="email"
              {...register("email", { required: "Email is required" })}
                error={!!errors.email}
                helperText={errors.email?.message}
            />
            <TextField
              fullWidth
              size="small"
              sx={{marginBottom:"10px"}}
              label="Your Password"
              type="password"
              {...register("password", {
                required: "Password is required",
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button fullWidth type="submit" variant="contained" color="success">
                Register
              </Button>
          </form>
        </Stack>
      </Box>
    </Box>
  );
}
