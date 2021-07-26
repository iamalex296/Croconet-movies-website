import React, { useState, useEffect } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

import Template from "../Templates/Template";
import Loader from "../../UI/Loader";
// import classes from "./SingleMoviePageLayout.module.css";

const poster_URL = "https://image.tmdb.org/t/p/original";

const SignleMoviePageLayout = ({ setError, API_key }) => {
  const params = useParams();
  // console.log("params", params);
  const [singleMovieDetailsObj, setSingleMovieDetailObj] = useState("");
  const [movieVideo, setMovieVideo] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const singleMovie_URL = `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${API_key}&language=en-US`;
  const movieVideo_URL = `https://api.themoviedb.org/3/movie/${singleMovieDetailsObj.id}/videos?api_key=${API_key}&language=en-US`;

  useEffect(() => {
    const getSingleMovieDetailsData = async () => {
      await axios
        .get(singleMovie_URL)
        .then((response) => {
          // console.log("singleMovieDetailsData", response.data);
          setSingleMovieDetailObj(response.data);
        })
        .catch((error) => setError(error));
    };
    getSingleMovieDetailsData();
  }, [singleMovie_URL, setError]);

  useEffect(() => {
    if (singleMovieDetailsObj) {
      const getSingleMovieVideo = async () => {
        await axios
          .get(movieVideo_URL)
          .then((response) => {
            // console.log("movieVideoData", response.data);
            if (response.data) {
              if (response.data.results[0]) {
                let video = [];
                const singleVideo = response.data.results[0];
                video.push(
                  <iframe
                    style={{ border: "none" }}
                    type="text/html"
                    width="100%"
                    height="500px"
                    src={`https://www.youtube.com/embed/${singleVideo.key}`}
                    title={singleVideo.name}
                    key={singleVideo.key}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                );
                setIsLoading(false);
                setMovieVideo(video);
              } else {
                setIsLoading(false);
              }
            }
          })
          .catch((error) => setError(error));
      };
      getSingleMovieVideo();
    }
  }, [movieVideo_URL, setError, singleMovieDetailsObj]);

  return (
    <Template
      style={{
        fontSize: "14px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0",
        margin: "0",
        marginBottom: "20px",
      }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div
            style={{
              boxSizing: "border-box",
              width: "100%",
              height: "100%",
              padding: "0px 30px",
              backgroundImage:
                "url(" +
                poster_URL +
                `${
                  singleMovieDetailsObj && singleMovieDetailsObj.backdrop_path
                }` +
                ")",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "70%",
                heigth: "100%",
                margin: "0",
                padding: "0",
              }}
            >
              {movieVideo ? (
                movieVideo
              ) : (
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "36px",
                    backgroundColor: "#0083CA",
                    padding: "50px",
                    borderRadius: "5px",
                    opacity: "0.9",
                    margin: "150px auto",
                  }}
                >
                  ფილმი მალე დაემატება...
                </p>
              )}
            </div>
          </div>

          <div
            style={{
              width: "70%",
              height: "90%",
              display: "flex",
              marginTop: "50px",
            }}
          >
            <img
              style={{ height: "100%", width: "30%", borderRadius: "5px" }}
              src={
                poster_URL +
                `${
                  singleMovieDetailsObj.poster_path &&
                  singleMovieDetailsObj.poster_path
                }`
              }
              alt="moviePoster"
            />
            <div
              style={{
                marginLeft: "30px",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                background: "#1b1e20",
                alignItems: "stretch",
                padding: "20px",
                borderRadius: "5px",
              }}
            >
              <p>
                {singleMovieDetailsObj.title && singleMovieDetailsObj.title}
              </p>
              <p>
                ენა:{" "}
                {singleMovieDetailsObj.original_language &&
                  singleMovieDetailsObj.original_language.toUpperCase()}
              </p>
              <p>
                გამოშვების წელი:{" "}
                {singleMovieDetailsObj.release_date &&
                  singleMovieDetailsObj.release_date.slice(0, 4)}
              </p>
              <p>
                ხანგრძლივობა:{" "}
                {singleMovieDetailsObj.runtime && singleMovieDetailsObj.runtime}{" "}
                წუთი{" "}
              </p>
              <p>
                შემოსავალი:{" "}
                {singleMovieDetailsObj.revenue && singleMovieDetailsObj.revenue}
                $
              </p>
              <p>
                აღწერა:{" "}
                {singleMovieDetailsObj.overview &&
                  singleMovieDetailsObj.overview}
              </p>
            </div>
          </div>
        </>
      )}
    </Template>
  );
};

export default SignleMoviePageLayout;
