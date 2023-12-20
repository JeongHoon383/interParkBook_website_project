import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

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

const StyledSlider = styled(Slider) `
  .slick-prev, .slick-next {
    &::before{
      content:none
    }
  }
`
export default function Slide({ slideRef, afterChange }) {
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
        <Img src='/img/Slide/right-arrow.svg' />
      </NextTo>
    ),
    prevArrow: (
      <Pre>
        <Img src='/img/Slide/left-arrow.svg' />
      </Pre>
    ),
  };

  const banner_img_sources = [
    'bn_579x323_banner1.jpeg',
    'bn_579x323_banner2.jpeg',
    'bn_579x323_banner3.jpeg',
    'bn_main_579x323_banner4.jpeg',
    'bn_579x323_banner5.jpeg',
  ];

  const banner_lastImg_sources = [
    'Big_6_1_192x323_231121_banner6-1.jpeg',
    'Big_6_2_192x323_231121_banner6-2.jpeg',
    'Big_6_3_192x323_231114_banner6-3.jpeg',
  ];

  return (
    <div>
      <StyledSlider ref={slideRef} afterChange={afterChange} {...settings}>
        {banner_img_sources.map((source) => (
          <div key={source}>
            <img
              className='banner_img'
              alt=''
              src={`/img/CategoryMain/topbanner_img/${source}`}
            />
          </div>
        ))}
        <Banner>
          <ul className='banner_ul'>
            {banner_lastImg_sources.map((source) => (
              <li key={source}>
                <img
                  className='banner_lastImg'
                  src={`/img/CategoryMain/topbanner_img/${source}`}
                  alt=''
                />
              </li>
            ))}
          </ul>
        </Banner>
      </StyledSlider>
    </div>
  );
}