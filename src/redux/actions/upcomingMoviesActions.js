import axios from "axios";

import {
  FETCH_UPCOMING_MOVIES_REQUEST,
  FETCH_UPCOMING_MOVIES_SUCCESS,
  FETCH_UPCOMING_MOVIES_FAILURE,
} from "../actionTypes/upcomingMoviesActionTypes";

const API_key = "a7800c107865c419bc37a1f55d4993ae";
const upcomingMovies_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_key}`;

export const fetchUpcomingMoviesRequest = () => {
  return {
    type: FETCH_UPCOMING_MOVIES_REQUEST,
  };
};

export const fetchUpcomingMoviesSuccess = (upcomingMoviesResponseData) => {
  return {
    type: FETCH_UPCOMING_MOVIES_SUCCESS,
    payload: upcomingMoviesResponseData,
  };
};

export const fetchUpcomingMoviesFailure = (error) => {
  return {
    type: FETCH_UPCOMING_MOVIES_FAILURE,
    payload: error,
  };
};

export const fetchUpcomingMovies = () => {
  return (dispatch) => {
    dispatch(fetchUpcomingMoviesRequest());
    axios
      .get(upcomingMovies_URL)
      .then((response) => {
        const upcomingMoviesResponseData = response.data;
        // console.log("responseData", response.data);
        dispatch(fetchUpcomingMoviesSuccess(upcomingMoviesResponseData));
      })
      .catch((error) => {
        const errorMessage = error;
        dispatch(fetchUpcomingMoviesFailure(errorMessage));
      });
  };
};
