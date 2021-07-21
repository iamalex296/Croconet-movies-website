import React, { useRef, useEffect, useState } from "react";

import MovieDescriptionPopup from "../Popup/MovieDescriptionPopup";
import playCircleIcon from "../../assets/playCirlce.svg";

import classes from "./SignleCard.module.css";

const poster_URL = "https://image.tmdb.org/t/p/original/";

const SingleCard = ({
  imgSrc,
  altText,
  openLeft,
  openRight,
  singleMovieDataObj,
  genreIds,
}) => {
  const [popupDirection, setPopupDirection] = useState(null);

  const singleCardRef = useRef();

  let direction =
    singleCardRef?.current?.offsetLeft - 400 < 0
      ? openLeft
      : singleCardRef?.current?.offsetLeft + 800 > window.innerWidth
      ? openRight
      : openLeft;

  useEffect(() => {
    // console.log(singleCardRef.current.offsetLeft);
    setPopupDirection(direction);
  }, [direction]);

  return (
    <div className={classes["single-card"]} ref={singleCardRef}>
      <img
        src={playCircleIcon}
        alt="playCircle"
        style={{ position: "absolute" }}
        className={classes.onHover}
      />
      <img
        src={poster_URL + imgSrc}
        alt={altText}
        className={classes["card-image"]}
      />
      <MovieDescriptionPopup
        onHover={classes.onHover}
        popupDirection={popupDirection}
        openLeft={openLeft}
        singleMovieDataObj={singleMovieDataObj}
        genreIds={genreIds}
      />
    </div>
  );
};

export default SingleCard;
