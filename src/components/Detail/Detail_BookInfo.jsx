import React, { useState } from "react";
import styled from "styled-components";
import { GoSearch } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiSolidCoupon } from "react-icons/bi";
import { CiCircleQuestion } from "react-icons/ci";
import Detail_count from "./Detail_count";

import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleRight } from "react-icons/go";

import { motion } from "framer-motion";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { FaSearch } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { cartState } from "../Cart/atom";
import { CiLocationOn } from "react-icons/ci";
import { number } from "yup";
const InfoContainer = styled.div`
  display: flex;
  margin: 0 auto;
  overflow: hidden;
  .cover_section {
    margin-top: 30px;
    flex: 0.25;
    @media (max-width: 768px) {
      margin-top: 20px;
    }
    figure {
      position: relative;
      width: 200px;
      height: 260px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: -9px 8px 13px 0px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: -9px 8px 13px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: -9px 8px 13px 0px rgba(0, 0, 0, 0.75);
      @media (max-width: 768px) {
        width: 160px;
        height: 200px;
      }
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
    @media (max-width: 768px) {
      padding: 8px;
    }
    .info_publisher {
      border-bottom: 1px solid lightgray;
      padding-bottom: 20px;
      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
 
        padding-bottom: 16px;
      }
      .m_hidden {
        @media (max-width: 768px) {
          display: none;
        }
      }
      span {
        margin-left: 10px;
        font-size: 11px;
        @media (max-width: 768px) {
          margin-left: 8px;
          font-size: 12px;
          margin-top: 5px;
        }
      }
      .last_span::after {
        content: "";
      }
      span::after {
        content: " l";
        @media (max-width: 768px) {
          content: "";
        }
      }
    }
  }
`;
const InfoCaption = styled.div`
  width: 100%;

  span {
    &:hover {
      color: var(--main);
    }
    display: flex;
    align-items: center;
    font-size: 12px;
    justify-content: center;
    @media (max-width: 768px) {
      font-size: 10px;
    }
  }
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
      @media (max-width: 768px) {
        width: 16px;
        height: 16px;
      }
    }
    .facebook_icon {
      svg {
        color: #6680b8;
      }
    }
  }

  &:first-of-type {
    margin-bottom: 50px;
    @media (max-width: 768px) {
      margin-bottom: 40px;
    }
  }
  background: #f9f9f9;
  padding: 10px;
  margin: 5px auto;
  text-align: center;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 8px;
    margin: 4px auto;
    font-size: 10px;
  }
  span {
    flex: 0.5;
    text-align: center;
  }
  &.preview {
    margin: 10px auto;

    height: 36px;
    margin-top: 28px;
    margin-bottom: 20px;
    padding: 0;
    color: #666;
    font-weight: bold;
    @media (max-width: 768px) {
      height: 25px;
      margin-top: 20px;
      margin-bottom: 14px;
    }
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
  .StandardPrice {
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
  .GoTriangleDown {
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: 768px) {
    }
  }

  @media (max-width: 768px) {
    padding: 7px;
  }
  .discount {
    @media (max-width: 768px) {
      display: none;
    }
  }
  .delivery {
    @media (max-width: 768px) {
      display: none;
    }
    margin-top: 20px;
    @media (max-width: 768px) {
      margin-top: 14px;
    }
    span {
      margin-left: 5px;
      @media (max-width: 768px) {
        margin-left: 4px;
      }
    }
    span::after {
      margin-left: 5px;
      content: "|";
      @media (max-width: 768px) {
        margin-left: 4px;
      }
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
    @media (max-width: 768px) {
      display: none;
    }
    path {
      color: #ff9c46;
      margin-right: 10px;
      @media (max-width: 768px) {
        margin-right: 7px;
      }
    }
    span {
      color: #ff9c46;
      margin-left: 5px;
      margin-right: 7px;
      @media (max-width: 768px) {
        margin-left: 4px;
        margin-right: 5px;
      }
    }
  }
  .point {
    @media (max-width: 768px) {
      display: none;
    }
    span::after {
      content: " |";
      margin-left: 5px;
      @media (max-width: 768px) {
        margin-left: 4px;
      }
    }
    span {
      margin-left: 5px;
      @media (max-width: 768px) {
        margin-left: 4px;
      }
    }
    span.last::after {
      content: "";
    }
  }
  strong {
    font-weight: 600;
    padding: 0 10px;
    font-size: 13px;
    @media (max-width: 768px) {
      padding: 0 7px;
      font-size: 9px;
    }
  }
  em {
    display: block;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      margin-bottom: 14px;
    }
    span {
      font-size: 13px;
      @media (max-width: 768px) {
        font-size: 10px;
      }
    }
  }
  .red_box {
    position: relative;
    border: 1px solid var(--main);
    border-top: 5px solid var(--main);
    padding: 7px 10px;
    width: 180px;
    height: 80px;
    margin-top: 13px;
    @media (max-width: 768px) {
      margin: 0 auto;
    }
    h1 {
      @media (max-width: 768px) {
        font-size: 11px;
      }
    }
    @media (max-width: 768px) {
      border-top: 4px solid var(--main);
      padding: 5px 7px;
      width: 130px;
      height: 60px;
      margin-top: 9px;
    }
    .red_sale {
      margin: 7px 0;
      display: flex;
      align-items: center;
      @media (max-width: 768px) {
        margin: 5px 0;
      }
      h1 {
        font-weight: bold;
        margin-right: 5px;
        color: #ef544d;
        @media (max-width: 768px) {
          margin-right: 4px;
        }
      }
    }
    strong {
      font-size: 15px;
      color: #747474;
      padding: 0;
      @media (max-width: 768px) {
        font-size: 11px;
      }
    }
  }
  .count_area {
    display: flex;
    align-items: center;
    margin: 0px;
    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    strong {
      @media (max-width: 768px) {
        margin-bottom: 5px;
      }
    }
  }
`;

