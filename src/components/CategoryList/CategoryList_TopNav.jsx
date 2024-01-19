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
        .categoryNavDepth {
          display: inline-flex;
          align-items: center;
          padding-left: 20px;
          span {
            display: inline-block;
            width: 80px;
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          svg {
            font-size: 20px;
          }
        }
        .depthCategoryList {
          position: absolute;
          display: none;
          top: 0;
          left: 0;
          transform: translateY(20px);
          padding: 10px 0;
          border: 1px solid var(--main);
          background: #fff;
          z-index: 99;
          .currentCategory {
            font-weight: bold;
            color: #000;
          }
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
  const [allCategoryData, setAllCategoryData] = useState([
    [],
    [],
    [],
    [],
    [],
    [],
  ]);

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
    let copy = [...allCategoryData];

    const topNavAxios = (params, idx) => {
      if (parameterArr[idx]) {
        axios(`http://192.168.50.16:9090/category/list/${params}`).then(
          (result) => {
            copy[idx] = result.data;
            setAllCategoryData(copy);
          }
        );
      }
    };

    const params = (idx) => (parameterArr[idx] ? "/" + parameterArr[idx] : "");
    topNavAxios("mall", 0);
    topNavAxios(params(0), 1);
    topNavAxios(`${params(0)}${params(1)}`, 2);
    topNavAxios(`${params(0)}${params(1)}${params(2)}`, 3);
    topNavAxios(`${params(0)}${params(1)}${params(2)}${params(3)}`, 4);
    topNavAxios(
      `${params(0)}${params(1)}${params(2)}${params(3)}${params(4)}`,
      5
    );
  }, [
    parameterArr[0],
    parameterArr[1],
    parameterArr[2],
    parameterArr[3],
    parameterArr[4],
    parameterArr[5],
  ]);

  const showCategory = (categoryData, index) => {
    const arr = [];
    const repeat = Math.ceil(categoryData.length / 10);
    for (let i = 0; i < repeat; i++) {
      const categoryArr = categoryData.slice(10 * i, 10 * i + 10);
      arr.push(
        <ul key={i}>
          {categoryArr.map((item) => (
            <li
              key={item.categoryName}
              className={
                item.categoryName === parameterArr[index]
                  ? "currentCategory"
                  : null
              }
            >
              <Link
                to={`/category/list/${item.mall}_${item.firstD}${
                  item.secondD ? "_" + item.secondD : ""
                }${item.thirdD ? "_" + item.thirdD : ""}${
                  item.fourthD ? "_" + item.fourthD : ""
                }${item.fifthD ? "_" + item.fifthD : ""}`}
              >
                {item.categoryName}
              </Link>
            </li>
          ))}
        </ul>
      );
    }
    return arr;
  };

  const categoryComponenet = (idx) => {
    return parameterArr[idx] ? (
      <span
        onMouseEnter={() => handleDropMenu(idx)}
        onMouseLeave={() => handleDropMenu(idx)}
      >
        <LiaAngleRightSolid className="angleRight" />
        <span className="categoryNavDepth">
          <span>{parameterArr[idx]}</span>
          {isDropMenuOpen[idx] ? <CiSquareChevUp /> : <CiSquareChevDown />}
        </span>
        <div className="clickMenu depthCategoryList">
          {isDropMenuOpen[idx] ? showCategory(allCategoryData[idx], idx) : null}
        </div>
      </span>
    ) : null;
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
            <span className="categoryNavDepth">
              <span>{parameterArr[0]}</span>
              {isDropMenuOpen[0] ? <CiSquareChevUp /> : <CiSquareChevDown />}
            </span>
            <div className="clickMenu depthCategoryList">
              <ul>
                {allCategoryData[0].map((item) => (
                  <li
                    key={item.mall}
                    className={
                      item.mall === parameterArr[0] ? "currentCategory" : null
                    }
                  >
                    <Link to={`/category/main/${item.mall}`}>{item.mall}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </span>

          {categoryComponenet(1)}
          {categoryComponenet(2)}
          {categoryComponenet(3)}
          {categoryComponenet(4)}
          {categoryComponenet(5)}
        </nav>
      </div>
    </BackgroundLayout>
  );
}
