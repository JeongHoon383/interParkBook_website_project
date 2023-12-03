import React from 'react'
import styled from 'styled-components'

const BestRank = styled.div`
    width: 178px;
    height: 38px;
    border-top: solid 1px #dbe6ee;
    .rank_box{
      display : flex;
      justify-content : center;
      align-items : center;
      height : 40px;
    }

    .rank_box:hover{
      font-weight : bold;
      cursor: pointer;
    }

    .rank_box_num{
      margin-right : 10px;
      width : 13px;
      height : 13px;
      background-color : var(--default);
      color : white;
      text-align : center;
      line-height : 15px;
      font-size : 12px;
    }

    .rank_box_title{
      font-size : 12px;
    }
`;

const BestSellerRank = ({rank}) => {
  const {title} = rank;
  return (
    <BestRank>
      <div className="rank_box">
        <div className="rank_box_num">1</div>
        <div className="rank_box_title">{title}</div>
      </div>
    </BestRank>
  )
}

export default BestSellerRank
