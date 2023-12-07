import { useState, useEffect } from "react";
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
    > input {
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
        font-size: 16px;
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

//장바구니에 담기, 바로구매, 수량
export default function CategoryList_ProdBuy({
  data,
  checkList,
  setCheckList,
}) {
  const [quantity, setQuantity] = useState(1);
  const [isChecked, setisChecked] = useState(false);

  //개별 상품 체크박스 클릭시 checkList에 상품 넣고 빼기
  const handleSelect = (e) => {
    if (isChecked) {
      let copy = [...checkList];
      for (let i = 0; i < copy.length; i++) {
        if (copy[i] === e.target.value) {
          copy.splice(i, 1);
        }
      }
      setCheckList(copy);
      setisChecked(false);
    } else {
      setCheckList([...checkList, e.target.value]);
      setisChecked(true);
    }
  };

  const handleQuantity = (flag) => {
    if (flag === "plus") {
      setQuantity(quantity + 1);
    } else if (flag === "minus" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  //checkList에 해당 상품이 있는지 없는지에 따라 해당 상품의 checkbox 체크 변환
  useEffect(() => {
    const check = () => {
      checkList.includes(data.isbn) ? setisChecked(true) : setisChecked(false);
    };
    check();
  }, [checkList, data.isbn]);

  return (
    <ProdBuy>
      <div className="quantity">
        <label htmlFor="ProdQuantity"></label>
        <input
          name="ProdQuantity"
          id="ProdQuantity"
          type="checkbox"
          checked={isChecked}
          value={data.isbn}
          onChange={handleSelect}
        />
        <span className="quantitywrapper">
          <button
            onClick={() => {
              handleQuantity("minus");
            }}
          >
            -
          </button>
          <input type="number" value={quantity} readOnly />
          <button
            onClick={() => {
              handleQuantity("plus");
            }}
          >
            +
          </button>
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
