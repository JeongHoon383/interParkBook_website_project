import React from "react";
import styled from "styled-components";
import { GoSearch } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiSolidCoupon } from "react-icons/bi";
import { CiCircleQuestion } from "react-icons/ci";
import Detail_count from "./Detail_count";
import { CiHeart } from "react-icons/ci";
const InfoContainer = styled.div`
  display: flex;
  margin: 0 auto;
  .cover_section {
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
    border: 1px solid black;
    padding: 10px;
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
  &:first-of-type {
    margin-bottom: 50px;
  }
  background: #f9f9f9;
  padding: 10px;
  margin: 5px auto;
  text-align: center;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    flex: 0.5;
    text-align: center;
  }
  &.preview {
    margin: 10px auto;
    border: 1px solid #c6c9cd;
    background: #fafafa;
  }
  & .line {
    color: #c6c9cd;
  }
`;
const PriceSection = styled.div`
  border: 1px solid black;
  height: 90%;
  padding: 10px;
  .delivery {
    margin-top: 10px;
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
    margin-bottom: 10px;
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
    margin-bottom: 20px;
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
  border: 1px solid black;
  padding-left: 10px;
  position: absolute;
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

const Detail_BookInfo = ({ data }) => {
  return (
    <>
      <InfoContainer>
        <div className="cover_section">
          <figure>
            <img src={data?.cover && data.cover} alt="" />
          </figure>
          <InfoCaption className="preview">
            <GoSearch /> 미리보기
          </InfoCaption>
          <InfoCaption>
            <span>베스트셀러 {data?.bestRank && data.bestRank}위</span>
            <div className="line">l</div>
            <span>
              독자리뷰 {data?.customerReviewRank && data.customerReviewRank}위
            </span>
          </InfoCaption>
          <InfoCaption>
            <span>판매지수</span>
          </InfoCaption>
          <InfoCaption>
            <span>공유</span>
          </InfoCaption>
        </div>
        <div className="info_section">
          <div className="info_publisher">
            <span>저 : 송영관&nbsp;</span>
            <span>사진 : 류정훈&nbsp;</span>
            <span>출판사 : 위즈덤하우스&nbsp;</span>
            <span>발행 : 2023년 11월 15일&nbsp;</span>
            <span className="last_span">ISBN : 9791171710102&nbsp;</span>
          </div>
          <PriceSection>
            <em>
              <strong>정가</strong>
              <span> 22,000원</span>
            </em>
            <em>
              <div className="red_box">
                <strong>새책</strong>
                <em className="red_sale">
                  <h1>19,800원</h1>
                  <span>(10%할인)</span>
                </em>
                <em>
                  <span>1,100P (5%적립)</span>
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
              <span>1,100P &nbsp;(5%적립)</span>
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

            <AdBox>인터파크 도서 X 더조은컴퓨터 최대 9천원</AdBox>

            <em className="delivery">
              <strong>배송정보</strong>
              <span>예약판매</span>
              <span>11/24(금) 이후 발송 예정</span>
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
              <div className="like">
                <CiHeart />
              </div>
            </CartArea>
          </PriceSection>
        </div>
      </InfoContainer>
    </>
  );
};

export default Detail_BookInfo;
