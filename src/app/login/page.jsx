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
      <CardMedia component="img" height="240" image="/cat.jpg" alt="Dog" />

      {/* <Typography
        gutterBottom
        variant="h4"
        fontWeight="bold"
        align="center"
        padding="15px 0 0 "
      >
        NFC PET TAG
      </Typography> */}
      <Box backgroundColor="#0E4B17" align="center" padding="10px 0px">
        <Typography variant="h7" fontWeight="bold" color="white">
          "Lost Pet? How to return to it's owner?"
        </Typography>
      </Box>
      <Paper>
        <Typography variant="body1" align="center" padding="10px 15px">
          With our NFC Pet Tag, now you can find the pet's info
          easily. Just tag & call!
        </Typography>
      </Paper>
      <Box padding="20px">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h7" padding="0px 25px" color="#2e7d32" fontWeight="bold">
                Member Login
              </Typography>
            </Grid>
            <Grid item padding="0px 25px">
              <Button type="submit" variant="contained" color="success">
                Login
              </Button>
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
          </Grid>
        </form>
      </Box>
      <Box padding="0 40px" marginBottom="20px">
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          padding="10px 0"
        >
          <Grid item xs={6} padding="0px 5px">
            <Typography variant="h7" color="red">
              New Member?
            </Typography>
          </Grid>
          <Grid item xs={6} align="right" padding="0px 5px">
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
        <Card>
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
    </Box>
  );
}
