import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'

const NewbookContents = styled.div`
  margin-left : 26px;
  .newbook_ul li:not(:first-child){
    margin-bottom : 10px;
    font-size : 13px;
  }

  .newbook_ul{
    width : 165px;
  }

  .newBook_img{
    width : 147px;
    height : 213px;
    margin-bottom : 15px;
  }
  
  .newBook_category{
    color : var(--main);
  }

  .newBook_title{
    width : 147px;
    margin-bottom : 10px;
    font-weight : bold;
  }

  .newBook_title:hover{
    text-decoration : underline;
  }

  .newBook_autor{
    width : 147px;
  }

  .newbook_price{
    font-weight : bold;
  }

  .newbook_annotation{
    width : 147px;
    overflow : hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const NewbookContent = ({ content }) => {
  if(!content) return <></> 
    const {cover, title, author, publisher, priceSales, mileage, description} = content;

  return (
    <NewbookContents>
      <ul className='newbook_ul'>
        <Link to='/book/:id'><li><img className='newBook_img' src={cover} alt="" /></li></Link>
        {/* <li className='newBook_category'>{category}</li> */}
        <Link to='/book/:id'><li className='newBook_title'>{title}</li></Link>
        <li className='newBook_autor grey'>{author}</li>
        <li className='newBook_editor grey'>{publisher}</li>
        <li className='newbook_price'>{[priceSales].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</li>
        <li className='newbook_point'>{mileage}P</li>
        <li className='newbook_annotation grey'>{description}</li>
      </ul>
    </NewbookContents>
  )
}

export default NewbookContent
