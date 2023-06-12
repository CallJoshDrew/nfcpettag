import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Grid, Typography } from '@mui/material';

export default function Navbar() {
  return (
      <Grid container spacing={2} justifyContent="space-around" alignItems="center" minHeight="80px">
        <Grid item xs={10} paddingLeft="10px"><Typography variant="h5">NFC PET TAG</Typography></Grid>
        <Grid item xs={2}><Avatar alt="Remy Sharp" src="/profile.png" /></Grid>
      </Grid>
  )
}
