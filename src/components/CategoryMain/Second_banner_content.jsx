import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';




const SecondBanner = styled.div`
    width : 580px;
    border-right : 1px solid grey;
  .banner_left{
    display : flex;
    margin-right : 20px;
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
    font-size : 15px;
    font-weight : bold;
  }

  .banner_semiTitle{
    margin-bottom : 10px;
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

`;
//{props.dataList[0] && props.dataList[0].img}
const Second_banner_content = (props) => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    axios({
      method : 'get',
      url : '/data/categoryMain/interParkChoice.json'
    }).then((result) => {
      setBanner(result.data)
    })
  },[])


  return (
    <SecondBanner>
      <div className="banner_left">
        <div>
          <img className="banner_img" src={banner[0] && banner[0].img} alt="" />
        </div>
        <div className="banner_text">
          <div className="banner_text_icon">인터파크의 선택<span><IoIosArrowForward/></span></div>
          <div className="banner_semiTitle">{banner[0] && props.active === "1" ? banner[0].semiTitle : ''}</div>
          <div className="banner_content">{banner[0] && props.active === "1" ? banner[0].content : ''}</div>
          <div className="banner_title">{banner[0] && props.active === "1" ? banner[0].title : ''}</div>
          <div className="banner_author">{banner[0] && props.active === "1" ? banner[0].author : ''}</div>
          <div className="banner_price">
            <span>{banner[0] && props.active === "1" ? banner[0].price : ''}</span>
            <span>{banner[0] && props.active === "1" ? banner[0].point : ''}</span>
          </div>
        </div>
      </div>
    </SecondBanner>
  )
}

export default Second_banner_content
