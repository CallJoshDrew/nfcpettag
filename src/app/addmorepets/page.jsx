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
import PetsIcon from "@mui/icons-material/Pets";
import DescriptionIcon from "@mui/icons-material/Description";
import CakeIcon from "@mui/icons-material/Cake";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import LinkIcon from "@mui/icons-material/Link";

export default function AddMorePets() {
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
      margin="90px 0 70px"
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        margin="20px 10px"
        padding="0 10px"
      >
        Please fill in details of your pet
      </Typography>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        spacing={2}
        padding="10px 20px"
      >
        <Grid item xs={2}>
          <PetsIcon />
        </Grid>
        <Grid item xs={10}>
          <TextField id="pet name" label="Pet Name" fullWidth />
        </Grid>
        <Grid item xs={2}>
          <DescriptionIcon />
        </Grid>
        <Grid item xs={10}>
          <TextField id="Breed/Type" label="Breed/Type" fullWidth />
        </Grid>
        <Grid item xs={2}>
          <CakeIcon />
        </Grid>
        <Grid item xs={10}>
          <TextField id="Birthday" label="Birthday" fullWidth />
        </Grid>
        <Grid item xs={2}>
          <PetsIcon />
        </Grid>
        <Grid item xs={10}>
          <TextField id="Gender" label="Gender" fullWidth />
        </Grid>
        <Grid item xs={2}>
          <LocalHospitalIcon />
        </Grid>
        <Grid item xs={10}>
          <TextField
            id="Sprayed or Neutered"
            label="Sprayed or Neutered"
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <AddAPhotoIcon />
        </Grid>
        <Grid item xs={10}>
          <Button
            variant="contained"
            size="small"
            sx={{ padding: "8px 15px", marginTop: "10px" }}
          >
            Add Photo
          </Button>
        </Grid>
        <Grid item xs={2}>
          <LinkIcon />
        </Grid>
        <Grid item xs={10}>
          <Button
            variant="contained"
            size="small"
            sx={{ padding: "8px 15px", marginTop: "10px" }}
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
            https:/nfcpettag.com/janet/chlore
          </Typography>
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
    </Box>
  );
}
