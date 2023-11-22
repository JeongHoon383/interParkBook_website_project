import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 20px 0;
  gap: 5px;
`;

const Slide = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.div`
  height: 170px;
  width: 120px;
  border: 1px solid blue;
  background-image: url("https://image.aladin.co.kr/product/32806/58/cover/k832936705_1.jpg");
  background-position: center center;
  background-size: cover;
`;
const Title = styled.h3`
  margin-top: 5px;
  color: #666;
  font-size: 12px;
`;
const wrapperVars = {
  start: {
    x: window.innerWidth,
  },
  end: {
    x: 0,
  },
  exit: {
    x: -window.innerWidth,
  },
};
const Detail_reco = () => {
  const [index, setIndex] = useState(0);
  const offset = 6;
  const handleNext = () => {
    let totalCnt = 12;
    const maxIndex = Math.floor(totalCnt / 6);
    setIndex((prev) => (prev == maxIndex ? 0 : prev + 1));
  };
  return (
    <div style={{ overflow: "hidden" }}>
      <AnimatePresence>
        <Wrapper
          variants={wrapperVars}
          initial="start"
          animate="end"
          exit="exit"
          transition={{ duration: 2, type: "tween" }}
          index={index}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            .slice(index * offset, index * offset + offset)
            .map((v, i) => (
              <Slide>
                <Img key={i}>{v}</Img>
                <Title>타이틀</Title>
              </Slide>
            ))}
        </Wrapper>{" "}
        <button type="button" onClick={() => handleNext()}>
          오른쪽버튼
        </button>
      </AnimatePresence>
    </div>
  );
};

export default Detail_reco;
