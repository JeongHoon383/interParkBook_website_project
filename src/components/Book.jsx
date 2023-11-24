import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import BookAvatar from "./BookAvatar";
import BookContent from "./BookContent";
import BookBuy from "./BookBuy";
import BookList from "./BookList";
import axios from 'axios';
import cors from 'cors';

export default function Book({ filename }) {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/${filename}`)
      .then((result) => {
        // { result: { data: [{ bid: 1, ...}] } }
        console.log(result.data);
        setBookList(result.data);
      })
      .catch((err) => console.log(err));

  }, []);

  return (
    <BookList>
      {bookList.map((book) =>

        <div classname="book">
          <BookAvatar image={book.image} />
          <BookContent
            top_tag={book.top_tag}
            kind={book.kind}
            title={book.title}
            comment={book.comment}
            author={book.author}
            company={book.company}
            pdate={book.pdate}
            price={book.price}
            point={book.point}
            sale_index={book.sale_index}
            review={book.review}
            de_date={book.de_date}
            goods={book.goods}
          />
          <BookBuy />
        </div>

      )}
    </BookList>
  )
}
