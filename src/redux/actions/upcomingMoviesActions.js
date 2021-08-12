import axios from "axios";

import {
  FETCH_UPCOMING_MOVIES_REQUEST,
  FETCH_UPCOMING_MOVIES_SUCCESS,
  FETCH_UPCOMING_MOVIES_FAILURE,
} from "../actionTypes/upcomingMoviesActionTypes";

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
      .get(process.env.REACT_APP_UPCOMING_MOVIES_API_URL)
      .then((response) => {
        const upcomingMoviesResponseData = response.data;
        // console.log("responseUpcomingMoviesData", response.data);
        dispatch(fetchUpcomingMoviesSuccess(upcomingMoviesResponseData));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchUpcomingMoviesFailure(errorMessage));
      });
  };
};
