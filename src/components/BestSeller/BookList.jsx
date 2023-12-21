import React from "react";
import styled from "styled-components";

const Booklists = styled.div`
display: flex;
flex-direction: row; 
width: 100%;
flex-wrap: wrap;
justify-content: space-between;
`

export default function BookList({ children }) {

  return (
  
    <Booklists>
      {children}
    </Booklists>
  )


}