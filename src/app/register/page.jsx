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
  CardActions,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    watch,
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
          Please register to use our services. <br/>All
          terms and conditions applied.
        </Typography>
      </Paper>
      <Box padding="20px">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography
                variant="h7"
                padding="0px 25px"
                color="#2e7d32"
                fontWeight="bold"
              >
                New Member
              </Typography>
            </Grid>
          </Grid>
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
                label="Your Email"
                type="email"
                {...register("confirm_password", {
                  required: true,
                  validate: (val) => {
                    if (watch("password") != val) {
                      return "Your passwords do no match";
                    }
                  },
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                {...register("email", { required: "Password is required" })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Grid>
            <Grid item xs={12} padding="0px 25px">
              <Button
                align="right"
                type="submit"
                variant="contained"
                color="success"
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}
