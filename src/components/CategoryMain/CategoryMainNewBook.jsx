import React from "react";
import styled from "styled-components";
import Bestseller from "./Bestseller";
import Newbook from "./Newbook";

const BestSellerNewBook = styled.div`
  display : flex;
  width : 958px;
  margin-top : 20px;
  text-align: left;
  border: solid 1px #d8d8d8;
  background-color: #fff;
`;

const CategoryMainNewBook = () => {
  return (
    <BestSellerNewBook>
      <Bestseller/>
      <Newbook/>
    </BestSellerNewBook>
    )
};

export default CategoryMainNewBook;
