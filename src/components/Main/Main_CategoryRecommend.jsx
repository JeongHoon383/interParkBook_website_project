import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import '../../css/main/categoryRecommend.css';
import axios from 'axios';

const Pre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 3;
`;

const NextTo = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  right: 0;
  z-index: 3;
`;

const Img = styled.img`
  width: 100%;
  vertical-align: bottom;
`;

export default function Main_CategoryRecommend() {
  const [isHover, setIsHover] = useState(0);
  const [dataList, setDataList] = useState([]);

  function content(searchCategoryId) {
    axios({
      method: 'get',
      url: `http://localhost:9090/field/${searchCategoryId}`,
    }).then((result) => {
      setDataList(result.data);
    });
  }

  useEffect(() => {
    content(53471);
  }, []);

  const slideArr = [
    { name: '건강/요리', cid: '53471' },
    { name: '맛집여행', cid: '50875' },
    { name: '소설', cid: '50993' },
    { name: '경제', cid: '3057' },
    { name: '유아/아동', cid: '35091' },
  ];

  const handleHover = (index) => {
    setIsHover(index);
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 4000,
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
    <div className="categoryRecommend">
      <div className="categoryRecommendHeader">
        <h3>
          <span>분야별</span>
          <span>추천</span>
        </h3>
      </div>
      <div className="categoryRecommendBox">
        <div className="categoryTabs">
          <ul className="tabWrap">
            {slideArr.map((v, i) => (
              <li
                key={i}
                className={i === isHover ? 'tabLi focused' : 'tabLi'}
                onMouseOver={() => {
                  handleHover(i);
                  content(v.cid);
                }}
              >
                {v.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="categoryContents">
          <Slider {...settings}>
            {dataList.map((v, i) => (
              <div className={`category_ ${v.searchCategoryId}`} key={i}>
                <div className="categoryImgBox" key={i}>
                  <img src={v.cover} alt="" />
                </div>
                <p className="categoryTitle">{v.title.split('-')[0]}</p>
                <p className="categoryPrice" style={{ color: '#e66a57' }}>
                  {v.priceSales.toLocaleString()}원
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
