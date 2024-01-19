import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import MyPageHover from "./MyPageHover";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../../util/localStorage.js";
import { getCookie } from "../../util/cookies.js";
import styled from "styled-components";
import { Desktop } from "../MediaQuery";

const Nav = styled.div`
  height: 34px;
  background-color: var(--main);
  color: #fff;
  .upperNavCon {
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;

const Ul = styled.ul`
  display: flex;
  line-height: 34px;
`;

const Li = styled.li`
  width: 65px;
  text-align: center;
  font-size: 0.9em;
  font-weight: 700;
`;

const styledMP = {
  margin: " 0 5px",
  display: " flex",
  alignItems: "center",
  position: "relative",
};

export default function UpperNav() {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      removeUser();
      navigate("/");
    }
  };

  const handleMouseOver = () => {
    setIsHover(true);
  };
  const handleMouseOut = () => {
    setIsHover(false);
  };

  return (
    <>
      <Desktop>
        <Nav>
          <div className="upperNavCon">
            <div className="leftTab">
              <Ul>
                <Li>홈</Li>
                <Li>투어</Li>
                <Li>티켓</Li>
                <Li>쇼핑</Li>
                <Li style={{ backgroundColor: "#fff", color: "#000" }}>도서</Li>
              </Ul>
            </div>
            <div className="rightTab">
              <Ul style={{ fontSize: "0.8em" }}>
                {getCookie("accessToken") ? (
                  <Li>
                    <button type="button" onClick={handleLogout}>
                      로그아웃
                    </button>
                  </Li>
                ) : (
                  <Li>
                    <Link to="/login">로그인</Link>
                  </Li>
                )}
                {!getCookie("accessToken") ? (
                  <Li>
                    <Link to="/member">회원가입</Link>
                  </Li>
                ) : null}
                <Li>
                  <Link to="/cart">북카트</Link>
                </Li>
                <Li
                  style={styledMP}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  마이페이지
                  <IoMdArrowDropdown fontSize="small" />
                  {isHover == true ? <MyPageHover /> : null}
                </Li>
                <Li>고객센터</Li>
              </Ul>
            </div>
          </div>
        </Nav>
      </Desktop>
    </>
  );
}
