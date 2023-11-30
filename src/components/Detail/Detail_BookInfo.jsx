import React, { useState } from "react";
import styled from "styled-components";
import { GoSearch } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiSolidCoupon } from "react-icons/bi";
import { CiCircleQuestion } from "react-icons/ci";
import Detail_count from "./Detail_count";
import { CiHeart } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
const InfoContainer = styled.div`
  display: flex;
  margin: 0 auto;
  .cover_section {
    margin-top: 30px;
    flex: 0.25;
    figure {
      width: 200px;
      height: 280px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: -9px 8px 13px 0px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: -9px 8px 13px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: -9px 8px 13px 0px rgba(0, 0, 0, 0.75);

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .info_section {
    flex: 0.75;

    padding: 10px;
    position: relative;
    .info_publisher {
      border-bottom: 1px solid lightgray;
      padding-bottom: 20px;
      span {
        margin-left: 10px;
        font-size: 11px;
      }
      .last_span::after {
        content: "";
      }
      span::after {
        content: " l";
      }
    }
  }
`;
const InfoCaption = styled.div`
  width: 100%;

  .share {
    em {
      color: rgba(0, 0, 0, 0.4);
    }
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;

    svg {
      width: 20px;
      height: 20px;
      color: #65ccec;
      cursor: pointer;
    }
    .facebook_icon {
      svg {
        color: #6680b8;
      }
    }
  }

  &:first-of-type {
    margin-bottom: 50px;
  }
  background: #f9f9f9;
  padding: 10px;
  margin: 5px auto;
  text-align: center;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    flex: 0.5;
    text-align: center;
  }
  &.preview {
    margin: 10px auto;
    width: 208px;
    height: 36px;
    margin-top: 28px;
    margin-bottom: 20px;
    padding: 0;
    color: #666;
    .first {
      border-right: none;
    }
    div {
      border: 1px solid #666;
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
      span {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        font-size: 0.8rem;
        font-weight: bold;
        * {
          margin: 0 2px;
        }
      }
    }
  }
  & .line {
    color: #c6c9cd;
  }
`;
const PriceSection = styled.div`
  height: 90%;
  padding: 10px;
  .delivery {
    margin-top: 20px;
    span {
      margin-left: 5px;
    }
    span::after {
      margin-left: 5px;
      content: "|";
    }
    span.last {
      display: flex;
      align-items: center;
    }
    span.last::after {
      content: "";
    }
  }
  .coupon {
    display: flex;
    align-items: center;
    path {
      color: #ff9c46;
      margin-right: 10px;
    }
    span {
      color: #ff9c46;
      margin-left: 5px;
      margin-right: 7px;
    }
  }
  .point {
    span::after {
      content: " |";
      margin-left: 5px;
    }
    span {
      margin-left: 5px;
    }
    span.last::after {
      content: "";
    }
  }
  strong {
    font-weight: 600;
    padding: 0 10px;
    font-size: 13px;
  }
  em {
    display: block;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    span {
      font-size: 13px;
    }
  }
  .red_box {
    border: 1px solid #ef544d;
    border-top: 5px solid #ef544d;
    padding: 7px 10px;
    width: 180px;
    height: 80px;
    margin-top: 13px;

    .red_sale {
      margin: 7px 0;
      display: flex;
      align-items: center;
      h1 {
        font-weight: bold;
        margin-right: 5px;
        color: #ef544d;
      }
    }
    strong {
      font-size: 15px;
      color: #747474;
      padding: 0;
    }
  }
  .count_area {
    display: flex;
    align-items: center;
  }
`;

const AdBox = styled.div`
  background-color: #ffdf00;
  height: 35px;
  text-align: center;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CartArea = styled.div`
  display: flex;
  padding-left: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  .cart,
  .buy {
    width: 130px;
    height: 40px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: white;
  }
  .cart {
    background-color: #ff9c46;
  }
  .buy {
    background-color: #707070;
  }
  .like {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border: 1px solid #717171;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #717171;
  }
