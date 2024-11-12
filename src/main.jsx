import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Import the main App component where routing is set up

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
