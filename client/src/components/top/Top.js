import "../top/Top.css";
import React from "react";
import button from "./images/button.svg";
import ellipse from "./images/ellipse.svg";
import card from "./images/card.svg";

function Top() {
  return (
    <div className="top_container">
      <div className="left">
        <div className="uchnisckiy_container">
          <img className="button" src={button} alt="Obodok dlya teksta" />
          <p className="text_on_button">ТВІЙ УНІКАЛЬНИЙ УЧНІВСЬКИЙ</p>
        </div>

        <div className="top_text">
          <p>Привіт - це єДніпро, який створює ваші учнівські!</p>
          <p className="tight">
            Наразі ми анонсуємо великий розіграш унікальних учнівських із{" "}
          </p>
          <p className="tight">
            запропонованими дизайнами, який може створити кожен школяр.
          </p>
          <div className="tight2">
            <p className="tight">
              Усі, автори, які нададуть власний дизайн учнівського квитка -
              отримають
            </p>
            <p className="tight">його в омріяному вигляді!</p>
            <p className="smalltext">
              Головний подарунок - графічний планшет!*
            </p>
          </div>
        </div>
      </div>
      <div className="rigth">
        <div className="container-card-my-uchnivskiy">
          <div style={{ marginLeft: "-180px", marginTop: "50px" }}>
            <img className="ellipse" src={ellipse} alt="ellipse" />
            <div className="blue-circle"></div>
          </div>
          <img className="card" src={card} alt="card"></img>
        </div>
      </div>
    </div>
  );
}

export default Top;
