import { useState } from "react";
import styled from "styled-components";
import { GoHeart } from "react-icons/go";
import { Link } from "react-router-dom";

const ProdBuy = styled.div`
  width: 16%;
  > *:not(.dibs) {
    margin-bottom: 6px;
  }
  .quantity {
    display: flex;
    align-items: center;
    >input {
      width: 18px;
      height: 18px;
      margin-right: 5px;
      accent-color: var(--main);
    }
    .quantitywrapper {
      border-radius: 3px;
      border: 1px solid #d8d8d8;
      > * {
        height: 30px;
      }
      button {
        width: 30px;
        background: #f8f8f8;
      }
      input {
        width: 35px;
        text-align: right;
        border: none;
        border-left: 1px solid #d8d8d8;
        border-right: 1px solid #d8d8d8;
        &:focus {
          outline: none;
        }
      }
    }
  }
  .insertCart,
  .buy {
    display: inline-block;
    width: 100%;
    line-height: 30px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    border-radius: 3px;
    background: var(--main);
  }
  .dibs {
    position: relative;
    width: 30px;
    height: 30px;
    font-size: 18px;
    border: 1px solid #d8d8d8;
    background: #f8f8f8;
    svg {
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translateX(50%) translateY(-50%);
    }
  }
`;

//장바구니에 담기, 바로구매, 수량, 체크박스 기능 추가
export default function CategoryList_ProdBuy({data}) {
  const [quantity, setQuantity] = useState(1);
  //전체 선택 및 취소
  //개별 항목 취소 시 전체 선택 해제
  //모든 항목 선택 시 전체 선택 활성화
  //진열 수량 select, 품절 여부 버튼 클릭시 전체선택 해제

  return (
    <ProdBuy>
      <div className="quantity">
        <label htmlFor="ProdQuantity"></label>
        <input name="ProdQuantity" id="ProdQuantity" type="checkbox" isbn={data.isbn}/>
        <span className="quantitywrapper">
          <button>-</button>
          <input type="number" value={quantity} readOnly />
          <button>+</button>
        </span>
      </div>
      <button className="insertCart">카트에 넣기</button>
      <Link className="buy">바로 구매</Link>
      <button className="dibs">
        {/* 찜 기능 추가 */}
        <GoHeart />
      </button>
    </ProdBuy>
  );
}
