import React from "react";
import styled from "styled-components";
import Cart_Logo from "../components/Cart/Cart_Logo";
import Cart_Table from "../components/Cart/Cart_Table";
import Cart_Cal from "../components/Cart/Cart_Cal";

const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
 
`;

const Cart = () => {
  return (
    <Wrapper>
      <Cart_Logo></Cart_Logo>
      <Cart_Table></Cart_Table>
      <Cart_Cal></Cart_Cal>
    </Wrapper>
  );
};

export default Cart;
