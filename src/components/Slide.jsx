import React from 'react';
import styled from 'styled-components';

const Pre = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 3%;
  z-index: 3;
`;

const NextTo = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 3%;
  z-index: 3;
`;

const Img = styled.img`
  width: 100%;
`;
export default function Slide() {
  const settings = {
    className: '',
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    draggable: false,
    appendDots: (dots) => (
      <div
        style={{
          width: '100%',
          position: 'absolute',
          top: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
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
  return <div>Slide</div>;
}
