import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import styled from 'styled-components';
import '../../css/main/trendSection.css';

const Pre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 3%;
  z-index: 3;
`;

const NextTo = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 3%;
  z-index: 3;
`;

const Img = styled.img`
  width: 100%;
`;

export default function Main_ITrendSection() {
  const [itemNewAll, setItemNewAll] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  const [rank, setRank] = useState(0);

  const handleClick = (e) => {
    setRank(e);
  };
  useEffect(() => {
    axios
      .get('/data/itemNewAll.json')
      .then((result) => {
        setItemNewAll(result.data.item);
      })
      .catch();
    axios.get('/data/bestSeller.json').then((result) => setBestSeller(result.data.item));
  }, []);
  const settings = {
    className: 'slideDiv',
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    draggable: false,
    nextArrow: (
      <NextTo>
        <Img src="img/Slide/right-arrow.svg" />
      </NextTo>
    ),
    prevArrow: (
      <Pre>
        <Img src="/img/Slide/left-arrow.svg" />
      </Pre>
    ),
  };
  return (
    <div className="trendSection" style={{ margin: '60px 0' }}>
      <div className="interparkNew">
        <div className="newHeader">
          <h3>
            <span>신간</span> <span>리스트</span>
          </h3>
          <a href="#">더보기</a>
        </div>
        <div className="newSlider">
          <Slider {...settings}>
            {itemNewAll.map((v, i) => (
              <div className="slideDiv" key={i}>
                <div className="imgBox">
                  <img src={v.cover} alt="" />
                </div>
                <div className="textBox">
                  <p className="newTitle">{v.title}</p>
                  <p className="newAuthor">{v.author}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="bestSeller">
        <div className="bestsellerHeader">
          <h3>
            <span>주간 베스트셀러</span> <span>TOP10</span>
          </h3>
        </div>
        <div className="bestsellerList">
          <span className="rankTab first" onClick={() => handleClick(0)}>
            1~5위
          </span>
          <em className="division">|</em>
          <span className="rankTab second" onClick={() => handleClick(1)}>
            6~10위
          </span>
          <BestSeller rank={rank} bestSeller={bestSeller} />
        </div>
      </div>
    </div>
  );
}

function BestSeller({ rank, bestSeller }) {
  return (
    <>
      {
        [
          <ol>
            {bestSeller
              .filter((v) => v.bestRank <= 5)
              .map((v, i) => (
                <li key={i}>
                  <span className="rankNum">{v.bestRank}</span>
                  <span className="rankImg">
                    <img src={v.cover} alt="" />
                  </span>
                  <span className="rankTitle">{v.title}</span>
                </li>
              ))}
          </ol>,
          <ol>
            {bestSeller
              .filter((v) => v.bestRank <= 10 && v.bestRank >= 6)
              .map((v, i) => (
                <li key={i}>
                  <span className="rankNum">{v.bestRank}</span>
                  <span className="rankImg">
                    <img src={v.cover} alt="" />
                  </span>
                  <span className="rankTitle">{v.title}</span>
                </li>
              ))}
          </ol>,
        ][rank]
      }
    </>
  );
}
