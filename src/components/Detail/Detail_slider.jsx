import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const Wrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 20px 0;
  gap: 5px;
  position: absolute;
  width: 100%;
  left: 0;
`;

const Slide = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  figure {
    height: 170px;
    width: 120px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  /*   background-image: url("https://image.aladin.co.kr/product/32806/58/cover/k832936705_1.jpg");
  background-position: center center;
  background-size: cover; */
`;
const Title = styled.h3`
  margin-top: 5px;
  color: #666;
  font-size: 12px;
`;
const wrapperVars = {
  start: {
    x: "100%",
  },
  end: {
    x: 0,
  },
  exit: {
    x: "-100%",
  },
};

const wrapperVars2 = {
  start: {
    x: "-100%",
  },
  end: {
    x: 0,
  },
  exit: {
    x: "100%",
  },
};

const RightButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;
const LeftButton = styled.button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;
const Detail_slider = () => {
  const [index, setIndex] = useState(0);
  const [leave, setLeave] = useState(false);
  const [Right, setRight] = useState();
  const toggleLeave = () => setLeave((prev) => !prev);

  const offset = 6;

  const handleNext = () => {
    setRight(true);
    if (leave) return;
    setLeave(true);
    let totalCnt = 12;
    const maxIndex = Math.floor(totalCnt / 6) - 1;
    setIndex((prev) => (prev == maxIndex ? 0 : prev + 1));
  };
  const handlePrev = () => {
    setRight(false);
    if (leave) return;
    setLeave(true);
    let totalCnt = 12;
    const maxIndex = Math.floor(totalCnt / 6) - 1;
    setIndex((prev) => (prev == 0 ? maxIndex : prev - 1));
  };
  return (
    <div
      style={{
        overflow: "hidden",
        height: "220px",
        position: "relative",
      }}>
      <AnimatePresence initial={false} onExitComplete={toggleLeave}>
        <Wrapper
          variants={Right ? wrapperVars : wrapperVars2}
          initial="start"
          animate="end"
          exit="exit"
          transition={{ duration: 1, type: "tween" }}
          key={index}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            .slice(index * offset, index * offset + offset)
            .map((v, i) => (
              <Slide key={i}>
                <figure>
                  <Img
                    src="https://image.aladin.co.kr/product/32806/58/cover/k832936705_1.jpg"
                    key={i}></Img>
                </figure>
                <Title>타이틀</Title>
              </Slide>
            ))}
        </Wrapper>{" "}
        <RightButton type="button" onClick={() => handleNext()}>
          <MdArrowForwardIos
            style={{
              color: "lightgray",
              width: "34px",
              height: "50px",
              position: "relative",
              right: "-10px",
              zIndex: 1,
            }}
          />
        </RightButton>
        <LeftButton style={{ scale: 1.5 }} onClick={() => handlePrev()}>
          <MdOutlineArrowBackIos
            style={{
              color: "lightgray",
              width: "34px",
              height: "50px",
              position: "relative",
              left: "-10px",
              zIndex: 1,
            }}
          />
        </LeftButton>
      </AnimatePresence>
    </div>
  );
};

export default Detail_slider;
