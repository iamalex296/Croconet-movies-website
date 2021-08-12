import { combineReducers } from "redux";

import upcomingMoviesReducer from "./reducers/upcomingMoviesReducer";
import topRatedMoviesReducer from "./reducers/topRatedMoviesReducer";
import nowPlayingMoviesReducer from "./reducers/nowPlayingMoviesReducer";
import popularMoviesReducer from "./reducers/popularMoviesReducer";

const rootReducer = combineReducers({
  upcomingMovies: upcomingMoviesReducer,
  topRatedMovies: topRatedMoviesReducer,
  nowPlayingMovies: nowPlayingMoviesReducer,
  popularMovies: popularMoviesReducer,
});

export default rootReducer;
