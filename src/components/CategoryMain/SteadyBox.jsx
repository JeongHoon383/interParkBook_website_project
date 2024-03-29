import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SteadyContainer = styled.div`
    .steady_main{
    position : relative;
    display : flex;
    margin-top : 10px;
    margin-left : 25px;
    width : 205px;
    height : 130px;
  }

  .steady_circle{
    position : absolute;
    top : -10px;
    left : -10px;
    width : 42px;
    height : 42px;
    background-color : var(--main);
    line-height : 42px;
    border-radius : 50%;
    color : white;
    font-size : 13px;
    text-align : center;
  }

  .steady_img{
    width : 92px;
    height : 135px;
    cursor: pointer;
  }

  .steady_img_content{
    margin-left : 10px;
  }

  .steady_img_content li{
    font-size : 13px;
  }

  .steady_img_title{
    margin-bottom : 10px;
    line-height : 1.2em;
    height : 3.6em;
    overflow : hidden;
    text-overflow: ellipsis;
    display : -webkit-box;
    -webkit-line-clamp : 3;
    font-weight : bold;
    
    cursor: pointer;
  }

  .steady_img_title:hover{
    text-decoration : underline;
  }

  .steady_author{
    width : 100px;
    overflow : hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .steady_author,
  .steady_publisher{
    margin-bottom : 5px;
  }

  .steady_price{
    font-weight : bold;
  }
`;

const SteadyBox = ({content}) => {
  if(!content) return <></>
  const {cover, title, author, publisher, priceSales, categoryDetail, isbn13} = content;

  return (
    <SteadyContainer>
        <div className="steady_main">
          <div className="steady_circle">{categoryDetail}</div>
          <div>
            <Link to={`/book/${isbn13}`}><img
              className="steady_img"
              src={cover}
              alt=""
            /></Link>
          </div>
          <div>
            <ul className="steady_img_content">
              <Link to={`/book/${isbn13}`}><li className="steady_img_title">{title}</li></Link>
              <li className="steady_author grey">{author}</li>
              <li className="steady_publisher grey">{publisher}</li>
              <li className="steady_price">{[priceSales].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</li>
            </ul>
          </div>
        </div>
    </SteadyContainer>
  );
};

export default SteadyBox;
