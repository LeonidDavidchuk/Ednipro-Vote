import React from "react";
import "../footer/Footer.css";
import ednipro_logo from "./images/ednipro_logo.svg";
import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import telegram from "./images/telegram.svg";

function Footer() {
  return (
    <div>
      <div class="footer">
        <div className="ednipro_logo_text">
          <div>
            <img src={ednipro_logo} alt="ednipro logo" />
          </div>

          <div className="prava">
            <p>Всі права захищені</p>
          </div>
        </div>

        <div className="budte_z_nami">
          <p>Будьте з нами на одній хвилі в соціальних мережах: </p>
        </div>

        <div className="social_link">
          <a href="https://t.me/kp_ednipro">
            <img src={telegram} alt="telegram" />
          </a>
          <a href="https://www.facebook.com/kpednipro">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://www.instagram.com/ednipro/">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
