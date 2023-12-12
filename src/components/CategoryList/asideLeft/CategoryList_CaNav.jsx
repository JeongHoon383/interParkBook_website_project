import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CategoryNav = styled.nav`
  width: 180px;
  margin-right: 30px;
  .categoryTitle {
    line-height: 36px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background: var(--main);
  }
  .categoryList {
    padding: 6px 0;
    border: 1px solid #d8d8d8;
    border-top: none;
    .categoryListItem {
      position: relative;
      height: 18px;
      a {
        display: block;
        padding-left: 13px;
        line-height: 18px;
      }
      &:hover {
        background: var(--main);
        > a {
          color: #fff;
        }
        .categorySubListWrapper {
          display: flex;
        }
      }
      .categorySubListWrapper {
        position: absolute;
        display: none;
        top: -8px;
        right: -100px;
        border: 2px solid var(--main);
        background: #fff;
        z-index: 101;
        .arrowBox {
          position: absolute;
          top: 10px;
          left: -7px;
          width: 11px;
          height: 11px;
          rotate: 45deg;
          border-left: 2px solid var(--main);
          border-bottom: 2px solid var(--main);
          background: #fff;
        }
        .categorySubList {
          width: 130px;
          .categorySubItem {
            a {
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
`;

export default function CategoryList_CaNav() {
  /* 추후 카테고리 리스트 수정 필요 */
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    axios("/data/categoryList.json").then((result) =>
      setCategoryList(result.data)
    );
  }, []);
  return (
    <CategoryNav>
      <h4 className="categoryTitle">국내도서</h4>
      <ul className="categoryList">
        {categoryList.map((list, index) => (
          <li className="categoryListItem" key={index}>
            <Link>{list.categoryName}</Link>
            {list.subCategoryName.length >= 1 ? (
              <div className="categorySubListWrapper">
                <div className="arrowBox"></div>
                <ul className="categorySubList">
                  {list.subCategoryName.map((subList, subIndex) => (
                    <li className="categorySubItem" key={subIndex}>
                      <Link>{subList}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </CategoryNav>
  );
}
