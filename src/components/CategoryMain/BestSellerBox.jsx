import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BestSellerImg = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  width: 178px;
  height: 197px;
  border-top: solid 1px #dbe6ee;
  
  background-color: #e7f2fb;
  .img_box {
    margin-top : 5px;
    display : flex;
    flex-direction : column;
    align-items : center;
  }

  .bestSeller_img {
    height: 98px;
    border: solid 1px #cecece;
  }

  .bestSeller_img_text{
    margin-top : 10px;
    width : 178px;
    text-align : center;
  }

  .best_title{
    font-weight : bold;
    font-size : 12px;
    overflow : hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .best_author{
    margin-top : 5px;
    overflow : hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height : 14px;
  }

  .best_price{
    margin-top : 5px;
    
    font-size : 12px;
  }
`;

const BestSellerBox = ({rank}) => {
    if(!rank) return <></> 
    // axios로 넘어올때 undefined
    const {cover, title, author, priceSales, isbn13} = rank
  
  return (
    <BestSellerImg>
      <div className="img_box">
        <div>
          <Link to={`/book/${isbn13}`}><img
            className="bestSeller_img"
            src={cover}
            alt=""
          />
          </Link>
        </div>
        <div>
          <ul className="bestSeller_img_text">
            <Link to={`/book/${isbn13}`}><li className="best_title">{title}</li></Link>
            <li className="best_author grey">{author}</li>
            <li className="best_price">{[priceSales].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</li>
          </ul>
        </div>
      </div>
    </BestSellerImg>
  );
};

export default BestSellerBox;
