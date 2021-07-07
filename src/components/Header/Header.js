import React from "react";

import Logo from "../../assets/logo3.png";
import ProfileIcon from "../../assets/userProfile.svg";
import SearchIcon from "../../assets/search.svg";
import Icon from "../../UI/Icon.js";

import classes from "./Header.module.css";

const HEADER_LIST = [
  { name: "თრეილერები", id: 1 },
  { name: "ფილმები", id: 2 },
  { name: "სერიალი", id: 3 },
  { name: "პოპულარული", id: 4 },
  { name: "სიახლეები", id: 5 },
];

const Header = () => {
  return (
    <div className={classes["header_container"]}>
      <div className={classes["header_inner_container"]}>
        <img src={Logo} alt="logo" className={classes["logo_img"]} />
        <div>
          <ul className={classes["ul_list"]}>
            {HEADER_LIST.map((item) => (
              <li className={classes["list_item"]} key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ display: "flex" }}>
          <Icon src={SearchIcon} alt="SearchIcon" />
          <Icon src={ProfileIcon} alt="ProfileIcon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
