import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Top from "./components/top/Top.js";
import Middle from "./components/middle/Middle.js";
import Header from "./components/header/Header.js";
import Register from "./components/register/Register.js";
import Picture from "./components/picture/Picture.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <div className="top">
      <Top />
      <Middle />
      <Register />
      <Picture />
    </div>
  </React.StrictMode>
);
