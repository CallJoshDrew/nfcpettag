"use client";

import { Button, Grid, Stack } from "@mui/material";
import Navbar from "./components/navbar.jsx"
export default function Home() {
  return (
    <Grid container height="100vh" alignItems="center" justifyContent="flex-start" direction="column">
      <Navbar />
      <h1>Home</h1>
      <Stack direction="row" columnGap={1}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </Grid>
  );
}
