import React from "react";
import Button from "./Button";
import Quantity from "./Quantity";


export default function BookBuy(){
  return(
    <div className="bookbuy">
      <Quantity />
      <Button className="button_cart" buttonName="카트에 넣기" />
      <Button className="button_buy" buttonName="바로 구매" />
      <Button className="button_list" buttonName="리스트에 넣기" />
    </div>
  );
}