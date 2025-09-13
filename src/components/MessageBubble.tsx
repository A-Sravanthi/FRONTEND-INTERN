// src/components/MessageBubble.tsx
import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { Message } from "../types/types";

const MessageBubble: React.FC<{ message: Message }> = ({ message }) => {
  const isUser = message.role === "user";
  return (
    <Box display="flex" justifyContent={isUser ? "flex-end" : "flex-start"} mb={1}>
      <Paper
        sx={{
          p: 1.25,
          maxWidth: "70%",
          bgcolor: isUser ? "primary.main" : "#e0e0e0",
          color: isUser ? "white" : "black",
          borderRadius: isUser ? "16px 16px 0 16px" : "16px 16px 16px 0",
        }}
      >
        <Typography variant="body1">{message.text}</Typography>
        <Typography variant="caption" display="block" textAlign="right" sx={{ mt: 0.5 }}>
          {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Typography>
      </Paper>
    </Box>
  );
};

export default MessageBubble;
