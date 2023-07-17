"use client";

import React, { useEffect, useState } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import PetsIcon from "@mui/icons-material/Pets";
import { Box, Grid } from "@mui/material";
import { useParams, useSearchParams } from "next/navigation";
import { doc, serverTimestamp, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../../../FirebaseConfig";

export default function FindMyPet() {
  // findmypet[slug]
  const params = useParams();
  // findmypet[slug]?id=feafewafewfaewfew
  const searchParams = useSearchParams();
  const searchID = searchParams.get("id");
  console.log(searchID);

  const [petName, setPetName] = useState("");
  const [breed, setBreed] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [spayed, setSpayed] = useState("");
  const [birthday, setBirthday] = useState("");
  const [todos, setTodos] = useState([]);

  const petRef = doc(db, "myPets", searchID, "pet", params.id);
  const fetchPet = async () => {
    const petSnap = await getDoc(petRef);
    if (petSnap.exists()) {
      setPetName(petSnap.data().petName);
      setBreed(petSnap.data().breed);
      setSpecies(petSnap.data().species);
      setGender(petSnap.data().gender);
      setSpayed(petSnap.data().spayed);
      setBirthday(petSnap.data().birthday);
    } else {
      console.log("No such document!");
    }
  };
  fetchPet();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      alignContent="center"
      padding="30px"
      minHeight="100vh"
      backgroundColor="black"
      //#7c8b95 Grey Color
    >
      <Card
        data-resizable
        sx={{
          textAlign: "center",
          alignItems: "center",
          width: 340,
          // to make the demo resizable
          overflow: "auto",
          resize: "horizontal",
          "--icon-size": "100px",
        }}
      >
        <CardOverflow variant="solid" color="success">
          <AspectRatio
            variant="outlined"
            color="success"
            ratio="1"
            sx={{
              m: "auto",
              transform: "translateY(50%)",
              borderRadius: "50%",
              width: "var(--icon-size)",
              boxShadow: "sm",
              bgcolor: "background.surface",
              position: "relative",
            }}
          >
            <div>
              <PetsIcon sx={{ fontSize: "4rem" }} />
            </div>
          </AspectRatio>
        </CardOverflow>
        <Typography
          level="h2"
          fontSize="xl"
          sx={{ mt: "calc(var(--icon-size) / 2)" }}
        >
          Please Help! <br/>  My pet was lost! 
        </Typography>
        <CardContent sx={{ maxWidth: "40ch" }}>
        
          <Card sx={{ maxWidth: "40ch", bgcolor: "#1A7D36", margin: "10px 0" }}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              padding="5px"
            >
              <Grid item xs={12}>
                <Typography align="left" textColor="white" level="h2">
                  {petName}
                </Typography>
              </Grid>
              <Grid item xs={3.5}>
                <Typography align="left" textColor="white">
                  Breed
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography align="left" textColor="white">
                  :
                </Typography>
              </Grid>
              <Grid item xs={7.5}>
                <Typography align="left" textColor="white" fontWeight="bold">
                  {breed}
                </Typography>
              </Grid>
              <Grid item xs={3.5}>
                <Typography align="left" textColor="white">
                  Species
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography align="left" textColor="white">
                  :
                </Typography>
              </Grid>
              <Grid item xs={7.5}>
                <Typography align="left" textColor="white" fontWeight="bold">
                  {species}
                </Typography>
              </Grid>
              <Grid item xs={3.5}>
                <Typography align="left" textColor="white">
                  Gender
                </Typography>
              </Grid><Grid item xs={1}>
                <Typography align="left" textColor="white">
                  :
                </Typography>
              </Grid>
              <Grid item xs={7.5}>
                <Typography align="left" textColor="white" fontWeight="bold">
                  {gender}
                </Typography>
              </Grid>
              <Grid item xs={3.5}>
                <Typography align="left" textColor="white">
                  Spayed
                </Typography>
              </Grid><Grid item xs={1}>
                <Typography align="left" textColor="white">
                  :
                </Typography>
              </Grid>
              <Grid item xs={7.5}>
                <Typography align="left" textColor="white" fontWeight="bold">
                  {spayed}
                </Typography>
              </Grid>
            </Grid>
          </Card>
          If you found it, please contact
          me.
        </CardContent>
        <CardActions
          orientation="vertical"
          buttonFlex={1}
          sx={{
            "--Button-radius": "40px",
            width: "clamp(min(100%, 160px), 50%, min(100%, 200px))",
          }}
        >
          <Button variant="solid" color="success">
            Contact
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
