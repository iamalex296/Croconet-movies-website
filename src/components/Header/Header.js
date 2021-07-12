import React, { useState } from "react";

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
        <img src={Logo} alt="logo" className={classes["logo_img"]} />
        <div>
          <ul className={classes["ul_list"]}>
            <li>
              {" "}
              <Icon
                style={{
                  padding: "0px",
                  margin: "0px 5px 0px 0px",
                  background: "none",
                  height: "15px",
                  width: "15px",
                }}
                src={TvIcon}
                alt="tv-icon"
              />
              თრეილერები
            </li>
            <li
              onClick={toggleMoviesGenrePopupHandler}
              style={{ position: "relative" }}
            >
              <Icon
                style={{
                  padding: "0px",
                  margin: "0px 5px 0px 0px",
                  background: "none",
                  height: "15px",
                  width: "15px",
                }}
                src={MoviesIcon}
                alt="tv-icon"
              />
              ფილმები
            </li>
            <li>
              <Icon
                style={{
                  padding: "0px",
                  margin: "0px 5px 0px 0px",
                  background: "none",
                  height: "15px",
                  width: "15px",
                }}
                src={VideoIcon}
                alt="tv-icon"
              />
              სერიალი
            </li>
            <li>
              {" "}
              <Icon
                style={{
                  padding: "0px",
                  margin: "0px 5px 0px 0px",
                  background: "none",
                  height: "15px",
                  width: "15px",
                }}
                src={StarIcon}
                alt="tv-icon"
              />
              პოპულარული
            </li>
            <li>
              {" "}
              <Icon
                style={{
                  padding: "0px",
                  margin: "0px 5px 0px 0px",
                  background: "none",
                  height: "15px",
                  width: "15px",
                }}
                src={NewsIcon}
                alt="tv-icon"
              />
              სიახლეები
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
