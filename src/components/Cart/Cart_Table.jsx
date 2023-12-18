import React from "react";
import styled from "styled-components";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GoTriangleRight } from "react-icons/go";
import { IoSquare } from "react-icons/io5";
import { Link } from "react-router-dom";
import { removeCart } from "./store";
import { cartState } from "./atom";
import { useRecoilState } from "recoil";

const Wrapper = styled.div`
  margin-top: 60px;
`;
const TaxSection = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  font-weight: bold;
  input {
    margin-right: 8px;
  }
`;

const ColName = styled.div`
  border-top: 2px solid black;
  height: 30px;
  background: #ebebeb;
  ul {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 13px;
    text-align: center;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 2px solid rgba(255, 255, 255, 0.9);
    }
    li:last-child {
      border-right: none;
    }
  }
`;

const AnyItem = styled.div`
  margin: 10px 0;
  height: 27px;
  background: #f4f4f4;
  font-size: 13px;
  color: #666;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.4);
  span {
    padding: 0 10px;
    em {
      font-weight: bold;
    }
    em:last-child {
      color: var(--main);
    }
  }
`;

const Row = styled.div`
  .bookItem {
    display: flex;
    align-items: center;
    font-size: 15px;

    padding: 5px 7px;
  }
  .triangleBox {
    display: flex;
    align-items: center;
    font-size: 11px;
  }
`;

const TextWrapper = styled.div`
  border-bottom: 2px solid #0182c3;
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  ul {
    position: absolute;
    right: 0;
    display: flex;
    font-size: 12px;
    align-items: center;
    li {
      a:hover {
        text-decoration: underline;
      }
    }
    li:last-child::after {
      content: "";
      margin-right: 0;
    }
    li::after {
      content: "|";
      margin: 0 5px;
    }
  }
`;

const BookInfo = styled.div`
  height: 190px;

  ul {
    display: flex;

    height: 100%;
    align-items: center;
    li:nth-child(odd) {
      text-align: center;
    }
    li.count {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      input {
        text-align: center;
        width: 30px;
        height: 15px;
        margin: 10px 0;
      }
      div {
        width: 30px;
        height: 15px;
        font-size: 12px;
        background-color: rgba(0, 0, 0, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        border-radius: 5px;
        cursor: pointer;
      }
    }
    .tax {
      padding: 0 10px;
      p {
        color: #15b2e7;
        font-size: 13px;
        margin: 10px 0;
      }
      a {
        font-size: 15px;
      }
    }
    figure {
      width: 94px;
      height: 137px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const PriceList = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  li {
    margin: 5px 0;
  }
  li:first-child {
    color: #aaa;
  }
`;

const ButtonList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  input:first-child {
    background-color: var(--main);
    color: rgba(255, 255, 255, 1);
  }
  input {
    border: 1px solid rgba(0, 0, 0, 0.4);
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 11px;
    font-weight: black;
    text-align: center;
    width: 77px;
    height: 20px;
  }
`;

const Cart_Table = ({ setCart, cart }) => {
 

  return (
    <Wrapper>
      <TaxSection>
        <input type="checkbox" />
        소득공제 대상 선택
        <FaRegQuestionCircle />
      </TaxSection>
      <ColName>
        <ul>
          <li style={{ width: "13%" }}>
            <input type="checkbox" checked name="" id="" />
            전체선택
          </li>
          <li style={{ width: "30%" }}>상품명</li>
          <li style={{ width: "15%" }}>판매가</li>
          <li style={{ width: "13%" }}>수량</li>
          <li style={{ width: "15%" }}>소계/금액</li>
          <li style={{ width: "14%" }}>주문/삭제</li>
        </ul>
      </ColName>
      <Row>
        <TextWrapper>
          <div className="bookItem">
            <IoSquare style={{ color: "#0182C3" }} />
            <strong>도서상품 |</strong>
            <span className="triangleBox">
              &nbsp;
              <GoTriangleRight />
              교보문고에서 배송하는 상품으로 다른 상품과 함께 주문할 수
              없습니다.
            </span>
          </div>
          <ul>
            <li>
              <Link>최근담은순</Link>
            </li>
            <li>
              <Link>상품명순</Link>
            </li>
            <li>
              <Link>분류별순</Link>
            </li>
          </ul>
          <div></div>
        </TextWrapper>
        <AnyItem
          style={{
            marginTop: "10px",
            justifyContent: "flex-start",
            fontWeight: "lighter",
          }}>
          <span>
            배송책임 : <em>교보문고</em> l 배송비 : <em>2,500원</em>
          </span>
        </AnyItem>
        {cart &&
          cart.map((v) => (
            <BookInfo>
              <ul>
                <li style={{ width: "13%" }}>
                  <figure>
                    <input type="checkbox" checked name="" id="" />
                    <img src={v.img} alt="" />
                  </figure>
                </li>
                <li className="tax" style={{ width: "30%" }}>
                  <p>[소득공제]</p>
                  <Link>{v.title}</Link>
                </li>
                <li style={{ width: "15%" }}>
                  <PriceList>
                    <li>
                      &nbsp;정가 {Number(v.priceStandard).toLocaleString()}원
                    </li>
                    <li>할인가 {Number(v.priceSales).toLocaleString()}원</li>
                    <li>&nbsp;적립 {Number(v.mileage).toLocaleString()}P</li>
                  </PriceList>
                </li>
                <li className="count" style={{ width: "13%" }}>
                  <input type="text" value={v.count} />
                  <div>변경</div>
                </li>
                <li style={{ width: "15%", color: "var(--main)" }}>
                  {(Number(v.priceSales) * v.count).toLocaleString()}원
                </li>
                <ButtonList style={{ width: "14%" }}>
                  <input type="button" value="주문하기"  onClick={()=>{

                  }}/>
                  <input
                    type="button"
                    value="삭제하기"
                    onClick={(e) =>
                      setCart((prev) => {
                        let copy = [...prev];
                        copy = copy.filter((data) => {
                          return data.cartId !== v.cartId;
                        });
                        alert('삭제완료')
                        return copy;
                      })
                    }
                  />
                </ButtonList>
              </ul>
            </BookInfo>
          ))}
      </Row>
      {cart && cart.length === 0 && (
        <AnyItem>
          <span>북카트에 담긴 상품이 없습니다.</span>
        </AnyItem>
      )}
    </Wrapper>
  );
};

export default Cart_Table;
