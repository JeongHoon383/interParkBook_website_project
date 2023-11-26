import React from 'react'
import styled from "styled-components"
import { IoIosArrowForward } from "react-icons/io";

const Only = styled.div`
  margin-top : 20px;

  .onlyContainer{
    margin : 0 auto;
    margin-top : 20px;
    width : 958px;
    border: solid 1px #d8d8d8;
  }

  .onlyReview{
    padding: 19px 0 0 19px;
    width : 319px;
    height : 228px;
    border-right : solid 1px #ebebeb;
  }

  .onlyReview_icon{
    display :flex;
    color : var(--main);
  }

  .onlyReview_icon_color{
    color : black;
  }

  .onlyReview_article{
    padding: 13px 0 0 0;
    height: 45px;
  }

  .onlyReview_article_author{
    display: block;
    margin-top: 6px;
    width: 278px;
    height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 16px;
    color: #999;
  }

  .onlyReview_content{
    display : flex;
    margin-top : 20px;
    border-top: solid 1px #ebebeb;
  }

  .onlyReview_img{
    margin-top : 15px;
    width : 70px;
    height : 100px;
  }

  .onlyReview_img_text{
    margin-top : 15px;
    margin-left : 10px;
  }

  .onlyReview_title{
    margin-bottom : 7px;
    font-weight : bold;
  }

  .onlyReview_author,
  .onlyReview_publisher{
    color : #999;
  }

  .onlyReview_author{
    margin-bottom : 5px;
  }
`

const InterParkOnly = () => {
  return (
    <Only>
      <h3>INTERPARK ONLY</h3>
      <div className="onlyContainer">
        <div className="onlyReview">
          <h3 className="onlyReview_icon">
            INTERPARK 편집자 리뷰<span className="onlyReview_icon_color"><IoIosArrowForward/></span>
          </h3>
          <div className="onlyReview_article">
            낭만으로 마침표를 찍는 편지
            <p className="onlyReview_article_author">오다은</p>
          </div>
          <div className="onlyReview_content">
            <div><img className="onlyReview_img" src="/img/CategoryMain/interParkOnly/only_1-1.jpeg" alt="" /></div>
            <div className="onlyReview_img_text">
              <div className="onlyReview_title">이 편지가 도착하면은</div>
              <div className="onlyReview_author">골드키위새 저</div>
              <div className="onlyReview_publisher">문학동네</div>
            </div>
          </div>
        </div>
      </div>
    </Only>
  )
}

export default InterParkOnly
