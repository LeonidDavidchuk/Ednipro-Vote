import React, { useState, useEffect } from "react";
import axios from "axios";
import "../pageAdmin/AdminPage.css";

function AdminPage() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [school, setSchool] = useState("");
  const [message, setMessage] = useState("");

  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetchPictures();
  }, []);

  const fetchPictures = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/picture/getAll_picture"
      );
      setPictures(response.data);
    } catch (error) {
      setMessage("Ошибка при получении списка картинок");
    }
  };

  const deletePicture = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/picture/delete_picture/${id}`
      );
      setMessage(response.data.message);
      fetchPictures();
    } catch (error) {
      setMessage("Ошибка при удалении картинки");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const responce = await axios.post(
        "http://localhost:3000/api/picture/add_picture",
        {
          name,
          url,
          school,
        }
      );

      setMessage(responce.data.message);
    } catch (error) {
      if (error.responce) {
        setMessage(error.responce.data.message);
      } else {
        setMessage("Ошибка при отправке данных на сервер");
      }
    }
  };

  return (
    <div>
      <h1>Добавить картинку</h1>
      <form className="pictures" onSubmit={handleSubmit}>
        <label htmlFor="name">Имя ученика:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="url">URL:</label>
        <input
          type="url"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <label htmlFor="school">Школа:</label>
        <input
          type="text"
          id="school"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          required
        />
        <button type="submit">Добавить картинку</button>
      </form>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Удалить картинку</h2>
      <ul className="delete">
        {pictures.map((picture) => (
          <li key={picture.id}>
            {picture.name} {picture.url} {picture.school}
            <button onClick={() => deletePicture(picture.id)}>Удалить</button>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <br />
      <br />
      <br />
      {message && <p>{message}</p>}
    </div>
  );
}

export default AdminPage;
