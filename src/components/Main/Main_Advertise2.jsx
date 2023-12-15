import React from 'react';
import styled from 'styled-components';
import { Desktop, Mobile } from '../MediaQuery';

const Img = styled.img`
  margin: 0 auto;
`;

export default function Main_Advertise2() {
  return (
    <>
      <Desktop>
        <div className="AdBanner2" style={{ margin: '24px 0' }}>
          <a href="#">
            <Img src="/img/ad2.jpeg" style={{ width: '90%' }} alt="" />
          </a>
        </div>
      </Desktop>
      <Mobile>
        <div className="AdBanner2" style={{ margin: '10px 0' }}>
          <a href="#">
            <Img src="/img/Mobile/m_mo_wel_1208_1.png" style={{ width: '100%' }} alt="" />
          </a>
        </div>
      </Mobile>
    </>
  );
}