const AdBox = styled.div`
  background-color: #ffdf00;
  height: 35px;
  width: inherit;
  text-align: center;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
  @media (max-width: 768px) {
    /*     display: none; */
    height: 25px;
    margin: 10px 0;
    font-size: 10px;
  }
`;

const CartArea = styled.div`
  display: flex;
  padding-left: 10px;
  position: absolute;
  bottom: 5px;
  left: 0;
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 7px;
    flex-direction: column-reverse;
    align-items: center;
  }
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
    cursor: pointer;
    @media (max-width: 768px) {
      width: 100%;
      font-size: 11px;
      height: 28px;
      margin-right: 7px;
      margin-top: 10px;
    }
  }
  .cart {
    background-color: var(--main);
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
    @media (max-width: 768px) {
      width: 28px;
      height: 28px;
      font-size: 1rem;
      margin-top: 10px;
    }
  }
`;

const OverLay = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 11;
  background-color: rgba(0, 0, 0, 0.4);
`;
const Modal = styled(motion.div)`
  position: absolute;
  overflow-y: scroll;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80%;
  width: 40vw;
  padding: 30px;
  border-radius: 10px;
  background-color: whitesmoke;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(57, 34, 34, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  @media (max-width: 768px) {
    padding: 21px;
  }
  h1 {
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 25px;
    border-bottom: 2px solid var(--main);
    @media (max-width: 768px) {
      font-size: 14px;
      padding-bottom: 18px;
    }
  }
`;
const LibBox = styled.div`
  padding: 15px 10px;
  border-bottom: 1px dotted rgba(0, 0, 0, 0.4);
  @media (max-width: 768px) {
    padding: 11px 7px;
  }
  p {
    display: flex;
    align-items: center;
    margin: 5px 0;
    line-height: 110%;
    font-size: 14px;
    @media (max-width: 768px) {
      margin: 4px 0;
      font-size: 10px;
    }
    &.lib_info {
      font-size: 13px;
      @media (max-width: 768px) {
        font-size: 9px;
      }
    }
  }

  strong {
    font-size: 15px;
    font-weight: 600;
    @media (max-width: 768px) {
      font-size: 11px;
    }
  }
  em {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
    @media (max-width: 768px) {
      font-size: 8px;
    }
  }
  strong::after {
    content: "|";
    margin: 0 10px;
    font-weight: lighter;
    @media (max-width: 768px) {
      margin: 0 7px;
    }
  }
`;
const NoBooks = styled.div`
  margin: 10px;
  color: rgba(0, 0, 0, 0.4);
`;

const Detail_BookInfo = ({ data, kakaoData, DetailData, qty, setQty }) => {
  let days = ["일", "월", "화", "수", "목", "금", "토"];
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [icon, setIcon] = useState(false);
  const [cart, setCart] = useRecoilState(cartState);

  const handleAddCart = () => {
    navigate("/cart");
    alert("추가완료");
    return setCart((prev) => [
      ...prev,
      {
        cartId: Date.now(),
        img: DetailData.cover && DetailData.cover,
        title: DetailData.title && DetailData.title,
        priceStandard: DetailData.priceStandard && DetailData.priceStandard,
        priceSales: DetailData.priceSales && DetailData.priceSales,
        mileage: DetailData.mileage && DetailData.mileage,
        count: qty,
      },
    ]);
  };
  const handleClick = () => {
    setModal((prev) => !prev);
  };
  const {
    isPending: libLoading,
    error: libError,
    data: libData,
  } = useQuery({
    queryKey: ["libData"],
    queryFn: () =>
      axios
        .get(
          `http://data4library.kr/api/libSrchByBook?authKey=37de41ebac66f5e3a77476686f32f434b48ccecaaa082d6260710e8a799aa129&isbn=${DetailData.isbn13}&region=11&format=json`
        )
        .then((res) => res.data.response.libs),
  });

  return (
    <>
      {modal && (
        <OverLay
          onClick={() => {
            setModal((prev) => !prev);
          }}>
          <Modal>
            <h1>소장중인 도서관</h1>
            {libData.length !== 0 ? (
              libData.map((v, i) => (
                <LibBox key={i}>
                  <p>
                    <strong>{v.lib.libName && v.lib.libName}</strong>
                    <em>
                      휴일 :
                      {v.lib.closed.split(" ")[0] && v.lib.closed.split(" ")[0]}
                      {v.lib.closed.split(" ")[1] && v.lib.closed.split(" ")[1]}
                    </em>
                  </p>
                  <p className="lib_info">
                    주소: {v.lib.address && v.lib.address}
                  </p>
                  <p className="lib_info">운영시간: 평일 09:00 ~ 18:00</p>
                </LibBox>
              ))
            ) : (
              <NoBooks>소장중인 도서관이 없습니다.</NoBooks>
            )}
          </Modal>
        </OverLay>
      )}
      <InfoContainer>
        <div className="cover_section">
          <figure>
            {icon && (
              <FaSearch
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  scale: "2",
                  zIndex: "3",
                }}
              />
            )}
            <motion.img
              onMouseOver={() => setIcon(true)}
              onMouseLeave={() => setIcon(false)}
              whileHover={{
                filter: "brightness(60%) blur(2px)",
                cursor: "pointer",
                transition: { type: "tween", duration: 1 },
              }}
              src={DetailData?.cover}
              alt=""
            />
          </figure>
          <InfoCaption className="preview">
            <Link onClick={() => handleClick()}>
              <span>
                <CiLocationOn /> 도서관 소장&middot;위치
              </span>
            </Link>
          </InfoCaption>
          <InfoCaption>
            <span style={{ color: "rgba(0,0,0,0.4)" }}>
              <GoTriangleRight />
              주간&nbsp;<em style={{ color: "red" }}>8</em>위
            </span>
            <div className="line">l</div>
            <span style={{ color: "rgba(0,0,0,0.4)" }}>
              <GoTriangleRight />
              분야&nbsp;<em style={{ color: "red" }}>10</em>위
            </span>
          </InfoCaption>
          <InfoCaption>
            <span style={{ color: "rgba(0,0,0,0.4)" }}>
              판매지수
              <em style={{ margin: "0 5px", color: "red" }}>
                {Number(DetailData?.salesPoint).toLocaleString()}
              </em>
            </span>
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
            <span>저 : {DetailData?.author}&nbsp;</span>
            <span className="m_hidden">사진 : 류정훈&nbsp;</span>
            <span>출판사 : {DetailData?.publisher}&nbsp;</span>
            <span className="m_hidden">
              발행 : {DetailData?.pubDate.split("-")[0]}년{" "}
              {DetailData?.pubDate.split("-")[1]}월{" "}
              {DetailData?.pubDate.split("-")[2].slice(0, 2)}일&nbsp;
            </span>
            <span className="last_span ">ISBN : {DetailData?.isbn}&nbsp;</span>
          </div>
          <PriceSection>
            <em>
              <strong className="StandardPrice">정가</strong>
              <span className="StandardPrice">
                {Number(DetailData?.priceStandard).toLocaleString()}원
              </span>
            </em>
            <em>
              <div className="red_box">
                <GoTriangleDown
                  className="GoTriangleDown"
                  color="var(--main)"
                />
                <strong>새책</strong>
                <em className="red_sale">
                  <h1>{Number(DetailData?.priceSales).toLocaleString()}원</h1>
                  <span>(10%할인)</span>
                </em>
                <em>
                  <span>
                    {Number(DetailData?.mileage).toLocaleString()}P (5%적립)
                  </span>
                </em>
              </div>
            </em>
            <em className="discount">
              <strong>할인혜택</strong>
              <span>카드할인 / 무이자 할부</span>
              <MdKeyboardArrowRight
                style={{ color: "var(--main)", display: "inline-block" }}
              />
              <span>이달의 혜택 도서상품권</span>
              <MdKeyboardArrowRight
                style={{ color: "var(--main)", display: "inline-block" }}
              />
            </em>
            <em className="point">
              <strong>적립혜택</strong>
              <span>
                {Number(DetailData?.mileage).toLocaleString()}P &nbsp;(5%적립)
              </span>
              <span className="last">
                5만원이상 주문시 2천P+등급별 최대 1.5%적립{" "}
              </span>
              <MdKeyboardArrowRight
                style={{ color: "var(--main)", display: "inline-block" }}
              />
            </em>

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
              <Detail_count setQty={setQty} />
            </em>
            <CartArea>
              <div onClick={handleAddCart} className="cart">
                북카트담기
              </div>
              <div className="buy">바로구매</div>
              <div className="like" onClick={() => setClick((prev) => !prev)}>
                <FaHeart
                  strokeWidth="8"
                  pathLength="1"
                  stroke="rgba(0,0,0,1)"
                  fill={click ? "var(--main)" : "rgba(255,255,255,0)"}
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
