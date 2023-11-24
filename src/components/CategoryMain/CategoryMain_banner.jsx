import React from "react";
import styled from "styled-components";

const CategoryMain_banner = () => {
  return (
    <TopBanner>
      <div className="banner">
        <div className="banner_main">
          <img className="banner_img" src="https://image.yes24.com/images/00_Event/2023/1115Sph/bn_579x323.jpg" alt="" />
        </div>
        <ul className="banner_category">
          <li>쇼펜하우어</li>
          <li>목표달성</li>
          <li>머핀북</li>
          <li>파견자들</li>
          <li>김영사</li>
          <li>주목 이 책!</li>
        </ul>
      </div>
      <div className="banner_ad">
        <img className="banner_ad_img" src="https://image.yes24.com/momo/scmfiles/AdvertFiles/202311/2578206_231016114437.jpg" alt="" />
      </div>
    </TopBanner>
  );
};

const TopBanner = styled.div`
  display : flex;
  margin : 0 auto;
  margin-top : 20px;
  width : 770px; height:323px;
  

  .banner{
    display : flex;
    flex-direction : column;
    width:580px;
    border : 0.3px solid grey;
    border-right: none;  
  }

  .banner_ad{
    width : 190px;
    border : 0.3px solid grey;
    
  }

  .banner_main{
    
    flex : 1;
  }

  .banner_img{
    margin : 0 auto;
    width : 518px;
    height : 270px;
  }

  .banner_category{
    margin-bottom : 20px;
    display : flex;
    width : 100%;
    font-size : 11px;
    height : 26px;
    line-height : 26px;
    text-align : center;
  }

  .banner_category li{
    width : 86px;
    margin-right : 1px;
    color : white;
    background-color : rgb(149, 149, 149);
    border : none;
  }

  .banner_category li:first-child{
  margin-left : 27px; 
  }

  .banner_ad_img{
    height : 322px
  }
`;

export default CategoryMain_banner;
