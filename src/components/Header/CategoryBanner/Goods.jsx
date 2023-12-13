import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './StyledCategory';

export default function Goods() {
  return (
    <Styled.Category>
      <Styled.Title>
        <Link to="#">굿즈</Link>
      </Styled.Title>
      <div className="categoryNav">
        <ul>
          <li>
            <a href="">문구/팬시</a>
          </li>
          <li>
            <a href="">사무/학용</a>
          </li>
          <li>
            <a href="">학습</a>
          </li>
          <li>
            <a href="">독서용품</a>
          </li>
        </ul>
      </div>
    </Styled.Category>
  );
}
