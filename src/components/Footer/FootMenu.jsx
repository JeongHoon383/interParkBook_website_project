import React from 'react';
import '../../css/footer/footMenu.css';

export default function FootMenu() {
  return (
    <div className="footMenu">
      <ul className="footMenu_link">
        <li className="firstLink">
          <a href="#">개인정보처리방침</a>
        </li>
        <li>
          <a href="#">청소년보호정책</a>
        </li>
        <li>
          <a href="#">이용약관</a>
        </li>
        <li>
          <a href="#">위치기반서비스 이용약관</a>
        </li>
        <li>
          <a href="#">회사소개</a>
        </li>
        <li>
          <a href="#">수익배분프로그램</a>
        </li>
        <li>
          <a href="#">광고안내</a>
        </li>
        <li>
          <a href="#">담당자안내</a>
        </li>
        <li>
          <a href="#">판매자매니저</a>
        </li>
      </ul>
    </div>
  );
}
