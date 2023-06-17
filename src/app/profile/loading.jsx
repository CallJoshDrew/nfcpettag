"use client";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Fade, Typography } from "@mui/material";

export default function Loading() {
  return (
    <Box sx={{ position: "absolute", top: "50%", left: "44%" }}>
      <Box sx={{ height: 40 }}>
        <Fade
          in
          style={{
            transitionDelay: "10ms",
          }}
          unmountOnExit
        >
          <CircularProgress />
        </Fade>
        <Typography fontWeight="bold">Loading..</Typography>
      </Box>
    </Box>
  );
}
