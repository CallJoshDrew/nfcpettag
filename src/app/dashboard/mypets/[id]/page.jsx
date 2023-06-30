'use client'
import React from 'react'
import { Box, Typography } from '@mui/material'
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation';

export default function MyPet() {
  const router = useRouter();
  return (
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
  )
}
