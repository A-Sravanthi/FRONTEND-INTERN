// src/context/ChatContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Message } from "../types/types";

interface ChatContextType {
  messages: Message[];
  draft: string;
  setDraft: (text: string) => void;
  sendMessage: (text?: string, file?: File) => void;
  resetChat: () => void;
  recentChats: string[];
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

// Default Quick Cards → preload into history
const defaultRecentChats = [
  "Give me a concise summary of this meeting transcript",
  "Write a product description for a minimalist smartwatch",
  "Provide a polite response to a customer asking for a refund",
];

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [draft, setDraft] = useState("");
  const [recentChats, setRecentChats] = useState<string[]>(defaultRecentChats);

  const sendMessage = (text?: string, file?: File) => {
    const content = text ?? draft;
    if (!content.trim() && !file) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: file ? `📎 File: ${file.name}` : content,
      createdAt: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setDraft("");

    // ✅ Add to recentChats
    setRecentChats((prev) => {
      const updated = [userMsg.text, ...prev.filter((c) => c !== userMsg.text)];
      return updated.slice(0, 5);
    });

    // fake assistant reply
    setTimeout(() => {
      const assistant: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        text: "This is a placeholder assistant response.",
        createdAt: Date.now(),
      };
      setMessages((prev) => [...prev, assistant]);
    }, 700);
  };

  const resetChat = () => setMessages([]);

  return (
    <ChatContext.Provider
      value={{ messages, draft, setDraft, sendMessage, resetChat, recentChats }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within ChatProvider");
  return ctx;
};
