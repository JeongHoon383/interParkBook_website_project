import React from "react";
import { Link, Route, Routes, useMatch } from "react-router-dom";
import styled from "styled-components";
import Detail_info from "./Detail_info";
import Detail_event from "./Detail_event";
import Detail_review from "./Detail_review";
import Detail_change from "./Detail_change";
import { motion } from "framer-motion";
import Detail_slider from "./Detail_slider";
import Detail_reco from "./Detail_reco";

const TabsContainer = styled.div`
  width: 60%;
  margin: 0 auto;
`;
const Tabs = styled.div`
  display: flex;
  position: sticky;
  top: 55px;
  z-index: 10;
`;
const Tab = styled.div`
  flex: 1;
  height: 40px;
  border: 1px dotted lightgray;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #f8f8f8;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;
const Line = styled(motion.span)`
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  position: absolute;
  height: 5px;
  background-color: #ff9c46;
`;

const Detail_tabs = () => {
  const infoMatch = useMatch("/book/info/");
  const eventMatch = useMatch("/book/event");
  const recMatch = useMatch("/book/rec");
  const reviewMatch = useMatch("/book/review");
  const changeMatch = useMatch("/book/change");

  return (
    <TabsContainer>
      <Tabs>
        <Tab style={{ background: infoMatch && "rgba(255,255,255,0.5)" }}>
          <Link to="/book/info/">
            {infoMatch && <Line layoutId="line"></Line>} <span>책정보</span>
          </Link>
        </Tab>
        <Tab style={{ background: eventMatch && "rgba(255,255,255,0.5)" }}>
          <Link to="/book/event">
            {eventMatch && <Line layoutId="line"></Line>}
            <span>이벤트/기획전</span>
          </Link>
        </Tab>
        <Tab style={{ background: recMatch && "rgba(255,255,255,0.5)" }}>
          <Link to="/book/rec">
            {recMatch && <Line layoutId="line"></Line>}
            <span>추천도서</span>
          </Link>
        </Tab>
        <Tab style={{ background: reviewMatch && "rgba(255,255,255,0.5)" }}>
          <Link to="/book/review">
            {reviewMatch && <Line layoutId="line"></Line>}
            <span>100자평/리뷰</span>
          </Link>
        </Tab>
        <Tab style={{ background: changeMatch && "rgba(255,255,255,0.5)" }}>
          <Link to="/book/change">
            {changeMatch && <Line layoutId="line"></Line>}
            <span>교환/환불/배송</span>
          </Link>
        </Tab>
      </Tabs>
      {!eventMatch && !recMatch && !reviewMatch && !changeMatch ? (
        <Detail_info />
      ) : null}
      {infoMatch && <Detail_info />}
      {eventMatch && <Detail_event />}
      {recMatch && <Detail_reco />}
      {reviewMatch && <Detail_review />}
      {changeMatch && <Detail_change />}
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
      Detail_tabs
    </TabsContainer>
  );
};

export default Detail_tabs;
