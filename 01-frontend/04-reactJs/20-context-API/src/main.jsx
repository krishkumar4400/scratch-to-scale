import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContext from "./context/UserContext.jsx";
import ThemeContext from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeContext>
    <UserContext>
      <App />
    </UserContext>
  </ThemeContext>,
);
