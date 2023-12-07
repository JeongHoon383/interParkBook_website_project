import React from "react";
import styled from "styled-components";
import Cart_Logo from "../components/Cart/Cart_Logo";
import Cart_Table from "../components/Cart/Cart_Table";
import Cart_Cal from "../components/Cart/Cart_Cal";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  border: 1px solid red;
`;

const Cart = () => {
  let cartData = useSelector((state) => state.cartState);

  return (
    <Wrapper>
      <Cart_Logo></Cart_Logo>
      <Cart_Table cartData={cartData}></Cart_Table>
      <Cart_Cal></Cart_Cal>
    </Wrapper>
  );
};

export default Cart;
