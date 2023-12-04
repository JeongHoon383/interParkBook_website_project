import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../css/login/login.css';

export default function Login() {
  const [isTab, setIsTab] = useState(0);
  const [login, checkLogin] = useState({ id: '', password: '' });
  const [orderInfo, checkOrderInfo] = useState({ orderName: '', orderPhone: '', orderPW: '' });

  const loginTab = [
    { name: '회원', content: <Member login={login} checkLogin={checkLogin} /> },
    { name: '비회원', content: <NotMember orderInfo={orderInfo} checkOrderInfo={checkOrderInfo} /> },
  ];

  const handleClick = (e) => {
    setIsTab(e);
  };

  return (
    <div className="loginBox">
      <div className="loginContent">
        <div className="loginTabs">
          <ul className="loginTabWrap">
            {loginTab.map((v, i) => (
              <li
                key={i}
                className={i === isTab ? 'loginTabLi clickedTab' : 'loginTabLi'}
                onClick={() => {
                  handleClick(i);
                }}
              >
                {v.name}
              </li>
            ))}
          </ul>
        </div>
        <div>{loginTab[isTab].content}</div>
      </div>
    </div>
  );
}

function Member(props) {
  const inputId = useRef(null);
  const inputPassword = useRef(null);

  const memberHandleSubmit = (e) => {
    e.preventDefault();
    if (props.login.id === '') {
      alert('아이디를 입력해주세요');
      return inputId.current.focus();
    } else if (props.login.password === '') {
      alert('비밀번호를 입력해주세요');
      return inputPassword.current.focus();
    }
  };

  const memberHandleChange = (e) => {
    const { name, value } = e.target;
    props.checkLogin({ ...props.login, [name]: value });
  };

  return (
    <form action="" name="MemberForm" onSubmit={memberHandleSubmit}>
      <fieldset>
        <input type="text" placeholder="아이디" name="id" value={props.login.id} onChange={props.memberHandleChange} />
        <input
          type="password"
          placeholder="비밀번호"
          name="password"
          value={props.login.password}
          onChange={props.memberHandleChange}
        />
        <button type="submit">로그인</button>
        <div className="loginCheck">
          <div className="checkBox">
            <input type="checkbox" name="loginStay" id="loginStay" />
            <label htmlFor="loginStay">
              <span>로그인 상태 유지</span>
            </label>
          </div>
          <div className="checkBox">
            <input type="checkbox" name="idSave" id="idSave" />
            <label htmlFor="idSave">
              <span>아이디 저장</span>
            </label>
          </div>
        </div>
        <div className="snsLogin">
          <div className="naverLogin">
            <em className="snsIcon naver"></em>
            <span>네이버 로그인</span>
          </div>
          <div className="kakaoLogin">
            <em className="snsIcon kakao"></em>
            <span>카카오 로그인</span>
          </div>
        </div>
        <div
          style={{
            color: '#999',
            margin: '18px 0',
            fontSize: '0.9em',
            borderBottom: '1px solid #bbbbbb',
            paddingBottom: '6px',
          }}
        >
          개인정보 보호를 위해 공용 PC에서 사용 후 SNS 계정의 로그아웃 상태를 반드시 확인해주세요.
        </div>
        <ul>
          <li>
            <Link to="#">아이디 찾기</Link>
          </li>
          <li>
            <Link to="#">비밀번호 찾기</Link>
          </li>
          <li>
            <Link to="#">회원가입</Link>
          </li>
        </ul>
      </fieldset>
    </form>
  );
}

function NotMember(props) {
  const inputOrderName = useRef(null);
  const inputOrderPhone = useRef(null);
  const inputOrderPW = useRef(null);

  const notMemberHandleSubmit = (e) => {
    e.preventDefault();
    if (props.orderInfo.orderName === '') {
      alert('주문자명을 입력해주세요');
      return inputOrderName.current.focus();
    } else if (props.orderInfo.orderPhone === '') {
      alert('휴대폰번호를 입력해주세요');
      return inputOrderPhone.current.focus();
    } else if (props.orderInfo.orderPW === '') {
      alert('비밀번호를 입력해주세요');
      return inputOrderPW.current.focus();
    }
  };

  const notMemberHandleChange = (e) => {
    const { name, value } = e.target;
    props.checkOrderInfo({ ...props.orderInfo, [name]: value });
  };

  return (
    <fieldset>
      <div style={{ margin: '18px 0', fontSize: '0.9em' }}>
        비회원으로 <span style={{ color: '#ef3e42' }}>구매 시 입력하신 정보</span>로 로그인해 주세요.
      </div>
      <form action="" name="NotMemberForm" onSubmit={notMemberHandleChange}>
        <input
          type="text"
          placeholder="주문자명"
          name="orderName"
          value={props.orderInfo.orderName}
          onChange={props.notMemberHandleChange}
        />
        <input
          type="text"
          placeholder="휴대폰번호 (-없이 입력)"
          name="orderPhone"
          value={props.orderInfo.orderPhone}
          onChange={props.notMemberHandleChange}
        />
        <input
          type="password"
          placeholder="비밀번호"
          name="orderPW"
          value={props.orderInfo.orderPW}
          onChange={props.notMemberHandleChange}
        />
        <button type="submit">로그인</button>
        <ul>
          <li>
            <Link to="#">주문비밀번호 찾기</Link>
          </li>
          <li>
            <Link to="#">회원가입</Link>
          </li>
        </ul>
      </form>
    </fieldset>
  );
}
