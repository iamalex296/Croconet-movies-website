import React, { useState } from "react";

import Logo from "../../assets/logo3.png";
import ProfileIcon from "../../assets/userProfile.svg";
import SearchIcon from "../../assets/search.svg";
import Icon from "../../UI/Icon.js";
import SearchInput from "../Input/SearchInput";
import LoginRegisterPopup from "../Popup/LoginRegisterPopup";

import classes from "./Header.module.css";

const HEADER_LIST = [
  { name: "თრეილერები", id: 1 },
  { name: "ფილმები", id: 2 },
  { name: "სერიალი", id: 3 },
  { name: "პოპულარული", id: 4 },
  { name: "სიახლეები", id: 5 },
];

const Header = () => {
  const [toggleSearchInput, setToggleSearchInput] = useState(false);
  const [toggleLoginRegisterPopup, setToggleLoginRegisterPopup] = useState(
    false
  );

  const toggleSearchInputHandler = () => {
    const toggle = toggleSearchInput;
    setToggleSearchInput(!toggle);
  };

  const toggleLoginRegisterPopupHandler = () => {
    const togglePopup = toggleLoginRegisterPopup;
    setToggleLoginRegisterPopup(!togglePopup);
  };

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
          {toggleSearchInput && <SearchInput />}
          {toggleLoginRegisterPopup && <LoginRegisterPopup />}
        </div>

        <div style={{ display: "flex" }}>
          <Icon
            src={SearchIcon}
            alt="SearchIcon"
            onClickHandler={toggleSearchInputHandler}
          />
          <Icon
            src={ProfileIcon}
            alt="ProfileIcon"
            style={{ position: "relative" }}
            onClickHandler={toggleLoginRegisterPopupHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
