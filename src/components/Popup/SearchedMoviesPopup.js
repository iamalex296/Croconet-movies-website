import React from "react";
import { Link } from "react-router-dom";

import classes from "./SearchedMoviesPopup.module.css";

const poster_URL = "https://image.tmdb.org/t/p/original/";

const SearchedMoviesPopup = ({
  searchedMovies,
  setToggleSearchInput,
  setShowMoviesPopup,
}) => {
  // console.log("searchedMoviesData", searchedMovies);

  const toggleSearchPopup = () => {
    setToggleSearchInput(false);
    setShowMoviesPopup(false);
  };

  return (
    <div className={classes["searched-movies-main-container"]}>
      {searchedMovies.map((searchedSingleMovie) => (
        <Link
          to={`/movies/${searchedSingleMovie.id}`}
          key={searchedSingleMovie.id}
          className={classes["card-poster-title"]}
        >
          <img
            className={classes["card-poster"]}
            src={poster_URL + searchedSingleMovie.poster_path}
            alt="poster"
            key={searchedSingleMovie.id}
            onClick={toggleSearchPopup}
          />
          <p>{searchedSingleMovie.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default SearchedMoviesPopup;
