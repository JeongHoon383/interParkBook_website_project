import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import axios from 'axios';
import '../../css/main/pointSection.css';

const Pre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: -9%;
  left: 86%;
  z-index: 3;
`;

const NextTo = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: -9%;
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

  const slideArr = [
    { name: '특가할인', content: <SaleSlide01 /> },
    { name: '정가인하', content: <SaleSlide02 /> },
  ];

  useEffect(() => {
    axios({
      method: 'get',
      url: '/data/blogBest.json',
    })
      .then((result) => setBlogBest([result.data]))
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
      <div className="saleItem" style={{ border: '1px solid tomato' }}>
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
      {blogBest.map((v, i) => (
        <StyledSlider {...settings}>
          {v.item.map((ic, i) => (
            <div className="slideItem">
              <div className="blogBestImgBox">
                <img src={ic.cover} alt="" />
              </div>
              <div className="blogBestText">
                <div className="rateWrap">
                  <div className="starRateWrap">
                    <div
                      className="starRate"
                      style={{ width: ic.customerReviewRank === 10 ? '100%' : ic.customerReviewRank === 7 ? '60%' : 0 }}
                    ></div>
                    <span className="customerReviewRank">{ic.customerReviewRank}</span>
                  </div>
                </div>
                <p className="blogBestTitle">{ic.title.split('-')[0]}</p>
                <span className="priceStandard" style={{ marginRight: '5px' }}>
                  {ic.priceStandard.toLocaleString()}원
                </span>
                <span className="priceSales">{ic.priceSales.toLocaleString()}원</span>
              </div>
            </div>
          ))}
        </StyledSlider>
      ))}
    </>
  );
}

function SaleSlide01() {
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
      <StyledSlider {...settings}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </StyledSlider>
    </>
  );
}
function SaleSlide02() {
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
