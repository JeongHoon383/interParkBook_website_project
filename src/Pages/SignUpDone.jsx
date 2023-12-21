import React from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
  height: 630px;
  .signUpDoneInner {
    width: 40%;
    margin: 0 auto;
    padding: 120px;
    text-align: center;
  }

  .DoneIcon {
    font-size: 3em;
    color: var(--main);
    svg {
      margin: 0 auto;
    }
  }
  .signUpDoneText {
    margin: 20px 0 50px 0;
    h3 {
      margin-bottom: 20px;
      font-family: 'YES24GothicB';
      font-size: 1.7em;
      color: var(--default);
    }
    h5 {
      color: #999;
    }
  }
`;

const LinkBtn = styled.div`
  button {
    margin: 6px 15px 12px 0;
    width: 130px;
    height: 40px;
    border-radius: 3px;
    font-family: 'YES24GothicB';
    text-align: center;
    color: #fff;
    &:first-child {
      background-color: var(--default);
    }
    &:last-child {
      background-color: var(--main);
    }
  }
`;

export default function SignUpDone() {
  const navigate = useNavigate();

  return (
    <Content>
      <div className="signUpDoneInner">
        <div className="DoneIcon">
          <FaCircleCheck />
        </div>
        <div className="signUpDoneText">
          <h3>인터파크 회원가입이 완료되었습니다</h3>
          <h5>로그인 후 인터파크의 다양한 서비스를 이용하실 수 있습니다</h5>
        </div>
        <LinkBtn>
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
        </LinkBtn>
      </div>
    </Content>
  );
}
