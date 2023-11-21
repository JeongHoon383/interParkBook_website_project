import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import AllCategory from './CategoryBanner/AllCategory';
import '../../css/header/bottomNav.css';

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
            <li>베스트셀러</li>
            <li>신간</li>
            <li>이벤트</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
