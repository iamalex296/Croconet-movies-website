import React, { useState, useEffect } from "react";
import axios from "axios";

import classes from "./SearchInput.module.css";
import SearchedMoviesPopup from "../Popup/SearchedMoviesPopup";

const SearchInput = ({ setError, setToggleSearchInput }) => {
  const [enteredMovieValue, setEnteredMovieValue] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [showMoviesPopup, setShowMoviesPopup] = useState(false);
  // console.log("enteredMovieValue", enteredMovieValue);

  useEffect(() => {
    const getPopularMoviesData = async () => {
      const filteredMovies = setTimeout(() => {
        if (enteredMovieValue) {
          axios
            .get(
              `https://api.themoviedb.org/3/search/movie?query=${enteredMovieValue}&api_key=${process.env.REACT_APP_API_KEY}`
            )
            .then((response) => {
              // console.log("searchedMovieData", response.data.results);
              setSearchedMovies(response.data.results.slice(0, 12));
              enteredMovieValue !== ""
                ? setShowMoviesPopup(true)
                : setShowMoviesPopup(false);
            })
            .catch((error) => setError(error));
        }
      }, 1000);
      return () => clearInterval(filteredMovies);
    };

    getPopularMoviesData();
  }, [enteredMovieValue, setError]);

  return (
    <>
      <input
        className={classes.input}
        placeholder="ფილმების ძიება..."
        onChange={(event) => setEnteredMovieValue(event.target.value)}
        value={enteredMovieValue}
      />

      {showMoviesPopup && (
        <SearchedMoviesPopup
          setToggleSearchInput={setToggleSearchInput}
          setShowMoviesPopup={setShowMoviesPopup}
          searchedMovies={searchedMovies}
        />
      )}
    </>
  );
};

export default SearchInput;
