"use client";
import React, { useContext } from "react";
import { Avatar, Box, CardMedia, Grid, Paper, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import HeaderNav from "../../components/HeaderNav";
import Footer from "../../components/FooterBar";
import { authContext } from "../../lib/store/authContext";
import Login from "../../login/page";

export default function Community() {
  const page = "./dashboard/community";
  const { user } = useContext(authContext);

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
            margin="50px 0 90px"
          >
            <CardMedia
              component="img"
              height="240"
              image="/registeration2.jpg"
              alt="Registeration"
            />
            <Box backgroundColor="#0E4B17" align="center" padding="10px 0px">
              <Typography variant="h7" fontWeight="bold" color="white">
                Welcome to Our Community
              </Typography>
            </Box>
            <Paper>
              <Typography
                variant="body1"
                align="center"
                padding="10px 15px"
                color="#0E4B17"
              >
                Knowledge is power, community is strength and positive attitude
                is everything.
              </Typography>
            </Paper>
            <Box marginTop="10px" padding="10px 30px" key="joe">
              <Box align="right">
                <Typography>27 June 2023</Typography>
              </Box>
              <Paper sx={{ backgroundColor: "white", marginBottom: "10px" }}>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                  padding="15px 10px 10px"
                >
                  <InfoIcon color="warning" />
                  <Grid item>
                    <Box href="/findmypet/joe" paddingLeft="10px">
                      <Typography sx={{ fontSize: "0.9rem" }}>
                        Help! My pet went missing...
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Avatar
                      sx={{
                        width: 30,
                        height: 30,
                        border: 0.5,
                        borderColor: "grey",
                      }}
                      src="../profile.png"
                    ></Avatar>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
            <Footer page={page} sx={{ zIndex: 100 }} />
          </Box>
        </>
      )}
    </>
  );
}
