import React from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import '../css/login/signUp.css';
import { useNavigate } from 'react-router-dom';

export default function SignUpDone() {
  const navigate = useNavigate();

  return (
    <div className="signUpDoneContent">
      <div className="signUpDoneInner">
        <div className="DoneIcon">
          <FaCircleCheck />
        </div>
        <div className="signUpDoneText">
          <h3>인터파크 회원가입이 완료되었습니다</h3>
          <h5>로그인 후 인터파크의 다양한 서비스를 이용하실 수 있습니다</h5>
        </div>
        <div className="linkBtn">
          <button
            onClick={() => {
              navigate('/');
            }}
          >
            홈으로 이동
          </button>
          <button
            onClick={() => {
              navigate('/login');
            }}
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}
