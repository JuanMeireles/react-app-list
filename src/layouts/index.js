"use client";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  InputBase,
  styled,
} from "@mui/material";
import {
  Mail as MailIcon,
  Menu as MenuIcon,
  MoveToInbox as InboxIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
} from "@mui/icons-material";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Content from "../components/Content";

function Teste() {
  return (
    <body>
      <Sidebar />
      <Box display="flex">
        <Content />
        <Header />
      </Box>
    </body>
  );
}

export default Teste;
