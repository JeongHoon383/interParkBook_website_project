import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const SlideContainer = styled.div`
  .banner_img{
  margin : 20px 10px 0 0;
  width: 199px;
  height: 130px;
}

`;

const Banner = styled.div`
  .banner_ul {
    display: flex;
  }
`;

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
export default function Slide({ slideRef, afterChange }) {
  const settings = {
    className: '',
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    draggable: false,
    dotsClass: 'dots_custom',
    nextArrow: (
      <NextTo>
        <Img src='/img/Slide/right-arrow.svg' />
      </NextTo>
    ),
    prevArrow: (
      <Pre>
        <Img src='/img/Slide/left-arrow.svg' />
      </Pre>
    ),
  };


  return (
    <SlideContainer>
      <Slider ref={slideRef} afterChange={afterChange} {...settings}>
          <div className="slider_banner">
            <img
              className='banner_img'
              alt=''
              src="/img/CategoryMain/culture_img/review_carousel_1.gif"
            />
          </div>
        <Banner>
          <ul className='banner_ul'>
              <li>
                <img
                  className='banner_img'
                  src="/img/CategoryMain/culture_img/review_carousel_2.gif"
                  alt=''
                />
              </li>
          </ul>
        </Banner>
      </Slider>
    </SlideContainer>
  );
}