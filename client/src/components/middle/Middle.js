import React from "react";
import "../middle/Middle.css";
import arrow from "./images/arrow.svg";

function Middle() {
  return (
    <div className="middle-container">
      <div className="etapi_konkursu">
        <div className="rounded-rectangle">
          <p className="etapi-konkursu-text">ЕТАПИ КОНКУРСУ</p>
          <div
            className="container1"
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <div className="optimize_phone">
              <div className="blue-circle3-text">
                <span className="blue-circle-span"> 1</span>
                <div className="blue-circle1"></div>
              </div>
              <div style={{ textAlign: "center" }}>
                Школа проводить внутрішній конкурс за найкращий ескіз та передає
                1 варіант на загальне відбіркове голосування
              </div>
              <span>
                <strong>2 тижні</strong>
              </span>
            </div>
            <div className="container2">
              <div className="blue-circle3-text">
                <span className="blue-circle-span">2</span>
                <div className="blue-circle3"></div>
              </div>
              <div>Період голосування</div>
              <span>
                <strong>3 дні</strong>
              </span>
            </div>
            <div className="container3">
              <div className="blue-circle3-text">
                <span className="blue-circle-span"> 3</span>
                <div className="blue-circle3"></div>
              </div>
              <div className="vibir">Вибір переможця та передача подарунку</div>
              <span>
                <strong>1 день</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
      <img className="arrow" src={arrow} alt="arrow down" />
    </div>
  );
}

export default Middle;
