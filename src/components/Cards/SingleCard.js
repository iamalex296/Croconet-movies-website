import React from "react";

import Popup from "../Popup/Popup";
import playCircleIcon from "../../assets/playCirlce.svg";

import classes from "./SignleCard.module.css";

const SingleCard = ({ imgSrc, altText }) => {
  return (
    <div
      className={classes["single-card"]}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={playCircleIcon}
        alt="playCircle"
        style={{ position: "absolute" }}
        className={classes.onHover}
      />
      <img src={imgSrc} alt={altText} className={classes["card-image"]} />
      <Popup onHover={classes.onHover} />
    </div>
  );
};

export default SingleCard;
