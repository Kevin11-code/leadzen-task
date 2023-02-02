import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="p-10 mx-7 my-10 bg-gradient-to-r from-cyan-500 to-blue-700 rounded-2xl">
    <App />
  </div>
);
