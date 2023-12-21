import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const Pre = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 48%;
  left: -1%;
  z-index: 3;
`;

const NextTo = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 48%;
  right: -1%;
  z-index: 3;
`;

const Img = styled.img`
  width: 100%;
`;

const ChoiceSection = styled.div`
  display: flex;

  h3 {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 8px;
  }

  span {
  }
`;

const ChoiceDiv = styled.div`
  width: 40%;
  padding-right: 30px;
`;

const Box = styled.div`
  border: 1px solid #ddd;
`;

const BoxImg = styled.img`
  width: 100%;
`;

const DefaultSpan = styled.span`
  color: var(--default);
`;

const ColorSpan = styled.span`
  color: #e66a57;
`;

const StyledSlider = styled(Slider)`
  .dots_custom {
    display: inline-block;
    vertical-align: middle;
    margin: 0 auto;
    padding: 0;
  }

  .dots_custom li {
    cursor: pointer;
    display: inline-block;
    margin: 0 4px;
    padding: 0;
  }

  .dots_custom li button {
    border: none;
    background: #d1d1d1;
    color: transparent;
    cursor: pointer;
    display: block;
    height: 9px;
    width: 9px;
    border-radius: 100%;
    padding: 0;
  }

  .dots_custom li.slick-active button {
    background-color: #08c1ce;
  }

  .slick-prev,
  .slick-next {
    &::before {
      content: none;
    }
  }
`;

export default function Main_ChoiceSection() {
  return (
    <ChoiceSection>
      <ChoiceDiv>
        <div className="publisherHeader">
          <h3>
            <DefaultSpan>출판사 </DefaultSpan>
            <ColorSpan>초이스 !</ColorSpan>
          </h3>
          <Box>
            <BoxImg className="publisherImg" src="/img/Choice/publisherChoice.jpeg" alt="" />
          </Box>
        </div>
      </ChoiceDiv>
      <ChoiceDiv>
        <div className="mediaHeader">
          <h3>
            <DefaultSpan>미디어 </DefaultSpan>
            <ColorSpan>추천 !</ColorSpan>
          </h3>
        </div>
        <MediaSlide />
      </ChoiceDiv>
      <div style={{ width: '20%' }}>
        <div className="readerHeader">
          <h3>
            <ColorSpan>이 책 </ColorSpan>
            <DefaultSpan>어때 ?</DefaultSpan>
          </h3>
        </div>
        <div className="readerBox">
          <ReaderSlide />
        </div>
      </div>
    </ChoiceSection>
  );
}

function MediaSlide() {
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
  return (
    <Box>
      <StyledSlider {...settings}>
        <div className="mediaImgBox">
          <BoxImg src="/img/Choice/mediaChoice1.jpg" alt="" />
        </div>
        <div className="mediaImgBox">
          <BoxImg src="/img/Choice/mediaChoice2.jpg" alt="" />
        </div>
      </StyledSlider>
    </Box>
  );
}

function ReaderSlide() {
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
          top: '10px',
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
  return (
    <StyledSlider {...settings}>
      <div className="readerImgBox">
        <BoxImg src="/img/Choice/readerChoice1.jpg" alt="" />
      </div>
      <div className="readerImgBox">
        <BoxImg src="/img/Choice/readerChoice2.jpg" alt="" />
      </div>
    </StyledSlider>
  );
}
