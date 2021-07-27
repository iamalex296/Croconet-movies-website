import React from "react";
import { Link } from "react-router-dom";

import SingleCard from "../Cards/SingleCard";

import classes from "./SearchedMoviesPopup.module.css";

const SearchedMoviesPopup = ({ searchedMovies }) => {
  // console.log("searchedMoviesData", searchedMovies);
  return (
    <div
      style={{
        borderTop: `1px solid rgb(${73}, ${73}, ${73})`,
        position: "absolute",
        display: "grid",
        gridTemplateColumns: "repeat(4, 230px)",
        gridTemplaterows: "repeat(3, 280)",
        // gridColumnGap: "3px",
        gridRowGap: "10px",
        padding: "10px 0px 10px 20px",
        top: "100%",
        zIndex: "10000",
        right: "100%",
        maxWidth: "910px",
        backgroundColor: `rgba(${30}, ${36}, ${44}, ${0.9})`,
        borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "5px",
      }}
    >
      {searchedMovies.map((searchedSingleMovie) => (
        <Link
          to={`/movies/${searchedSingleMovie.id}`}
          key={searchedSingleMovie.id}
          style={{ paddingLeft: "6px" }}
        >
          <SingleCard
            key={searchedSingleMovie.id}
            imgSrc={searchedSingleMovie.poster_path}
            altText={searchedSingleMovie.id}
            openLeft={classes["left-position"]}
            operRight={classes["right-position"]}
            singleMovieDataObj={searchedSingleMovie}
            genreIds={searchedSingleMovie.genre_ids}
          />
        </Link>
      ))}
    </div>
  );
};

export default SearchedMoviesPopup;
