import React from "react";

import classes from "./Button.module.css";

const Button = ({ type, onClickHandler, style, children }) => {
  return (
    <button
      type={type}
      onClick={onClickHandler}
      style={{ style }}
      className={classes.Button}
    >
      {children}
    </button>
  );
};

export default Button;
