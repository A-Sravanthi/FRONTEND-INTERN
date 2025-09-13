VERCEL: https://frontend-intern-steel.vercel.app/
This the flow of my assignment

/src

  /components
  
    Header.tsx
    Sidebar.tsx
    QuickCard.tsx
    MessageBubble.tsx
    ChatInput.tsx
    
  /screens
  
    NewChatScreen.tsx
    ActiveChatScreen.tsx
    
  /context
  
    ChatContext.tsx
  /types
  
    types.ts
    
  App.tsx
  
  theme.ts
  
  And I added data in tsconfig.json because reactnode usage

COMMANDS FOR PROCESS:
npm create vite@latest frontend-intern -- --template react-ts
cd frontend-intern
npm install
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
npm install --save-dev @types/react @types/react-dom
npm run dev
code .
