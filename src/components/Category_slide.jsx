import React from 'react';
import Slider from 'react-slick';
import styled from "styled-components";

const Banner = styled.div`
  .banner_ul{
    display : flex;
  }

`

const Pre = styled.div`
  width: 40px;
  height: 20px;
  position: absolute;
  left: 1%;
  z-index: 3;
`;

const NextTo = styled.div`
  width: 40px;
  height: 20px;
  position: absolute;
  right: 1%;
  z-index: 3;
`;

const Img = styled.img`
  width: 100%;
`;
export default function Slide() {
  const settings = {
    className: '',
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    draggable: false,
    dotsClass: 'dots_custom',
    nextArrow: (
      <NextTo>
        <Img src="/img/Slide/right-arrow.svg" />
      </NextTo>
    ),
    prevArrow: (
      <Pre>
        <Img src="/img/Slide/left-arrow.svg" />
      </Pre>
    ),
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img className="banner_img" src="/img/CategoryMain/topbanner_img/bn_579x323_banner1.jpeg" />
        </div>
        <div>
          <img className="banner_img" src="/img/CategoryMain/topbanner_img/bn_579x323_banner2.jpeg" />
        </div>
        <div>
          <img className="banner_img" src="/img/CategoryMain/topbanner_img/bn_579x323_banner3.jpeg" />
        </div>
        <div>
          <img className="banner_img" src="/img/CategoryMain/topbanner_img/bn_main_579x323_banner4.jpeg"/>
        </div>
        <div>
          <img className="banner_img" src="/img/CategoryMain/topbanner_img/bn_579x323_banner5.jpeg" />
        </div>
        <Banner>
          <ul className="banner_ul">            
            <li><img className='banner_lastImg' src="/img/CategoryMain/topbanner_img/Big_6_1_192x323_231121_banner6-1.jpeg" alt="" /></li>
            <li><img className='banner_lastImg' src="/img/CategoryMain/topbanner_img/Big_6_2_192x323_231121_banner6-2.jpeg" alt="" /></li>
            <li><img className='banner_lastImg' src="/img/CategoryMain/topbanner_img/Big_6_3_192x323_231114_banner6-3.jpeg" alt="" /></li>
          </ul>
        </Banner>
      </Slider>
    </div>
  );
}
