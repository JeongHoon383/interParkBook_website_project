import React from "react";
import styled from "styled-components";
import { FaHeadset } from "react-icons/fa";
const Wrapper = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const Chat_Avatar = () => {
  return (
    <Wrapper>
      <FaHeadset />
    </Wrapper>
  );
};

export default Chat_Avatar;
