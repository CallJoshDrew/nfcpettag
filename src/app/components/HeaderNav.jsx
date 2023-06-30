import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
// import { useAuth } from "../context/AuthContext";
import { Alert, Grid, Snackbar, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PetsIcon from "@mui/icons-material/Pets";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import GroupsIcon from '@mui/icons-material/Groups';
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HeaderNav() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const { currentUser, logout } = useAuth();
  const router = useRouter();
  const handleLogout = async () => {
    setTimeout(() => router.push(`/`), 1000);
    // setTimeout(() => logout(), 1000);
    setOpenSnackbar(true);
  };

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const vertical = "top";
  const horizontal = "center";

  const handleClosebar = () => {
    setOpenSnackbar(false);
  };

  return (
    <React.Fragment>
      <Grid
        container
        position="fixed"
        top="0"
        zIndex="999"
        justifyContent="center"
        alignItems="center"
        padding="5px 15px 5px 25px"
        backgroundColor="#0E4B17"
      >
        <Grid item xs={10}>
          <Typography variant="h6" color="white">
            NFC PET TAG
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Tooltip title="My Profile">
            <IconButton onClick={handleIconClick} size="small" sx={{ ml: 2 }}>
              <Avatar
                sx={{
                  width: 35,
                  height: 35,
                  border: 0.5,
                  borderColor: "white",
                }}
                src="../profile.png"
              ></Avatar>
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem sx={{ width: "160px" }}>
          <Link
            href="/dashboard/profile"
            as="/dashboard/profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Box display="flex" alignItems="center" alignContent="center">
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <Typography marginLeft="5px">Profile</Typography>
            </Box>
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <Link
            href="/dashboard"
            as="/dashboard"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Box display="flex" alignItems="center" alignContent="center">
              <ListItemIcon>
                <SpaceDashboardIcon />
              </ListItemIcon>
              <Typography marginLeft="5px">Dashboard</Typography>
            </Box>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            href="/dashboard/addmorepets"
            as="/dashboard/addmorepets"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Box display="flex" alignItems="center" alignContent="center">
              <ListItemIcon>
                <PetsIcon />
              </ListItemIcon>
              <Typography marginLeft="5px">Add More</Typography>
            </Box>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            href="/dashboard/community"
            as="/dashboard/community"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Box display="flex" alignItems="center" alignContent="center">
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>
              <Typography marginLeft="5px">Community</Typography>
            </Box>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Typography marginLeft="5px">Log Out</Typography>
        </MenuItem>
      </Menu>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={1000}
        onClose={handleClosebar}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          You have successfully logged out!
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
