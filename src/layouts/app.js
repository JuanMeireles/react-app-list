"use client";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { blue, red } from "@mui/material/colors";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import Avatar from "@mui/material/Avatar";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "transparent",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Teste() {
  return (
    <body>
      <Box display="flex">
        <Box bgcolor="#F8F8FB" height="980px" width="350px">
          <img height="300px" src="logo.avif" alt="logo" />
          sidebar
        </Box>
        <Box>
          <Box width="1358px" height="80px">
            <AppBar position="static">
              <Toolbar>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                <Box alignItems="center" display="flex" paddingLeft="900px">
                  <NotificationsIcon
                    sx={{ width: 25, height: 25, paddingLeft: 0.5 }}
                  />
                  <MailIcon sx={{ width: 25, height: 25, padding: 2.5 }} />
                  <Box>
                    <Avatar
                      sx={{ width: 56, height: 56 }}
                      alt="JuanM"
                      src="https://github.com/JuanMeireles.png"
                    />
                  </Box>
                </Box>
              </Toolbar>
            </AppBar>
          </Box>
          <Box height="830px">content</Box>
        </Box>
      </Box>
    </body>
  );
}

export default Teste;
