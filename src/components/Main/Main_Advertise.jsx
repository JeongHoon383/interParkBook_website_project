import React from 'react';
import styled from 'styled-components';
import { Desktop, Mobile } from '../MediaQuery';

const AdvertiseWrap = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100%;
  }
`;

export default function Main_Advertise() {
  return (
    <Desktop>
      <AdvertiseWrap>
        <div className="advertiseBox">
          <img src="img/AdvertiseBanner/midAdBanner1.jpg" alt="" />
        </div>
        <div className="advertiseBox">
          <img src="img/AdvertiseBanner/midAdBanner2.jpg" alt="" />
        </div>
        <div className="advertiseBox">
          <img src="img/AdvertiseBanner/midAdBanner3.jpg" alt="" />
        </div>
      </AdvertiseWrap>
    </Desktop>
  );
}
