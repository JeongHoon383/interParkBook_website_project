import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Category_slide from '../Category_slide';
import axios from 'axios';

const CategoryMain_banner = () => {

  /** useRef */
  const slideRef = useRef(null);

  /** useState */
  const [active, setActive] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const mouseHover = (id) => {
    setActive(id);
    setIsHover(true);

    slideRef.current.slickGoTo(id, true);
  };

  const mouseLeave = () => {
    setIsHover(false);
  };

  const afterChange = (id) => {
    console.log('id:', id);
    if (isHover === false) {
      setActive(id);
    }
  };

  const banner_category_list = [
    '쇼펜하우어',
    '목표달성',
    '머핀북',
    '파견자들',
    '김영사',
    '주목 이 책!',
  ].map((category, id) => ({ id, category }));

  return (
    <TopBanner>
      <div className='banner'>
        <div className='banner_main'>
          <Category_slide slideRef={slideRef} afterChange={afterChange} />
        </div>
        <ul className='banner_category'>
          {banner_category_list.map(({ id, category }) => (
            <li
              className={`${active === id && 'active'}`}
              key={id}
              onMouseOver={() => mouseHover(id)}
              onMouseLeave={mouseLeave}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className='banner_ad'>
        <img
          className='banner_ad_img'
          src='/img/CategoryMain/topbanner_img/2578206_231016114437_banner-ad.jpeg'
          alt=''
        />
      </div>
    </TopBanner>
  );
};

const TopBanner = styled.div`
  display: flex;
  justify-content: center;
  height: 326px;

  .banner {
    display: flex;
    flex-direction: column;
    width: 580px;
    border: 0.3px solid grey;
    border-right: none;
  }

  .banner_ad {
    width: 190px;
    border: 0.3px solid grey;
  }

  .banner_main {
    flex: 1;
    position: relative;
  }

  .banner_category {
    position: absolute;
    top: 13.5%;
    margin-bottom: 20px;
    display: flex;
    font-size: 11px;
    height: 26px;
    line-height: 26px;
    text-align: center;
  }

  .banner_category li {
    width: 86px;
    margin-right: 1px;
    font-size: 12px;
    color: white;
    background-color: rgb(149, 149, 149);
    border: none;
    cursor: pointer;
  }

  .banner_category li:hover {
    background-color: var(—main);
  }

  .banner_category li:first-child {
    margin-left: 27px;
  }

  .banner_ad_img {
    height: 322px;
  }

  .banner_category .active {
    background-color: var(--main);
  }
`;

export default CategoryMain_banner;