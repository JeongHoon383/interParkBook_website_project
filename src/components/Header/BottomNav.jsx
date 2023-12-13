import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import AllCategory from './CategoryBanner/AllCategory';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
export default function BottomNav() {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };
  return (
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
  );
}
