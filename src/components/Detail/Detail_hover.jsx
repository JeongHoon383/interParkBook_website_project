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

const FigureBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 1px solid lightgray;
`;

const Figure = styled.div`
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
            color: active == "s1" ? "#ff9c46" : "#c8c8d0",
            fontWeight: active == "s1" ? "bold" : null,
            background: active == "s1" && "#FFFFFF",
          }}
          onMouseOver={() => handleEnter("s1")}>
          이벤트1
        </motion.div>
        <motion.div
          style={{
            color: active == "s2" ? "#ff9c46" : "#c8c8d0",
            fontWeight: active == "s2" ? "bold" : null,
            background: active == "s2" && "#FFFFFF",
          }}
          onMouseOver={() => handleEnter("s2")}>
          이벤트2
        </motion.div>
        <motion.div
          style={{
            color: active == "s3" ? "#ff9c46" : "#c8c8d0",
            fontWeight: active == "s3" ? "bold" : null,
            background: active == "s3" && "#FFFFFF",
          }}
          onMouseOver={() => handleEnter("s3")}>
          이벤트3
        </motion.div>
      </HoverBox>
      <FigureBox>
        {active == "s1" && (
          <Figure>
            <img
              src="https://qi-b.qoo10cdn.com/renewPark/reBookpark/test_img/last_inc/book_benefit.jpg"
              alt=""
            />
          </Figure>
        )}
        {active == "s2" && <span>1</span>}
        {active == "s3" && <span>2</span>}
      </FigureBox>
    </Wrapper>
  );
};

export default Detail_hover;
