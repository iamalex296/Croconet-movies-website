import React from "react";
import classes from "./Popup.module.css";

const Popup = ({ onHover, title, info, description, imdb }) => {
  return (
    <div className={`${classes["popup-box"]} ${onHover}`}>
      <div>{title}text</div>
      <div>{info}text</div>
      <div>{description}text</div>
      <div>{imdb}text</div>
    </div>
  );
};

export default Popup;
