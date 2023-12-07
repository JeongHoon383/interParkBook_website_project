import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin: 40px auto;
  height: 130px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  div:nth-child(2) {
    grid-column: span 4;
  }
`;
const HoverBox = styled.div`
  display: flex;
  flex-direction: column;

  div {
    background: #f2f2f2;
    flex: 1;
    border: 1px solid lightgray;
    color: #c8c8d0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;

    &:hover {
      color: #ff9c46;
      font-weight: bold;
    }
  }
`;

const FigureBox = styled(motion.div)`
  width: 100%;
  height: 100%;

  border: 1px solid lightgray;

  div.container {
    display: flex;
    width: 100%;
    height: 100%;
    div:first-child {
      width: 66%;
    }
  }
`;

const Figure = styled.figure`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Detail_hover = () => {
  const [active, setActive] = useState("s1");
  let handleEnter = (a) => {
    setActive(a);
  };

  return (
    <Wrapper>
      <HoverBox>
        <motion.div
          style={{
            color: active === "s1" ? "#ff9c46" : "#c8c8d0",
            fontWeight: active === "s1" ? "bold" : null,
            background: active === "s1" && "#FFFFFF",
          }}
          onMouseOver={() => handleEnter("s1")}>
          이벤트/기획전
        </motion.div>
        <motion.div
          style={{
            color: active === "s2" ? "#ff9c46" : "#c8c8d0",
            fontWeight: active === "s2" ? "bold" : null,
            background: active === "s2" && "#FFFFFF",
          }}
          onMouseOver={() => handleEnter("s2")}>
          연관도서
        </motion.div>
        <motion.div
          style={{
            color: active === "s3" ? "#ff9c46" : "#c8c8d0",
            fontWeight: active === "s3" ? "bold" : null,
            background: active === "s3" && "#FFFFFF",
          }}
          onMouseOver={() => handleEnter("s3")}>
          상품권
        </motion.div>
      </HoverBox>
      <FigureBox initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {active === "s1" && (
          <div className="container">
            <div style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  width: "10px",
                  height: "10px",
                  borderLeft: "1px solid rgba(0,0,0,0.4)",
                  borderBottom: "1px solid rgba(0,0,0,0.4)",
                  background: "#FFFFFF",
                  top: "21.5px",
                  transform: "translateY(-50%) rotate(45deg)",
                  left: "-6px",
                  zIndex: "99",
                }}></span>
              <Figure style={{ borderRight: "1px solid lightgray" }}>
                <img src="https://qi-b.qoo10cdn.com/renewPark/reBookpark/test_img/last_inc/book_benefit.jpg" />
              </Figure>
            </div>
            <div>
              <Figure>
                <img
                  src="https://image.kyobobook.co.kr/newimages/adcenter/IMAC/creatives/2023/11/23/71047/sang_1123_2.jpg"
                  alt=""
                />
              </Figure>
            </div>
          </div>
        )}
        {active === "s2" && (
          <div className="container">
            <div style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  width: "10px",
                  height: "10px",
                  borderLeft: "1px solid rgba(0,0,0,0.4)",
                  borderBottom: "1px solid rgba(0,0,0,0.4)",
                  background: "#FFFFFF",
                  top: "64.5px",
                  transform: "translateY(-50%) rotate(45deg)",
                  left: "-6px",
                  zIndex: "99",
                }}></span>
              <Figure style={{ borderRight: "1px solid lightgray" }}>
                <img src="https://qi-b.qoo10cdn.com/renewPark/reBookpark/test_img/last_inc/book_benefit.jpg" />
              </Figure>
            </div>
            <div>
              <Figure>
                <img
                  src="https://image.kyobobook.co.kr/newimages/adcenter/IMAC/creatives/2023/11/23/71047/sang_1123_2.jpg"
                  alt=""
                />
              </Figure>
            </div>
          </div>
        )}
        {active === "s3" && (
          <div className="container">
            <div style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  width: "10px",
                  height: "10px",
                  borderLeft: "1px solid rgba(0,0,0,0.4)",
                  borderBottom: "1px solid rgba(0,0,0,0.4)",
                  background: "#FFFFFF",
                  top: "107.5px",
                  transform: "translateY(-50%) rotate(45deg)",
                  left: "-6px",
                  zIndex: "99",
                }}></span>
              <Figure style={{ borderRight: "1px solid lightgray" }}>
                <img src="https://qi-b.qoo10cdn.com/renewPark/reBookpark/test_img/last_inc/book_benefit.jpg" />
              </Figure>
            </div>
            <div>
              <Figure>
                <img
                  src="https://image.kyobobook.co.kr/newimages/adcenter/IMAC/creatives/2023/11/23/71047/sang_1123_2.jpg"
                  alt=""
                />
              </Figure>
            </div>
          </div>
        )}
      </FigureBox>
    </Wrapper>
  );
};

export default Detail_hover;
