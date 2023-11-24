import React from 'react'
import styled from "styled-components"

const NewbookContainer = styled.div`
    float: left;
    height: 483px;
    border-left: solid 1px #d8d8d8;
    text-align: left;
    .newBookText{
      padding: 20px 0 19px 20px;
    }
`;

const Newbook = () => {
  return (
    <NewbookContainer>
      <div className='newBookText'>새로 나온 책</div>
    </NewbookContainer>
  )
}

export default Newbook
