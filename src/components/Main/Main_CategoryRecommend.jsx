import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import '../../css/main/categoryRecommend.css';
import axios from 'axios';

const Pre = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 3;
`;

const NextTo = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 3;
`;

const Img = styled.img`
  width: 100%;
  vertical-align: bottom;
`;

export default function Main_CategoryRecommend() {
  const [isHover, setIsHover] = useState(0);
  const [dataList1, setDataList1] = useState([]);
  const [dataList2, setDataList2] = useState([]);
  const [dataList3, setDataList3] = useState([]);
  const [dataList4, setDataList4] = useState([]);
  const [dataList5, setDataList5] = useState([]);
  const [dataList6, setDataList6] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: '/data/editorRecommend.json',
    }).then((result) => {
      setDataList1(result.data[0]);
      setDataList2(result.data[1]);
      setDataList3(result.data[2]);
      setDataList4(result.data[3]);
      setDataList5(result.data[4]);
      setDataList6(result.data[5]);
    });
  });

  const slideArr = [
    { name: '건강/요리', content: <Slide dataList={dataList1} /> },
    { name: '맛집여행', content: <Slide dataList={dataList2} /> },
    { name: '소설', content: <Slide dataList={dataList3} /> },
    { name: '경제', content: <Slide dataList={dataList4} /> },
    { name: '유아/아동', content: <Slide dataList={dataList5} /> },
    { name: '외국도서', content: <Slide dataList={dataList6} /> },
  ];

  const handleHover = (index) => {
    setIsHover(index);
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
                }}
              >
                {v.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="categoryContents">{slideArr[isHover].content}</div>
      </div>
    </div>
  );
}

function Slide({ dataList }) {
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
    <>
      {dataList.map((v, i) => (
        <div className={`category_ ${v.searchCategoryId}`} key={i}>
          <Slider {...settings}>
            {v.item.map((ic, i) => (
              <>
                <div className="categoryImgBox" key={i}>
                  <img src={ic.cover} alt="" />
                </div>
                <p className="categoryTitle">{ic.title.split('-')[0]}</p>
                <p className="categoryPrice" style={{ color: '#e66a57' }}>
                  {ic.priceSales.toLocaleString()}원
                </p>
              </>
            ))}
          </Slider>
        </div>
      ))}
    </>
  );
}
