import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import AllCategory from './CategoryBanner/AllCategory';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { Desktop, Mobile } from '../MediaQuery';
import Main_MoRecommend from '../Main/Mobile/Main_MoRecommend';
import Main_Mo from '../Main/Mobile/Main_Mo';

const Nav = styled.div`
  letter-spacing: -1px;
  color: #fff;
  background-color: var(--main);
  .bottomNav_tab {
    width: 60%;
    margin: 0 auto;
    padding: 15px;
    display: flex;
    align-items: center;
    font-weight: bold;
  }
  .allTab {
    display: flex;
    align-items: center;
  }
  .categoryTab {
    margin-right: 20px;
  }
  .otherTab {
    font-size: 0.9em;
    li {
      display: inline-block;
      margin-right: 30px;
    }
  }
`;

const MobileNav = styled.nav`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  height: 37px;
  color: #333;
  background-color: #fff;
  .tabC {
    margin-bottom: 7px;
  }
  .activeC {
    font-size: 1.2em;
    font-family: 'YES24GothicB';
    border-bottom: 2px solid var(--main);
    padding-bottom: 3px;
  }
`;

export default function BottomNav() {
  const [isClick, setIsClick] = useState(false);
  const [tab, setTab] = useState(0);
  const [active, setActive] = useState(0);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  const handleTab = (e) => {
    setTab(e);
    setActive(e);
  };
  return (
    <>
      <Desktop>
        <Nav>
          <div className="bottomNav_tab">
            <div className="categoryTab" onClick={handleClick}>
              <a href="#" className="allTab">
                전체 카테고리
                {isClick === true ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </a>
              {isClick === true ? <AllCategory /> : null}
            </div>
            <div className="otherTab">
              <ul>
                <li>
                  <Link to="/bestseller">베스트셀러</Link>
                </li>
                <li>신간</li>
                <li>이벤트</li>
              </ul>
            </div>
          </div>
        </Nav>
      </Desktop>
      <Mobile>
        <MobileNav>
          <div
            onClick={() => {
              handleTab(0);
            }}
            className={active === 0 ? 'activeC' : 'tabC'}
          >
            홈
          </div>
          <div
            onClick={() => {
              handleTab(1);
            }}
            className={active === 1 ? 'activeC' : 'tabC'}
          >
            베스트셀러
          </div>
          <div
            onClick={() => {
              handleTab(2);
            }}
            className={active === 2 ? 'activeC' : 'tabC'}
          >
            지금! 추천
          </div>
        </MobileNav>
        {tab === 0 && <Main_Mo />}
        {tab === 2 && <Main_MoRecommend />}
      </Mobile>
    </>
  );
}
