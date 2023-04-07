import "../top/Top.css";
import React from "react";
import ellipse from "./images/ellipse.svg";
import card from "./images/card.svg";

function Top() {
  return (
    <div className="top_container">
      <div className="left-right-wrapper">
        <div className="left">
          <div className="obodok">
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

        <div className="right">
          <img className="ellipse" src={ellipse} alt="ellipse" />
          <div className="blue-circle"></div>
          <img className="cards_fuck" src={card} alt="card" />
        </div>
      </div>
    </div>
  );
}

export default Top;
