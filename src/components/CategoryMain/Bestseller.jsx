import React from 'react'
import styled from "styled-components"

const BestSellerContainer = styled.div`
  width : 178px;
  padding: 12px 0 9px 11px;
`;

const Bestseller = () => {
  return (
    <BestSellerContainer>
      <h3>
        베스트셀러
      </h3>
    </BestSellerContainer>
  )
}

export default Bestseller
