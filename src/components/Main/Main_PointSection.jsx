import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import axios from 'axios';
import { MdQueueMusic } from 'react-icons/md';
import { RiDvdFill } from 'react-icons/ri';

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

const PointSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 66px 0;
  .blogBestHeader {
    h3 {
      font-family: 'YES24GothicB';
      font-size: 1.2em;
      margin-bottom: 6px;
      padding-bottom: 12px;
      border-bottom: 1px solid #c9c9c9;
    }
    span {
      &:first-child {
        color: #e66a57;
      }
      &:last-of-type {
        color: var(--default);
      }
    }
    a {
      margin-left: 12px;
      font-size: 0.5em;
      color: var(--default);
      &:hover {
        text-decoration: underline;
      }
      &::after {
        content: '▶';
        margin-left: 3px;
        font-size: 0.3rem;
      }
    }
  }
`;

const BlogBestSlider = styled.div`
  .blogBestImgBox {
    width: 85px;
    height: 120px;
    display: inline-block;
    overflow: hidden;
    margin-bottom: 22px;
    border: 1px solid #c9c9c9;
  }
  .blogBestText {
    margin-left: 8px;
    margin-top: 10px;
    word-spacing: -1px;
    display: inline-block;
    vertical-align: top;
  }

  .starRateWrap {
    width: 85px;
    height: 15px;
    position: relative;
    display: inline-block;
    background: url('/img/img_star.png') repeat-x;
    .starRate {
      position: absolute;
      top: 0;
      left: 0;
      height: 15px;
      background: url('/img/img_star.png') repeat-x 0 -15px;
    }
    .customerReviewRank {
      position: absolute;
      margin-left: 5px;
      left: 100%;
      font-family: 'YES24GothicB';
      color: #e66a57;
    }
  }
  .blogBestTitle,
  .priceStandard,
  .priceSales {
    font-family: 'YES24GothicB';
  }

  .blogBestTitle {
    margin: 8px 0;
    font-size: 0.8em;
    color: var(--default);
  }

  .priceStandard {
    font-size: 0.7em;
    text-decoration: line-through;
    color: #c9c9c9;
  }

  .priceSales {
    font-size: 0.7em;
    color: var(--default);
  }
`;

const MusicTabs = styled.div`
  .musicTabWrap {
    display: flex;
    align-items: center;
    font-family: 'YES24GothicB';
    color: var(--hover);
    font-size: 0.9em;
    letter-spacing: -1px;
    background-color: #f8f8f8;
    .catTabLi {
      width: 120px;
      padding-top: 4px;
      padding-bottom: 9px;
      border-right: 1px solid #d8d8d8;
      cursor: pointer;
      text-align: center;
    }
    .clicked {
      background-color: #fff;
      border-bottom: none;
      color: #e66a57;
    }
    .tabIcon {
      font-size: 1.4em;
      svg {
        margin: 0 auto;
      }
    }
  }
`;

const MediaBox = styled.div`
  box-sizing: border-box;
  width: 85px;
  height: 85px;
  margin: 30px auto 15px auto;
  img {
    width: 100%;
    height: 100%;
  }
`;

const MediaTitle = styled.p`
  font-family: 'YES24GothicB';
  font-size: 0.7em;
  width: 100px;
  height: 80px;
  text-align: center;
  margin: 0 auto;
  color: var(--default);
`;

const MediaPrice = styled.p`
  font-size: 0.7em;
  font-weight: bold;
  text-align: center;
  color: var(--default);
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
  .slick-slide img {
    width: 100%;
  }

  .slick-prev,
  .slick-next {
    &::before {
      content: none;
    }
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
    <PointSection>
      <div className="blogBestItem" style={{ width: '40%' }}>
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
      <div className="musicItem" style={{ border: '1px solid #c9c9c9', width: '55%' }}>
        <div className="musicItemHeader">
          <MusicTabs>
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
          </MusicTabs>
        </div>
        <div className="musicContents">{slideArr[isTab].content}</div>
      </div>
    </PointSection>
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
    <BlogBestSlider>
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
    </BlogBestSlider>
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
      <StyledSlider {...settings}>
        {dvd.map((v, i) => (
          <>
            <MediaBox key={i}>
              <img src={v.cover} alt="" />
            </MediaBox>
            <MediaTitle>{v.title.split('-')[0]}</MediaTitle>
            <MediaPrice>
              <span style={{ color: '#e66a57' }}>{v.priceSales.toLocaleString()}원</span>
              <span style={{ color: '#666', fontSize: '0.9em', marginLeft: '4px' }}>+{v.mileage}P</span>
            </MediaPrice>
          </>
        ))}
      </StyledSlider>
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
      <StyledSlider {...settings}>
        {music.map((v, i) => (
          <>
            <MediaBox key={i}>
              <img src={v.cover} alt="" />
            </MediaBox>
            <MediaTitle>{v.title.split('-')[0]}</MediaTitle>
            <MediaPrice>
              <span style={{ color: '#e66a57' }}>{v.priceSales.toLocaleString()}원</span>
              <span style={{ color: '#666', fontSize: '0.9em', marginLeft: '4px' }}>+{v.mileage}P</span>
            </MediaPrice>
          </>
        ))}
      </StyledSlider>
    </>
  );
}
