import React from 'react'
import CategoryMain_banner from './CategoryMain_banner'
import CategoryMain_second_banner from './CategoryMain_second_banner'
import styled from 'styled-components'

const BannerContainerBox = styled.div`
  

`;

const BannerContainer = () => {
  return (
    <BannerContainerBox>
      <CategoryMain_banner/>
      <CategoryMain_second_banner/>
    </BannerContainerBox>
  )
}

export default BannerContainer
