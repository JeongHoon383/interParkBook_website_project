import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import axios from 'axios';
import '../../css/main/pointSection.css';

const Pre = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;

  z-index: 3;
`;

const NextTo = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;

  z-index: 3;
`;

const Img = styled.img`
  width: 100%;
  vertical-align: bottom;
`;

export default function Main_PointSection() {
  const [isTab, setIsTab] = useState(0);

  const slideArr = [
    { name: '특가할인', content: <SaleSlide /> },
    { name: '정가인하', content: <SaleSlide /> },
  ];

  const handleClick = (index) => {
    setIsTab(index);
  };

  return (
    <div className="pointSection" style={{ marginBottom: '200px' }}>
      <div className="blogBest">
        <div className="blogBestHeader">
          <h3>
            <span>주목!</span>
            <span>이달의 책</span>
          </h3>
        </div>
        <div className="blogBestBox"></div>
      </div>
      <div className="saleItem">
        <div className="saleItemHeader">
          <div className="saleTabs">
            <ul className="saleTabWrap">
              {slideArr.map((v, i) => (
                <li
                  key={i}
                  className={i === isTab ? 'catTabLi clicked' : 'catTabLi'}
                  onClick={() => {
                    handleClick(i);
                  }}
                >
                  {v.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="saleContents">{slideArr[isTab].content}</div>
        </div>
      </div>
    </div>
  );
}

function SaleSlide() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    speed: 1000,
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
    <>
      <Slider {...settings}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Slider>
    </>
  );
}
