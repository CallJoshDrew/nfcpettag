"use client";
import { useForm } from "react-hook-form";
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
} from "@mui/material";
import Image from "next/image";

export default function Login() {
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
    <Box alignItems="center" justifyContent="flex-start" direction="column">
      <CardMedia component="img" height="300" image="/cat.jpg" alt="Dog" />

      <Typography
        gutterBottom
        variant="h4"
        fontWeight="bold"
        align="center"
        padding="15px 0 0 "
      >
        NFC PET TAG
      </Typography>
      <Box backgroundColor="#0E4B17" align="center" padding="5px 0px">
        <Typography variant="h7" fontWeight="bold" color="white">
          "Find Your Beloved Pet Info Easily"
        </Typography>
      </Box>
        <Paper>
          <Typography variant="body1" align="center" padding="10px 15px">
            Make sure that your dogs and cats are always safe and secured with
            our latest technology NFC Pet Tags. It is easy and straightforward
            to locate lost pets, anytime.
          </Typography>
        </Paper>
      <Box padding="20px">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              alignContent="center"
              spacing={2}
              padding="10px 20px"
            >
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              </Grid>
              <Grid container item justifyContent="flex-end">
                <Grid item>
                  <Button type="submit" variant="contained" color="primary">
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
      </Box>
    </Box>
  );
}
