import { combineReducers } from "redux";

import upcomingMoviesReducer from "./reducers/upcomingMoviesReducer";

const rootReducer = combineReducers({
  upcomingMovies: upcomingMoviesReducer,
});

export default rootReducer;
