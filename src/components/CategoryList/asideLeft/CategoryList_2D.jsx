import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CategorySubListWrapper = styled.div`
  position: absolute;
  display: none;
  top: -8px;
  left: 160px;
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
`;

export default function CategoryList_2D({ mall, firstD }) {
  const [secondDCategory, setSecondDCategory] = useState([]);
  useEffect(() => {
    axios(`http://192.168.50.25:9090/category/list/${mall}/${firstD}`).then(
      (result) => setSecondDCategory(result.data)
    );
  }, []);

  const show2DCategory = (secondDCategory) => {
    const arr = [];
    const repeat = Math.ceil(secondDCategory.length / 15);

    for (let i = 0; i < repeat; i++) {
      const categoryArr = secondDCategory.slice(15 * i, 15 * i + 15);
      arr.push(
        <ul className="categorySubList" key={i}>
          {categoryArr.map((item) => (
            <li className="categorySubItem" key={item.secondD}>
              <Link to={`/category/list/${mall}_${firstD}_${item.secondD}`}>
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
    <>
      {secondDCategory.length >= 1 ? (
        <CategorySubListWrapper className="categorySubListWrapper">
          <div className="arrowBox"></div>
          {show2DCategory(secondDCategory)}
        </CategorySubListWrapper>
      ) : null}
    </>
  );
}
