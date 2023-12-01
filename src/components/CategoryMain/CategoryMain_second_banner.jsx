import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Second_banner_content from "./Second_banner_content";
import axios from "axios";

const CategoryMain_second_banner = () => {
  const [active, setActive] = useState("1")

  

  return (
    <Second_banner>
      <Second_banner_content active={active}/>
      <div className="banner_right">
        <ul>
          <li onMouseOver={() => setActive("1")}><img className="banner_right_img" src="/img/CategoryMain/secondbanner_img/secondbanner1-1.jpeg" alt="" /> <span className="banner_right_text">행복은 어디에나</span></li>
          <li onMouseOver={() => setActive("2")}><img className="banner_right_img" src="/img/CategoryMain/secondbanner_img/secondbanner2-2.jpeg" alt="" /> <span className="banner_right_text">수어 문법을 문학으로 녹인다면</span></li>
          <li onMouseOver={() => setActive("3")}><img className="banner_right_img" src="/img/CategoryMain/secondbanner_img/secondbanner3-3.jpeg" alt="" /> <span className="banner_right_text">대한민국 산업의 미래</span></li>
        </ul>
      </div>
    </Second_banner>
  );
};

const Second_banner = styled.div`
  display: flex;
  margin-top: 20px;
  width: 770px;
  height: 323px;
  background-color : rgb(38, 38, 38);

  
  .banner_right ul{
    width : 190px;
    display : flex;
    flex-direction : column;
    height : 100%;
  }

  .banner_right ul li{
    display : flex;
    flex-basis : 33.3%;
    border-bottom : 1px solid grey;
    opacity : 0.3;
  }

  .banner_right ul li:hover{
    opacity : 1;
    cursor: pointer;
  }

  .banner_right ul li:last-child{
    border-bottom : none;
  }

  .banner_right_img{
    width : 47.8px;
    height : 80px;
    margin-top : 12px;
    margin-left : 20px;
  }

  .banner_right_text{
    margin : 18px 0 0 10px;
    font-size : 11px;
    color : #fff;
  }
`;

export default CategoryMain_second_banner;
