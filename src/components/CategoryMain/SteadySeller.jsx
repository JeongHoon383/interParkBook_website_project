import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

const Steady = styled.div`
  margin-top : 20px;
  width: 479px;
  height: 354px;
  border: 1px solid red;

  .steady_title{
    padding: 20px 0 9px 20px;
    display : flex;
    font-weight : bold;
  }

  .steady_main{
    position : relative;
    display : flex;
    margin-top : 10px;
    margin-left : 20px;
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
  }

  .steady_img_content{
    margin-left : 10px;
  }

  .steady_img_content li{
    font-size : 13px;
  }

  .steady_img_title{
    margin-bottom : 10px;
    font-weight : bold;
  }

  .steady_author,
  .steady_publisher{
    margin-bottom : 5px;
    color : #999;
  }

  .steady_price{
    font-weight : bold;
  }
`;

const SteadySeller = () => {
  return (
    <Steady>
      <h3 className="steady_title">
        스테디셀러
        <span>
          <IoIosArrowForward />
        </span>
      </h3>
      <div className="steady_main">
        <div className="steady_circle">에세이</div>
        <div><img className="steady_img" src="/img/CategoryMain/steadySeller_img/img_1.jpeg" alt="" /></div>
        <div>
          <ul className="steady_img_content">
            <li className="steady_img_title">타샤의 정원</li>
            <li className="steady_author">타샤 튜터 저</li>
            <li className="steady_publisher">윌북(willbook)</li>
            <li className="steady_price">16,020원</li>
          </ul>
        </div>
      </div>
    </Steady>
  );
};

export default SteadySeller;
