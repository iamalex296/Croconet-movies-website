import { combineReducers } from "redux";

import upcomingMoviesReducer from "./reducers/upcomingMoviesReducer";
import topRatedMoviesReducer from "./reducers/topRatedMoviesReducer";
import nowPlayingMoviesReducer from "./reducers/nowPlayingMoviesReducer";

const rootReducer = combineReducers({
  upcomingMovies: upcomingMoviesReducer,
  topRatedMovies: topRatedMoviesReducer,
  nowPlayingMovies: nowPlayingMoviesReducer,
});

export default rootReducer;
