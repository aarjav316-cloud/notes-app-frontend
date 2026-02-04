import { StrictMode } from "react";
import React from "react";
import { AuthProvider } from "./context/AuthContext.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { NotesProvider } from "./context/NotesContext.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <NotesProvider>
      <App />
      </NotesProvider>
    </AuthProvider>
  </React.StrictMode>
);
