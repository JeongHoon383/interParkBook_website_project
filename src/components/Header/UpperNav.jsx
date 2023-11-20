import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MyPageHover from './MyPageHover';
import '../../css/header/upperNav.css';

export default function UpperNav() {
  const [isHover, setIsHover] = useState(false);
  const handleMouseOver = () => {
    setIsHover(true);
  };
  const handleMouseOut = () => {
    setIsHover(false);
  };
  return (
    <div className="upperNav">
      <div className="upperNavCon">
        <div className="leftTab">
          <ul className="leftTab_ul">
            <li className="leftTab_li">홈</li>
            <li className="leftTab_li">투어</li>
            <li className="leftTab_li">티켓</li>
            <li className="leftTab_li">쇼핑</li>
            <li className="leftTab_li selected">도서</li>
          </ul>
        </div>
        <div className="rightTab">
          <ul className="rightTab_ul">
            <li className="rightTab_li">로그인</li>
            <li className="rightTab_li">회원가입</li>
            <li className="rightTab_li">북카트</li>
            <li className="rightTab_li myPage" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              마이페이지
              <ArrowDropDownIcon fontSize="small" />
              {isHover == true ? <MyPageHover /> : null}
            </li>
            <li className="rightTab_li">고객센터</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
