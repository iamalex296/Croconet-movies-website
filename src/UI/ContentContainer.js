import React from "react";

import { Link } from "react-router-dom";

import CardsWrapperContainer from "./CardsWrapperContainer";
import Icon from "./Icon";

import Arrow from "../assets/RightArrow.svg";
import classes from "./ContentContainer.module.css";

import BackgroundVideo from "../videos/backgroundVideo.mp4";

const ContentContainer = ({
  children,
  id,
  title,
  sliceLastIndex,
  linkPath,
}) => {
  // console.log("link", linkPath);
  return (
    <div
      className={`
        ${id === 1 ? classes.firstContainer : classes.container} 
        ${id === 2 ? classes.secondContainer : classes.container}
      `}
    >
      {id === 1 && (
        <video autoPlay loop muted className={classes["background-video"]}>
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
      )}

      <CardsWrapperContainer>
        <div className={classes.title}>
          {title}
          <div style={{ display: "flex", alignItems: "center" }}>
            {sliceLastIndex > 12 ? null : (
              <Link to={`${linkPath}`} className={classes.linkText}>
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
              </Link>
            )}
          </div>
        </div>
        <div>{children}</div>
      </CardsWrapperContainer>
    </div>
  );
};

export default ContentContainer;
