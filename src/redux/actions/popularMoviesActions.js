import axios from "axios";

import {
  FETCH_POPULAR_MOVIES_REQUEST,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_POPULAR_MOVIES_FAILURE,
} from "../actionTypes/popularMoviesActionTypes";

export const fetchPopularMoviesRequest = () => {
  return {
    type: FETCH_POPULAR_MOVIES_REQUEST,
  };
};

export const fetchPopularMoviesSuccess = (popularMoviesResponseData) => {
  return {
    type: FETCH_POPULAR_MOVIES_SUCCESS,
    payload: popularMoviesResponseData,
  };
};

export const fetchPopularMoviesFailure = (error) => {
  return {
    type: FETCH_POPULAR_MOVIES_FAILURE,
    payload: error,
  };
};

export const fetchPopularMovies = () => {
  return (dispatch) => {
    dispatch(fetchPopularMoviesRequest());
    console.log("env", process.env.REACT_APP_POPULAR_MOVIES_API_URL);
    axios
      .get(process.env.REACT_APP_POPULAR_MOVIES_API_URL)
      .then((response) => {
        const popularMoviesResponseData = response.data;
        // console.log("responsePopularMoviesData", response.data);
        dispatch(fetchPopularMoviesSuccess(popularMoviesResponseData));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchPopularMoviesFailure(errorMessage));
      });
  };
};
