import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/css/tailwindcss.css";
import RouteFontEnd from "./router/FontEnd";
import RouteBackend from "./router/Backend";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <div className="bg-white dark:bg-mainDark">
        <RouteBackend />
        <RouteFontEnd />
      </div>
    </Router>
  </React.StrictMode>,
);
