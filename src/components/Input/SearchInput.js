import React, { useState, useEffect } from "react";
import axios from "axios";

import classes from "./SearchInput.module.css";
import SearchedMoviesPopup from "../Popup/SearchedMoviesPopup";

const SearchInput = ({ API_key, setError }) => {
  const [enteredMovieValue, setEnteredMovieValue] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [showMoviesPopup, setshowMoviesPopup] = useState(false);
  // console.log("enteredMovieValue", enteredMovieValue);

  useEffect(() => {
    const getPopularMoviesData = async () => {
      const filteredMovies = setTimeout(() => {
        if (enteredMovieValue) {
          axios
            .get(
              `https://api.themoviedb.org/3/search/movie?query=${enteredMovieValue}&api_key=${API_key}`
            )
            .then((response) => {
              // console.log("searchedMovieData", response.data.results);
              setSearchedMovies(response.data.results.slice(0, 8));
              enteredMovieValue !== ""
                ? setshowMoviesPopup(true)
                : setshowMoviesPopup(false);
            })
            .catch((error) => setError(error));
        }
      }, 2000);
      return () => clearInterval(filteredMovies);
    };

    getPopularMoviesData();
  }, [API_key, enteredMovieValue, setError]);

  return (
    <>
      <input
        className={classes.input}
        placeholder="ფილმების ძიება..."
        onChange={(event) => setEnteredMovieValue(event.target.value)}
        value={enteredMovieValue}
      />

      {showMoviesPopup && (
        <SearchedMoviesPopup searchedMovies={searchedMovies} />
      )}
    </>
  );
};

export default SearchInput;
