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
  Snackbar,
  Alert,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function Register() {
  useEffect(() => {
    setIsClient(true);
    setAuth(require("../lib/firebase/index.jsx").auth);
  }, []);

  const [isClient, setIsClient] = useState(false);
  const [auth, setAuth] = useState(null);
  const [snackMsg, setSnackMsg] = useState(null);
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
          setSnackMsg("Signed in successfully!");
          setTimeout(() => router.push(`/dashboard`), 2000);
          setOpenSnackbar(true);
        })
        .catch((error) => {
          // Handle errors during sign-in
          console.error("Error signing in with Google:", error);
          setSnackMsg("Error signing in with Google!");
          setOpenSnackbar(true);
        });
    }
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      ).catch((err) => console.log(err));
      await sendEmailVerification(auth.currentUser).catch((err) =>
        console.log(err)
      );
      await updateProfile(auth.currentUser, { displayName: data.name }).catch(
        (err) => console.log(err)
      );
      router.push("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Box>
      <CardMedia
        component="img"
        height="240"
        image="/registeration2.jpg"
        alt="Registeration"
      />
      <Box backgroundColor="#0E4B17" align="center" padding="10px 0px">
        <Typography variant="h7" fontWeight="bold" color="white">
          Welcome to Our Community
        </Typography>
      </Box>
      <Paper>
        <Typography
          variant="body1"
          align="center"
          padding="10px 15px"
          color="#0E4B17"
        >
          Knowledge is power, community is strength and positive attitude is
          everything.
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
            Sign Up with Google
          </Button>
          <Typography align="center" color="grey">
            or
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              fullWidth
              size="small"
              sx={{ marginBottom: "10px" }}
              label="Name"
              {...register("name", { required: "Name is required", maxLength: 20 })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <TextField
              fullWidth
              size="small"
              sx={{ marginBottom: "10px" }}
              label="Your Email"
              type="email"
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              fullWidth
              size="small"
              sx={{ marginBottom: "10px" }}
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
