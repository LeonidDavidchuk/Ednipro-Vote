import React, { useState } from "react";
import "../register/Register.css";
import arrow2 from "./images/arrow2.svg";
import { Form } from "react-bootstrap";
import rectangle from "./images/rectangle.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsRegistered(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerUser(name, email);
  };

  const registerUser = async (name, email) => {
    try {
      const responce = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await responce.json();

      if (responce.ok) {
        console.log("User registered: ", data.user.token);

        setIsRegistered(true);

        // Clean forms
        setName("");
        setEmail("");

        // Save token in local storage

        localStorage.setItem("token", data.user.token);

        // message success
        toast.success("Ви успішно зареєструвалися");
      } else {
        // messages error

        console.error("Error register user: ");
        toast.error(`Помилка реєстрації`);
      }
    } catch (error) {
      console.error("Error sending request: ", error);
    }
  };

  return (
    <div className="register-container">
      <ToastContainer />
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
        <img className="arrow2" src={arrow2} alt="arrow2" />

        {!isRegistered && (
          <div className="Button-and-form">
            <Form.Group>
              <Form.Control
                className="form_email"
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                className="form_registration"
                type="text"
                placeholder="Ім'я"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <div className="registration">
              <button type="submit" onClick={handleSubmit}>
                Зареєструватися
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;
