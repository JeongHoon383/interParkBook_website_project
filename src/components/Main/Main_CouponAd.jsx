import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 30px 0;
`;

const Img = styled.img`
  width: 100%;
`;

export default function Main_CouponAd() {
  return (
    <Div className="couponAdBanner">
      <a href="#">
        <Img src="/img/couponAd.jpg" alt="" />
      </a>
    </Div>
  );
}
