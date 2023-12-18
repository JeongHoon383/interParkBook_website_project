import React, { useState } from "react";
import styled from "styled-components";
import Cart_Logo from "../components/Cart/Cart_Logo";
import Cart_Table from "../components/Cart/Cart_Table";
import Cart_Cal from "../components/Cart/Cart_Cal";
import { cartState } from "../components/Cart/atom";
import { useRecoilState } from "recoil";

const Wrapper = styled.form`
  width: 60%;
  margin: 0 auto;
`;

const Cart = () => {
  const [cart, setCart] = useRecoilState(cartState);
  console.log(cart);
  const [total, setTotal] = useState(0);
  const [check, setCheck] = useState([]);
  return (
    <Wrapper>
      <Cart_Logo></Cart_Logo>
      <Cart_Table
        setCheck={setCheck}
        setTotal={setTotal}
        cart={cart}
        setCart={setCart}></Cart_Table>
      <Cart_Cal cart={cart} setCart={setCart} total={total}></Cart_Cal>
    </Wrapper>
  );
};

export default Cart;
