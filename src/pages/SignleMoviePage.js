import React, { useState, useEffect } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

import SingleMoviePageLayout from "../components/Layout/SignleMoviePageLayout";

const SignleMoviePage = ({ API_key, setError }) => {
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
              if (response.data.results.length > 0) {
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
                return;
              }
            }
          })
          .catch((error) => setError(error));
      };
      getSingleMovieVideo();
    }
  }, [movieVideo_URL, setError, singleMovieDetailsObj]);

  return (
    <SingleMoviePageLayout
      singleMovieDetailsObj={singleMovieDetailsObj}
      movieVideo={movieVideo}
      isLoading={isLoading}
    />
  );
};

export default SignleMoviePage;
