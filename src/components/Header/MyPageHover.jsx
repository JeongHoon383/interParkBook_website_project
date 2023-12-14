import React from 'react';
import { IoMdArrowDropup } from 'react-icons/io';
import styled from 'styled-components';

const Div = styled.div`
  width: 70px;
  top: 7px;
  left: -5px;
  padding-left: 4px;
  position: absolute;
  text-align: left;
  border: 1px solid var(--main);
  background-color: #fff;
  color: #000;

  ul {
    font-size: 0.9em;
    font-weight: normal;
    li {
      line-height: 200%;
    }
    .mp {
      display: flex;
      align-items: center;
    }
  }
`;

export default function MyPageHover() {
  return (
    <Div>
      <ul>
        <li className="mp">
          마이페이지
          <IoMdArrowDropup fontSize="small" />
        </li>
        <li>마이도서</li>
        <li>주문배송조회</li>
        <li>S-Point 적립 </li>
        <li>나의할인쿠폰</li>
        <li>회원수정</li>
      </ul>
    </Div>
  );
}
