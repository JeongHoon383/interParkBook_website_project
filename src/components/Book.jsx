import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import BookAvatar from "./BookAvatar";
import BookContent from "./BookContent";
import BookList from "./BookList";


export default function Book({ filename }) {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    fetch(`data/${filename}_book.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookList(data);
      });
  }, []);

  return (
   
    
    
    
    <div className="mombook">



      <BookList>
        {bookList.map((book) =>

          <div classname="book">
            <BookAvatar image={book.image} />
            <br></br>

            <div>
              <BookContent
                title={book.title}
                author={book.author}
                company={book.company}
                price={book.price}
                pdate={book.pdate}
                sale_index={book.sale_index}
                review={book.review}

              />
            </div>
          </div>

        )}
      </BookList>
    </div>
  )
}
