import React, { useState, useEffect } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

import SingleMoviePageLayout from "../components/Layout/SignleMoviePageLayout";

const SignleMoviePage = ({ API_key }) => {
  const params = useParams();
  // console.log("params", params);
  const [singleMovieDetailsObj, setSingleMovieDetailObj] = useState("");
  const [movieVideo, setMovieVideo] = useState(null);

  const singleMovie_URL = `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${API_key}&language=en-US`;
  const movieVideo_URL = `https://api.themoviedb.org/3/movie/${singleMovieDetailsObj.id}/videos?api_key=${API_key}&language=en-US`;

  useEffect(() => {
    const getSingleMovieDetailsData = async () => {
      await axios.get(singleMovie_URL).then((response) => {
        // console.log("singleMovieDetailsData", response.data);
        setSingleMovieDetailObj(response.data);
      });
      // .catch((error) => setError(error));
    };
    getSingleMovieDetailsData();
  }, [singleMovie_URL]);

  useEffect(() => {
    const getSingleMovieVideo = async () => {
      await axios.get(movieVideo_URL).then((response) => {
        console.log("movieVideoData", response.data);
        if (response.data) {
          if (response.data.results.length > 0) {
            let videos = [];
            response.data.results.map((video) =>
              videos.push(
                <iframe
                  style={{ border: "none" }}
                  type="text/html"
                  width="100%"
                  height="500px"
                  src={`https://www.youtube.com/embed/${video.key}`}
                  title={video.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              )
            );
            setMovieVideo(videos[0]);
          } else {
            return;
          }
        }
      });
      // .catch((error) => setError(error));
    };
    getSingleMovieVideo();
  }, [movieVideo_URL]);

  return (
    <SingleMoviePageLayout
      singleMovieDetailsObj={singleMovieDetailsObj}
      movieVideo={movieVideo}
    />
  );
};

export default SignleMoviePage;
