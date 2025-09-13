// src/screens/NewChatScreen.tsx
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import { useChat } from "../context/ChatContext";
import ChatInput from "../components/ChatInput";

interface Props {
  startChat: () => void;
}

const quickPrompts = [
  "Give me a concise summary of this meeting transcript",
  "Write a product description for a minimalist smartwatch",
  "Provide a polite response to a customer asking for a refund",
  "Explain quantum computing in simple terms",
  "Suggest a workout routine for beginners",
];

const NewChatScreen: React.FC<Props> = ({ startChat }) => {
  const { setDraft } = useChat();

  const handleQuick = (text: string) => {
    setDraft(text); // put into ChatInput
    startChat();    // switch to ActiveChatScreen
  };

  return (
    <Box display="flex" flexDirection="column" flex={1} height="100%">
      {/* Top: Greeting + Cards */}
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        p={2}
      >
        <Typography variant="h3" gutterBottom>
          👋 Hi Laurence!
        </Typography>
        <Typography variant="h4" gutterBottom>
          What do you want to learn today?
        </Typography>

        {/* Quick Action Cards in Box model */}
        <Grid
          container
          spacing={2}
          sx={{ mt: 3, maxWidth: 1000 }}
          justifyContent="center"
        >
          {quickPrompts.map((p, i) => (
            <Grid
              item
              key={i}
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 2,
                  boxShadow: 2,
                  p: 2,
                  height: "100%",
                  transition: "0.2s",
                  "&:hover": { boxShadow: 5, transform: "translateY(-2px)" },
                  cursor: "pointer",
                }}
                onClick={() => handleQuick(p)}
              >
                <Typography variant="body1">{p}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Bottom: Chat Input (always visible) */}
      <ChatInput />
    </Box>
  );
};

export default NewChatScreen;
