import React from 'react'
import styled from 'styled-components'

const NewbookContents = styled.div`
  margin-left : 35px;
  .newbook_ul li:not(:first-child){
    margin-bottom : 10px;
    font-size : 13px;
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
    font-weight : bold;
  }

  .newbook_price{
    font-weight : bold;
  }

  .newbook_annotation{
    width : 147px;
  }
`;

const NewbookContent = ({ content }) => {
  if(!content) return <></> 
    const {img, category, title, author, editor, price, point, annotation} = content;

  return (
    <NewbookContents>
      <ul className='newbook_ul'>
        <li><img className='newBook_img' src={img} alt="" /></li>
        <li className='newBook_category'>{category}</li>
        <li className='newBook_title'>{title}</li>
        <li className='newBook_autor grey'>{author}</li>
        <li className='newBook_editor grey'>{editor}</li>
        <li className='newbook_price'>{price}</li>
        <li className='newbook_point'>{point}</li>
        <li className='newbook_annotation'>{annotation}</li>
      </ul>
    </NewbookContents>
  )
}

export default NewbookContent
