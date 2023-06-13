import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Grid
      container
      position="fixed"
      bottom="0"
      zIndex="999"
      backgroundColor="#0E4B17"
      color="white"
      align="center"
      padding="10px"
    >
      <Grid item xs={12}>
        <Typography variant="h7">© 2023 by JoshDrew Studio</Typography>
      </Grid>
      {/* <Grid item xs={12}>
        <Typography variant="h7">
          Web App Developed By JoshDrew Studio
        </Typography>
      </Grid> */}
    </Grid>
  );
}