`;

const Detail_BookInfo = ({ data, detailData }) => {
  let days = ["일", "월", "화", "수", "목", "금", "토"];
  const [click, setClick] = useState(false);
  return (
    <>
      <InfoContainer>
        <div className="cover_section">
          <figure>
            <img src={detailData?.thumbnail} alt="" />
          </figure>
          <InfoCaption className="preview">
            <div className="first">
              <Link to={detailData?.url}>
                <span>
                  <GoSearch /> 크게보기
                </span>
              </Link>
            </div>

            <div>
              <Link to={detailData?.url}>
                <span>
                  <IoBookOutline /> 미리보기
                </span>
              </Link>
            </div>
          </InfoCaption>
          <InfoCaption>
            <span style={{ color: "rgba(0,0,0,0.4)" }}>베스트셀러 1위</span>
            <div className="line">l</div>
            <span style={{ color: "rgba(0,0,0,0.4)" }}>독자리뷰 10위</span>
          </InfoCaption>
          <InfoCaption>
            <span style={{ color: "rgba(0,0,0,0.4)" }}>판매지수</span>
          </InfoCaption>
          <InfoCaption>
            <span className="share">
              <em>공유하기</em>
              <em>
                <FaTwitterSquare />
              </em>
              <em className="facebook_icon">
                <FaFacebookSquare />
              </em>
            </span>
          </InfoCaption>
        </div>
        <div className="info_section">
          <div className="info_publisher">
            <span>저 : {detailData?.authors[0]}&nbsp;</span>
            <span>사진 : 류정훈&nbsp;</span>
            <span>출판사 : {detailData?.publisher}&nbsp;</span>
            <span>
              발행 : {detailData?.datetime.split("-")[0]}년{" "}
              {detailData?.datetime.split("-")[1]}월{" "}
              {detailData?.datetime.split("-")[2].slice(0, 2)}일&nbsp;
            </span>
            <span className="last_span">
              ISBN : {detailData?.isbn.split(" ")[1]}&nbsp;
            </span>
          </div>
          <PriceSection>
            <em>
              <strong>정가</strong>
              <span> {detailData?.price.toLocaleString()}원</span>
            </em>
            <em>
              <div className="red_box">
                <strong>새책</strong>
                <em className="red_sale">
                  <h1>{detailData?.sale_price.toLocaleString()}원</h1>
                  <span>(10%할인)</span>
                </em>
                <em>
                  <span>
                    {(detailData?.sale_price * 0.05).toLocaleString()}P (5%적립)
                  </span>
                </em>
              </div>
            </em>
            <em>
              <strong>할인혜택</strong>
              <span>카드할인 / 무이자 할부</span>
              <MdKeyboardArrowRight
                style={{ color: "red", display: "inline-block" }}
              />
              <span>이달의 혜택 도서상품권</span>
              <MdKeyboardArrowRight
                style={{ color: "red", display: "inline-block" }}
              />
            </em>
            <em className="point">
              <strong>적립혜택</strong>
              <span>
                {" "}
                {(detailData?.sale_price * 0.05).toLocaleString()}P
                &nbsp;(5%적립)
              </span>
              <span className="last">
                5만원이상 주문시 2천P+등급별 최대 1.5%적립{" "}
              </span>
              <MdKeyboardArrowRight
                style={{ color: "red", display: "inline-block" }}
              />
            </em>
            {/*	1,100P (5%적립)5만원이상 주문시 2천P+등급별 최대 1.5%적립  */}
            <em className="coupon">
              <strong>추가혜택</strong>
              <BiSolidCoupon />
              <span>6천원 제휴 할인쿠폰</span>
              <BiSolidCoupon />
              <span>skt전용6천원할인쿠폰</span>
              <BiSolidCoupon />
              <span>3천원 중복할인 쿠폰</span>
            </em>

            <AdBox style={{ marginTop: 20 }}>
              인터파크 도서 X 더조은컴퓨터 최대 9천원
            </AdBox>

            <em className="delivery">
              <strong>배송정보</strong>
              <span>예약판매</span>
              <span>
                {new Date().getMonth() + 1}/{new Date().getDate()}(
                {days[new Date().getDay()]}) 이후 발송 예정
              </span>
              <span className="last">
                무료배송{" "}
                <CiCircleQuestion style={{ display: "inline-block" }} />
              </span>
            </em>
            <em className="count_area">
              <strong>주문수량</strong>
              <Detail_count />
            </em>
            <CartArea>
              <div className="cart">북카트담기</div>
              <div className="buy">바로구매</div>
              <div className="like" onClick={() => setClick((prev) => !prev)}>
                <FaHeart
                  strokeWidth="8"
                  pathLength="1"
                  stroke="rgba(0,0,0,1)"
                  fill={click ? "#ff9c46" : "rgba(255,255,255,0)"}
                />
              </div>
            </CartArea>
          </PriceSection>
        </div>
      </InfoContainer>
    </>
  );
};

export default Detail_BookInfo;
