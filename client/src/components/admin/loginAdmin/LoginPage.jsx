import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../loginAdmin/LoginPage.css";

function LoginPage({ setIsAuthenticated }) {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/admin/login",
        {
          password,
        }
      );

      setMessage(response.data.message);

      if (response.status === 200) {
        localStorage.setItem("isAuthenticated", true);
        setIsAuthenticated(true);
        setMessage(response.message);
        navigate("/login/adminpage");
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Ошибка при отправке данных на сервер");
      }
    }
  };

  return (
    <div className="h1">
      <h1>АДМИН - ПАНЕЛЬ</h1>
      <form className="button-admin" onSubmit={handleSubmit}>
        <label htmlFor="password">Пароль:</label>
        <input
          className="input"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="buttonauth" type="submit">
          Войти
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default LoginPage;
