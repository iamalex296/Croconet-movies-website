import React from "react";

import classes from "./Template.module.css";

const Template = ({ children, style, styleTemplateClass }) => {
  return (
    <div className={classes.container}>
      <div
        className={`${classes["inner-container"]} ${
          styleTemplateClass ? styleTemplateClass : ""
        }`}
        style={style && style}
      >
        {children}
      </div>
    </div>
  );
};

export default Template;
