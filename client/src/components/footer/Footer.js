import React from "react";
import "../footer/Footer.css";
import ednipro_logo from "./images/ednipro_logo.svg";
import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import telegram from "./images/telegram.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="ednipro_logo_text">
        <img className="logo_ednipro" src={ednipro_logo} alt="ednipro logo" />

        <div className="prava">
          <p>Всі права захищені</p>
        </div>
      </div>

      <div className="budte_z_nami">
        <p>Будьте з нами на одній хвилі в соціальних мережах: </p>

        <div className="social_link">
          <a href="https://t.me/kp_ednipro">
            <img className="telegram" src={telegram} alt="telegram" />
          </a>
          <a href="https://www.facebook.com/kpednipro">
            <img className="facebook" src={facebook} alt="facebook" />
          </a>
          <a href="https://www.instagram.com/ednipro/">
            <img className="instagram" src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
