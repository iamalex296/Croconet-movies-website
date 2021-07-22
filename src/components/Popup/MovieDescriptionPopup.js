import React from "react";
import classes from "./MovieDescriptionPopup.module.css";

import { genres } from "../../constants/constants";

const MovieDescriptionPopup = ({
  onHover,
  popupDirection,
  openLeft,
  singleMovieDataObj,
  genreIds,
}) => {
  return (
    <div
      className={` ${onHover} ${
        popupDirection === openLeft ? classes.openLeft : classes.openRight
      } ${classes["popup-box"]}`}
    >
      <div>
        <p className={classes.title}>{singleMovieDataObj.title}</p>
        <p>
          <span>გამოშვების თარიღი:</span> {singleMovieDataObj.release_date}
        </p>
        <p>
          <span>ჟანრი:</span>
          {genreIds.map((genre_id, index) =>
            genres.map(
              (genre) =>
                genre.id === genre_id && (
                  <span style={{ color: "white" }} key={genre.id}>
                    {genre.name}
                    {genreIds.length - 1 !== index && ","}
                  </span>
                )
            )
          )}
        </p>
      </div>
      <div>
        <p className={classes["movie-description"]}>
          <span>მოკლე აღწერა:</span>
          {singleMovieDataObj.overview}
        </p>
        <p>
          <span id={classes.IMDB}>IMDB</span>
          {singleMovieDataObj.vote_average.toFixed(1)}
        </p>
      </div>
    </div>
  );
};

export default MovieDescriptionPopup;
