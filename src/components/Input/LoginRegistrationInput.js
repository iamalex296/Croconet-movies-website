import React from "react";

import classes from "./LoginRegistrationInput.module.css";

const LoginRegistrationInput = ({ placeholder }) => {
  return (
    <div>
      <input
        className={classes["login-registration-input"]}
        placeholder={placeholder}
      />
    </div>
  );
};

export default LoginRegistrationInput;
