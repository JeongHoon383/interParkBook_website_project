import styled from "styled-components";
import { Link, useLocation, useParams } from "react-router-dom";
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
        &:hover {
          .mallList {
            display: block;
          }
          .depthCategoryList {
            display: flex;
          }
        }
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
          position: absolute;
          display: none;
          top: 0;
          left: 20px;
          transform: translateY(20px);
          border: 1px solid var(--main);
          background: #fff;
          z-index: 99;
          .currentCategory {
            font-weight: bold;
            color: #000;
          }
        }
        .mallList {
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
        .depthCategoryList {
          padding: 10px 0;
          ul {
            width: 120px;
            padding-left: 14px;
            &:not(:last-child) {
              border-right: 1px solid #ddd;
            }
            li {
              width: 95%;
              line-height: 20px;
              a {
                display: block;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
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

export default function CategoryList_TopNav() {
  const [isDropMenuOpen, setIsDropMenuOpen] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const parameterArr = useParams().categoryPath.split("_");
  const [allMall, setAllMall] = useState([]);
  const [allFirstD, setAllFirstD] = useState([]);
  const [allSecondD, setAllSecondD] = useState([]);
  
  const handleDropMenu = (idx) => {
    let copy = [...isDropMenuOpen];
    if (copy[idx]) {
      copy[idx] = false;
      setIsDropMenuOpen(copy);
    } else {
      copy = [false, false, false, false, false];
      copy[idx] = true;
      setIsDropMenuOpen(copy);
    }
  };

  useEffect(() => {
    axios("http://127.0.0.1:9090/category/list/mall").then((result) =>
      setAllMall(result.data)
    );

    axios(`http://127.0.0.1:9090/category/list/${parameterArr[0]}`).then(
      (result) => setAllFirstD(result.data)
    );

    if(parameterArr[2]){
      axios(
        `http://127.0.0.1:9090/category/list/${parameterArr[0]}/${parameterArr[1]}`
      ).then((result) => setAllSecondD(result.data));
    }

  }, [parameterArr[1]]);

  const show1DCategory = (categoryData) => {
    const arr = [];
    const repeat = Math.ceil(categoryData.length / 10);

    for (let i = 0; i < repeat; i++) {
      const categoryArr = categoryData.slice(10 * i, 10 * i + 10);
      arr.push(
        <ul key={i}>
          {categoryArr.map((item) => (
            <li
              key={item.firstD}
              className={
                item.firstD === parameterArr[1] ? "currentCategory" : null
              }
            >
              <Link to={`/category/list/${item.mall}_${item.firstD}`}>
                {item.firstD}
              </Link>
            </li>
          ))}
        </ul>
      );
    }

    return arr;
  };

  const show2DCategory = (categoryData) => {
    const arr = [];
    const repeat = Math.ceil(categoryData.length / 10);

    for (let i = 0; i < repeat; i++) {
      const categoryArr = categoryData.slice(10 * i, 10 * i + 10);
      arr.push(
        <ul key={i}>
          {categoryArr.map((item) => (
            <li
              key={item.secondD}
              className={
                item.secondD === parameterArr[2] ? "currentCategory" : null
              }
            >
              <Link
                to={`/category/list/${item.mall}_${item.firstD}_${item.secondD}`}
              >
                {item.secondD}
              </Link>
            </li>
          ))}
        </ul>
      );
    }

    return arr;
  };

  return (
    <BackgroundLayout>
      <div className="centerLayout">
        <nav className="categoryNavigation">
          <Link to={"/"}>메인페이지</Link>

          <span
            onMouseEnter={() => handleDropMenu(0)}
            onMouseLeave={() => handleDropMenu(0)}
          >
            <LiaAngleRightSolid className="angleRight" />
            <button>
              <span>{parameterArr[0]}</span>
              {isDropMenuOpen[0] ? <CiSquareChevUp /> : <CiSquareChevDown />}
            </button>
            <ul className="clickMenu mallList">
              {allMall.map((item) => (
                <li
                  key={item.mall}
                  className={
                    item.mall === parameterArr[0] ? "currentCategory" : null
                  }
                >
                  <Link to={"/category/main"}>{item.mall}</Link>
                </li>
              ))}
            </ul>
          </span>

          <span
            onMouseEnter={() => handleDropMenu(1)}
            onMouseLeave={() => handleDropMenu(1)}
          >
            <LiaAngleRightSolid className="angleRight" />
            <button>
              <span>{parameterArr[1]}</span>
              {isDropMenuOpen[1] ? <CiSquareChevUp /> : <CiSquareChevDown />}
            </button>
            <div className="clickMenu depthCategoryList">
              {isDropMenuOpen[1] ? show1DCategory(allFirstD) : null}
            </div>
          </span>

          {parameterArr[2] ? (
            <span
              onMouseEnter={() => handleDropMenu(2)}
              onMouseLeave={() => handleDropMenu(2)}
            >
              <LiaAngleRightSolid className="angleRight" />
              <button>
                <span>{parameterArr[2]}</span>
                {isDropMenuOpen[2] ? <CiSquareChevUp /> : <CiSquareChevDown />}
              </button>
              <div className="clickMenu depthCategoryList">
                {isDropMenuOpen[2] ? show2DCategory(allSecondD) : null}
              </div>
            </span>
          ) : null}
        </nav>
      </div>
    </BackgroundLayout>
  );
}
