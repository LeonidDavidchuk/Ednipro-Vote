import React, { useState, useEffect } from "react";
import "./Picture.css";
import heart from "./images/heart.svg";
import { Puff } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Picture() {
  const [pictures, setPictures] = useState([]);
  const [load, setLoad] = useState(true);

  const [heartAnimation, setHeartAnimation] = useState(false);

  useEffect(() => {
    async function fetchPictures() {
      const response = await fetch(
        "http://localhost:3000/api/picture/getAll_picture"
      );
      const data = await response.json();
      setPictures(data);
      console.log(data);
      setLoad(false);
    }

    fetchPictures();
  }, []);

  const updatePictureVotes = (pictureId, newVoteCount) => {
    setPictures(
      pictures.map((picture) =>
        picture.id === pictureId
          ? { ...picture, count_vote: newVoteCount }
          : picture
      )
    );
  };

  const handleVote = async (pictureId) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Будь ласка зареєструйтеся на сайті, щоб проголосувати");
        return;
      }

      console.log(token);

      const responce = await fetch("http://localhost:3000/api/picture/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ id: pictureId }),
      });

      if (responce.ok) {
        // update votes
        setHeartAnimation(true);
        setTimeout(() => setHeartAnimation(false), 1000);

        const updatedPicture = await responce.json();

        let index = pictures.findIndex((x) => x.id === pictureId);
        let tempPictures = [...pictures];
        let tempPicture = { ...tempPictures[index] };
        tempPicture.count_vote++;
        tempPictures[index] = tempPicture;

        let previousIndex = pictures.findIndex(
          (x) => x.id === updatedPicture.previousPicture
        );

        let tempPreviousPicture = { ...tempPictures[previousIndex] };
        tempPreviousPicture.count_vote--;
        tempPictures[previousIndex] = tempPreviousPicture;

        updatePictureVotes(pictureId, updatedPicture.count_vote);
        setPictures(tempPictures);
        toast.success("Ви успішно проголосували");
      }
      if (!responce.ok) {
        toast.error("Ви не можете більше проголосувати за цю картинку");
      }
    } catch (error) {
      console.error("Ошибка при голосовании за картинку: ", error);
    }
  };

  return (
    <>
      {load ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Puff
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        </div>
      ) : (
        <div className="picture-container">
          <ToastContainer />
          {pictures.map((picture) => (
            <div className="card" key={picture.id}>
              <div className="card-inner">
                <div className="face front">
                  <img
                    className="cardimg"
                    src={picture.url}
                    alt={picture.name}
                  />
                </div>
                <div className="face back">
                  <div className="buttondiv">
                    <div className="heart">
                      <img
                        src={heart}
                        alt="heart"
                        className={heartAnimation ? "heart-animation" : ""}
                      />
                      <span>{picture.count_vote}</span>
                    </div>
                    <div className="text-back">
                      <p>{picture.name}</p>
                      <p>{picture.school}</p>
                    </div>
                    <div className="buttondiv2">
                      <button
                        className="button-golos"
                        onClick={() => handleVote(picture.id)}
                      >
                        Проголосувати
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Picture;
