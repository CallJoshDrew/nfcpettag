"use client";

import React, { useContext, useEffect, useState } from "react";

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

import Footer from "../../../components/FooterBar";
import Avatar from "@mui/material/Avatar";
import PetsIcon from "@mui/icons-material/Pets";
import StarIcon from "@mui/icons-material/Star";
import DescriptionIcon from "@mui/icons-material/Description";
import CakeIcon from "@mui/icons-material/Cake";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import LinkIcon from "@mui/icons-material/Link";
import HeaderNav from "../../../components/HeaderNav";
import { authContext } from "../../../lib/store/authContext";
import { db } from "../../../../../FirebaseConfig";
import { doc, serverTimestamp, setDoc, getDoc } from "firebase/firestore";
import Login from "../../../login/page";
import { useParams } from "next/navigation";

const speciesType = [
  {
    value: "Dog",
    label: "Dog",
  },
  {
    value: "Cat",
    label: "Cat",
  },
];
const genderType = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];

const spayedCondition = [
  {
    value: "Yes",
    label: "Yes",
  },
  {
    value: "No",
    label: "No",
  },
];

export default function MyPet() {
  const { user } = useContext(authContext);
  const page = "./dashboard/mypets/";
  const params = useParams();
  // console.log(params.id);
  const [petName, setPetName] = useState("");
  const [breed, setBreed] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [spayed, setSpayed] = useState("");

  const [snackMsg, setSnackMsg] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const vertical = "top";
  const horizontal = "center";

  useEffect(() => {
    if (!user?.uid) return;
    const petRef = doc(db, "myPets", user.uid, "pet", params.id);
    const fetchPet = async () => {
      const petSnap = await getDoc(petRef);
      if (petSnap.exists()) {
        setPetName(petSnap.data().petName);
        setBreed(petSnap.data().breed);
        setSpecies(petSnap.data().species);
        setGender(petSnap.data().gender);
        setSpayed(petSnap.data().spayed);
      } else {
        console.log("No such document!");
      }
    };
    fetchPet();
  }, [user?.uid]);

  const handleClosebar = () => {
    setOpenSnackbar(false);
  };
  const handleCopy = async () => {
    navigator.clipboard.writeText(`https://nfcpettag.com/findmypet/${petName}`);
    setSnackMsg(`You have copied the URL of ${petName}!`);
    setTimeout(
      () => console.log(`copied: https://nfcpettag.com/findmypet/${petName}`),
      1000
    );
    setOpenSnackbar(true);
  };
  const handleSpecies = (event) => {
    setSpecies(event.target.value);
  };
  const handleGender = (event) => {
    setGender(event.target.value);
  };
  const handleSpayed = (event) => {
    setSpayed(event.target.value);
    console.log(petName, breed, species, gender, spayed, user.uid);
  };
  const handleSave = async (e) => {
    e.preventDefault();
    await setDoc(
      doc(db, "myPets", user.uid, "pet", `${petName}`),
      {
        petName,
        breed,
        species,
        gender,
        spayed,
        createdAt: serverTimestamp(),
      },
      { merge: true }
    );
    setSnackMsg("You have successfully saved!");
    setTimeout(() => console.log("Saved"), 1000);
    setOpenSnackbar(true);
  };
  return (
    <>
      {!user && <Login />}
      {user && (
        <>
          <HeaderNav />
          <Box
            alignItems="center"
            justifyContent="flex-start"
            direction="column"
            margin="70px 0 90px"
          >
            {/* <Typography
              variant="h6"
              fontWeight="bold"
              margin="20px 10px"
              padding="0 20px"
            >
              My Pet:  {petName}
            </Typography> */}

            <Grid
              container
              justifyContent="center"
              alignItems="center"
              alignContent="center"
              spacing={2}
              padding="10px 30px"
            >
              {/* <Grid item xs={2}>
                <PetsIcon fontSize="large" />
              </Grid>
              <Grid item xs={10}>
                <TextField id="pet name" label={petName} fullWidth onInput={(e) => setPetName(e.target.value)}/>
              </Grid> */}
              {/* <Grid item xs={2}>
                <Avatar
                  sx={{ width: 33, height: 33, backgroundColor: "black" }}
                  variant="rounded"
                />
              </Grid>
              <Grid item xs={10}>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ padding: "8px 15px" }}
                  color="success"
                >
                  Add Photo
                </Button>
              </Grid> */}
              {/* <Grid item xs={2}>
                <Avatar sx={{ bgcolor: "green" }} variant="rounded">
                  <PetsIcon />
                </Avatar>
              </Grid> */}
              <Grid item xs={4}>
                <Typography>My Pet</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>{petName}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>Breed</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="Breed/Type"
                  label={breed}
                  fullWidth
                  onInput={(e) => setBreed(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography>Species</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="outlined-select-species"
                  select
                  label={species}
                  onChange={handleSpecies}
                  defaultValue=""
                  fullWidth
                >
                  {speciesType.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              {/* <Grid item xs={2}>
                <CakeIcon fontSize="large" />
              </Grid>
              <Grid item xs={10}>
                <TextField id="Birthday" label="Birthday" fullWidth />
              </Grid> */}
              <Grid item xs={4}>
                <Typography>Gender</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="outlined-select-gender"
                  select
                  label={gender}
                  onChange={handleGender}
                  defaultValue=""
                  fullWidth
                >
                  {genderType.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={4}>
                <Typography>Spayed or Neutered</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="outlined-select-spayed"
                  select
                  label={spayed}
                  onChange={handleSpayed}
                  defaultValue=""
                  fullWidth
                >
                  {spayedCondition.map((option) => (
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
                  onClick={handleCopy}
                  color="success"
                  fullWidth
                >
                  Copy url for NFC pet tag
                </Button>
              </Grid>
              {/* <Grid item xs={12} align="center">
                <Typography
                  sx={{
                    padding: "10px",
                    border: 1,
                    borderColor: "#0E4B17",
                    borderRadius: "4px",
                  }}
                >
                  https://nfcpettag.com/findmypet/{petName}
                </Typography>
              </Grid> */}
            </Grid>
            <Box padding="0px 30px" marginTop="5px" align="right">
              <Button
                variant="contained"
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
                {snackMsg}
              </Alert>
            </Snackbar>
            <Footer page={page} sx={{ zIndex: 100 }} />
          </Box>
        </>
      )}
    </>
  );
}
