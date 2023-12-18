import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import MyPageHover from './MyPageHover';
import '../../css/header/upperNav.css';
import { Link, useNavigate } from 'react-router-dom';
import { removeUser } from '../../util/localStorage.js';
import { getCookie } from '../../util/cookies.js';

export default function UpperNav() {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUser();
    navigate('/');
  };

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
            {getCookie('rememberUserInfo') ? (
              <li className="rightTab_li">
                <button type="button" onClick={handleLogout}>
                  로그아웃
                </button>
              </li>
            ) : (
              <li className="rightTab_li">
                <Link to="/login">로그인</Link>
              </li>
            )}
            {!getCookie('rememberUserInfo') ? (
              <li className="rightTab_li">
                <Link to="/member">회원가입</Link>
              </li>
            ) : null}
            <li className="rightTab_li">
              <Link to="/cart">북카트</Link>
            </li>
            <li className="rightTab_li myPage" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              마이페이지
              <IoMdArrowDropdown fontSize="small" />
              {isHover == true ? <MyPageHover /> : null}
            </li>
            <li className="rightTab_li">고객센터</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
