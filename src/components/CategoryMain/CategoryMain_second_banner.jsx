import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

const CategoryMain_second_banner = () => {
  return (
    <Second_banner>
      <div className="banner_left">
        <div>
          <img className="banner_img" src="/img/CategoryMain/secondbanner_img/secondbanner1.jpeg" alt="" />
        </div>
        <div className="banner_text">
          <div className="banner_text_icon">인터파크의 선택<span><IoIosArrowForward/></span></div>
          <div className="banner_semiTitle">행복은 어디에나</div>
          <div className="banner_content">새벽을 달리며 나누는 미소, 여유로운 커피 한 잔, 고양이와 눈싸움 등 일상 속에서 찾을 수 있는 행복의 순간을 그린 그림책. 거창한 행복을 찾을 거라는 희망고문에 오늘의 불행을 감내하는 것이 아닌 매순간에서 짧게 느끼는 소소하지만 단단한 행복의 순간과 그 소중함을 느낄 수 있는 책.</div>
          <div className="banner_title">행복은 아주 작은 것들로부터</div>
          <div className="banner_author">샬롯 에이저 저/이하나 역 | 롭</div>
          <div className="banner_price">
            <span>17,820원(10% 할인)</span>
            <span>990P</span>
          </div>
        </div>
      </div>
      <div className="banner_right">
        <ul>
          <li><img className="banner_right_img" src="/img/CategoryMain/secondbanner_img/secondbanner1-1.jpeg" alt="" /> <span className="banner_right_text">행복은 어디에나</span></li>
          <li><img className="banner_right_img" src="/img/CategoryMain/secondbanner_img/secondbanner2-2.jpeg" alt="" /> <span className="banner_right_text">수어 문법을 문학으로 녹인다면</span></li>
          <li><img className="banner_right_img" src="/img/CategoryMain/secondbanner_img/secondbanner3-3.jpeg" alt="" /> <span className="banner_right_text">대한민국 산업의 미래</span></li>
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

  .banner_left{
    display : flex;
    width : 580px;
    border-right : 1px solid grey;
  }

  .banner_img{
    margin-top : 30px;
    margin-left : 30px;
    width : 190px;
    height : 261px;
  }

  .banner_text{
    margin-left : 20px;
    margin-top : 30px;
  }

  .banner_text_icon{
    display : flex;
    cursor: pointer;
    margin-bottom : 15px;
    color : #fff;
  }

  .banner_semiTitle{
    margin-bottom : 10px;
    font-size : 13px;
    color : var(--main);
  }

  .banner_content{
    margin-bottom : 30px;
    font-size : 12px;
    color : #999;
  }

  .banner_title{
    margin-bottom : 10px;
    font-size : 13px;
    color : #fff;
    cursor: pointer;
  }

  .banner_author{
    margin-bottom : 10px;
    font-size : 12px;
    color : #999;
  }

  .banner_price{
    font-size : 13px;
    color : #fff;
  }

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
