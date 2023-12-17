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
        pointer-events: ${(props) =>
          props.$stockStatus.includes("품절") ? "none" : "all"};
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
  .soldout {
    display: inline-block;
    width: 100%;
    line-height: 30px;
    pointer-events: none;
    font-weight: bold;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #d8d8d8;
    background: #f8f8f8;
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
  bookData,
  checkList,
  handleCheckList,
  userId,
  idx,
  quantity,
  handleQuantity
}) {
  const [isChecked, setisChecked] = useState(false);

  //개별 상품 체크박스 클릭시 checkList에 상품 넣고 빼기
  const handleSelect = (bookData) => {
    const {isbn13, title, cover, priceSales} = bookData;
    if (isChecked) {
      let copy = [...checkList];
      for (let i = 0; i < copy.length; i++) {
        if (copy[i][0] === bookData.isbn13) {
          copy.splice(i, 1);
        }
      }
      handleCheckList(copy);
      setisChecked(false);
    } else {
      handleCheckList([...checkList,[isbn13, userId, title, cover, priceSales]]);
      setisChecked(true);
    }
  };

  //checkList에 해당 상품이 있는지 없는지에 따라 해당 상품의 checkbox 체크 변환
  useEffect(() => {
    checkList.some(checkItem => checkItem[0] === bookData.isbn13)
      ? setisChecked(true)
      : setisChecked(false);
  }, [checkList, bookData.isbn13]);

  return (
    <ProdBuy $stockStatus={bookData.stockStatus}>
      <div className="quantity">
        <label htmlFor="ProdQuantity"></label>
        <input
          name="ProdQuantity"
          id="ProdQuantity"
          type="checkbox"
          disabled={bookData.stockStatus.includes("품절") ? true : false}
          checked={isChecked}
          value={bookData.isbn13}
          onChange={() => handleSelect(bookData)}
        />
        <span className="quantitywrapper">
          <button
            onClick={() => {
              handleQuantity("minus", bookData.isbn13, idx);
            }}
          >
            -
          </button>
          <input type="number" value={quantity[idx] ? quantity[idx].qty : 1} readOnly />
          <button
            onClick={() => {
              handleQuantity("plus", bookData.isbn13, idx);
            }}
          >
            +
          </button>
        </span>
      </div>
      {bookData.stockStatus.includes("품절") ? (
        <>
          <button className="soldout">{bookData.stockStatus}</button>
          <Link className="soldout">{bookData.stockStatus}</Link>
        </>
      ) : (
        <>
          <button className="insertCart">카트에 담기</button>
          <Link className="buy">바로 구매</Link>
        </>
      )}
      <button className="dibs">
        {/* 찜 기능 추가 */}
        <GoHeart />
      </button>
    </ProdBuy>
  );
}
