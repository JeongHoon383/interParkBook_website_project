import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.div`
  height: 88px;
  border-bottom: 1px solid #c9c9c9;
  .signUpHeaderInner {
    width: 230px;
    margin: 20px auto 0 auto;
  }
  .signUpInner {
    img {
      width: 100%;
    }
  }
`;

export default function SignUpHeader() {
  return (
    <Header>
      <div className="signUpHeaderInner">
        <Link to="/">
          <img src="/img/logo.png" alt="" />
        </Link>
      </div>
    </Header>
  );
}
