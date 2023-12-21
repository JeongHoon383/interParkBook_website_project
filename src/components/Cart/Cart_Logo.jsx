import React from "react";
import styled from "styled-components";

const Figure = styled.figure`
  height: 85px;
  width: 100%;
  position: relative;
  img {
    width: 100%;
  }
`;
const StartShop = styled.figure`
border: 1px solid red;
  width: 100px;
  height: 35px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-80%);
  img {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const ImageSpan = styled.span`
  position: absolute;
  bottom: 0;
  font-size: 12px;
  padding-left: 70px;
  bottom: 10px;

  @media (max-width: 768px) {
    padding-left: 50px;
    font-size: 9px;
  }
  em {
    color: var(--main);
    font-weight: bold;
  }
`;

const Ul = styled.ul`
  font-size: 12px;
  color: #777;

  @media (max-width: 768px) {
    font-size: 9px;
  }
  li {
    margin-top: 5px;

    @media (max-width: 768px) {
      margin-top: 4px;
    }
  }
`;

const Cart_Logo = () => {
  return (
    <>
      <Figure>
        <img
          src="https://qi-b.qoo10cdn.com/renewPark/bookCart/bg_title01.gif"
          alt=""
        />
 {/*        <StartShop>
          <img
            src="https://qi-b.qoo10cdn.com/renewPark/bookCart/tab_shopCart.gif"
            alt=""
          />
        </StartShop>
        <ImageSpan>
          회원 로그인 후 상품을 담으시면 <em>1년간 자동저장</em>됩니다.
        </ImageSpan> */}
      </Figure>
      <Ul>
        <li>
          *문화비소득공제 대상과 비대상 상품을 함께 주문하는 경우, 소득공제
          대상/비대상 금액으로 나누어 2회 결제가 진행됩니다.
        </li>
        <li>
          *2회 결제가 진행될 경우, 제휴사 카드 혜택 적용이 불가능할 수 있습니다.
          카드사 혜택 적용 시 각 결제금액을 확인하신 후 문화비 소득공제를
          신청해주세요.
        </li>
      </Ul>
    </>
  );
};

export default Cart_Logo;
