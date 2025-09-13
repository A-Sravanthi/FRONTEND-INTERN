// src/components/Header.tsx
import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import SettingsIcon from "@mui/icons-material/Settings";

interface Props {
  onNewChat: () => void;
}

const Header: React.FC<Props> = ({ onNewChat }) => (
  <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: "1px solid #eee" }}>
    <Toolbar sx={{ justifyContent: "space-between" }}>
      <Typography variant="h6" color="primary">ChatGPT-4</Typography>
      <div>
        <IconButton><ShareIcon /></IconButton>
        <IconButton><SettingsIcon /></IconButton>
        <Button variant="contained" sx={{ ml: 2 }} onClick={onNewChat}>New Chat</Button>
      </div>
    </Toolbar>
  </AppBar>
);

export default Header;
