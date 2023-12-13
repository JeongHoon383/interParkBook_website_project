import React from 'react';
import styled from 'styled-components';
import Main_MainBannerTab from './Main_MainBannerTab';

const Content = styled.div`
  margin: 0 auto;
`;

export default function MainBanner() {
  return (
    <div className="mainBanner">
      <Content>
        <Main_MainBannerTab />
      </Content>
    </div>
  );
}
