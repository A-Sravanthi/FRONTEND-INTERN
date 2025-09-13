// src/components/ChatInput.tsx
import React, { useState } from "react";
import { Box, TextField, IconButton, Paper, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import { useChat } from "../context/ChatContext";

const ChatInput: React.FC = () => {
  const { draft, setDraft, sendMessage } = useChat();
  const [file, setFile] = useState<File | null>(null);

  const handleSend = () => {
    sendMessage(undefined, file || undefined);
    setFile(null); // clear file
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <Paper elevation={4} sx={{ p: 1.5, borderRadius: 0, bgcolor: "white" }}>
      <Box display="flex" alignItems="center">
        {/* File upload button */}
        <input
          type="file"
          id="file-upload"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <IconButton component="label" htmlFor="file-upload" sx={{ mr: 1 }}>
          <AttachFileIcon />
        </IconButton>

        {/* Input box */}
        <TextField
          fullWidth
          placeholder="Ask me a question..."
          variant="outlined"
          size="small"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          sx={{
            bgcolor: "#f1f1f1",
            borderRadius: "25px",
            "& fieldset": { border: "none" },
            mr: 1,
            px: 2,
            py: 1,
          }}
        />

        {/* Show file name if selected */}
        {file && (
          <Box display="flex" alignItems="center" bgcolor="#eee" px={1} borderRadius="8px" mr={1}>
            <Typography variant="body2" sx={{ mr: 0.5 }}>{file.name}</Typography>
            <IconButton size="small" onClick={() => setFile(null)}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        )}

        {/* Send button */}
        <IconButton
          onClick={handleSend}
          sx={{
            bgcolor: "primary.main",
            color: "white",
            borderRadius: "50%",
            width: 45,
            height: 45,
            "&:hover": { bgcolor: "primary.dark" },
          }}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default ChatInput;
