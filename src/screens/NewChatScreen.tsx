// src/screens/NewChatScreen.tsx
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useChat } from "../context/ChatContext";
import ChatInput from "../components/ChatInput";

interface Props {
  startChat: () => void;
}

const quickPrompts = [
  "Give me a concise summary of this meeting transcript",
  "Write a product description for a minimalist smartwatch",
  "Provide a polite response to a customer asking for a refund",
];

const NewChatScreen: React.FC<Props> = ({ startChat }) => {
  const { setDraft } = useChat();

  const handleQuick = (text: string) => {
    setDraft(text);
    startChat();
  };

  return (
    <Box display="flex" flexDirection="column" flex={1} height="100%">
      <Box flex={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={2}>
        <Typography variant="h3" gutterBottom>
          👋 Hi Sravanthi!
        </Typography>
        <Typography variant="h4" gutterBottom>
          What do you want to learn today?
        </Typography>

        <Grid container spacing={2} justifyContent="center">
  {quickPrompts.map((p, i) => (
    
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
    
  ))}
</Grid>

      </Box>

      <ChatInput />
    </Box>
  );
};

export default NewChatScreen;
