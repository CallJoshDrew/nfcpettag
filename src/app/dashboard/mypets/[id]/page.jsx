"use client";
import React, { useContext } from "react";
import HeaderNav from "../../../components/HeaderNav";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { authContext } from "../../../lib/store/authContext";
import Login from "../../../login/page.jsx";
export default function MyPet() {
  const { user } = useContext(authContext);
  const router = useRouter();

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
              Post: {router.query}
            </Typography>
          </Box>
        </>
      )}
    </>
  );
}
