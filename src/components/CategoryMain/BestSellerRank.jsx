import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const BestRank = styled.div`
  width: 178px;
  height: 38px;
  border-top: solid 1px #dbe6ee;
  .rank_box {
    margin-left : 20px;
    display: flex;
    align-items: center;
    height: 40px;
  }

  .rank_box:hover {
    font-weight: bold;
    cursor: pointer;
  }

  .rank_box_num {
    margin-right: 10px;
    width: 13px;
    height: 13px;
    background-color: var(--default);
    color: white;
    text-align: center;
    line-height: 15px;
    font-size: 12px;
  }

  .rank_box_title {
    width : 178px;
    font-size: 12px;
    overflow : hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const BestSellerRank = ({ item, rankHover }) => {
  if (!item) return <></>;

  const { title, bestRank } = item;

  return (
    <BestRank onMouseOver={() => rankHover(Number(bestRank))}>
      <Link to={`/book/${item.isbn13}`}>
        <div className='rank_box'>
          <div className='rank_box_num'>{bestRank}</div>
          <div className='rank_box_title'>{title}</div>
        </div>
    </Link>
    </BestRank>
  );
};

export default BestSellerRank;