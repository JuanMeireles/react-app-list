import React from "react";
import { Box, AppBar, Toolbar, Avatar, InputBase } from "@mui/material";
import { styled } from "@mui/system";

import {
  Search,
  SearchIcon,
  SearchIconWrapper,
  StyledInputBase,
  Notifications as NotificationsIcon,
  Mail as MailIcon,
} from "@mui/icons-material";
import TextField from "../Header/SearchBar/TextField";

// import { Container } from './styles';

function Header() {
  return (
    <Box>
      <Box width="1358px" height="65px">
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
    </Box>
  );
}

export default Header;
