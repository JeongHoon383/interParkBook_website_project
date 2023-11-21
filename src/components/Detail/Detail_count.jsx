import React, { useState } from "react";
import styled from "styled-components";

const CountBox = styled.span`
  border: 1px solid lightgray;
  height: 20px;
  display: flex;
  align-items: flex-start;

  input {
    width: 30px;
    text-align: center;
    display: inline-block;
    height: 100%;
    border: 1px solid black;
    font-size: 12px;
    font-weight: 800;
    border-left: none;
    border-right: none;
  }
  button {
    height: 100%;
    border: 1px solid black;
    background: white;
  }
`;

const Detail_count = () => {
  const [count, setCount] = useState(1);
  let calc = (a) => {
    if (a == "plus") {
      setCount((cnt) => (cnt >= 10 ? (cnt = 10) : cnt + 1));
      count >= 10 && alert("최대 구매수량은 10개입니다");
    } else if (a == "minus") {
      setCount((cnt) => (cnt <= 1 ? (cnt = 1) : cnt - 1));
      count <= 1 && alert("최소 구매수량은 1개입니다");
    }
  };
  return (
    <>
      <CountBox>
        <button onClick={() => calc("minus")}>-</button>
        <input type="text" value={count} />
        <button onClick={() => calc("plus")}>+</button>
      </CountBox>
    </>
  );
};

export default Detail_count;