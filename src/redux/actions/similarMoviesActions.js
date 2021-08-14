import axios from "axios";

import {
  FETCH_SIMILAR_MOVIES_REQUEST,
  FETCH_SIMILAR_MOVIES_SUCCESS,
  FETCH_SIMILAR_MOVIES_FAILURE,
} from "../actionTypes/similarMoviesActionTypes";

export const fetchSimilarMoviesRequest = () => {
  return {
    type: FETCH_SIMILAR_MOVIES_REQUEST,
  };
};

export const fetchSimilarMoviesSuccess = (similarMoviesResponseData) => {
  return {
    type: FETCH_SIMILAR_MOVIES_SUCCESS,
    payload: similarMoviesResponseData,
  };
};

export const fetchSimilarMoviesFailure = (error) => {
  return {
    type: FETCH_SIMILAR_MOVIES_FAILURE,
    payload: error,
  };
};

export const fetchSimilarMovies = () => {
  return (dispatch) => {
    dispatch(fetchSimilarMoviesRequest());
    console.log("env", process.env.REACT_APP_SIMILAR_MOVIES_API_URL);
    axios
      .get(process.env.REACT_APP_SIMILAR_MOVIES_API_URL)
      .then((response) => {
        const similarMoviesResponseData = response.data;
        // console.log("responseSimilarMoviesData", response.data);
        dispatch(fetchSimilarMoviesSuccess(similarMoviesResponseData));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchSimilarMoviesFailure(errorMessage));
      });
  };
};
