import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TodoContextProvider from "./components/TodoContext.jsx";
import LoadingContextProvider from "./components/LoadingContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoadingContextProvider>
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </LoadingContextProvider>
  </StrictMode>,
);
