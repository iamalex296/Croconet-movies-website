import axios from "axios";

import {
  FETCH_NOW_PLAYING_MOVIES_REQUEST,
  FETCH_NOW_PLAYING_MOVIES_SUCCESS,
  FETCH_NOW_PLAYING_MOVIES_FAILURE,
} from "../actionTypes/nowPlayingMoviesActionTypes";

const API_key = "a7800c107865c419bc37a1f55d4993ae";
const nowPlayingMovies_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_key}`;

export const fetchNowPlayingMoviesRequest = () => {
  return {
    type: FETCH_NOW_PLAYING_MOVIES_REQUEST,
  };
};

export const fetchNowPlayingMoviesSuccess = (nowPlayingMoviesResponseData) => {
  return {
    type: FETCH_NOW_PLAYING_MOVIES_SUCCESS,
    payload: nowPlayingMoviesResponseData,
  };
};

export const fetchNowPlayingMoviesFailure = (error) => {
  return {
    type: FETCH_NOW_PLAYING_MOVIES_FAILURE,
    payload: error,
  };
};

export const fetchNowPlayingMovies = () => {
  return (dispatch) => {
    dispatch(fetchNowPlayingMoviesRequest());
    axios
      .get(nowPlayingMovies_URL)
      .then((response) => {
        const nowPlayingMoviesResponseData = response.data;
        // console.log("responseNowPlayingMoviesData", response.data);
        dispatch(fetchNowPlayingMoviesSuccess(nowPlayingMoviesResponseData));
      })
      .catch((error) => {
        const errorMessage = error;
        dispatch(fetchNowPlayingMoviesFailure(errorMessage));
      });
  };
};
