import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsClipboardCheck } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import Detail_BookInfo from "../components/Detail/Detail_BookInfo";

const MotionNav = styled(motion.div)`
  position: fixed;
  top: 0;
  background: #f4f6f9;
  width: 100vw;
  height: 55px;
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
    margin-right: 10px;
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
  }
  .star_icon {
    color: #ff0000;
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
  return (
    <>
      <MotionNav
        style={{
          opacity: opacity,
          scale: opacity,
        }}></MotionNav>
      <Container ref={containerRef}>
        <div className="center">
          <LocationBox>
            <span>홈 &gt; 국내도서 &gt; 인문 &gt; 인문교양 &gt; 교양일반</span>
          </LocationBox>
          <TitleBox>
            <Title>
              <div>
                <h1>{data?.title && data.title.split("-")[0]}</h1>
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
                <span> | </span>
                <BsClipboardCheck /> 리뷰
              </span>
            </Star>
          </TitleBox>
          <Detail_BookInfo data={data} />
        </div>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Detail;
