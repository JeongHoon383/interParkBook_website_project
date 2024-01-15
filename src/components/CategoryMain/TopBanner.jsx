import React from "react";
import styled from "styled-components";
import CategoryList_CaNav from "../CategoryList/asideLeft/CategoryList_CaNav";
import BannerContainer from "./BannerContainer";


const TopBannerContainer = styled.div`
  display : flex;
  width : 958px;
  text-align: left;
  background-color: #fff;
`

const TopBanner = () => {
  return (
    <TopBannerContainer>
      <CategoryList_CaNav/>
      <BannerContainer/>
    </TopBannerContainer>
  )
}

export default TopBanner
