import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ToggleMobileMenuContextProvider from "./context/ToggleMenuMobile.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToggleMobileMenuContextProvider>
      <App />
    </ToggleMobileMenuContextProvider>
  </React.StrictMode>
);
