import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/header/signupHeader.css';

export default function SignUpHeader() {
  return (
    <div className="signUpHeader">
      <div className="signUpHeaderInner">
        <Link to="/">
          <img src="/img/logo.png" alt="" />
        </Link>
      </div>
    </div>
  );
}
