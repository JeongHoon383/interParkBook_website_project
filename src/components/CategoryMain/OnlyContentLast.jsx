import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const OnlyReview = styled.div`
    padding: 19px 0 0 19px;
    width : 319px;
    height : 228px;
    border-right : solid 1px #ebebeb;

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
    margin-top: 10px;
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
    width : 278px;
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

  .onlyReview_title:hover{
    text-decoration : underline;
  }

  .onlyReview_author{
    margin-bottom : 5px;
  }

`

const OnlyContentLast = ({ onlyList, topTitle }) => {
  if(!onlyList) return <></>
  const {cover, description, author} = onlyList;
  return (
        <OnlyReview>
          <h3 className="onlyReview_icon">
            {topTitle}<span className="onlyReview_icon_color"><IoIosArrowForward/></span>
          </h3>
          <div className="onlyReview_article">
            {description}
            <p className="onlyReview_article_author">{author}</p>
          </div>
          <div className="onlyReview_content">
            <div><Link to='/book/:id'><img className="onlyReview_img" src={cover} alt="" /></Link></div>
          </div>
        </OnlyReview>
  )
}

export default OnlyContentLast