import React from "react";

import CardsWrapperContainer from "./CardsWrapperContainer";

import classes from "./ContentContainer.module.css";

const ContentContainer = ({ children, title }) => {
  return (
    <div className={classes.container}>
      <CardsWrapperContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "30px",
          }}
        >
          {title}
        </div>
        <div>{children}</div>
      </CardsWrapperContainer>
    </div>
  );
};

export default ContentContainer;
