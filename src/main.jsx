import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/css/tailwindcss.css";
import RouterAll from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <div className="bg-line text-lineText dark:bg-dark dark:text-darkText transition-colors duration-500">
        <RouterAll />
      </div>
    </Router>
  </React.StrictMode>,
);
