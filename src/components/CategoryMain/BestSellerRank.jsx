import React from 'react';
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
  }
`;

const BestSellerRank = ({ item, rankHover }) => {
  if (!item) return <></>;

  const { title, rank } = item;

  return (
    <BestRank onMouseOver={() => rankHover(Number(rank))}>
      <div className='rank_box'>
        <div className='rank_box_num'>{rank}</div>
        <div className='rank_box_title'>{title}</div>
      </div>
    </BestRank>
  );
};

export default BestSellerRank;