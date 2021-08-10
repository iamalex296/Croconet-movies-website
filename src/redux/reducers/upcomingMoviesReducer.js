import {
  FETCH_UPCOMING_MOVIES_REQUEST,
  FETCH_UPCOMING_MOVIES_SUCCESS,
  FETCH_UPCOMING_MOVIES_FAILURE,
} from "../actionTypes/upcomingMoviesActionTypes";

const initialState = {
  loading: false,
  upcomingMovies: [],
  error: "",
};

const upcomingMoviesReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case FETCH_UPCOMING_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_UPCOMING_MOVIES_SUCCESS:
      return {
        ...state,
        upcomingMovies: action.payload,
        loading: false,
      };

    case FETCH_UPCOMING_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default upcomingMoviesReducer;
