import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsClipboardCheck } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import Detail_BookInfo from "../components/Detail/Detail_BookInfo";
import Detail_tabs from "../components/Detail/Detail_tabs";
import Detail_hover from "../components/Detail/Detail_hover";
import { useParams } from "react-router-dom";

import { detailState } from "../components/Detail/atom";
const MotionNav = styled(motion.div)`
  position: fixed;
  top: 0;
  background: #f4f6f9;
  width: 100vw;
  height: 55px;
  z-index: 1;
  .center {
    width: 60%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    div:first-child {
      font-weight: 900;
      font-size: 20px;
    }
    div:last-child {
      font-size: 22px;
      color: #ff9c46;
      display: flex;
      align-items: center;
      * {
        margin-left: 8px;
      }
      span {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      em {
        font-size: 14px;
      }

      input {
        width: 115px;
        height: 32px;
        color: white;
        background: #ff9c46;
        font-size: 14px;
        font-weight: bold;
        border: none;
      }
    }
  }
`;

const LocationBox = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  border-bottom: 1px solid #e5e5e5;
  span {
    font-size: 11px;
  }
`;
const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 15px 0;
`;
const Title = styled.div`
  div:first-child {
    display: flex;
    align-items: center;
    padding: 15px 0px;
    h1 {
      font-size: 22px;
      font-weight: bold;
    }
    span {
      font-size: 17px;
    }
  }
  .event {
    display: flex;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #e5e5e5;
      font-size: 9px;
      width: 47px;
      height: 15px;
      color: 555;
      margin-right: 5px;
    }
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  .center {
    padding: 10px;
    width: 60%;
  }
`;
const Star = styled.div`
  display: flex;
  width: 200px;
  align-items: center;
  justify-content: flex-end;
  .star {
    font-size: 16px;
    display: flex;
    .star_icon {
      display: flex;
    }
  }

  .review {
    font-size: 12px;
    color: #666;
    display: flex;
    align-items: center;
    .line {
      margin: 0 5px;
      color: #666;
    }
  }
  .star_icon {
    color: #ff9c46;
  }
`;

const Detail = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => axios.get(`/detail.json`).then((res) => res.data.item[0]),
  });

  const containerRef = useRef(null);

  const { scrollY, scrollYProgress } = useViewportScroll();
  /*   console.log(scrollY > containerRef.current.offsetTop); */
  const opacity = useTransform(scrollY, [0, 186], [0, 1]);

  const { id } = useParams();
  console.log(id);

  /*   useEffect(() => {
    axios
      .get(
        `https://dapi.kakao.com/v3/search/book?target=isbn&query='9791171710102'`,
        {
          headers: "Authorization: KakaoAK 21cabe3d0ca37c4bab8dea7ce9d95589",
        }
      )
      .then((result) => console.log(result.data.documents))
      .catch((error) => console.log(error));
  }, []); */

  const {
    isPending: detailPending,
    error: detailError,
    data: detailData,
  } = useQuery({
    queryKey: ["detailData"],
    queryFn: () =>
      axios
        .get(
          `https://dapi.kakao.com/v3/search/book?target=isbn&query='9791171710102'`,
          {
            headers: "Authorization: KakaoAK 21cabe3d0ca37c4bab8dea7ce9d95589",
          }
        )
        .then((result) => result.data.documents[0]),
  });

  console.log(detailData, "테스트");

  return (
    <>
      <MotionNav
        style={{
          opacity: opacity,
          scale: opacity,
        }}>
        <div className="center">
          <div>{detailData?.title}</div>
          <div>
            <span>
              {detailData?.sale_price.toLocaleString()}
              <em>원</em>
            </span>
            <input
              style={{ background: "#707070" }}
              type="button"
              value="북카트담기"
            />
            <input type="button" value="바로구매" />
          </div>
        </div>
      </MotionNav>
      <Container ref={containerRef}>
        <div className="center">
          <LocationBox>
            <span>홈 &gt; 국내도서 &gt; 인문 &gt; 인문교양 &gt; 교양일반</span>
          </LocationBox>
          <TitleBox>
            <Title>
              <div>
                <h1>{detailData?.title}</h1>
                <span>: {data?.title && data.title.split("-")[1]}</span>
              </div>
              <div className="event">
                <span>베스트셀러</span>
                <span>소득공제</span>
              </div>
            </Title>
            <Star>
              <span className="star">
                <span className="star_icon">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </span>{" "}
                10
              </span>
              <span className="review">
                <span className="line">|</span>
                <BsClipboardCheck />
                리뷰
              </span>
            </Star>
          </TitleBox>
          <Detail_BookInfo detailData={detailData} data={data} />
          <Detail_hover />
        </div>
      </Container>
      <Detail_tabs id={id} detailData={detailData}></Detail_tabs>
    </>
  );
};

export default Detail;
