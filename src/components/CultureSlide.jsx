import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const SlideContainer = styled.div`
position : relative;
  .banner_img{
  margin : 20px 10px 0 0;
  width: 199px;
  height: 130px;
  }

  .carouselPage{
    position : absolute;
    top : 30px;
    right : 20px;
  }

  .carouselPage span{
    font-size : 12px;
  }

  .carousel_first_num{
    font-weight : bold;
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
  left: 0.1%;
  z-index: 3;
`;

const NextTo = styled.div`
  width: 40px;
  height: 20px;
  position: absolute;
  right: 5%;
  z-index: 3;
`;

const Img = styled.img`
  width: 100%;
`;

const StyledSlider = styled(Slider) `
  .slick-prev, .slick-next {
    &::before{
      content:none
    }
  }
`

export default function Slide({ slideRef, afterChange }) {
  const crauselImg = [
    '/img/Slide/right-arrow.svg',
    '/img/Slide/left-arrow.svg'
  ]

  const [changeNum, setChangeNum] = useState({
    activeSlide : 0,
    activeSlide2 : 0,
  })

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
    beforeChange : (current, next) =>
      setChangeNum({ activeSlide : next, activeSlide2 : current}),
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
      <StyledSlider ref={slideRef} afterChange={afterChange} {...settings}>
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
      </StyledSlider>
      <div className="carouselPage">
        <span className="carousel_first_num">{changeNum.activeSlide + 1}</span>
        <span className="grey">/</span>
        <span className="grey">{crauselImg.length}</span>
      </div>
    </SlideContainer>
  );
}