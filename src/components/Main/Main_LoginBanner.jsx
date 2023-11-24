import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Div = styled.div`
  margin: 30px 0;
`;

const Img = styled.img`
  width: 100%;
`;

export default function Main_LoginBanner() {
  return (
    <Div className="loginBanner">
      <Link to="">
        <Img src="/img/banner_recommend_login.png" alt="" />
      </Link>
    </Div>
  );
}
