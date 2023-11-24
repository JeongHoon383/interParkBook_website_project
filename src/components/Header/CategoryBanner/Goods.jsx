import React from 'react';
import { Link } from 'react-router-dom';

export default function Goods() {
  return (
    <div className="goods category">
      <h3 className="goodsTitle">
        <Link to="#">굿즈</Link>
      </h3>
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
    </div>
  );
}
