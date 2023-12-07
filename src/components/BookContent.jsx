import React from "react";
import '../css/Search.css';
import styled from 'styled-components';
import Bookstar from "./BookStar";

export default function BookContent(book) {
  return (
    <div className="bookcontent">
      <div className="booktitle"><b>{book.title} {book.comment}</b></div>
      <div className="bookauthor">{book.author} / {book.company} </div>
      <br></br>
      <div className="bookprice">{book.price}원 {book.point}</div>
      
      <div><img src="" alt="" /></div>


       <div className="bookline">
          <Bookstar className="bookstar"/>
          <div className="booksaleindex">판매지수 {book.sale_index} </div>
       </div>

    </div>
  );
}
