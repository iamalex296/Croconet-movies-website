import React from "react";

import classes from "./SignleCard.module.css";
import Popup from "../Popup/Popup";

const SingleCard = ({ imgSrc, altText }) => {
  return (
    <div className={classes["single-card"]}>
      <img src={imgSrc} alt={altText} className={classes["card-image"]} />
      <Popup onHover={classes.onHover} />
    </div>
  );
};

export default SingleCard;
