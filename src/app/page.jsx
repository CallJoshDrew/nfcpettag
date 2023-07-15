"use client";
import React, { useEffect, useId, useState } from "react";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Paper,
  Stack,
  CardMedia,
  Typography,
  Avatar,
} from "@mui/material";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Footer from "./components/FooterBar";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import PetsIcon from "@mui/icons-material/Pets";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link.js";
import Navbar from "./components/HeaderNav";
import { useRouter } from "next/navigation";
import { TikTokEmbed, YouTubeEmbed } from "react-social-media-embed";

export default function Home() {
  const page = "./";
  const router = useRouter();
  const handleSignIn = () => {
    router.push(`/login`);
  };

  return (
    <Box>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        padding="10px"
        backgroundColor="#0E4B17"
      >
        <Grid item xs={1.5}>
          <Avatar
            variant="square"
            sx={{
              width: 30,
              height: 30,
              border: 0.5,
              borderColor: "black",
              borderRadius: "5px",
            }}
            src="./antiochwave.png"
          ></Avatar>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6" color="white">
            NFC PET TAG
          </Typography>
        </Grid>
        <Grid item xs={2.5}>
          <Button
            onClick={handleSignIn}
            variant="contained"
            color="success"
            size="small"
          >
            Sign In
          </Button>
        </Grid>
      </Grid>
      <Box backgroundColor="white" align="center" padding="10px 0px">
        <Typography variant="h7" fontWeight="bold" color="#0E4B17">
          "Help! I'm lost?"
        </Typography>
      </Box>
      <CardMedia component="img" height="240" image="/cat2.jpg" alt="Dog" />
      <Box backgroundColor="white" align="center" padding="10px 0px">
        <Typography variant="h7" fontWeight="bold" color="#0E4B17">
          No Worries! Just tap and get it home!
        </Typography>
      </Box>
      <Box backgroundColor="#0E4B17" align="center" padding="30px 25px">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={1.5}
        >
          <Grid item xs={12}>
            <Box
              component="ul"
              sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, m: 0 }}
            >
              <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
                <CardCover>
                  <img
                    src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
                    srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                    loading="lazy"
                    alt="NFC Chip"
                  />
                </CardCover>
                <CardContent>
                  <Typography
                    level="h6"
                    fontWeight="lg"
                    color="#fff"
                    mt={{ xs: 12, sm: 18 }}
                  >
                    NFC Chip Inside
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" color="white">
              Currently the best tags on the market with the latest technology
              of NFC Chip. Our pet ID can locate your address without vet visits
              for microchiop. With reliability and efficiency, your pet will be
              home safe in no time!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="success"
              fontWeight="bold"
            >
              Discover Our Latest Smart Tag
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box backgroundColor="white" align="center" padding="30px 25px">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={1.5}
        >
          {/* <Grid item xs={12}>
            <CardMedia
              component="iframe"
              height="200px"
              autoPlay
              controls
              image="https://www.youtube.com/embed/3VfxVRQlPP4"
            />
          </Grid> */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <YouTubeEmbed
              height={220}
              // placeholderImageUrl="https://i.ytimg.com/vi/HpVOs5imUN0/maxresdefault.jpg?t=1689433655884"
              url="https://www.youtube.com/embed/3VfxVRQlPP4"
              width={325}
            />
          </div>
          {/* <div style={{ display: "flex", justifyContent: "center" }} id={id}>
            <TikTokEmbed
              url="https://www.tiktok.com/@antiochwave_nfc/video/7251208441165843714"
              width={325}
            />
          </div> */}
          <Grid item xs={12}>
            <Typography variant="body1" color="#0E4B17" fontWeight="bold">
              Above video will show how to use our NFC Pet Tag and services.{" "}
              <br />
              For more info, please check our FAQ section below.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="success"
              fontWeight="bold"
            >
              FAQ Section
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
