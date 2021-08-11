import { combineReducers } from "redux";

import upcomingMoviesReducer from "./reducers/upcomingMoviesReducer";
import topRatedMoviesReducer from "./reducers/topRatedMoviesReducer";

const rootReducer = combineReducers({
  upcomingMovies: upcomingMoviesReducer,
  topRatedMovies: topRatedMoviesReducer,
});

export default rootReducer;
