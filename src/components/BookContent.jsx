import React from "react";
import '../Search.css';
import styled from 'styled-components';

export default function BookContent(book) {
  return (
    <div className="bookcontent">
      <div className="booktitle"><b>{book.title} {book.comment}</b></div>
      <div classname="bookauthor">{book.author} / {book.company} </div>
      <div className="bookprice">{book.price}원 {book.point}원</div>
      <div className="booksaleindex">판매지수 {book.sale_index} </div>
      <div className="review">회원리뷰({book.review}건) 리뷰 총점10.0 </div>
    </div>
  );
}
