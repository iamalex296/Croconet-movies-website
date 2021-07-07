import React from "react";

import classes from "./SignleCard.module.css";

const SingleCard = ({ imgSrc, altText }) => {
  return (
    <div className={classes["single-card"]}>
      <img src={imgSrc} alt={altText} className={classes["card-image"]} />
    </div>
  );
};

export default SingleCard;
