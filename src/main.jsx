import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/css/tailwindcss.css";
import RouteBackend from "./router/Backend.jsx";
import RouteFontEnd from "./router/FontEnd.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <div className="min-h-screen bg-white dark:bg-mainDark transition-colors  overflow-y-auto pb-10">
      <RouteBackend />
      <RouteFontEnd />
    </div>
  </Router>,
);
