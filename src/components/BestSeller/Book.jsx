import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import BookAvatar from "./BookAvatar";
import BookContents from "./BookContent";
import BookList from "./BookList";
import styled from "styled-components";


const Mombook = styled.div`
display: flex;
flex-wrap: wrap; 
//border: 10px solid red;

//justify-content: center;
justify-content:space-between;
margin: 0 auto;
padding-top:10px;
margin-left: 220px;
margin-top : 17px;

//width:70%;


`
const Books = styled.div`
position: relative;
margin-left: 10px;
flex-wrap: nowrap;
clear: both;
flex-direction: row;
margin-top: 10px;
margin-bottom: 15px;
//width: 50%;

width: calc(33.3333% - 10px);
box-sizing: border-box;
`

export default function Book({ filename, BestSeller}) {   //BestSeller추가
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    fetch(`data/${filename}_book.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookList(data);
      });
  }, []);

  BestSeller = BestSeller || [];
  
  return (
         


<Mombook>
      <BookList>
        {BestSeller.map((book) =>
          

          <Books key={book.id}>
            <BookAvatar image={book.cover}/>
                      
            <div>
              <BookContents
                title={book.title}
                author={book.author}
                publisher={book.publisher}
                priceStandard={book.priceStandard}
                pubDate={book.pubDate}
                salesPoint={book.salesPoint}
                review={book.review}

              />
            </div>

          </Books>
    
        )}
      </BookList>

</Mombook>





  )
}