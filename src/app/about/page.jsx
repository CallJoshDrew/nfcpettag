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
import Navbar from "../components/HeaderNav";

export default function About() {
  const page="about";
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
        About Us
      </Typography>
      <Footer page={page} sx={{ zIndex: 100 }} />
    </Box>
  );
}
