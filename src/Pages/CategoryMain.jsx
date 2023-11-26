import React from 'react'
import CategoryMain_banner from '../components/CategoryMain/CategoryMain_banner'
import CategoryMain_second_banner from '../components/CategoryMain/CategoryMain_second_banner'
import CategoryMainNewBook from '../components/CategoryMain/CategoryMainNewBook'
import SteadySeller from '../components/CategoryMain/SteadySeller'
import styled from "styled-components"


const CategoryMain = () => {
  return (
    <CategoryMainContainer>
      <CategoryMain_banner/>
      <CategoryMain_second_banner/>
      <CategoryMainNewBook/>
      <SteadySeller/>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </CategoryMainContainer>
  )
}

const CategoryMainContainer = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
`;

export default CategoryMain
