import React from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components"

const BannerLastImg = styled.div`
  margin : 0 auto;

  .banner_ul{
    display : flex;
  }

  .banner_ul li img{
    height : 322px;
  }

  .banner_ul li:not(:last-child){
    
  }
`;

const BannerImg = styled.div`
    .banner_img{
    margin : 0 auto;
    height : 322px;
  }
`;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
        position : "absolute",
        top : "161.5px",
        right : "1px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
        zIndex : 10,
        position : "absolute",
        top : "161.5px",
        left : "1px",
      }}
      onClick={onClick}
    />
  );
}


export default function Slide() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: 'liner',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div>
      <Slider {...settings}>
        <BannerImg>
          <img className="banner_img" src="/img/CategoryMain/topbanner_img/bn_579x323_banner1.jpeg" />
        </BannerImg>
        <BannerImg>
          <img className="banner_img" src="/img/CategoryMain/topbanner_img/bn_579x323_banner2.jpeg" />
        </BannerImg>
        <BannerImg>
          <img className="banner_img" src="/img/CategoryMain/topbanner_img/bn_579x323_banner3.jpeg" />
        </BannerImg>
        <BannerImg>
          <img className="banner_img" src="/img/CategoryMain/topbanner_img/bn_main_579x323_banner4.jpeg"/>
        </BannerImg>
        <BannerImg>
          <img className="banner_img" src="/img/CategoryMain/topbanner_img/bn_579x323_banner5.jpeg" />
        </BannerImg>
        <BannerLastImg>
          <ul className='banner_ul'>            
            <li><img className='banner_lastImg' src="/img/CategoryMain/topbanner_img/Big_6_1_192x323_231121_banner6-1.jpeg" alt="" /></li>
            <li><img className='banner_lastImg' src="/img/CategoryMain/topbanner_img/Big_6_2_192x323_231121_banner6-2.jpeg" alt="" /></li>
            <li><img className='banner_lastImg' src="/img/CategoryMain/topbanner_img/Big_6_3_192x323_231114_banner6-3.jpeg" alt="" /></li>
          </ul>
        </BannerLastImg>
      </Slider>
    </div>
  );
}
