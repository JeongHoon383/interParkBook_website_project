import React from "react";
import styled from 'styled-components';
import Bookstar from "./BookStar";


const Bookcontents = styled.div`
display:flex;
flex-direction: column; 
/*border:5px solid green;*/
font-size: 5px;
flex-wrap: nowrap;
line-height: 10px;
padding:5px;
`

const Booktitle = styled.div`
width:200px;
font-size:15px;
font-weight: 999;
cursor: pointer;
text-overflow: ellipsis;
white-space: nowrap;
height:17px;
overflow: hidden;
padding-top: 5px;
&:hover {
  text-decoration : underline;
}
`
const Bookauthor = styled.div`
color:rgb(193, 193, 193);
font-size: 10px;
padding-top: 5px;
`
const Bookprice = styled.div`
font-size: 10px;
font-weight: 999;
`
const Bookline = styled.div`
border-top: 1px solid lightgray;
border-bottom: 1px solid lightgray;
margin-top: 5px;
width:190px;
`
const Booksaleindex = styled.div`
font-size: 7px;
color:grey;
margin-bottom: 5px;
margin-top: 5px;
`

export default function BookContent(book) {
  return (
    
    <Bookcontents>

      <Booktitle>
        <b>{book.title} {book.comment}</b>
      </Booktitle>

      <Bookauthor>{book.author} / {book.company} </Bookauthor>
      <br></br>

      <Bookprice>
      {book.priceStandard}원 {book.mileage}
      </Bookprice>
      
      <div><img src="" alt="" /></div>

    <Bookline>
          <Bookstar className="bookstar"/>

          <Booksaleindex>
          판매지수 {book.salesPoint} 
          </Booksaleindex>

    </Bookline>


    </Bookcontents>

  );
}
