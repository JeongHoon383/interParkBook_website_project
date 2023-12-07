import { useEffect, useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaCircleDot } from "react-icons/fa6";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BookList = styled.article`
  width: 100%;
  .titleContainer {
    margin-bottom: 8px;
    svg {
      display: inline;
      font-size: 15px;
      color: var(--main);
      margin-right: 5px;
    }
    h3 {
      display: inline;
      font-size: 15px;
      font-weight: bold;
      margin-right: 5px;
    }
    .orderQty {
      padding: 0 5px;
      font-size: 14px;
      em {
        font-weight: bold;
      }
    }
    .titleText {
      color: #aaa;
      em {
        font-weight: bold;
        color: var(--main);
      }
    }
  }
  .bookListNav {
    display: flex;
    li {
      width: 15%;
      line-height: 28px;
      margin-bottom: -2px;
      font-weight: bold;
      text-align: center;
      border-radius: 2px;
      border: 1px solid #d8d8d8;
      border-bottom: 2px solid var(--main);
      background: #f8f8f8;
      &.active{
        border: 2px solid var(--main);
        border-bottom: 2px solid #FFF;
        background: #FFF;
      }
    }
  }
  .slideWrapper {
    width: 100%;
    padding-top: 20px;
    border-top: 2px solid var(--main);
    .slick-slider {
      width: 90%;
      margin: 0 auto;
      .slick-arrow {
        width: 30px;
        height: 30px;
        color: var(--main);
      }
      .slick-list {
        width: 100%;
        .slick-track {
          .slick-slide {
            div {
              width: 80%;
              margin: 0 auto;
              a {
                figure {
                  img {
                    width: 100%;
                    margin-bottom: 10px;
                  }
                  figcaption {
                    text-align: center;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    word-wrap: break-word;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .slideBottom{
    position: relative;
    margin-top: 10px;
    text-align: center;
    .fractionPagination{
      position: relative;
      line-height: 20px;
    }
    .firstIdxBtn,
    .bookCartLink{
      display: inline-block;
      line-height: 20px;
      padding: 0 5px;
      text-align: center;
      border-radius: 3px;
      border: 1px solid #d8d8d8;
      background: #f8f8f8;
    }
    .firstIdxBtn{
      position: absolute;
      right: 0;
      transform: translateX(calc(100% + 5px));
    }
    .bookCartLink{
      position: absolute;
      right: 0;
    }
  }
`;

export default function Mypage_BookList() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    draggable: false,
    prevArrow: <MdArrowBackIos viewBox="-6 0 24 24"/>,
    nextArrow: <MdArrowForwardIos />,
  };

  return (
    <BookList>
      <div className="titleContainer">
        <FaCircleDot />
        <h3>나의 책꽂이</h3>
        <span className="titleText">
          읽고 있는 책과 읽고 싶은 책들을 한눈에 확인하세요.
        </span>
      </div>
      <ul className="bookListNav">
        <li>주문완료 (0)</li>
        <li className="active">북카트 (5)</li>
      </ul>
      <div className="slideWrapper">
        <Slider {...settings} ref={sliderRef}>
          <Link>
            <figure>
              <img
                src="https://image.aladin.co.kr/product/32940/45/cover150/k692936045_1.jpg"
                alt="recentViewBookCover"
              />
              <figcaption>
                <p className="bookTitle">
                  함께 웃고, 배우고, 사랑하고 - 네 자매의 스페인 여행
                </p>
              </figcaption>
            </figure>
          </Link>
          <Link>
            <figure>
              <img
                src="https://image.aladin.co.kr/product/32940/45/cover150/k692936045_1.jpg"
                alt="recentViewBookCover"
              />
              <figcaption>
                <p className="bookTitle">
                  함께 웃고, 배우고, 사랑하고 - 네 자매의 스페인 여행
                </p>
              </figcaption>
            </figure>
          </Link>
          <Link>
            <figure>
              <img
                src="https://image.aladin.co.kr/product/32940/45/cover150/k692936045_1.jpg"
                alt="recentViewBookCover"
              />
              <figcaption>
                <p className="bookTitle">
                  함께 웃고, 배우고, 사랑하고 - 네 자매의 스페인 여행
                </p>
              </figcaption>
            </figure>
          </Link>
          <Link>
            <figure>
              <img
                src="https://image.aladin.co.kr/product/32940/45/cover150/k692936045_1.jpg"
                alt="recentViewBookCover"
              />
              <figcaption>
                <p className="bookTitle">
                  함께 웃고, 배우고, 사랑하고 - 네 자매의 스페인 여행
                </p>
              </figcaption>
            </figure>
          </Link>
          <Link>
            <figure>
              <img
                src="https://image.aladin.co.kr/product/32940/45/cover150/k692936045_1.jpg"
                alt="recentViewBookCover"
              />
              <figcaption>
                <p className="bookTitle">
                  함께 웃고, 배우고, 사랑하고 - 네 자매의 스페인 여행
                </p>
              </figcaption>
            </figure>
          </Link>
          <Link>
            <figure>
              <img
                src="https://image.aladin.co.kr/product/32940/45/cover150/k692936045_1.jpg"
                alt="recentViewBookCover"
              />
              <figcaption>
                <p className="bookTitle">
                  함께 웃고, 배우고, 사랑하고 - 네 자매의 스페인 여행
                </p>
              </figcaption>
            </figure>
          </Link>
          <Link>
            <figure>
              <img
                src="https://image.aladin.co.kr/product/32940/45/cover150/k692936045_1.jpg"
                alt="recentViewBookCover"
              />
              <figcaption>
                <p className="bookTitle">
                  함께 웃고, 배우고, 사랑하고 - 세 자매의 스페인 여행
                </p>
              </figcaption>
            </figure>
          </Link>
        </Slider>
      </div>
      <div className="slideBottom">
        <span className="fractionPagination">
          <span>1 / 2</span>
          <button className="firstIdxBtn" onClick={() => sliderRef.current?.slickGoTo(1)}>처음으로</button>
        </span>
        <Link className="bookCartLink">북카트 페이지 이동</Link>
      </div>
    </BookList>
  );
}
