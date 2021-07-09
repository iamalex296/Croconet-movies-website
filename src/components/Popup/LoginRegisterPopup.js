import React from "react";

import LoginRegistrationInput from "../Input/LoginRegistrationInput";

import classes from "./LoginRegisterPopup.module.css";

const LoginRegisterPopup = () => {
  return (
    <div className={classes["popup-box"]}>
      <LoginRegistrationInput placeholder="ელ-ფოსტა" />
      <div style={{ display: "flex", position: "relative", marginTop: "15px" }}>
        <LoginRegistrationInput placeholder="პაროლი" />
        <button className={classes.button}>შესვლა</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          marginTop: "15px",
        }}
      >
        <span>განაახლე პაროლი</span>
        <span>რეგისტრაცია</span>
      </div>
    </div>
  );
};

export default LoginRegisterPopup;
