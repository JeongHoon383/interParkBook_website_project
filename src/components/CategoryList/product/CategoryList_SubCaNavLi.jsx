import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FurtherSubCategory = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  padding: 14px;
  li {
    width: 25%;
    a {
      display: inline-block;
      width: 90%;
      line-height: 22px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default function CategoryList_SUbCaNavLi({ subCategoryData }) {
  const [furtherSubCategoryData, setFurtherSubCategoryData] = useState([]);

  useEffect(() => {
    axios(
      `http://127.0.0.1:9090/category/list/${subCategoryData.mall}/${
        subCategoryData.firstD
      }/${subCategoryData.secondD}${
        subCategoryData.thirdD ? "/" + subCategoryData.thirdD : ""
      }${subCategoryData.fourthD ? "/" + subCategoryData.fourthD : ""}`
    ).then((result) => setFurtherSubCategoryData(result.data));
  }, []);

  return (
    <>
      {furtherSubCategoryData ? (
        <FurtherSubCategory>
          {furtherSubCategoryData.map((item) => (
            <li key={item.categoryName}>
              <Link
                to={`/category/list/${item.mall}_${item.firstD}_${
                  item.secondD
                }_${item.thirdD}${item.fourthD ? "_" + item.fourthD : ""}${
                  item.fifthD ? "_" + item.fifthD : ""
                }`}
              >
                {item.categoryName}
              </Link>
            </li>
          ))}
        </FurtherSubCategory>
      ) : null}
    </>
  );
}
