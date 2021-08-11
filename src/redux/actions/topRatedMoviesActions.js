import axios from "axios";

import {
  FETCH_TOP_RATED_MOVIES_REQUEST,
  FETCH_TOP_RATED_MOVIES_SUCCESS,
  FETCH_TOP_RATED_MOVIES_FAILURE,
} from "../actionTypes/topRatedMoviesActionTypes";

const API_key = "a7800c107865c419bc37a1f55d4993ae";
const topRatedMovies_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_key}`;

export const fetchTopRatedMoviesRequest = () => {
  return {
    type: FETCH_TOP_RATED_MOVIES_REQUEST,
  };
};

export const fetchTopRatedMoviesSuccess = (topRatedMoviesResponseData) => {
  return {
    type: FETCH_TOP_RATED_MOVIES_SUCCESS,
    payload: topRatedMoviesResponseData,
  };
};

export const fetchTopRatedMoviesFailure = (error) => {
  return {
    type: FETCH_TOP_RATED_MOVIES_FAILURE,
    payload: error,
  };
};

export const fetchTopRatedMovies = () => {
  return (dispatch) => {
    dispatch(fetchTopRatedMoviesRequest());
    axios
      .get(topRatedMovies_URL)
      .then((response) => {
        const topRatedMoviesResponseData = response.data;
        console.log("responseTopRatedMoviesData", response.data);
        dispatch(fetchTopRatedMoviesSuccess(topRatedMoviesResponseData));
      })
      .catch((error) => {
        const errorMessage = error;
        dispatch(fetchTopRatedMoviesFailure(errorMessage));
      });
  };
};
