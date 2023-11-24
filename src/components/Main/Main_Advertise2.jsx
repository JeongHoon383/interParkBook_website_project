import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 30px 0;
`;

const Img = styled.img`
  width: 100%;
`;

export default function Main_Advertise2() {
  return (
    <Div className="AdBanner2">
      <a href="#">
        <Img src="/img/ad2.jpeg" alt="" />
      </a>
    </Div>
  );
}
