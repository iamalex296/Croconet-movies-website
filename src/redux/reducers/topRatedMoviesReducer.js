import {
  FETCH_TOP_RATED_MOVIES_REQUEST,
  FETCH_TOP_RATED_MOVIES_SUCCESS,
  FETCH_TOP_RATED_MOVIES_FAILURE,
} from "../actionTypes/topRatedMoviesActionTypes";

const initialState = {
  loading: false,
  topRatedMovies: [],
  error: "",
};

const topRatedMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOP_RATED_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TOP_RATED_MOVIES_SUCCESS:
      return {
        ...state,
        topRatedMovies: action.payload,
        loading: false,
      };

    case FETCH_TOP_RATED_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default topRatedMoviesReducer;
