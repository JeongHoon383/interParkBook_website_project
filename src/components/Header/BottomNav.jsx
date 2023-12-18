import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import AllCategory from './CategoryBanner/AllCategory';
import '../../css/header/bottomNav.css';
import { Link } from 'react-router-dom';

export default function BottomNav() {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };
  return (
    <div className="bottomNav">
      <div className="bottomNav_tab">
        <div className={`categoryTab`} onClick={handleClick}>
          <a href="#" className="allTab">
            전체 카테고리
            {isClick == true ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </a>
          {isClick == true ? <AllCategory /> : null}
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
    </div>
  );
}
