import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ServiceBenefit = styled.div`
  margin-bottom: 70px;
  .serviceBenefitHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid var(--hover);
    padding-bottom: 10px;
    h2 {
      font-size: 1.2em;
      font-weight: bold;
      color: var(--hover);
    }
    .notice {
      margin-left: auto;
      h5 {
        margin-right: 8px;
        display: inline-block;
        font-size: 0.8em;
        font-weight: bold;
        color: var(--hover);
        &::after {
          content: '>';
          font-size: 0.5em;
          margin-left: 4px;
        }
      }
      span {
        font-size: 0.6em;
        font-weight: bold;
        color: var(--default);
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
  .serviceBenefitBox {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 20px;
    h3 {
      font-size: 0.9em;
      font-weight: bold;
      word-spacing: -0.8px;
      margin-bottom: 10px;
    }
    li {
      margin-bottom: 10px;
      font-size: 0.7em;
      font-weight: bold;
      color: var(--default);
    }
  }
`;

const Column = styled.div`
  li {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export default function Main_ServiceBenefit() {
  return (
    <ServiceBenefit>
      <div className="serviceBenefitHeader">
        <h2>서비스 & 혜택</h2>
        <div className="notice">
          <h5>
            <Link to="">공지사항</Link>
          </h5>
          <span>2023년 추석 연휴 배송일정 안내</span>
        </div>
      </div>
      <div className="serviceBenefitBox">
        <Column>
          <h3>알뜰구매 혜택</h3>
          <ul>
            <li>제휴 할인카드</li>
            <li>최저가격 계산기</li>
            <li>문화누리카드</li>
          </ul>
        </Column>
        <Column>
          <h3>핵심서비스</h3>
          <ul>
            <li>인터파크 멤버쉽</li>
            <li>S-Point 적립</li>
          </ul>
        </Column>
        <Column>
          <h3>안심배송서비스</h3>
          <ul>
            <li>해외주문배송 서비스</li>
            <li>안심번호 서비스</li>
          </ul>
        </Column>
        <div className="col4">
          <h3>고객센터</h3>
          <ul>
            <li>일반문의 : 1577 - 2555</li>
            <li>eBook 문의 : 1588 - 2547</li>
            <li>월~금 (09:00~18:00), 토요일, 일요일, 공휴일 휴무</li>
          </ul>
        </div>
      </div>
    </ServiceBenefit>
  );
}
