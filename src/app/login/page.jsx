"use client";
import React from "react";
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
  Snackbar,
  Alert,
} from "@mui/material";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import GoogleIcon from "@mui/icons-material/Google";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Login() {
  const [isClient, setIsClient] = useState(false);
  const [auth, setAuth] = useState(null);
  const [snackMsg, setSnackMsg] = useState(null);

  useEffect(() => {
    setIsClient(true);
    setAuth(require("../lib/firebase/index.jsx").auth);
  }, []);
  const router = useRouter();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const vertical = "top";
  const horizontal = "center";

  const handleClosebar = () => {
    setOpenSnackbar(false);
  };
  const handleGoogle = (e) => {
    if (isClient) {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // Handle the successful sign-in
          console.log("Signed in successfully:", result.user);
          setSnackMsg("Signed in successfully!")
          setTimeout(() => router.push(`/dashboard`), 2000);
          setOpenSnackbar(true);
        })
        .catch((error) => {
          // Handle errors during sign-in
          console.error("Error signing in with Google:", error);
          setSnackMsg("Error signing in with Google!")
          setOpenSnackbar(true);
        });
    }
  };

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
  
  const handleRegister = () => {
    router.push(`/register`);
  };
  return (
    <Box>
      <CardMedia
        component="img"
        height="240"
        image="/login2.jpg"
        alt="login"
      />
      <Box backgroundColor="#0E4B17" align="center" padding="10px 0px">
        <Typography variant="h7" fontWeight="bold" color="white">
          It's not my attitude. It's my style.
        </Typography>
      </Box>
      <Paper>
        <Typography variant="body1" align="center" padding="10px 15px" color="#0E4B17">
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
            Member Sign In
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
                Sign In
              </Button>
          </form>
        </Stack>
      </Box>
      <Box padding="0 40px" marginBottom="20px">
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          padding="10px 0"
        >
          <Grid item xs={8} padding="0px 5px">
            <Typography variant="h7" color="red">
              Not yet a member?
            </Typography>
          </Grid>
          <Grid item xs={4} align="right" padding="0px 5px">
            <Link
              href="/register"
              as="/register"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button variant="outlined" color="success" size="small">
                Register
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Card onClick={handleRegister}>
          <Grid
            container
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
            padding="10px 15px"
          >
            <Grid item xs={6}>
              <Typography variant="body1" color="text.secondary">
                After purchased your first NFC Pet Tag, please register to use
                it.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/mypet.jpg"
                  alt="New Member Registeration"
                  sx={{ borderRadius: "5px" }}
                />
              </CardActionArea>
            </Grid>
          </Grid>
        </Card>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleClosebar}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          {snackMsg}
        </Alert>
      </Snackbar>
    </Box>
  );
}
