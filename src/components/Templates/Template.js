import React from "react";

import classes from "./Template.module.css";

const Template = ({ children, style }) => {
  return (
    <div className={classes.container}>
      <div className={classes["inner-container"]} style={style}>
        {children}
      </div>
    </div>
  );
};

export default Template;
