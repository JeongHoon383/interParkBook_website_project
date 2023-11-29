import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Category_slide from "../Category_slide"
import axios from "axios";

const CategoryMain_banner = () => {
  const mouseOver = () => {
    
  }


  return (
    <TopBanner>
      <div className="banner">
        <div className="banner_main">
        <Category_slide/>
        </div>
        <ul className="banner_category">
          <li onMouseOver={() => mouseOver(0)}>쇼펜하우어</li>
          <li onMouseOver={() => mouseOver(1)}>목표달성</li>
          <li onMouseOver={() => mouseOver(2)}>머핀북</li>
          <li onMouseOver={() => mouseOver(3)}>파견자들</li>
          <li onMouseOver={() => mouseOver(4)}>김영사</li>
          <li onMouseOver={() => mouseOver(5)}>주목 이 책!</li>
        </ul>
      </div>
      <div className="banner_ad">
        <img className="banner_ad_img" src="/img/CategoryMain/topbanner_img/2578206_231016114437_banner-ad.jpeg" alt="" />
      </div>
    </TopBanner>
  );
};

const TopBanner = styled.div`
  display : flex;
  justify-content : center;
  margin-top : 20px;
  height:326px;

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
    position : relative;
  }

  .banner_category{
    position : absolute;
    top : 13.5%;
    margin-bottom : 20px;
    display : flex;
    font-size : 11px;
    height : 26px;
    line-height : 26px;
    text-align : center;
  }

  .banner_category li{
    width : 86px;
    margin-right : 1px;
    font-size : 12px;
    color : white;
    background-color : rgb(149, 149, 149);
    border : none;
    cursor: pointer;
  }

  .banner_category li:hover{
    background-color : var(--main);
  }

  .banner_category li:first-child{
  margin-left : 27px; 
  }

  .banner_ad_img{
    height : 322px
  }
`;

export default CategoryMain_banner;
