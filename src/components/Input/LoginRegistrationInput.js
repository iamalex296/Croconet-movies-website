import React from "react";

import classes from "./LoginRegistrationInput.module.css";

const LoginRegistrationInput = ({ placeholder, style }) => {
  return (
    <input
      style={style}
      className={classes["login-registration-input"]}
      placeholder={placeholder}
    />
  );
};

export default LoginRegistrationInput;
