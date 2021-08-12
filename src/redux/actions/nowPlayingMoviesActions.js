import axios from "axios";

import {
  FETCH_NOW_PLAYING_MOVIES_REQUEST,
  FETCH_NOW_PLAYING_MOVIES_SUCCESS,
  FETCH_NOW_PLAYING_MOVIES_FAILURE,
} from "../actionTypes/nowPlayingMoviesActionTypes";

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
      .get(process.env.REACT_APP_NOW_PLAYING_MOVIES_API_URL)
      .then((response) => {
        const nowPlayingMoviesResponseData = response.data;
        // console.log("responseNowPlayingMoviesData", response.data);
        dispatch(fetchNowPlayingMoviesSuccess(nowPlayingMoviesResponseData));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchNowPlayingMoviesFailure(errorMessage));
      });
  };
};
