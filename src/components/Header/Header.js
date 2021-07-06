import React from "react";

import Logo from "../../assets/logo3.png";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes["header_container"]}>
      <div className={classes["header_inner_container"]}>
        <img src={Logo} alt="logo" className={classes["logo_img"]} />
        <div>
          <ul className={classes["ul_list"]}>
            <li className={classes["list_item"]}>თრეილერები</li>
            <li className={classes["list_item"]}>თრეილერები</li>
            <li className={classes["list_item"]}>თრეილერები</li>
            <li className={classes["list_item"]}>თრეილერები</li>
            <li className={classes["list_item"]}>თრეილერები</li>
          </ul>
        </div>
        <div>
          <div>Search</div>
          <div>Profile</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
