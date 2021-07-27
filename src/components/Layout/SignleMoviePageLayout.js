import React, { useState, useEffect } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

import Template from "../Templates/Template";
import Loader from "../../UI/Loader";
import classes from "./SingleMoviePageLayout.module.css";

const poster_URL = "https://image.tmdb.org/t/p/original";

const SignleMoviePageLayout = ({ setError, API_key }) => {
  const params = useParams();
  // console.log("params", params);
  const [singleMovieDetailsObj, setSingleMovieDetailObj] = useState("");
  const [movieVideo, setMovieVideo] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const movieDetailsObj_URL = `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${API_key}&append_to_response=videos`;

  useEffect(() => {
    const getSingleMovieDetailsObj = async () => {
      await axios
        .get(movieDetailsObj_URL)
        .then((response) => {
          console.log("movieDetailsObj", response.data);
          setSingleMovieDetailObj(response.data);
          if (response.data) {
            if (response.data.videos.results[0]) {
              let video = [];
              const singleVideo = response.data.videos.results[0];
              video.push(
                <iframe
                  style={{ border: "none" }}
                  type="text/html"
                  width="100%"
                  height="500px"
                  src={`https://www.youtube.com/embed/${singleVideo.key}`}
                  title={singleVideo.name}
                  key={singleVideo.key}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
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
    getSingleMovieDetailsObj();
  }, [setError, movieDetailsObj_URL]);

  return (
    <Template styleTemplateClass={classes["template-container"]}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div
            className={classes["main-container"]}
            style={{
              backgroundImage:
                "url(" +
                poster_URL +
                `${
                  singleMovieDetailsObj && singleMovieDetailsObj.backdrop_path
                }` +
                ")",
            }}
          >
            <div className={classes["video-container"]}>
              {movieVideo ? (
                movieVideo
              ) : (
                <p className={classes["information-message"]}>
                  ფილმი მალე დაემატება...
                </p>
              )}
            </div>
          </div>

          <div style={{}} className={classes["description-container"]}>
            <img
              className={classes["movie-poster"]}
              src={
                poster_URL +
                `${
                  singleMovieDetailsObj.poster_path &&
                  singleMovieDetailsObj.poster_path
                }`
              }
              alt="moviePoster"
            />
            <div className={classes["description-box"]}>
              <p className={classes.title}>
                {singleMovieDetailsObj.title && singleMovieDetailsObj.title}
              </p>
              <p>
                <span>ენა:</span>
                {singleMovieDetailsObj.original_language &&
                  singleMovieDetailsObj.original_language.toUpperCase()}
              </p>
              <p>
                <span>გამოშვების წელი:</span>
                {singleMovieDetailsObj.release_date &&
                  singleMovieDetailsObj.release_date.slice(0, 4)}
              </p>
              <p>
                <span>ხანგრძლივობა:</span>
                {singleMovieDetailsObj.runtime &&
                  singleMovieDetailsObj.runtime}{" "}
                წუთი{" "}
              </p>
              <p>
                <span>ბიუჯეტი:</span>
                {singleMovieDetailsObj.budget && singleMovieDetailsObj.budget}$
              </p>
              <p>
                <span>შემოსავალი:</span>
                {singleMovieDetailsObj.revenue && singleMovieDetailsObj.revenue}
                $
              </p>
              <p>
                <span>ჟანრი:</span>
                {singleMovieDetailsObj.genres &&
                  singleMovieDetailsObj.genres.map((genre) => (
                    <span id={classes["genre-name"]} key={genre.id}>
                      {genre.name}
                      {","}
                    </span>
                  ))}
              </p>
              <p>
                <span>აღწერა:</span>
                {singleMovieDetailsObj.overview &&
                  singleMovieDetailsObj.overview}
              </p>
              <p>
                <span id={classes.IMDB}>IMDB</span>
                {singleMovieDetailsObj.vote_average &&
                  singleMovieDetailsObj.vote_average.toFixed(1)}
              </p>
            </div>
          </div>
        </>
      )}
    </Template>
  );
};

export default SignleMoviePageLayout;
