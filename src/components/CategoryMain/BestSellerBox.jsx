import React from "react";
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
  }

  .best_title{
    font-weight : bold;
    font-size : 12px;
  }

  .best_author{
    margin-top : 5px;
    margin-left : 7px;
  }

  .best_price{
    margin-top : 5px;
    margin-left : 7px;
    font-size : 12px;
  }
`;

const BestSellerBox = ({rank}) => {
    if(!rank) return <></> 
    // axios로 넘어올때 undefined
    const {img, title, author, price} = rank
  
  return (
    <BestSellerImg>
      <div className="img_box">
        <div>
          <img
            className="bestSeller_img"
            src={img}
            alt=""
          />
        </div>
        <div>
          <ul className="bestSeller_img_text">
            <li className="best_title">{title}</li>
            <li className="best_author grey">{author}</li>
            <li className="best_price">{price}</li>
          </ul>
        </div>
      </div>
    </BestSellerImg>
  );
};

export default BestSellerBox;
