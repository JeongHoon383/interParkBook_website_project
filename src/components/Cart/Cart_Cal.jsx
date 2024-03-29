import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdRefresh } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  margin-top: 48px;
`;

const Upper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  .button_section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    span {
      background: transparent;
      display: flex;
      font-weight: bold;
      cursor: pointer;
      em {
        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: center;

        border: 1px solid black;
        margin-right: 5px;
        padding: 3px 5px;
        svg:hover {
          transform: rotate(90deg);
        }
      }
    }
  }
`;

const PriceBox = styled.div`
  margin-top: 15px;
  height: 110px;
  border: 4px solid black;
  .down {
    height: 60%;
    ul {
      height: 100%;
      display: flex;
      li {
        font-size: 26px;
        font-weight: bold;
        text-align: center;
        display: flex;
        justify-content: center;

        align-items: center;
        border-bottom: 1px solid lightgray;
        position: relative;

        b {
          font-size: 12px;
          font-weight: lighter;
          margin-left: 5px;
          position: relative;
          top: 2px;
          display: flex;
        }
        span {
          width: 30px;
          height: 30px;
          position: absolute;
          top: 0;
          right: -15px;
          height: 60%;
          font-size: 50px;
        }
      }
    }
  }
  .up {
    height: 40%;
    ul {
      height: 100%;
      display: flex;
      li {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid lightgray;
        position: relative;

        span {
          position: absolute;
          right: 0;
          height: 60%;
          border-right: 1px solid lightgray;
        }
      }
    }
  }
`;

const ButtonArea = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;
  input:first-child {
    background: #6f6f6f;
  }
  input:last-child {
    background: var(--main);
  }
  input {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    color: white;
    border: none;
    font-size: 1.2rem;
    margin-right: 10px;
    width: 170px;
    height: 50px;
  }
`;
const Shop = styled.input`
  cursor: pointer;
`;
const Order = styled.input`
  cursor: pointer;
`;

const Cart_Cal = ({ setCart, cart, total }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Upper>
        <div style={{ fontWeight: "bold" }}>선택상품</div>
        <div className="button_section">
          <span>
            <em>
              다시계산하기
              <MdRefresh />
            </em>
            <em
              onClick={() => {
                setCart([]);
              }}
            >
              삭제하기 <FaRegTrashAlt />
            </em>
          </span>
          <span>
            엑셀다운로드
            <AiOutlineDownload />
          </span>
        </div>
      </Upper>

      <PriceBox>
        <div className="up">
          <ul>
            <li style={{ width: "25%" }}>
              총금액<span></span>
            </li>
            <li style={{ width: "25%" }}>
              배송비<span></span>
            </li>
            <li style={{ width: "50%" }}>결제 예정금액</li>
          </ul>
        </div>
        <div className="down">
          <ul>
            <li style={{ width: "25%" }}>
              {Number(total).toLocaleString()} <b>원</b>
              <span style={{ color: "lightgray" }}>+</span>
            </li>
            <li style={{ width: "25%" }}>
              0 <b>원</b> <span>=</span>
            </li>
            <li style={{ width: "50%" }}>
              {Number(total).toLocaleString()} <b>원</b>
            </li>
          </ul>
        </div>
      </PriceBox>
      <ButtonArea>
        <Shop onClick={() => navigate("/")} type="text" value="쇼핑 계속하기" />
        <Order
          type="text"
          value="주문하기"
          onClick={() => {
            setCart([]);
            alert("주문이 완료되었습니다.");
            navigate("/book/9791158773120/review");
          }}
        />
      </ButtonArea>
    </Wrapper>
  );
};

export default Cart_Cal;
