import React from "react";

import CardsWrapperContainer from "./CardsWrapperContainer";
import Icon from "./Icon";

import Arrow from "../assets/RightArrow.svg";
import classes from "./ContentContainer.module.css";

const ContentContainer = ({ children, title }) => {
  return (
    <div className={classes.container}>
      <CardsWrapperContainer>
        <div className={classes.title}>
          {title}
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>ყველა</span>
            <Icon
              src={Arrow}
              alt="arrowIcon"
              style={{
                height: "15px",
                width: "15px",
                padding: "0px",
                marginLeft: "3px",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>
        <div>{children}</div>
      </CardsWrapperContainer>
    </div>
  );
};

export default ContentContainer;
