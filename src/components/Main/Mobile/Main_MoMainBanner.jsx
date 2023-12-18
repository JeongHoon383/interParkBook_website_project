import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const StyledSlider = styled(Slider)`
  margin: 0 auto;
  .slick-prev,
  .slick-next {
    &::before {
      content: none;
    }
  }
  .slick-dots {
    width: 0;
    position: absolute;
    top: 3%;
    left: 89%;
    font-size: 0.4em;
    font-family: 'YES24GothicB';
    color: #dddddd;
    opacity: 0.4;

    li {
      display: none;
    }
    .slick-active {
      display: block;
    }
    .customPaging {
      display: flex;
      width: 100px;
      gap: 5px;
    }
  }
`;

const Img = styled.img`
  width: 100%;
`;
export default function Main_MoMainBanner() {
  const settings = {
    className: 'slideItems',
    arrows: false,
    dots: true,
    lazyLoad: 'anticipated',
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    customPaging: (i) => {
      return (
        <span className="customPaging">
          <span>{(i + 1).toString()}</span>/<span>10</span>
        </span>
      );
    },
  };
  return (
    <div>
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
      </StyledSlider>
    </div>
  );
}
