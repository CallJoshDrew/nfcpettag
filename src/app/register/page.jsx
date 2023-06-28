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
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
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
          Please register/sign in to use our services. <br />
          All terms and conditions applied.
        </Typography>
      </Paper>
      <Box padding="20px">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <Typography variant="h7" color="#2e7d32" fontWeight="bold">
              New Member
            </Typography>
          </Grid>
          <Grid
            container
            item
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1.5}
          >
            <Grid item>
              <Button variant="contained" onClick={handleGoogle}>
                Sign in with Google Account
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="error" onClick={handleApple}>
                Sign in with Apple Account/ID
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

// <Grid
//   container
//   justifyContent="center"
//   alignItems="center"
//   alignContent="center"
//   spacing={2}
//   padding="10px 20px"
// >
//   <Grid item xs={12}>
//     <TextField
//       fullWidth
//       label="Your Email"
//       type="email"
//       {...register("confirm_password", {
//         required: true,
//         validate: (val) => {
//           if (watch("password") != val) {
//             return "Your passwords do no match";
//           }
//         },
//       })}
//     />
//   </Grid>
//   <Grid item xs={12}>
//     <TextField
//       fullWidth
//       label="Your Password"
//       type="password"
//       {...register("password", {
//         required: "Password is required",
//       })}
//       error={!!errors.password}
//       helperText={errors.password?.message}
//     />
//   </Grid>
//   <Grid item xs={12}>
//     <TextField
//       fullWidth
//       label="Confirm Password"
//       type="password"
//       {...register("email", { required: "Password is required" })}
//       error={!!errors.password}
//       helperText={errors.password?.message}
//     />
//   </Grid>
// </Grid>;
