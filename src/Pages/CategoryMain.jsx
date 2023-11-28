import React from 'react'
import CategoryMain_banner from '../components/CategoryMain/CategoryMain_banner'
import CategoryMain_second_banner from '../components/CategoryMain/CategoryMain_second_banner'
import CategoryMainNewBook from '../components/CategoryMain/CategoryMainNewBook'
import SteadySeller from '../components/CategoryMain/SteadySeller'
import InterParkOnly from '../components/CategoryMain/InterParkOnly'
import Hot from '../components/CategoryMain/Hot'
import Culture from '../components/CategoryMain/Culture'
import RecentBook from '../components/CategoryMain/RecentBook'
import styled from "styled-components"


const CategoryMain = () => {
  return (
    <CategoryMainContainer>
      <CategoryMain_banner/>
      <CategoryMain_second_banner/>
      <CategoryMainNewBook/>
      <SteadySeller/>
      <InterParkOnly/>
      <Hot/>
      <Culture/>
      <RecentBook/>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </CategoryMainContainer>
  )
}

const CategoryMainContainer = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;

    *{
      font-size : 13px;
    }

    h3{
      font-size : 15px;
      font-weight : bold;
    }

    .grey{
      font-size : 12px;
      color : #999;
    }
`;

export default CategoryMain
