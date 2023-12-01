import React from "react";
import styled from "styled-components";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GoTriangleRight } from "react-icons/go";
import { IoSquare } from "react-icons/io5";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  margin-top: 60px;
`;
const TaxSection = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom:10px;
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
    .count_list{
      text-align:center;
      display:flex; 
      flex-direction:column;
      align-items:center;
  

span{
  width:30px;
  height:15px;
  font-size:10px;
  background:#8F8F8F;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius:5px;
  color:#FFFFFF;
}
      input{
        outline:none;
        border:1px solid rgba(0,0,0,0.4);
        font-size:12px;
        background:#F2F2F2;
        width:30px;
        height:16px;
        margin-bottom:10px;
 
      }
    }
    li:first-child{
     display:flex;
     align-items: center;
     justify-content: center;
     .book_check{
      margin-right:10px;
     }
     
    }
 
    .tax {
      padding: 0 30px;
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


const SumList = styled.li`
display:flex;
align-items:center;
justify-content:flex-end;

em{
  color:red;
  font-weight:bold;
  font-size:16px;
 
}
`

const Cart_Table = () => {
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
        <BookInfo>
          <ul>
            <li style={{ width: "13%" }}>
              <figure>
                <input type="checkbox" checked className="book_check" id="" />
                <img
                  src="https://image.aladin.co.kr/product/32806/58/cover/k832936705_1.jpg"
                  alt=""
                />
              </figure>
            </li>
            <li className="tax" style={{ width: "30%" }}>
              <p>[소득공제]</p>
              <Link>세이노의 가르침</Link>
            </li>
            <li style={{ width: "15%" }}>
              <PriceList>
                <li>&nbsp;정가 7,200원</li>
                <li>할인가 6,480원</li>
                <li>&nbsp;적립 360P</li>
              </PriceList>
            </li>
            <li className="count_list" style={{ width: "13%" }}><input type="text" value='1' /><span>변경</span></li>
            <SumList style={{ width: "15%" }}><em>6,480원</em> </SumList>
            <ButtonList style={{ width: "14%" }}>
              <input type="button" value="주문하기" />
              <input type="button" value="삭제하기" />
            </ButtonList>
          </ul>
        </BookInfo>
      </Row>
      <AnyItem>
        <span>북카트에 담긴 상품이 없습니다.</span>
      </AnyItem>
    </Wrapper>
  );
};

export default Cart_Table;
