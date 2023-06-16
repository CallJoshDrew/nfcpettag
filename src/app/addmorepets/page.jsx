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
  MenuItem,
  OutlinedInput,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";

import Footer from "../components/Footer";
import Avatar from "@mui/material/Avatar";
import PetsIcon from "@mui/icons-material/Pets";
import StarIcon from "@mui/icons-material/Star";
import DescriptionIcon from "@mui/icons-material/Description";
import CakeIcon from "@mui/icons-material/Cake";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import LinkIcon from "@mui/icons-material/Link";
import Navbar from "../components/Navbar";

const species = [
  {
    value: "Dog",
    label: "Dog",
  },
  {
    value: "Cat",
    label: "Cat",
  },
];
const gender = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];

const spayed = [
  {
    value: "Yes",
    label: "Yes",
  },
  {
    value: "No",
    label: "No",
  },
];

export default function AddMorePets() {
  const page = "addmorepets";
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
        Please fill in details of your pet
      </Typography>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        spacing={2}
        padding="10px 30px"
      >
        <Grid item xs={2}>
          <PetsIcon fontSize="large" />
        </Grid>
        <Grid item xs={10}>
          <TextField id="pet name" label="Pet Name" fullWidth />
        </Grid>
        <Grid item xs={2}>
          <Avatar
            sx={{ width: 33, height: 33, backgroundColor: "black" }}
            variant="rounded"
          />
        </Grid>
        <Grid item xs={10}>
          <Button variant="contained" size="small" sx={{ padding: "8px 15px" }}>
            Add Photo
          </Button>
        </Grid>
        <Grid item xs={2}>
          <DescriptionIcon fontSize="large" />
        </Grid>
        <Grid item xs={10}>
          <TextField id="Breed/Type" label="Breed/Type" fullWidth />
        </Grid>
        <Grid item xs={2}>
          <StarIcon fontSize="large" />
        </Grid>
        <Grid item xs={10}>
          <TextField
            id="outlined-select-species"
            select
            label="Species"
            defaultValue=""
            fullWidth
          >
            {species.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={2}>
          <CakeIcon fontSize="large" />
        </Grid>
        <Grid item xs={10}>
          <TextField id="Birthday" label="Birthday" fullWidth />
        </Grid>
        <Grid item xs={2}>
          <PetsIcon fontSize="large" />
        </Grid>
        <Grid item xs={10}>
          <TextField
            id="outlined-select-species"
            select
            label="Gender"
            defaultValue=""
            fullWidth
          >
            {gender.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={2}>
          <LocalHospitalIcon fontSize="large" />
        </Grid>
        <Grid item xs={10}>
          <TextField
            id="outlined-select-sprayed"
            select
            label="Spayed or Neutered"
            defaultValue=""
            fullWidth
          >
            {spayed.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={2} marginTop="5px">
          <LinkIcon fontSize="large" />
        </Grid>
        <Grid item xs={10}>
          <Button
            variant="contained"
            size="small"
            sx={{ padding: "8px 15px" }}
            fullWidth
          >
            Copy url for NFC pet tag
          </Button>
        </Grid>
        <Grid item xs={12} align="center">
          <Typography
            sx={{
              padding: "10px",
              border: 1,
              borderColor: "#0E4B17",
              borderRadius: "4px",
            }}
          >
            https://nfcpettag.com/findmypet/chlore
          </Typography>
        </Grid>
      </Grid>
      <Box padding="0px 30px" marginTop="5px" align="right">
        <Button
          variant="contained"
          href="./"
          size="small"
          onClick={handleSave}
          sx={{ padding: "8px 15px" }}
        >
          Save
        </Button>
      </Box>
      <Footer page={page} sx={{ zIndex: 100 }} />
    </Box>
  );
}
