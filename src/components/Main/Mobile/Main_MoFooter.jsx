import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  padding: 12px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  color: #666;

  .ceo {
    font-size: 0.9em;
    margin-bottom: 12px;
  }
  address {
    margin-bottom: 21px;
    font-size: 0.7em;
    li {
      margin: 5px 0;
    }
  }
  .foot_menu {
    font-size: 0.8em;
    margin-bottom: 21px;
    li {
      margin: 8px 0;
      a:not(:last-child) {
        &::after {
          content: '|';
          margin: 0 5px;
        }
      }
    }
  }
  .caution,
  .copyR {
    font-size: 0.7em;
    margin-bottom: 21px;
  }
`;

export default function Main_MoFooter() {
  return (
    <Div>
      <p className="ceo">㈜인터파크커머스 대표이사 김동식</p>
      <address>
        <ul>
          <li>서울특별시 서초구 강남대로 447(서초동, 남서울빌딩)</li>
          <li>호스팅서비스 제공자 ㈜인터파크커머스</li>
          <li>
            고객센터 <a href="tel:1577-2555">1577-2555</a>
          </li>
          <li>
            <a href="mailto:helpshop@interparkshop.com">helpshop@interparkshop.com</a>
          </li>
          <li>사업자번호 422-81-03185</li>
          <li>통신판매업신고 2023-서울서초-0823</li>
        </ul>
      </address>
      <div className="foot_menu">
        <ul>
          <li>
            <a href="#">이용약관</a>
            <a href="#">개인정보 처리방침</a>
            <a href="#">사업자정보확인</a>
          </li>
          <li>
            <a href="#">구매안전 서비스</a>
            <a href="#">안전결제시스템</a>
            <a href="#">위치기반서비스 이용약관</a>
          </li>
        </ul>
      </div>
      <p className="caution">
        주식회사 인터파크커머스는 인터파크 쇼핑, 인터파크 도서의 통신판매중개자로서 통신판매의 당사자가 아니므로, 개별
        판매자가 등록한 오픈마켓 상품에 대해서 주식회사 인터파크커머스는 일체 책임을 지지 않습니다.
      </p>
      <p className="copyR">Copyright ⓒ Interpark Commerce Corp. All Rights Reserved.</p>
    </Div>
  );
}
