import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { HiOutlinePlusSmall, HiOutlineMinusSmall } from "react-icons/hi2";
import axios from "axios";

const SubCategory = styled.div`
  position: relative;
  width: 100%;
  border: 2px solid var(--main);
  font-size: 13px;
  button {
    position: absolute;
    top: -2px;
    right: -2px;
    width: 20px;
    height: 20px;
    background: var(--main);
    svg {
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translateX(50%) translateY(-50%);
      font-size: 19px;
      color: #fff;
    }
  }
  .extended {
    .subCategoryItem {
      &:not(:last-child) {
        border-bottom: 1px solid #ccc;
      }
      display: flex;
      > * {
        padding: 14px 0;
      }
      > a {
        width: 150px;
        padding-left: 19px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: var(--main);
        font-weight: bold;
        background: #f8f8f8;
        border-right: 1px solid #ccc;
        &:hover {
          text-decoration: underline;
        }
      }
      .furtherSubCategory {
        display: flex;
        flex-wrap: wrap;
        flex: 1;
        li {
          width: 25%;
          padding-left: 27px;
          a {
            display: inline-block;
            width: 100%;
            line-height: 22px;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
  .abbreviated {
    display: flex;
    flex-wrap: wrap;
    margin: 13px 0;
    li {
      width: 20%;
      &:not(:nth-child(5n + 1)) {
        border-left: 1px solid #d8d8d8;
      }
      a {
        display: inline-block;
        width: 100%;
        padding-left: 19px;
        line-height: 26px;
        color: var(--main);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:hover {
          font-weight: bold;
          text-decoration: underline;
        }
      }
    }
  }
`;

export default function CategoryList_SubCaNav() {
  const [isExtended, setIsExtended] = useState(false);
  const parameterArr = useParams().categoryPath.split("_");
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    setIsExtended(false);

    if (parameterArr.length < 6) {
      axios(
        `http://127.0.0.1:9090/category/list/${parameterArr[0]}/${parameterArr[1]}/${parameterArr[2]}/${parameterArr[3]}/${parameterArr[4]}`
      ).then((result) => setCategoryData(result.data));
    }
  }, [
    parameterArr[1],
    parameterArr[2],
    parameterArr[3],
    parameterArr[4],
    parameterArr[5]
  ]);

  const handleClick = () => {
    setIsExtended(!isExtended);
  };

  const showFurtherSubCategory = (subCategoryData) => {
    const arr = [];

    axios(
      `http://127.0.0.1:9090/category/list/${subCategoryData.mall}/${
        subCategoryData.firstD
      }/${subCategoryData.secondD}${
        subCategoryData.thirdD ? "/" + subCategoryData.thirdD : ""
      }${subCategoryData.fourthD ? "/" + subCategoryData.fourthD : ""}`
    ).then((result) => {
      return result.data.map((item) => {
        arr.push(
          <li key={item.categoryName}>
            <Link
              to={`/category/list/${item.mall}_${item.firstD}_${item.secondD}_${
                item.thirdD
              }${item.fourthD ? "_" + item.fourthD : ""}${
                item.fifthD ? "_" + item.fifthD : ""
              }`}
            >
              {item.categoryName}
            </Link>
          </li>
        );
      });
    });
    return arr;
  };

  return (
    <>
      {!parameterArr[5] && categoryData.length > 0 ? (
        <SubCategory>
          {isExtended ? (
            <>
              <button onClick={handleClick}>
                <HiOutlineMinusSmall />
              </button>
              <ul className="extended">
                {categoryData.map((item) => (
                  <li key={item.categoryName} className="subCategoryItem">
                    <Link
                      to={`/category/list/${item.mall}_${item.firstD}${
                        item.secondD ? "_" + item.secondD : ""
                      }${item.thirdD ? "_" + item.thirdD : ""}${
                        item.fourthD ? "_" + item.fourthD : ""
                      }${item.fifthD ? "_" + item.fifthD : ""}`}
                    >
                      {item.categoryName}
                    </Link>
                    <ul className="furtherSubCategory">
                      {showFurtherSubCategory(item)}
                    </ul>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              {parameterArr[4] ? null : (
                <button onClick={handleClick}>
                  <HiOutlinePlusSmall />
                </button>
              )}
              <ul className="abbreviated">
                {categoryData.map((item) => (
                  <li key={item.categoryName}>
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
            </>
          )}
        </SubCategory>
      ) : null}
    </>
  );
}
