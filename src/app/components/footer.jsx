import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PetsIcon from "@mui/icons-material/Pets";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import InfoIcon from "@mui/icons-material/Info";

export default function Footer() {
  const [value, setValue] = useState(0);
  const [currentPage , setCurrentPage] = useState("Dashboard")
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
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(newValue);
        }}
      >
        <BottomNavigationAction
          label="Dashboard"
          href="./"
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
          label="Profile"
          href="./profile"
          icon={<AccountCircleIcon style={{ color: "white" }} />}
        />
        <BottomNavigationAction
          label="Add More"
          href="./addmorepets"
          icon={<PetsIcon style={{ color: "white" }} />}
        />
        <BottomNavigationAction
          label="About"
          href="./about"
          icon={<InfoIcon style={{ color: "white" }} />}
        />
      </BottomNavigation>
    </Box>
  );
}
// export default function Footer() {
//   return (
//     <Grid
//       container
//         position="fixed"
//         bottom="0"
//         zIndex="999"
//       backgroundColor="#0E4B17"
//       color="white"
//       align="center"
//       padding="10px"
//     >
//       <Grid item xs={12}>
//         <Typography variant="h7">© 2023 by JoshDrew Studio</Typography>
//       </Grid>
//       <Grid item xs={12}>
//         <Typography variant="h7">
//           Web App Developed By JoshDrew Studio
//         </Typography>
//       </Grid>
//     </Grid>
//   );
// }
