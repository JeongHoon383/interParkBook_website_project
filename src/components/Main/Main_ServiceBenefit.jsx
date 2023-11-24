import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/main/serviceBenefit.css';

export default function Main_ServiceBenefit() {
  return (
    <div className="serviceBenefit">
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
        <div className="col1">
          <h3>알뜰구매 혜택</h3>
          <ul>
            <li>제휴 할인카드</li>
            <li>최저가격 계산기</li>
            <li>문화누리카드</li>
          </ul>
        </div>
        <div className="col2">
          <h3>핵심서비스</h3>
          <ul>
            <li>인터파크 멤버쉽</li>
            <li>S-Point 적립</li>
          </ul>
        </div>
        <div className="col3">
          <h3>안심배송서비스</h3>
          <ul>
            <li>해외주문배송 서비스</li>
            <li>안심번호 서비스</li>
          </ul>
        </div>
        <div className="col4">
          <h3>고객센터</h3>
          <ul>
            <li>일반문의 : 1577 - 2555</li>
            <li>eBook 문의 : 1588 - 2547</li>
            <li>월~금 (09:00~18:00), 토요일, 일요일, 공휴일 휴무</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
