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
`;

const NewbookContent = () => {
  return (
    <NewbookContents>
      <ul className='newbook_ul'>
        <li><img className='newBook_img' src="/img/CategoryMain/newbook_img/newbook_img1.jpeg" alt="" /></li>
        <li className='newBook_category'>[경제 경영]</li>
        <li className='newBook_title'>잘 잃어야 잘 번다</li>
        <li className='newBook_autor grey'>톰 호가드 저정진근 역</li>
        <li className='newBook_editor grey'>에디터</li>
        <li className='newbook_price'>17,820원(10% 할인)</li>
        <li className='newbook_point'>990P</li>
        <li className='newbook_annotation'>투자는 왜 실패하는가?</li>
      </ul>
    </NewbookContents>
  )
}

export default NewbookContent
