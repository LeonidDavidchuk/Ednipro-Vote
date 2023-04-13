import React from "react";
import "./index.css";
import Top from "../components/top/Top.js";
import Middle from "../components/middle/Middle.js";
import Header from "../components/header/Header.js";
import Register from "../components/register/Register.js";
import Picture from "../components/picture/Picture.js";
import Footer from "../components/footer/Footer.js";

export const MainPage = () => {
  return (
    <>
      <Header />
      <div className="container_main">
        <Top />
        <Middle />
        <Register />
        <Picture />
      </div>
      <Footer />
    </>
  );
};
