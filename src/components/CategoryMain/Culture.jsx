import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import CultureContent from './CultureContent';
import CultureSlide from '../CultureSlide'
import { IoIosArrowForward } from "react-icons/io";

import axios from 'axios';

const CultureContainer = styled.div`
  display : flex;
  margin: 20px auto 0;
  width: 958px;
  height: 442px;
  border: solid 1px #d8d8d8;
  background-image : url("/img/CategoryMain/culture_img/background_img.png") ;
  background-repeat : no-repeat;
  background-position : 0 -400px;

  .day_review{
    margin-top : 113px;
    margin-left : 20px;
    width : 210px;
    height : 329px;
  }

  .reviewer_container{
    margin-top : 113px;
    margin-left : 30px;
    width : 210px;
  }

  .day_review_title{
    display : flex;
  }

  .interPark_meet{
    margin-left : 30px;
    margin-top : 113px;
  }

  .interPark_meet_title{
    display : flex;
  }

  .interPark_meet_img{
    margin-top : 14px;
    width : 199px;
  }

  .interPark_meet_img li:last-child{
    margin-top : 16px;
  }

  .meet_img_text{
    margin-top: 9px;
    width: 199px;
    height: 30px;
    font-size : 11px;
  }

  .interPark_library{
    margin-top : 113px;
    margin-left : 40px;
  }

  .library_img_container{
    margin-top : 14px;
  }

  .library_img_container div:first-child{
    margin-bottom : 20px;
  }

  .library_img{
    position : relative;
    width : 198px;
    height : 130px;
    overflow : hidden;
  }

  .library_img img{
    margin : -12px 0;
  }

  .library_text{
    position: absolute;
    left: 0;
    top: 102px;
    padding-top: 2px;
    width: 188px;
    height: 28px;
    line-height: 23px;
    text-align: center;
    background: url("/img/CategoryMain/culture_img/blackScreen.png")
  }

  .library_text span{
    margin: 0 auto;
    width: 120px;
    color: #fff;
    cursor: pointer;
    font-size : 12px;
    font-weight: bold;
  }
`;

const Culture = () => {
  const [cultureList, setCultureList] = useState([]);
  const [review, setReview] = useState([])

  useEffect(() => {
    axios({
      method : 'get',
      url : '/data/categoryMain/culture.json'
    }).then((result) => {
      const data = result.data

      setCultureList(data.slice(0, 2));
      setReview(data.slice(2, 3))
    })
  }, [])

  return (
    <CultureContainer>
      <div className="day_review">
        <div className="day_review_title"><h3>이주의 리뷰</h3><IoIosArrowForward/></div>
        {cultureList.map((item) => ( <CultureContent item={item}/> ))}
      </div>
      <div className="reviewer_container">
        <div className="day_review_title"><h3>리뷰어 모집</h3><IoIosArrowForward/></div>
        {review.map((item) => ( <CultureContent item={item}/> ))}
        <CultureSlide/>
      </div>
      <div className="interPark_meet">
        <div className="interPark_meet_title"><h3>채널인터파크가 만났어요</h3><IoIosArrowForward/></div>
        <ul className="interPark_meet_img">
          <li>
            <img src="/img/CategoryMain/culture_img/meet_1.jpeg" alt="" />
            <div className="meet_img_text">김정 "일단 해 봐요, 재밌잖아요"</div>
          </li>
          <li>
            <img src="/img/CategoryMain/culture_img/meet_2.jpeg" alt="" />
            <div className="meet_img_text">은유, 다른 삶의 이야기를 가져오는 활동</div>
          </li>
        </ul>
      </div>
      <div className="interPark_library">
        <div className="interPark_meet_title"><h3>명사의 서재</h3><IoIosArrowForward/></div>
        <div className="library_img_container">
          <div className="library_img">
            <img src="/img/CategoryMain/culture_img/book_1.jpeg" alt="" />
            <div className="library_text">
              <span>정진호</span>
            </div>
          </div>
          <div className="library_img">
            <img src="/img/CategoryMain/culture_img/book_2.jpeg" alt="" />
            <div className="library_text">
              <span>어딘</span>
            </div>
          </div>
        </div>
      </div>
    </CultureContainer>
  )
}

export default Culture
