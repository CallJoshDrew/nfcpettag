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
import Avatar from "@mui/material/Avatar";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Profile() {
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
    >
      <Typography variant="h6" margin="20px 10px" padding="0 10px">
        Personal Info
      </Typography>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        alignContent="center"
        spacing={2}
        padding="10px 20px"
      >
        <Grid item xs={3}>
          <Avatar
            sx={{ width: 50, height: 50, border: 0.5, borderColor: "black" }}
            variant="rounded"
            src="./profile1.png"
          ></Avatar>
        </Grid>
        <Grid item xs={9}>
          <TextField id="profile name" label="Name" fullWidth />
        </Grid>
        <Grid item xs={3}>
          <Typography>Email</Typography>
        </Grid>
        <Grid item xs={9}>
          <TextField id="email" label="Email" fullWidth />
        </Grid>
        <Grid item xs={3}>
          <Typography>Password</Typography>
        </Grid>
        <Grid item xs={9}>
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
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        padding="0px 20px"
      >
        <Grid item xs={9} align="right">
          <Button
            variant="contained"
            href="./"
            size="small"
            onClick={handleSave}
            sx={{ padding: "8px 15px", marginTop: "10px" }}
          >
            Save
          </Button>
        </Grid>
        <Grid item xs={3} align="left">
          <Button
            variant="contained"
            href="./"
            size="small"
            sx={{ padding: "8px 15px", marginTop: "10px" }}
          >
            Back
          </Button>
        </Grid>
      </Grid>
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
    </Box>
  );
}
