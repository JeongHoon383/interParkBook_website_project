import React from 'react';
import '../../css/main/choiceSection.css';
import Slider from 'react-slick';
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

export default function Main_ChoiceSection() {
  return (
    <div className="choiceSection">
      <div className="publisherChoice">
        <div className="publisherHeader">
          <h3>
            <span>출판사 </span>
            <span>초이스 !</span>
          </h3>
          <div className="publisherBox">
            <img className="publisherImg" src="/img/Choice/publisherChoice.jpeg" alt="" />
          </div>
        </div>
      </div>
      <div className="mediaChoice">
        <div className="mediaHeader">
          <h3>
            <span>미디어 </span>
            <span>추천 !</span>
          </h3>
        </div>
        <MediaSlide />
      </div>
      <div className="readerChoice">
        <div className="readerHeader">
          <h3>
            <span>이 책 </span>
            <span>어때 ?</span>
          </h3>
        </div>
        <div className="readerBox">
          <ReaderSlide />
        </div>
      </div>
    </div>
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
    <div className="mediaBox">
      <Slider {...settings}>
        <div className="mediaImgBox">
          <img className="mediaImg" src="/img/Choice/mediaChoice1.jpg" alt="" />
        </div>
        <div className="mediaImgBox">
          <img className="mediaImg" src="/img/Choice/mediaChoice2.jpg" alt="" />
        </div>
      </Slider>
    </div>
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
    <Slider {...settings}>
      <div className="readerImgBox">
        <img className="readerImg" src="/img/Choice/readerChoice1.jpg" alt="" />
      </div>
      <div className="readerImgBox">
        <img className="readerImg" src="/img/Choice/readerChoice2.jpg" alt="" />
      </div>
    </Slider>
  );
}
