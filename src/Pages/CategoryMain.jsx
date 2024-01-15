import React from 'react'
import TopBanner from '../components/CategoryMain/TopBanner'
import CategoryList_FloatingMenu from '../components/CategoryList/CategoryList_FloatingMenu'
import CategoryMainNewBook from '../components/CategoryMain/CategoryMainNewBook'
import SteadySeller from '../components/CategoryMain/SteadySeller'
import InterParkOnly from '../components/CategoryMain/InterParkOnly'
import Hot from '../components/CategoryMain/Hot'
import Culture from '../components/CategoryMain/Culture'
import RecentBook from '../components/CategoryMain/RecentBook'
import styled from "styled-components"
import {getUser} from '../util/localStorage.js';


const CategoryMain = () => {
  const userInfo = getUser();
  const userId = userInfo ? userInfo.id : undefined;


  return (
    <CategoryMainContainer>
    <div className="topBanner_container">
      <TopBanner/>
      <CategoryMainNewBook/>
      <SteadySeller/>
      <InterParkOnly/>
      <Hot/>
      <Culture/>
      <RecentBook/>
    </div>
    <CategoryList_FloatingMenu
    userId={userId}
    />
    </CategoryMainContainer>
  )
}

const CategoryMainContainer = styled.div`

    margin: 0 auto;
    margin-top: 20px;
    width: 60%;
    display : flex;
    align-items: flex-start;

    .topBanner_container{
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
  }
`;

export default CategoryMain
