import React from "react";
import "../header/Header.css";
import logo from "./images/ednipro_logo.svg";

function Header() {
  return (
    <div className="header-container">
      <a href="/">
        <img className="logo" src={logo} alt="Ednipro logo" />
      </a>
    </div>
  );
}

export default Header;
