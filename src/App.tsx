// src/App.tsx
import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import NewChatScreen from "./screens/NewChatScreen";
import ActiveChatScreen from "./screens/ActiveChatScreen";

const App: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Box display="flex" height="100vh">
      {/* Sidebar now gets startChat prop */}
      <Sidebar startChat={() => setIsActive(true)} />

      {/* Main area */}
      <Box flex={1} display="flex" flexDirection="column">
        <Header onNewChat={() => setIsActive(false)} />
        <Box flex={1} display="flex">
          {isActive ? (
            <ActiveChatScreen />
          ) : (
            <NewChatScreen startChat={() => setIsActive(true)} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default App;
