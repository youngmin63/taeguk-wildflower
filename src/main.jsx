import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import App1 from "./App1";
import App2 from "./App2";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
