import React from "react";
import "./Picture.css";
import card1 from "./images/card1.svg";
import card2 from "./images/card2.svg";
import card3 from "./images/card3.svg";
import card4 from "./images/card4.svg";
import heart from "./images/heart.svg";

function Picture() {
  return (
    <div className="picture-container">
      <div className="card">
        <div className="face front">
          <img className="cardimg" src={card1} alt="card1" />
          <div className="face back">
            <div className="buttondiv">
              <div className="heart">
                <img src={heart} alt="heart" />
              </div>
              <div className="text-back">
                <p>Иван Петров</p>
                <p>Школа #100</p>
              </div>
              <div className="buttondiv2">
                <button className="button-golos">Проголосувати</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="face front">
          <img className="cardimg" src={card1} alt="card1" />
          <div className="face back">
            <div className="buttondiv">
              <div className="heart">
                <img src={heart} alt="heart" />
              </div>
              <div className="buttondiv2">
                <button className="button-golos">Проголосувати</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="face front">
          <img className="cardimg" src={card1} alt="card1" />
          <div className="face back">
            <div className="buttondiv">
              <div className="heart">
                <img src={heart} alt="heart" />
              </div>
              <div className="buttondiv2">
                <button className="button-golos">Проголосувати</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="face front">
          <img className="cardimg" src={card1} alt="card1" />
          <div className="face back">
            <div className="buttondiv">
              <div className="heart">
                <img src={heart} alt="heart" />
              </div>
              <div className="buttondiv2">
                <button className="button-golos">Проголосувати</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="face front">
          <img className="cardimg" src={card1} alt="card1" />
          <div className="face back">
            <div className="buttondiv">
              <div className="heart">
                <img src={heart} alt="heart" />
              </div>
              <div className="buttondiv2">
                <button className="button-golos">Проголосувати</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Picture;