import React from "react";
import { useState } from "react";


export default function Quantity() {
  let [number, setNumber] = useState(1);

  // const handleClickMinus = (e) => {
  //   // 조건식 ? true : false
  //   number > 1 ? setNumber(--number) : alert("최소 수량은 1개입니다");

  //   const handleClickPlus = (e) => {
  //     number < 10 ? setNumber(++number) : alert("최대수량은 10개입니다.");
  //   }
  // }

  function quantityCheck(checkFlag, e) {
    if (checkFlag === "minus") {
      number > 1 ? setNumber(--number) : alert("최소 수량은 1개입니다");

    } else {
      number < 10 ? setNumber(++number) : alert("최대 수량은 10개입니다");
    }
  }

  return (
    <p className="quantity">
      <input type="checkbox" />
      <span onClick={() => { quantityCheck("minus") }}>-</span>
      <span>{number}</span>
      <span onClick={() => { quantityCheck("plus") }}>+</span>
    </p>

  )


}