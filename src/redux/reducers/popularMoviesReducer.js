import {
  FETCH_POPULAR_MOVIES_REQUEST,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_POPULAR_MOVIES_FAILURE,
} from "../actionTypes/popularMoviesActionTypes";

const initialState = {
  loading: false,
  popularMovies: [],
  error: "",
};

const popularMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        popularMovies: action.payload,
        loading: false,
      };

    case FETCH_POPULAR_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default popularMoviesReducer;
