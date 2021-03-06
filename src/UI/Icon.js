import React from "react";

import classes from "./Icon.module.css";

const Icon = (props) => {
  return (
    <img
      className={`${classes.icon} ${props.className ? props.className : null}`}
      style={props.style ? props.style : null}
      src={props.src}
      alt={props.alt}
      onClick={props.onClickHandler}
    />
  );
};

export default Icon;
