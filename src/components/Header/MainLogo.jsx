import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import '../../css/header/mainLogo.css';

export default function MainLogo() {
  return (
    <div className="mainLogo">
      <div className="logoBox">
        <div className="logoContent">
          <h1 className="logoContainer">
            <Link to="/">
              <img className="logoImg" src="/img/logo.png" alt="" />
            </Link>
          </h1>
          <div className="search">
            <form className="searchForm">
              <input className="searchInput" type="text" />
              <button className="searchBtn">
                <IoSearch style={{ color: 'var(--main)' }} />
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
