import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo3.png";
import TvIcon from "../../assets/tv_white_48dp.svg";
import ProfileIcon from "../../assets/userProfile.svg";
import SearchIcon from "../../assets/search.svg";
import MoviesIcon from "../../assets/movies.svg";
import VideoIcon from "../../assets/VideoCam.svg";
import StarIcon from "../../assets/star.svg";
import NewsIcon from "../../assets/news.svg";

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
        <Link to="/home">
          <img src={Logo} alt="logo" className={classes["logo_img"]} />
        </Link>
        <div>
          <ul className={classes["ul_list"]}>
            <li className={classes["header_navbar_list"]}>
              <Link to="/trailers">
                <Icon
                  className={classes.icon_style}
                  src={TvIcon}
                  alt="tv-icon"
                />
                თრეილერები
              </Link>
            </li>
            <li
              className={classes["header_navbar_list"]}
              onClick={toggleMoviesGenrePopupHandler}
              style={{ position: "relative" }}
            >
              <Link to="/movies">
                <Icon
                  className={classes.icon_style}
                  src={MoviesIcon}
                  alt="tv-icon"
                />
                ფილმები
              </Link>
            </li>
            <li className={classes["header_navbar_list"]}>
              <Link to="./series">
                <Icon
                  className={classes.icon_style}
                  src={VideoIcon}
                  alt="tv-icon"
                />
                სერიალი
              </Link>
            </li>
            <li className={classes["header_navbar_list"]}>
              <Link to="./popular">
                <Icon
                  className={classes.icon_style}
                  src={StarIcon}
                  alt="tv-icon"
                />
                პოპულარული
              </Link>
            </li>
            <li className={classes["header_navbar_list"]}>
              <a href="http://news.croconet.ge/" target="blank">
                <Icon
                  className={classes.icon_style}
                  src={NewsIcon}
                  alt="tv-icon"
                />
                სიახლეები
              </a>
            </li>
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
