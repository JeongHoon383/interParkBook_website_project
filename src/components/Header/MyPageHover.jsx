import React from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export default function MyPageHover() {
  return (
    <div className="myPageHover">
      <ul>
        <li className="myPageHover_li mp">
          마이페이지
          <ArrowDropUpIcon fontSize="small" />
        </li>
        <li className="myPageHover_li">마이도서</li>
        <li className="myPageHover_li">주문배송조회</li>
        <li className="myPageHover_li">S-Point 적립 </li>
        <li className="myPageHover_li">나의할인쿠폰</li>
        <li className="myPageHover_li">회원수정</li>
      </ul>
    </div>
  );
}
