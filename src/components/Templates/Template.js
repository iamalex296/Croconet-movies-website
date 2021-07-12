import React from "react";

import classes from "./Template.module.css";

const Template = ({ children }) => {
  return (
    <div className={classes.container}>
      <div className={classes["inner-container"]}>{children}</div>
    </div>
  );
};

export default Template;
