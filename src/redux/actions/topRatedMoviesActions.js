import axios from "axios";

import {
  FETCH_TOP_RATED_MOVIES_REQUEST,
  FETCH_TOP_RATED_MOVIES_SUCCESS,
  FETCH_TOP_RATED_MOVIES_FAILURE,
} from "../actionTypes/topRatedMoviesActionTypes";

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
      .get(process.env.REACT_APP_TOP_RATED_MOVIES_API_URL)
      .then((response) => {
        const topRatedMoviesResponseData = response.data;
        // console.log("responseTopRatedMoviesData", response.data);
        dispatch(fetchTopRatedMoviesSuccess(topRatedMoviesResponseData));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchTopRatedMoviesFailure(errorMessage));
      });
  };
};
