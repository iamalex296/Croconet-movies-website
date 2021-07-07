import React from "react";

import classes from "./CardsWrapperContainer.module.css";

const CardsWrapperContainer = ({ children, dummyData }) => {
  return <div className={classes.cardsWrapperContainer}>{children}</div>;
};

export default CardsWrapperContainer;
