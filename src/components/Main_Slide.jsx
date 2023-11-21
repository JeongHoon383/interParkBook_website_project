import React from 'react';
import Slider from 'react-slick';
import '../css/slick.css';
import '../css/slick-theme.css';
import '../css/main/banner/mainSlide.css';
// import Q from '../../public/img/MainBanner'

export default function Slide() {
  const settings = {
    dots: true,
    lazyLoad: 'anticipated',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="imgBox">
        <img src="/img/MainBanner/mainBannerAd1.png" alt="" />
      </div>
      <div className="imgBox">
        <img src="/img/MainBanner/mainBannerAd2.png" alt="" />
      </div>
      <div className="imgBox">
        <img src="/img/MainBanner/mainBannerAd3.png" alt="" />
      </div>
      <div className="imgBox">
        <img src="/img/MainBanner/mainBannerAd4.png" alt="" />
      </div>
      <div className="imgBox">
        <img src="/img/MainBanner/mainBannerAd5.png" alt="" />
      </div>
    </Slider>
  );
}
