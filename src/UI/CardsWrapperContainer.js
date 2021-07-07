import React from "react";

import classes from "./CardsWrapperContainer.module.css";

const CardsWrapperContainer = ({ children }) => {
  return <div className={classes.cardsWrapperContainer}>{children}</div>;
};

export default CardsWrapperContainer;
