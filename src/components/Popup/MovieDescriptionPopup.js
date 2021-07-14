import React from "react";
import classes from "./MovieDescriptionPopup.module.css";

const MovieDescriptionPopup = ({
  onHover,
  title,
  info,
  description,
  imdb,
  popupDirection,
  openLeft,
}) => {
  return (
    <div
      className={`${classes["popup-box"]} ${onHover} ${
        popupDirection === openLeft ? classes.openLeft : classes.openRight
      }`}
    >
      <div>{title}text</div>
      <div>{info}text</div>
      <div>{description}text</div>
      <div>{imdb}text</div>
    </div>
  );
};

export default MovieDescriptionPopup;
