import React from 'react';
import * as Styled from './StyledCategory';

export default function Domestic() {
  return (
    <Styled.Category>
      <h3>국내도서</h3>
      <div className="categoryNav">
        <ul>
          <li>
            <a href="">소설</a>
          </li>
          <li>
            <a href="">장르소설</a>
          </li>
          <li>
            <a href="">시・에세이</a>
          </li>
          <li>
            <a href="">경제경영</a>
          </li>
          <li>
            <a href="">자기계발</a>
          </li>
          <li>
            <a href="">사회과학</a>
          </li>
          <li>
            <a href="">역사・문화</a>
          </li>
          <li>
            <a href="">예술・대중문화</a>
          </li>
          <li>
            <a href="">인문</a>
          </li>
          <li>
            <a href="">자연・과학</a>
          </li>
          <li>
            <a href="">종교・역학</a>
          </li>
          <li>
            <a href="">유아</a>
          </li>
          <li>
            <a href="">아동</a>
          </li>
          <li>
            <a href="">가정과생활</a>
          </li>
          <li>
            <a href="">청소년</a>
          </li>
          <li>
            <a href="">초등학습</a>
          </li>
          <li>
            <a href="">중등학습</a>
          </li>
          <li>
            <a href="">고등학습</a>
          </li>
          <li>
            <a href="">국어・외국어・사전</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">자격서・수험서</a>
          </li>
          <li>
            <a href="">공무원수험서</a>
          </li>
          <li>
            <a href="">컴퓨터・인터넷</a>
          </li>
          <li>
            <a href="">전공・대학교재</a>
          </li>
          <li>
            <a href="">여행</a>
          </li>
          <li>
            <a href="">취미레저</a>
          </li>
          <li>
            <a href="">건강뷰티</a>
          </li>
          <li>
            <a href="">잡지</a>
          </li>
          <li>
            <a href="">만화・라이트노벨</a>
          </li>
          <li>
            <a href="">유아동전집</a>
          </li>
          <Styled.PointLi>
            <a href="">예약판매</a>
          </Styled.PointLi>
        </ul>
      </div>
    </Styled.Category>
  );
}
