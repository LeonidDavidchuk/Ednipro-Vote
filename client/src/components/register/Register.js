import React from "react";
import "../register/Register.css";
import arrow2 from "./images/arrow2.svg";
import { Form } from "react-bootstrap";
import rectangle from "./images/rectangle.svg";

function Register() {
  return (
    <div className="register-container">
      <div className="text-container">
        <strong className="text1">
          <img className="rectangle" src={rectangle} alt="rectangle" />
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
        <div className="Button-and-form">
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="ПІБ"
              className="Form.Control"
              style={{
                position: "relative",
                fontSize: "22px",
                borderRadius: "50px",
                borderColor: "black",
                width: "560px",
                height: "75px",
                textIndent: "50px",
              }}
            />
          </Form.Group>

          <div className="registration">
            <button>Зареєструватися</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
