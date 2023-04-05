import React from "react";
import "../register/Register.css";
import arrow2 from "./images/arrow2.svg";

function Register() {
  return (
    <div className="register-container">
      <div className="text-container">
        <strong className="text1">
          ГОЛОСУЙ ЗА НАЙКРУТІШИЙ ДИЗАЙН УЧНІВСЬКОГО
        </strong>
        <span className="text2">
          Тут зібрані усі ескізи від наших талановитих дизайнерів. Голосуй, який
          тобі подобається найбільше.
        </span>
        <span className="text3">
          Щоб проголосувати: зареєструйтеся та оберіть найгарніший, на вашу
          думку, дизайн.
        </span>

        <img src={arrow2} alt="arrow2" />
      </div>
    </div>
  );
}

export default Register;
