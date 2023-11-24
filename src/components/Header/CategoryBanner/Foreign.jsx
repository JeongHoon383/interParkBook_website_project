import React from 'react';

export default function Foreign() {
  return (
    <div className="foreign category">
      <h3>외국도서</h3>
      <div className="categoryNav">
        <ul>
          <li>
            <a href="">어린이</a>
          </li>
          <li>
            <a href="">문학</a>
          </li>
          <li>
            <a href="">ELT・사전</a>
          </li>
          <li>
            <a href="">컴퓨터</a>
          </li>
          <li>
            <a href="">경제・인문</a>
          </li>
          <li>
            <a href="">실용・예술</a>
          </li>
          <li>
            <a href="">대학・전문서적</a>
          </li>
          <li>
            <a href="">해외잡지</a>
          </li>
          <li>
            <a href="">학습교구/게임</a>
          </li>
          <li>
            <a href="">프랑스도서</a>
          </li>
          <li className="reservationSell">
            <a href="">예약판매</a>
          </li>
          <li className="translateBook">
            <a href="">원서vs번역서</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
