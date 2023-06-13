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

import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import PetsIcon from "@mui/icons-material/Pets";
import EditIcon from "@mui/icons-material/Edit";
export default function Home() {
  return (
    <Box
      height="100vh"
      alignItems="center"
      justifyContent="flex-start"
      direction="column"
    >
      <Navbar />
      <Typography variant="h6" margin="20px 10px" padding="0 10px">
        Dashboard
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
            sx={{ width: 120, borderRadius: "4px" }}
            image="/cat.jpg"
            alt="chloe"
          />
          <Grid container justifyContent="flex-start" padding="0 15px">
            <Grid item xs={12}>
              <Typography variant="h7">Chloe</Typography>
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
                Pet Type: Dog
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h7" color="text.secondary">
                Breed: Shepherd
              </Typography>
            </Grid>
            <Button
              variant="contained"
              href="./mypet"
              size="small"
              startIcon={<EditIcon />}
              sx={{ padding: "8px 15px" }}
            >
              Edit
            </Button>
          </Grid>
        </Card>
      </Box>
      <Typography
        sx={{ color: "red", fontWeight: "bold", paddingLeft: "30px" }}
      >
        Add More Pets
      </Typography>
      <Footer />
    </Box>
  );
}
