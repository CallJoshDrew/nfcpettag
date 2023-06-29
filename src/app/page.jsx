"use client";

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
export default function Home() {
  const page = "./";
  const router = useRouter();
  return (
    <Box>
      <Box backgroundColor="black" align="center" padding="10px 0px">
        <Typography variant="h7" fontWeight="bold" color="white">
          "Help! I'm lost?"
        </Typography>
      </Box>
      <CardMedia component="img" height="240" image="/cat.jpg" alt="Dog" />
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
            <Button variant="contained" color="success" fontWeight="bold">
              Discover Our Smart Tags!
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Card >
        <CardContent sx={{ margin:"auto", width: "100%" }}>
        <CardMedia
          component="iframe"
          height="200px"
          autoPlay
          controls
          image="https://www.youtube.com/embed/3VfxVRQlPP4"
        /></CardContent>
        <CardContent>
          <Typography align="center" variant="body2" color="textSecondary" component="p">
            How to Use?
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
