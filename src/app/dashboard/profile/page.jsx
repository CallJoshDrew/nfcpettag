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
  OutlinedInput,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import HeaderNav from "../../components/HeaderNav";
import Footer from "../../components/FooterBar";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import PhotoIcon from "@mui/icons-material/Photo";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";

import { authContext } from "../../lib/store/authContext";
import Login from "../../login/page";

export default function Profile() {
  const { user } = useContext(authContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [photoURL, setPhotoURL] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.displayName);
      setEmail(user.email);
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  const page = "./dashboard/profile";
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const vertical = "top";
  const horizontal = "center";

  const handleClosebar = () => {
    setOpenSnackbar(false);
  };
  const handleSave = async () => {
    setTimeout(() => console.log("Saved"), 1000);
    setOpenSnackbar(true);
  };
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setPhotoURL(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    console.log(user.photoURL);
    e.preventDefault();
    let userObj = { displayName: name, email: email };
    let imagesObj = { uName: name };

    if (file) {
      const imageName = new Date().getTime() + file?.name;
      const url = await uploadFile(file, `profile/${user?.uid}/${imageName}`);

      // if (user?.photoURL) {
      //   const prevImage = user?.photoURL
      //     ?.split(`${user?.uid}%2F`)[1]
      //     .split('?')[0];
      //   if (prevImage) {
      //     try {
      //       await deleteFile(`profile/${user?.uid}/${prevImage}`);
      //     } catch (error) {
      //       console.log(error);
      //     }
      //   }
      // }

      userObj = { ...userObj, photoURL: url };
      imagesObj = { ...imagesObj, uPhoto: url };
    }

    await updateProfile(user, userObj);
    await updateUserRecords(user?.uid, imagesObj);
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
                  sx={{
                    width: 100,
                    height: 100,
                    border: 0.5,
                    borderColor: "black",
                  }}
                  variant="rounded"
                  src={photoURL}
                ></Avatar>
              </Grid>
              {/* <Grid item xs={2} marginTop="10px">
                <PhotoCameraIcon fontSize="large" />
              </Grid>
              <Grid item xs={10}>
              <input
                accept="image/*"
                id="profilePhoto"
                type="file"
                style={{ display: "none" }}
                onChange={handleChange}
              />
                <Button
                  variant="contained"
                  size="small"
                  sx={{ padding: "8px 15px" }}
                  color="success"
                >
                  Change Photo
                </Button>
              </Grid> */}
              <Grid item xs={2}>
                <DriveFileRenameOutlineIcon fontSize="large" />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  id="Name"
                  label={name}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <EmailIcon fontSize="large" />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  id="email"
                  label={email}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
            </Grid>
            {/* <Box padding="0px 30px" marginTop="5px" align="right">
              <Button
                variant="contained"
                size="small"
                onClick={handleSave}
                sx={{ padding: "8px 15px" }}
                color="success"
              >
                Save
              </Button>
            </Box> */}
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
        </>
      )}
    </>
  );
}
