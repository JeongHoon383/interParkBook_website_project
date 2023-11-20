import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import "../../css/header/mainLogo.css";

const useStyles = makeStyles({
  searchIcon: {
    color: "#ff9c46",
  },
});
export default function MainLogo() {
  const classes = useStyles();
  return (
    <div className="mainLogo">
      <div className="logoBox">
        <div className="logoContent">
          <h1 className="logoContainer">
            <img className="logoImg" src="/img/logo.png" alt="" />
          </h1>
          <div className="search">
            <form className="searchForm">
              <input className="searchInput" type="text" />
              <button className="searchBtn">
                <SearchIcon className={classes.searchIcon} />
              </button>
            </form>
            <div className="hit_searcher">
              <ul>
                <li>
                  <Link to="/">인문학 대화</Link>
                </li>
                <li>
                  <Link to="/">리딩게이트</Link>
                </li>
                <li>
                  <Link to="/">초집중 탐정물</Link>
                </li>
                <li>
                  <Link to="/">아마존 1위</Link>
                </li>
                <li>
                  <Link to="/">생의 감각</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="adImg">
            <figure>
              <img
                src="https://image.kyobobook.co.kr/newimages/adcenter/IMAC/creatives/2023/11/09/71047/GN_110923_2.jpg"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
