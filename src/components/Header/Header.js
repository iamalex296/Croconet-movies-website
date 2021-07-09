import React, { useState } from "react";

import Logo from "../../assets/logo3.png";
import ProfileIcon from "../../assets/userProfile.svg";
import SearchIcon from "../../assets/search.svg";
import Icon from "../../UI/Icon.js";
import SearchInput from "../Input/SearchInput";
import LoginRegisterPopup from "../Popup/LoginRegisterPopup";
import MoviesGenrePopup from "../Popup/MoviesGenrePopup";

import classes from "./Header.module.css";

const Header = () => {
  const [toggleSearchInput, setToggleSearchInput] = useState(false);
  const [toggleLoginRegisterPopup, setToggleLoginRegisterPopup] = useState(
    false
  );
  const [toggleMoviesGenrePopup, setToggleMoviesGenrePopup] = useState(false);

  const toggleSearchInputHandler = () => {
    const toggle = toggleSearchInput;
    setToggleSearchInput(!toggle);
  };

  const toggleLoginRegisterPopupHandler = () => {
    const togglePopup = toggleLoginRegisterPopup;
    setToggleLoginRegisterPopup(!togglePopup);
  };

  const toggleMoviesGenrePopupHandler = () => {
    const toggleMoviesPopup = toggleMoviesGenrePopup;
    setToggleMoviesGenrePopup(!toggleMoviesPopup);
  };

  return (
    <div className={classes["header_container"]}>
      <div className={classes["header_inner_container"]}>
        <img src={Logo} alt="logo" className={classes["logo_img"]} />
        <div>
          <ul className={classes["ul_list"]}>
            <li>თრეილერები</li>
            <li
              onClick={toggleMoviesGenrePopupHandler}
              style={{ position: "relative" }}
            >
              ფილმები
            </li>
            <li>სერიალები</li>
            <li>პოპულარული</li>
            <li>სიახლეები</li>
          </ul>
          {toggleMoviesGenrePopup && <MoviesGenrePopup />}
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
