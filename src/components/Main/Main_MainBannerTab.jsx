import React, { useState } from 'react';
import Slider from 'react-slick';
import Main_MainBannerIssue from './Main_MainBannerIssue';
import styled from 'styled-components';

const Pre = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  left: 0.2%;
  z-index: 3;
`;

const NextTo = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  right: 0.2%;
  z-index: 3;
`;

const Img = styled.img`
  width: 100%;
`;

const Tab = styled.div`
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  font-size: 0.8em;
  font-weight: 800;
  color: var(--hover);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: rgb(248, 248, 248);

  .activeHover {
    background-color: var(--main);
    padding: 12px 18px;
    border-radius: 18px;
    color: #fff;
  }
`;

const SlideWrapper = styled.div`
  margin: 0 auto;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  margin: 0 auto;
  background-color: rgb(248, 248, 248);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  .slick-prev,
  .slick-next {
    &::before {
      content: none;
    }
  }
`;

export default function Main_MainBannerTab() {
  const [tab, setTab] = useState(0);
  const [active, setActive] = useState(0);

  const handleMouseOver = (e) => {
    setTab(e);
    setActive(e);
  };

  return (
    <>
      <Slide tab={tab} />
      <Tab>
        <div onMouseOver={() => handleMouseOver(0)} className={active === 0 ? `activeHover` : null}>
          핫클릭 이벤트
        </div>
        <div onMouseOver={() => handleMouseOver(1)} className={active === 1 ? `activeHover` : null}>
          추천 이벤트
        </div>
        <div onMouseOver={() => handleMouseOver(2)} className={active === 2 ? `activeHover` : null}>
          화제의 책
        </div>
      </Tab>
    </>
  );
}

function Slide({ tab }) {
  const settings = {
    className: 'slideItems',
    arrows: true,
    dots: false,
    lazyLoad: 'anticipated',
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 1000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
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
    <SlideWrapper>
      {
        [
          <StyledSlider {...settings}>
            <div className="slideItem">
              <Img src="/img/MainBanner/mainBannerAd1.png" alt="" />
            </div>
            <div className="slideItem">
              <Img src="/img/MainBanner/mainBannerAd2.png" alt="" />
            </div>
            <div className="slideItem">
              <Img src="/img/MainBanner/mainBannerAd3.png" alt="" />
            </div>
            <div className="slideItem">
              <Img src="/img/MainBanner/mainBannerAd4.png" alt="" />
            </div>
            <div className="slideItem">
              <Img src="/img/MainBanner/mainBannerAd5.png" alt="" />
            </div>
          </StyledSlider>,
          <StyledSlider {...settings}>
            <div className="slideItem">
              <Img src="/img/MainBanner/mainBannerAd6.png" alt="" />
            </div>
            <div className="slideItem">
              <Img src="/img/MainBanner/mainBannerAd7.png" alt="" />
            </div>
            <div className="slideItem">
              <Img src="/img/MainBanner/mainBannerAd8.png" alt="" />
            </div>
            <div className="slideItem">
              <Img src="/img/MainBanner/mainBannerAd9.png" alt="" />
            </div>
            <div className="slideItem">
              <Img src="/img/MainBanner/mainBannerAd10.png" alt="" />
            </div>
          </StyledSlider>,
          <Main_MainBannerIssue />,
        ][tab]
      }
    </SlideWrapper>
  );
}
