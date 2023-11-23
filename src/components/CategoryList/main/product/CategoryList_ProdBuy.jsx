import { useState } from "react";
import styled from "styled-components";

const ProdBuy = styled.div`
  width: 16%;
  .quantity {
    display: flex;
    align-items: center;
    > input{
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
    </ProdBuy>
  );
}
