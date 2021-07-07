import React from "react";

import CardsWrapperContainer from "./CardsWrapperContainer";

import classes from "./ContentContainer.module.css";

const ContentContainer = ({ children }) => {
  return (
    <div className={classes.container}>
      <CardsWrapperContainer>{children}</CardsWrapperContainer>
    </div>
  );
};

export default ContentContainer;
