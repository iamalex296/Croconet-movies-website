import React from "react";

import classes from "./Icon.module.css";

const IconImg = (props) => {
  return <img className={classes.icon} src={props.src} alt={props.alt} />;
};

export default IconImg;
