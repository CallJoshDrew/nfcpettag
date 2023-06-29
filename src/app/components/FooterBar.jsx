import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Grid, Typography } from "@mui/material";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PetsIcon from "@mui/icons-material/Pets";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import HomeIcon from '@mui/icons-material/Home';

export default function Footer({ page }) {
  const router = useRouter();

  const [value, setValue] = useState(page);
  const handleChange = (event, newValue) => {
    router.push(`/${newValue}`);
    setValue(newValue);
  };
  return (
    <Box
      position="fixed"
      bottom="0"
      zIndex="999"
      backgroundColor="#0E4B17"
      color="white"
      padding="7px 5px 5px"
      width="100%"
    >
      <BottomNavigation
        showLabels
        sx={{
          "& .MuiBottomNavigationAction-root, .Mui-selected, svg": {
            color: "white",
          },
          "& .Mui-selected, .Mui-selected > svg": {
            fontWeight: "bold",
          },
          backgroundColor: "#0E4B17",
        }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Home"
          value="./"
          icon={
            <HomeIcon
              style={{ color: "white" }}
              sx={{
                "& .MuiBottomNavigationAction-root, .Mui-selected, svg": {
                  color: "#007A78",
                },
              }}
            />
          }
        />  
        <BottomNavigationAction
          label="Dashboard"
          value="./dashboard"
          icon={
            <SpaceDashboardIcon
              style={{ color: "white" }}
              sx={{
                "& .MuiBottomNavigationAction-root, .Mui-selected, svg": {
                  color: "#007A78",
                },
              }}
            />
          }
        />
        <BottomNavigationAction
        label="Add More" value="./dashboard/addmorepets"
          icon={<PetsIcon style={{ color: "white" }} />}
        />
        <BottomNavigationAction
        label="Profile" value="./dashboard/profile"
          icon={<AccountCircleIcon style={{ color: "white" }} />}
        />
      </BottomNavigation>
    </Box>
  );
}
