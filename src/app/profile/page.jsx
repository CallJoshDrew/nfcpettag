"use client";

import React from "react";

import {
  Alert,
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import Footer from "../components/FooterBar";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import PhotoIcon from "@mui/icons-material/Photo";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import Navbar from "../components/HeaderNav";

export default function Profile() {
  const page = "profile";
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const vertical = "top";
  const horizontal = "center";

  const handleClosebar = () => {
    setOpenSnackbar(false);
  };
  const handleSave = async () => {
    setTimeout(() => console.log("Saved"), 1000);
    setOpenSnackbar(true);
  };
  return (
    <Box
      alignItems="center"
      justifyContent="flex-start"
      direction="column"
      margin="90px 0 90px"
    >
      <Navbar />
      <Typography
        variant="h6"
        fontWeight="bold"
        margin="20px 10px"
        padding="0 20px"
      >
        Personal Info
      </Typography>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        alignContent="center"
        spacing={2}
        padding="10px 30px"
      >
        <Grid item xs={12} align="left">
          <Avatar
            sx={{ width: 100, height: 100, border: 0.5, borderColor: "black" }}
            variant="rounded"
            src="./profile1.png"
          ></Avatar>
        </Grid>
        <Grid item xs={2} marginTop="10px">
          <PhotoCameraIcon fontSize="large" />
        </Grid>
        <Grid item xs={10}>
          <Button
            variant="contained"
            size="small"
            sx={{ padding: "8px 15px" }}
            color="success"
          >
            Change Photo
          </Button>
        </Grid>
        <Grid item xs={2}>
          <DriveFileRenameOutlineIcon fontSize="large" />
        </Grid>
        <Grid item xs={10}>
          <TextField id="Name" label="Name" fullWidth />
        </Grid>
        <Grid item xs={2}>
          <EmailIcon fontSize="large" />
        </Grid>
        <Grid item xs={10}>
          <TextField id="email" label="Email" fullWidth />
        </Grid>
        <Grid item xs={2}>
          <PasswordIcon fontSize="large" />
        </Grid>
        <Grid item xs={10}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Grid>
      </Grid>
      <Box padding="0px 30px" marginTop="5px" align="right">
        <Button
          variant="contained"
          href="./"
          size="small"
          onClick={handleSave}
          sx={{ padding: "8px 15px" }}
          color="success"
        >
          Save
        </Button>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={1000}
        onClose={handleClosebar}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          You have successfully saved!
        </Alert>
      </Snackbar>
      <Footer page={page} sx={{ zIndex: 100 }} />
    </Box>
  );
}
