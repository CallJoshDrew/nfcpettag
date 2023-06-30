"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Footer from "../components/FooterBar";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import PetsIcon from "@mui/icons-material/Pets";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link.js";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../lib/store/authContext";
import Login from '../login/page.jsx'
export default function Dashboard() { 
  const page = "./dashboard";
  const router = useRouter();
  const { user } = useContext(authContext);
  if (!user) {
    return <Login />;
  } 
  return (
    <Box
      // height="100vh"
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
        Welcome {user?.displayName}
      </Typography>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        alignContent="center"
        margin="10px"
        padding="0 20px"
      >
        <PetsIcon />
        <Typography marginLeft="5px">My Pet</Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        alignContent="center"
        margin="10px"
        padding="0 10px"
      >
        <Card sx={{ display: "flex", padding: "10px" }}>
          <CardMedia
            component="img"
            sx={{ width: 120, borderRadius: "4px" , maxHeight:"140px"}}
            image="/cat2.jpg"
            alt="chloe"
          />
          <Grid
            container
            justifyContent="flex-start"
            padding="0 15px"
            spacing={0.3}
          >
            <Grid item xs={12}>
              <Typography variant="h7" color="text.secondary">
                Name: Chloe
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h7" color="text.secondary">
                Age: 2 Years Old
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h7" color="text.secondary">
                Gender: Female
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h7" color="text.secondary">
                Breed: Shepherd
              </Typography>
            </Grid>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                setTimeout(() => router.push(`/dashboard/mypets/chloe`), 1000);
              }}
              sx={{ padding: "8px 15px", fontSize: "0.7rem" }}
            >
              Edit
            </Button>
          </Grid>
        </Card>
      </Box>
      {/* <Link href="/dashboard/addmorepets" style={{ textDecoration: "none" }}>
        <Typography
          sx={{ color: "#ed6c02", fontWeight: "bold", paddingLeft: "30px" }}
        >
          Add More Pets
        </Typography>
      </Link> */}
      <Box
        display="flex"
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        alignContent="center"
        margin="30px 10px 10px"
        padding="0 10px"
      >
        <Card sx={{ display: "flex", padding: "10px" }}>
          <Grid container justifyContent="flex-start" padding="0 15px">
            <Typography>
              Alert our communities when you loss your beloved pet. Just press
              the "Help" Button to share your Pet Info with our community.
            </Typography>
            <Button
              variant="contained"
              color="warning"
              href="./findmypet/chloe"
              sx={{
                padding: "8px 15px",
                marginTop: "10px",
                fontSize: "0.7rem",
              }}
            >
              Help
            </Button>
          </Grid>
        </Card>
      </Box>
      <Footer page={page} sx={{ zIndex: 100 }} />
    </Box>
  );
}
