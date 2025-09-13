// src/components/Sidebar.tsx
import React, { useState } from "react";
import {
  Box, TextField, Typography,
  List, ListItemButton, ListItemIcon, ListItemText,
  Divider, Avatar
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import HistoryIcon from "@mui/icons-material/History";
import ExploreIcon from "@mui/icons-material/Explore";
import { useChat } from "../context/ChatContext";

interface Props {
  startChat: () => void;
}

const Sidebar: React.FC<Props> = ({ startChat }) => {
  const [search, setSearch] = useState("");
  const { recentChats, setDraft } = useChat();

  const handleClickRecent = (text: string) => {
    setDraft(text);     // put into input bar
    startChat();        // open ActiveChatScreen
  };

  return (
    <Box
      width={260}
      bgcolor="#ffffff"
      height="100vh"
      borderRight="1px solid #eee"
      display="flex"
      flexDirection="column"
    >
      {/* Top */}
      <Box p={2}>
        <Typography variant="h6"><b>Inteliq</b></Typography>
        <TextField
          size="small"
          placeholder="Search for chats..."
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mt: 1 }}
        />
      </Box>

      {/* Sections */}
      <List>
        <ListItemButton><ListItemIcon><HomeIcon /></ListItemIcon><ListItemText primary="Home" /></ListItemButton>
        <ListItemButton><ListItemIcon><BookIcon /></ListItemIcon><ListItemText primary="Library" /></ListItemButton>
        <ListItemButton><ListItemIcon><HistoryIcon /></ListItemIcon><ListItemText primary="History" /></ListItemButton>
        <ListItemButton><ListItemIcon><ExploreIcon /></ListItemIcon><ListItemText primary="Explore" /></ListItemButton>
      </List>

      <Divider sx={{ my: 1 }} />

      {/* Recent chats */}
      <Box p={2} flex={1} overflow="auto">
        <Typography variant="subtitle2" color="text.secondary">Recent Chats</Typography>
        {recentChats.map((c, i) => (
          <ListItemButton key={i} onClick={() => handleClickRecent(c)} sx={{ pl: 0 }}>
            <ListItemText primary={c} />
          </ListItemButton>
        ))}
      </Box>

      <Divider />

      {/* Bottom */}
      <Box p={2}>
        <Typography color="primary" sx={{ mb: 1 }}>Try Pro →</Typography>
        <Box display="flex" alignItems="center">
          <Avatar sx={{ mr: 1 }}>L</Avatar>
          <Typography>Laurence</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
