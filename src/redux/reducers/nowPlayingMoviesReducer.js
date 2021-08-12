import {
  FETCH_NOW_PLAYING_MOVIES_REQUEST,
  FETCH_NOW_PLAYING_MOVIES_SUCCESS,
  FETCH_NOW_PLAYING_MOVIES_FAILURE,
} from "../actionTypes/nowPlayingMoviesActionTypes";

const initialState = {
  loading: false,
  nowPlayingMovies: [],
  error: "",
};

const nowPlayingMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOW_PLAYING_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_NOW_PLAYING_MOVIES_SUCCESS:
      return {
        ...state,
        nowPlayingMovies: action.payload,
        loading: false,
      };

    case FETCH_NOW_PLAYING_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default nowPlayingMoviesReducer;
