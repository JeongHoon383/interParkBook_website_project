import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Figure = styled.figure`
  width: 100%;
  height: 100px;
  margin-top: 20px;
  margin-bottom: 10px;
  &:nth-of-type(2) {
    margin-top: 10px;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
const SortSection = styled(motion.section)`
  margin-top: 40px;
  margin-bottom: 10px;
  h1 {
    font-size: 20px;
    margin: 10px 0;
    font-weight: 900;
  }
  hr {
    margin-bottom: 20px;
  }
  em {
    font-size: 12px;
  }
  span {
    font-size: 14px;
    letter-spacing: normal;
    line-height: 150%;
  }
`;

const Detail_event = () => {
  return (
    <div>
      <Figure>
        <img
          src="https://qi-b.qoo10cdn.com/milti/renewPark/main/64631_202310301515333991.jpg"
          alt=""
        />
      </Figure>
      <Figure>
        <img
          src="https://qi-b.qoo10cdn.com/milti/renewPark/main/64631_202310311030384571.jpg"
          alt=""
        />
      </Figure>
    </div>
  );
};

export default Detail_event;
