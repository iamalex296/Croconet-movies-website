import React, { useRef, useEffect, useState } from "react";

import MovieDescriptionPopup from "../Popup/MovieDescriptionPopup";
import playCircleIcon from "../../assets/playCirlce.svg";

import classes from "./SignleCard.module.css";

const SingleCard = ({ imgSrc, altText, openLeft, openRight }) => {
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
      <img src={imgSrc} alt={altText} className={classes["card-image"]} />
      <MovieDescriptionPopup
        onHover={classes.onHover}
        popupDirection={popupDirection}
        openLeft={openLeft}
      />
    </div>
  );
};

export default SingleCard;
