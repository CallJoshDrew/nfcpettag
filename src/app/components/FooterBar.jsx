import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Grid, Typography } from "@mui/material";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PetsIcon from "@mui/icons-material/Pets";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import InfoIcon from "@mui/icons-material/Info";
import Link from "next/link";
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
          label="Dashboard"
          value="./"
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
        label="Profile" value="profile"
          icon={<AccountCircleIcon style={{ color: "white" }} />}
        />
        <BottomNavigationAction
        label="Add More" value="addmorepets"
          icon={<PetsIcon style={{ color: "white" }} />}
        />
        <BottomNavigationAction
        label="About" value="about"
          icon={<InfoIcon style={{ color: "white" }} />}
        />
      </BottomNavigation>
    </Box>
  );
}
