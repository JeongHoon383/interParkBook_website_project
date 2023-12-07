import { useState } from "react";
import styled from "styled-components";
import { GoHeart } from "react-icons/go";

const ProdBuy = styled.div`
  width: 16%;
  > *:not(.dibs) {
    margin-bottom: 6px;
  }
  .quantity {
    display: flex;
    align-items: center;
    > input {
      width: 18px;
      height: 18px;
      margin-right: 5px;
    }
    span {
      > * {
        height: 30px;
        border: 1px solid #d8d8d8;
      }
      button {
        width: 30px;
        background: #f8f8f8;
      }
      input {
        width: 35px;
        text-align: right;
      }
    }
  }
  .insertCart,
  .buy {
    width: 100%;
    line-height: 30px;
    color: #fff;
    font-weight: bold;
    border-radius: 3px;
    background: var(--main);
  }
  .dibs{
    position: relative;
    width: 30px;
    height: 30px;
    font-size: 24px;
    border: 1px solid #d8d8d8;
    background: #f8f8f8;
    svg{
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translateX(50%) translateY(-50%);
    }
  }
`;

export default function CategoryList_ProdBuy() {
  const [quantity, setQuantity] = useState(1);

  return (
    <ProdBuy>
      <div className="quantity">
        <input type="checkbox" />
        <span>
          <button>-</button>
          <input type="number" value={quantity} readOnly />
          <button>+</button>
        </span>
      </div>
      <button className="insertCart">카트에 넣기</button>
      <button className="buy">바로 구매</button>
      <button className="dibs">
        <GoHeart />
      </button>
    </ProdBuy>
  );
}
