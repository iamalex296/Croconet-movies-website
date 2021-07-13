import React from "react";

import LoginRegistrationInput from "../Input/LoginRegistrationInput";
import { Link } from "react-router-dom";

import classes from "./LoginRegisterPopup.module.css";

const LoginRegisterPopup = () => {
  return (
    <div className={classes["popup-box"]}>
      <LoginRegistrationInput placeholder="ელ-ფოსტა" />
      <div className={classes["input_wrapper_box"]}>
        <LoginRegistrationInput placeholder="პაროლი" />
        <button className={classes.button}>შესვლა</button>
      </div>
      <div className={classes.box}>
        <span>განაახლე პაროლი</span>
        <span>
          <Link to="/registration" className={classes["registration_link"]}>
            რეგისტრაცია
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginRegisterPopup;
