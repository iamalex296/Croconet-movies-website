import React from "react";
import warningIcon from "../../assets/warningIcon.svg";
import Icon from "../../UI/Icon";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <p>© CROCONET.GE 2018</p>
      <p style={{ display: "flex", alignItems: "center" }}>
        <Icon
          style={{
            background: "none",
            cursor: "unset",
            padding: "0px",
            opacity: "0.5",
            height: "20px",
            width: "20px",
            marginRight: "10px",
          }}
          src={warningIcon}
          alt={"warningIcon"}
        />
        საიტი შეიცავს +18 კონტენტს
      </p>
      <p>TOP.GE</p>
    </div>
  );
};

export default Footer;
