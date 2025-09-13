// src/screens/ActiveChatScreen.tsx
import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { useChat } from "../context/ChatContext";
import MessageBubble from "../components/MessageBubble";
import ChatInput from "../components/ChatInput";

const ActiveChatScreen: React.FC = () => {
  const { messages } = useChat();
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box display="flex" flexDirection="column" flex={1} height="100%">
      <Box flex={1} p={2} overflow="auto" bgcolor="#fafafa">
        {messages.length === 0 ? (
          <Box color="text.secondary">No messages yet — send the first one!</Box>
        ) : (
          messages.map((m) => <MessageBubble key={m.id} message={m} />)
        )}
        <div ref={scrollRef} />
      </Box>

      <ChatInput />
    </Box>
  );
};

export default ActiveChatScreen;
