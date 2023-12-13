import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
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

const CategoryP = styled.p`
  font-size: 0.7em;
  font-weight: bold;
  text-align: center;
  color: var(--default);
`;

const CategoryRecommend = styled.div`
  h3 {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: var(--default);
    font-size: 1.2em;
    font-weight: bold;
    margin: 33px 0;
    &::before {
      content: '';
      flex-grow: 1;
      margin: 0 16px;
      background: var(--default);
      height: 1px;
      font-size: 0;
      line-height: 0;
    }
    &::after {
      content: '';
      flex-grow: 1;
      margin: 0 16px;
      background: var(--default);
      height: 1px;
      font-size: 0;
      line-height: 0;
    }
  }

  .tabs {
    padding-bottom: 22px;
    border-bottom: 1px solid #c9c9c9;
  }
  .tabsWrap {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-weight: bold;
    color: var(--hover);
    font-size: 0.9em;
    letter-spacing: -1px;
  }
  .tabLi {
    margin: 0 auto;
    cursor: pointer;
  }

  .focused {
    color: #e66a57;
  }

  .categoryImgBox {
    box-sizing: border-box;
    width: 85px;
    height: 126px;
    margin: 20px auto;
  }
`;

const StyledSlider = styled(Slider)`
  .slick-prev,
  .slick-next {
    &::before {
      content: none;
    }
  }
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
    <CategoryRecommend>
      <div className="categoryRecommendHeader">
        <h3>
          <span style={{ color: 'var(--default)' }}>분야별</span>
          <span style={{ color: '#e66a57' }}>추천</span>
        </h3>
      </div>
      <div className="categoryRecommendBox">
        <div className="tabs">
          <ul className="tabsWrap">
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
          <StyledSlider {...settings}>
            {dataList.map((v, i) => (
              <div className={`category_ ${v.searchCategoryId}`} key={i}>
                <div className="categoryImgBox" key={i}>
                  <Link to={`/book/${v.isbn13}`}>
                    <img src={v.cover} alt="" style={{ width: '100%', height: '100%' }} />
                  </Link>
                </div>
                <CategoryP style={{ width: '100px', height: '40px', margin: '0 auto' }}>
                  {v.title.split('-')[0]}
                </CategoryP>
                <CategoryP style={{ color: '#e66a57' }}>{v.priceSales.toLocaleString()}원</CategoryP>
              </div>
            ))}
          </StyledSlider>
        </div>
      </div>
    </CategoryRecommend>
  );
}
