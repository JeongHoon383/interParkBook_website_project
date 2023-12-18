import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as cookies from '../../util/cookies.js';
import { Desktop, Mobile } from '../MediaQuery';

const Div = styled.div`
  margin: 30px 0;
`;

const Img = styled.img`
  width: 100%;
`;

export default function Main_LoginBanner() {
  return (
    <>
      <Desktop>
        <Div className="loginBanner">
          {!cookies.getCookie('rememberUserInfo') ? (
            <Link to="/login">
              <Img src="/img/banner_recommend_login.png" alt="" />
            </Link>
          ) : null}
        </Div>
      </Desktop>
      <Mobile>
        <div style={{ margin: '10px 0 10px 0' }}>
          {!cookies.getCookie('rememberUserInfo') ? (
            <Link to="/login">
              <Img src="/img/Mobile/m_btn_login_dark.png" alt="" />
            </Link>
          ) : null}
        </div>
      </Mobile>
    </>
  );
}
