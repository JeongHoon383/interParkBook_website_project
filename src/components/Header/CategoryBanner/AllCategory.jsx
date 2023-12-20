import React from "react";
import HeaderCategoryList from "./HeaderCategoryList";
import styled from "styled-components";

const All = styled.div`
  position: relative;
  color: #666;
  z-index: 99;
  .mainNav {
    z-index: 99;
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 15px;
    padding: 10px;
    border: 1px solid var(--main);
    background-color: #fff;
    .category {
      &:not(:last-child) {
        border-right: 1px solid #d8d8d8;
      }
      &:not(:first-child) {
        margin-left: 10px;
      }
      h3 {
        margin-bottom: 10px;
        &:hover{
          text-decoration: underline;
        }
      }
      .categoryNav {
        display: flex;
        font-weight: normal;
        ul {
          font-size: 14px;
          margin-right: 10px;
          &:not(:first-child){
            padding-left: 10px;
            border-left: 1px solid #d8d8d8;
          }
          li {
            width: 120px;
            margin-bottom: 4px;
            a {
              display: inline-block;
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              &:hover {
              color: var(--main);
              font-weight: bold;
            }
            }
          }
        }
      }
    }
  }
`;

export default function AllCategory() {
  return (
    <All>
      <div className="mainNav">
        <HeaderCategoryList mall={"국내도서"} />
        <HeaderCategoryList mall={"외국도서"} />
        <HeaderCategoryList mall={"전자책"} />
      </div>
    </All>
  );
}