import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Desktop, Mobile } from '../MediaQuery';

const MainDiv = styled.div`
  .logoBox {
    width: 60%;
    margin: 20px auto;
  }

  .logoContent {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logoContainer {
    width: 200px;
    margin-left: 12px;
    .logoImg {
      width: 100%;
    }
  }
  .search {
    display: flex;
    flex-direction: column;
    width: 400px;
    margin-top: 25px;
  }

  .searchForm {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid var(--main);
    padding-bottom: 3px;
  }

  .searchInput {
    width: 300px;
    border: none;
  }
  .hit_searcher {
    margin: 5px 25px;
    width: 400px;
    color: var(--default);
    ul {
      display: flex;
      font-size: 0.7em;
    }
    li {
      &:not(:last-child)::after {
        content: '|';
        margin: 0 5px;
      }
    }
  }
`;

const MobileDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  .mLogoContainer {
    width: 70px;
    .mLogoImg {
      width: 100%;
    }
  }
  .mSearchForm {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--default);
    padding-bottom: 3px;
    .mSearchInput {
      width: 210px;
      border: none;
    }
    .mSearchBtn {
      width: 22px;
      img {
        width: 100%;
      }
    }
  }
`;

const MDiv = styled.div`
  width: 33px;
  img {
    width: 100%;
  }
`;

export default function MainLogo() {
  return (
    <>
      <Desktop>
        <MainDiv>
          <div className="logoBox">
            <div className="logoContent">
              <div className="logoContainer">
                <Link to="/">
                  <img className="logoImg" src="/img/logo.png" alt="" />
                </Link>
              </div>
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
        </MainDiv>
      </Desktop>
      <Mobile>
        <MobileDiv>
          <div className="mLogoContainer">
            <Link to="/">
              <img className="mLogoImg" src="/img/Mobile/m_logo.png" alt="" />
            </Link>
          </div>
          <form className="mSearchForm">
            <input className="mSearchInput" type="text" />
            <button className="mSearchBtn">
              <img src="/img/Mobile/m_icon_search.png" alt="" />
            </button>
          </form>
          <MDiv>
            <Link to="/cart">
              <img src="/img/Mobile/m_icon_cart.png" alt="" />
            </Link>
          </MDiv>
          <MDiv>
            <img src="/img/Mobile/m_icon_mypage.png" alt="" />
          </MDiv>
        </MobileDiv>
      </Mobile>
    </>
  );
}
