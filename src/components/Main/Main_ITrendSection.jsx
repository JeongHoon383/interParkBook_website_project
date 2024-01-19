import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";
import styled from "styled-components";

const Pre = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 45%;
  left: 2%;
  z-index: 3;
`;

const NextTo = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 45%;
  right: 2%;
  z-index: 3;
`;

const Img = styled.img`
  width: 100%;
`;

const TrendSection = styled.div`
  margin: 60px 0;
  display: flex;
  justify-content: space-between;
  .newHeader h3,
  .bestsellerHeader h3 {
    font-size: 1.2em;
    font-weight: bold;
  }
  .newHeader {
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    position: relative;
    h3 {
      display: flex;
      flex-basis: 100%;
      align-items: center;
      color: var(--default);
      margin: 8px 0;
      &::before {
        content: "";
        flex-grow: 1;
        margin: 0 16px;
        background: var(--default);
        height: 1px;
        font-size: 0;
        line-height: 0;
      }
      &::after {
        content: "";
        flex-grow: 1;
        margin: 0 16px;
        background: var(--default);
        height: 1px;
        font-size: 0;
        line-height: 0;
      }
    }
    a {
      font-size: 0.6em;
      font-weight: bold;
      color: var(--default);
      position: absolute;
      top: 0;
      right: 14px;
      &::after {
        content: "▶";
        margin-left: 3px;
        font-size: 0.4rem;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const ColorSpan = styled.span`
  color: #e66a57;
`;
const DefaultSpan = styled.span`
  color: var(--default);
`;

const NewSlider = styled.div`
  margin: 20px auto;
  padding-bottom: 30px;
  border-bottom: 1px solid #e4e4e4;

  .slideDiv {
    .imgBox {
      box-sizing: border-box;
      width: 98px;
      height: 140px;
      margin: 0 auto;
      margin-bottom: 30px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .textBox {
      width: 180px;
      margin: 0 auto;
      text-align: center;
      .newTitle,
      .newAuthor {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: bold;
      }
      .newTitle {
        font-size: 0.9em;
        color: var(--hover);
        margin-bottom: 10px;
      }
      .newAuthor {
        font-size: 0.7em;
        color: var(--default);
      }
    }
  }
`;

const BestSellerDiv = styled.div`
  width: 20%;
  .bestsellerHeader {
    margin-bottom: 8px;
  }
  .bestsellerList {
    ol {
      margin-top: 8px;
    }
    li {
      display: flex;
      align-items: center;
    }
    span {
      margin: 4px;
    }
    .rankImg {
      display: block;
      overflow: hidden;
      width: 38px;
      height: 38px;
      img {
        width: 100%;
      }
    }
    .rankTab {
      font-size: 0.7em;
      color: var(--default);
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .current {
      color: #e66a57;
      font-weight: bold;
    }
    .division {
      margin: 0 5px;
      color: var(--default);
      font-size: 0.7em;
    }
    .rankNum {
      display: block;
      width: 15px;
      height: 15px;
      text-align: center;
      line-height: 15px;
      font-size: 0.7em;
      font-weight: bold;
      color: #fff;
      background-color: cornflowerblue;
    }
    .rankTitle {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: bold;
      font-size: 0.7em;
      display: block;
      width: 156px;
    }
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

export default function Main_ITrendSection() {
  const [itemNewAll, setItemNewAll] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  const [rank, setRank] = useState(0);

  useEffect(() => {
    axios
      .get("http://192.168.50.16:9090/new/")
      .then((result) => setItemNewAll(result.data))
      .catch((err) => console.error(err));

    axios
      .get("http://192.168.50.16:9090/best/")
      .then((result) => setBestSeller(result.data))
      .catch((err) => console.error(err));
  }, []);

  const rankSpan = [{ name: "1~5위" }, { name: "6~10위" }];

  const handleClick = (e) => {
    setRank(e);
  };

  const settings = {
    className: "slideDiv",
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
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
    <TrendSection>
      <div className="interparkNew" style={{ width: "77%" }}>
        <div className="newHeader">
          <h3>
            <ColorSpan>신간</ColorSpan> <DefaultSpan>리스트</DefaultSpan>
          </h3>
          <a href="#">더보기</a>
        </div>
        <NewSlider>
          <StyledSlider {...settings}>
            {itemNewAll.map((v, i) => (
              <div className="slideDiv" key={i}>
                <div className="imgBox">
                  <Link to={`/book/${v.isbn13}`}>
                    <img src={v.cover} alt="" />
                  </Link>
                </div>
                <div className="textBox">
                  <p className="newTitle">{v.title}</p>
                  <p className="newAuthor">{v.author}</p>
                </div>
              </div>
            ))}
          </StyledSlider>
        </NewSlider>
      </div>
      <BestSellerDiv>
        <div className="bestsellerHeader">
          <h3>
            <DefaultSpan>주간 베스트셀러</DefaultSpan>{" "}
            <ColorSpan>TOP10</ColorSpan>
          </h3>
        </div>
        <div className="bestsellerList">
          <em className="division">|</em>
          {rankSpan.map((el, index) => (
            <>
              <span
                className={index === rank ? `rankTab current` : `rankTab`}
                onClick={() => handleClick(index)}
              >
                {el.name}
              </span>
              <em className="division">|</em>
            </>
          ))}

          <BestSeller rank={rank} bestSeller={bestSeller} />
        </div>
      </BestSellerDiv>
    </TrendSection>
  );
}

function BestSeller({ rank, bestSeller }) {
  return (
    <>
      {
        [
          <ol>
            {bestSeller
              .filter((v, i) => i <= 4)
              .map((v, i) => (
                <li key={i}>
                  <span className="rankNum">{i + 1}</span>
                  <span className="rankImg">
                    <Link to={`/book/${v.isbn13}`}>
                      <img src={v.cover} alt="" />
                    </Link>
                  </span>
                  <span className="rankTitle">{v.title}</span>
                </li>
              ))}
          </ol>,
          <ol>
            {bestSeller
              .filter((v, i) => i <= 10 && i >= 6)
              .map((v, i) => (
                <li key={i}>
                  <span className="rankNum">{i + 6}</span>
                  <span className="rankImg">
                    <Link to={`/book/${v.isbn13}`}>
                      <img src={v.cover} alt="" />
                    </Link>
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
