import React from "react";
import Detail_slider from "./Detail_slider";
import styled from "styled-components";

const Title = styled.div`
  margin-top: 40px;
  height: 40px;
  font-weight: bold;
  div {
    border-top: 1px solid lightgray;
    margin-top: 15px;
    width: 100%;
  }
`;

const Detail_reco = () => {
  return (
    <>
      <Title>
        📖소설 분야에서 많은 회원이 구매한 책<div></div>
      </Title>
      <Detail_slider />
      <Title>
        📖이 책을 조회한 회원들이 같이 본 책<div></div>
      </Title>
      <Detail_slider />
      <Title>
        📖이 책을 구매한 회원들이 구매한 책<div></div>
      </Title>
      <Detail_slider />
    </>
  );
};

export default Detail_reco;
