import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import axios from 'axios';
import { MdQueueMusic } from 'react-icons/md';
import { RiDvdFill } from 'react-icons/ri';
import '../../css/main/pointSection.css';

const BPre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: -9%;
  left: 86%;
  z-index: 3;
`;

const BNextTo = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: -9%;
  right: 1%;
  z-index: 3;
`;

const MPre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 1%;
  z-index: 3;
`;

const MNextTo = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 1%;
  z-index: 3;
`;

const Img = styled.img`
  width: 100%;
`;

const StyledSlider = styled(Slider)`
  .slick-dots {
    font-family: 'YES24GothicM';
    position: absolute;
    top: -11.3%;
    left: 79%;
    font-size: 0.9em;
    color: var(--default);
  }

  .slick-dots li {
    display: none;
  }

  .slick-dots .slick-active {
    display: block;
  }

  .slick-dots .customPaging {
    display: flex;
    width: 100px;
  }

  .slick-dots .currentPage {
    color: #e66a57;
  }
`;

export default function Main_PointSection() {
  const [isTab, setIsTab] = useState(0);
  const [blogBest, setBlogBest] = useState([]);
  const [music, setMusic] = useState([]);
  const [dvd, setDvd] = useState([]);

  const slideArr = [
    { icon: <MdQueueMusic />, name: '화제의 음반', content: <MusicSlide music={music} /> },
    { icon: <RiDvdFill />, name: '화제의 DVD', content: <DVDSlide dvd={dvd} /> },
  ];

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:9090/blogbest',
    })
      .then((result) => setBlogBest(result.data))
      .catch((err) => console.error(err));

    axios({
      method: 'get',
      url: 'http://localhost:9090/music',
    })
      .then((result) => setMusic(result.data))
      .catch((err) => console.error(err));

    axios({
      method: 'get',
      url: 'http://localhost:9090/dvd',
    })
      .then((result) => setDvd(result.data))
      .catch((err) => console.error(err));
  }, []);

  const handleClick = (index) => {
    setIsTab(index);
  };

  return (
    <div className="pointSection">
      <div className="blogBest">
        <div className="blogBestHeader">
          <h3>
            <span>주목!</span> <span>이달의 책</span>
            <a href="" className="moreBtn">
              더보기
            </a>
          </h3>
        </div>
        <div className="blogBestBox">
          <BlogBestSlide blogBest={blogBest} />
        </div>
      </div>
      <div className="musicItem" style={{ border: '1px solid #c9c9c9' }}>
        <div className="musicItemHeader">
          <div className="musicTabs">
            <ul className="musicTabWrap">
              {slideArr.map((v, i) => (
                <li
                  key={i}
                  className={i === isTab ? 'catTabLi clicked' : 'catTabLi'}
                  onClick={() => {
                    handleClick(i);
                  }}
                >
                  <span className="tabIcon">{v.icon}</span>
                  {v.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="musicContents">{slideArr[isTab].content}</div>
      </div>
    </div>
  );
}

function BlogBestSlide({ blogBest }) {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 1,
    centerMode: false,
    autoplay: false,
    centerPadding: 0,
    speed: 1000,
    draggable: false,
    customPaging: (i) => {
      return (
        <span className="customPaging">
          <span className="currentPage">{(i + 1).toString()}</span>/<span className="totalPage">4</span>
        </span>
      );
    },
    nextArrow: (
      <BNextTo>
        <Img src="/img/Slide/right-arrow.svg" />
      </BNextTo>
    ),
    prevArrow: (
      <BPre>
        <Img src="/img/Slide/left-arrow.svg" />
      </BPre>
    ),
  };
  return (
    <>
      <StyledSlider {...settings}>
        {blogBest.map((v, i) => (
          <div className="slideItem" key={i}>
            <div className="blogBestImgBox">
              <img src={v.cover} alt="" />
            </div>
            <div className="blogBestText">
              <div className="rateWrap">
                <div className="starRateWrap">
                  <div
                    className="starRate"
                    style={{ width: v.customerReviewRank === 10 ? '100%' : v.customerReviewRank === 9 ? '90%' : 0 }}
                  ></div>
                  <span className="customerReviewRank">{v.customerReviewRank}</span>
                </div>
              </div>
              <p className="blogBestTitle">{v.title.split('-')[0]}</p>
              <span className="priceStandard" style={{ marginRight: '5px' }}>
                {v.priceStandard.toLocaleString()}원
              </span>
              <span className="priceSales">{v.priceSales.toLocaleString()}원</span>
            </div>
          </div>
        ))}
      </StyledSlider>
    </>
  );
}

function DVDSlide({ dvd }) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    speed: 1000,
    draggable: false,
    nextArrow: (
      <MNextTo>
        <Img src="/img/Slide/right-arrow.svg" />
      </MNextTo>
    ),
    prevArrow: (
      <MPre>
        <Img src="/img/Slide/left-arrow.svg" />
      </MPre>
    ),
  };
  return (
    <>
      <Slider {...settings}>
        {dvd.map((v, i) => (
          <>
            <div className="dvdImgBox" key={i}>
              <img src={v.cover} alt="" />
            </div>
            <p className="dvdTitle">{v.title.split('-')[0]}</p>
            <p className="dvdPrice" style={{ color: '#e66a57' }}>
              <span style={{ color: '#e66a57' }}>{v.priceSales.toLocaleString()}원</span>
              <span style={{ color: '#666', fontSize: '0.9em', marginLeft: '4px' }}>+{v.mileage}P</span>
            </p>
          </>
        ))}
      </Slider>
    </>
  );
}
function MusicSlide({ music }) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    speed: 1000,
    draggable: false,
    nextArrow: (
      <MNextTo>
        <Img src="/img/Slide/right-arrow.svg" />
      </MNextTo>
    ),
    prevArrow: (
      <MPre>
        <Img src="/img/Slide/left-arrow.svg" />
      </MPre>
    ),
  };
  return (
    <>
      <Slider {...settings}>
        {music.map((v, i) => (
          <>
            <div className="musicImgBox" key={i}>
              <img src={v.cover} alt="" />
            </div>
            <p className="musicTitle">{v.title.split('-')[0]}</p>
            <p className="dvdPrice" style={{ color: '#e66a57' }}>
              <span style={{ color: '#e66a57' }}>{v.priceSales.toLocaleString()}원</span>
              <span style={{ color: '#666', fontSize: '0.9em', marginLeft: '4px' }}>+{v.mileage}P</span>
            </p>
          </>
        ))}
      </Slider>
    </>
  );
}
