import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { LiaAngleRightSolid } from "react-icons/lia";
import { CiSquareChevDown, CiSquareChevUp } from "react-icons/ci";

const BackgroundLayout = styled.nav`
  height: 41px;
  font-size: 12px;
  color: #666;
  border-bottom: 1px solid #d8d8d8;
  background: #f8f8f8;
  .centerLayout {
    width: 60%;
    margin: 0 auto;
    padding: 0 15px;
    .categoryNavigation {
      line-height: 41px;
      > span {
        position: relative;
        svg {
          position: relative;
          display: inline-block;
          font-size: 16px;
          &.angleRight {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
        }
        button {
          display: inline-flex;
          align-items: center;
          padding-left: 20px;
          svg {
            font-size: 20px;
          }
        }
        .clickMenu {
          top: calc(100% + 5px);
          left: 10%;
          border: 1px solid var(--main);
          background: #fff;
          z-index: 99;
          .currentCategory {
            font-weight: bold;
            color: #000;
          }
        }
        .firstDList {
          position: absolute;
          li {
            width: 80px;
            text-align: center;
            line-height: 30px;
            a {
              display: inline-block;
              width: 100%;
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
        .secondDepthList {
          position: absolute;
          display: flex;
          padding: 10px 0;
          ul {
            padding-left: 14px;
            &:not(:last-child) {
              border-right: 1px solid #ddd;
            }
            li {
              width: 120px;
              line-height: 20px;
              a {
                display: inline-block;
                width: inherit;
                &:hover {
                  text-decoration: underline;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default function CategoryList_TopNav({ categoryData }) {
  const [isDropMenuOpen, setIsDropMenuOpen] = useState([false, false, false]);

  const handleDropMenu = (idx) => {
    let copy = [...isDropMenuOpen];
    if (copy[idx]) {
      copy[idx] = false;
      setIsDropMenuOpen(copy);
    } else {
      copy = [false, false, false];
      copy[idx] = true;
      setIsDropMenuOpen(copy);
    }
  };

  // firstD 데이터 불러오기
  useEffect(() => {
    axios.get(`http://localhost:9090/category/list/1depth/${categoryData.mall}`)
  }, []);

  return (
    <BackgroundLayout>
      <div className="centerLayout">
        <nav className="categoryNavigation">
          <Link to={"/"}>메인페이지</Link>
          <span>
            <LiaAngleRightSolid className="angleRight" />
            <button onClick={() => handleDropMenu(0)}>
              <span>{categoryData.mall}</span>
              {isDropMenuOpen[0] ? <CiSquareChevUp /> : <CiSquareChevDown />}
            </button>
            {isDropMenuOpen[0] ? (
              <ul className="clickMenu firstDList">
                <li>
                  <Link>국내도서</Link>
                </li>
                <li>
                  <Link>외국도서</Link>
                </li>
                <li>
                  <Link>전자책</Link>
                </li>
              </ul>
            ) : null}
          </span> 
          <span>
            <LiaAngleRightSolid className="angleRight" />
            <button onClick={() => handleDropMenu(1)}>
              <span>{categoryData.firstD}</span>
              {isDropMenuOpen[1] ? <CiSquareChevUp /> : <CiSquareChevDown />}
            </button>
            {isDropMenuOpen[1] ? (
              <div className="clickMenu secondDepthList">
                <ul>
                  <li>
                    <Link>가정/요리/뷰티</Link>
                  </li>
                  <li>
                    <Link>건강/취미/레저</Link>
                  </li>
                  <li>
                    <Link>경제경영</Link>
                  </li>
                  <li>
                    <Link>과학</Link>
                  </li>
                  <li>
                    <Link>달력/기타</Link>
                  </li>
                  <li>
                    <Link>대학교재/전문서적</Link>
                  </li>
                  <li>
                    <Link>만화</Link>
                  </li>
                  <li>
                    <Link>사회과학</Link>
                  </li>
                  <li>
                    <Link>소설/시/희곡</Link>
                  </li>
                </ul>
              </div>
            ) : null}
          </span>
          {
            categoryData.secondD ? (
              <span>
              <LiaAngleRightSolid className="angleRight" />
              <button onClick={() => handleDropMenu(2)}>
                <span>{categoryData.secondD}</span>
                {isDropMenuOpen[2] ? <CiSquareChevUp /> : <CiSquareChevDown />}
              </button>
              {isDropMenuOpen[2] ? (
                <div className="clickMenu secondDepthList">
                  <ul>
                    <li>
                      <Link>가정/요리/뷰티</Link>
                    </li>
                    <li>
                      <Link>건강/취미/레저</Link>
                    </li>
                    <li>
                      <Link>경제경영</Link>
                    </li>
                    <li>
                      <Link>과학</Link>
                    </li>
                    <li>
                      <Link>달력/기타</Link>
                    </li>
                    <li>
                      <Link>대학교재/전문서적</Link>
                    </li>
                    <li>
                      <Link>만화</Link>
                    </li>
                    <li>
                      <Link>사회과학</Link>
                    </li>
                    <li>
                      <Link>소설/시/희곡</Link>
                    </li>
                  </ul>
                </div>
              ) : null}
            </span>
            ) : null
          }
        </nav>
      </div>
    </BackgroundLayout>
  );
}
