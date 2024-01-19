import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CategoryList_2D from "./CategoryList_2D";

const CategoryNav = styled.nav`
  width: 180px;
  margin-right: 20px;
  .categoryTitle {
    line-height: 36px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
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
    }
  }
`;

export default function CategoryList_CaNav() {
  const params = useParams().categoryPath;
  const mall = params.includes("_") ? params.split("_")[0] : params;
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios(`http://192.168.50.16:9090/category/list/${mall}`).then((result) =>
      setCategory(result.data)
    );
  }, [mall]);

  return (
    <CategoryNav>
      <h4 className="categoryTitle">{category[0] && category[0].mall}</h4>
      <ul className="categoryList">
        {category.map((item) => (
          <li className="categoryListItem" key={item.firstD}>
            <Link to={`/category/list/${item.mall}_${item.firstD}`}>
              {item.firstD}
            </Link>
            <CategoryList_2D
              className="categorySubListWrapper"
              mall={mall}
              firstD={item.firstD}
            />
          </li>
        ))}
      </ul>
    </CategoryNav>
  );
}
