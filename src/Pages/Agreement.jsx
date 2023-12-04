import React from 'react';
import '../css/login/signUp.css';

export default function Agreement() {
  return (
    <div className="signUpContent">
      <div className="signUpInner">
        <form>
          <fieldset>
            <div>
              <label htmlFor="id">
                <span>아이디</span>
              </label>
              <input type="text" placeholder="6~20자 영문, 숫자" name="id" />
            </div>
            <div>
              <label htmlFor="password">
                <span>비밀번호</span>
              </label>
              <input type="password" name="password" id="password" placeholder="8~12자 영문, 숫자, 특수문자" />
            </div>
            <div>
              <label htmlFor="passwordCheck">
                <span>비밀번호 확인</span>
              </label>
              <input
                type="password"
                name="passwordCheck"
                id="passwordCheck"
                placeholder="8~12자 영문, 숫자, 특수문자"
              />
            </div>
            <div>
              <label htmlFor="name">
                <span>이름</span>
              </label>
              <input type="text" name="name" id="name" />
            </div>
            <div>
              <label htmlFor="email">
                <span>이메일</span>
              </label>
              <input type="email" name="email" id="email" />
              <select name="selectEmail" id="selectEmail">
                <option value="self">직접입력</option>
                <option value="@naver.com">@naver.com</option>
                <option value="@gmail.com">@gmail.com</option>
                <option value="@nate.com">@nate.com</option>
              </select>
            </div>
            <div>
              <label htmlFor="phone">
                <span>휴대폰</span>
              </label>
              <input type="text" name="phone" id="phone" placeholder="010 1234 5678" />
              <button>인증번호 받기</button>
            </div>
            <div className="agree">
              <div className="agreeAll">
                <div className="checkBox">
                  <input type="checkbox" name="agreeAll" id="agreeAll" />
                  <label htmlFor="agreeAll">
                    <span>약관 전체 동의</span>
                  </label>
                </div>
              </div>
              <div className="required">
                <div>인터파크커머스 필수 동의 항목</div>
                <div className="checkBox">
                  <input type="checkbox" name="required" id="required" />
                  <label htmlFor="required">
                    <span>[필수] 이용약관</span>
                  </label>
                </div>
                <div className="checkBox">
                  <input type="checkbox" name="required" id="required" />
                  <label htmlFor="required">
                    <span>[필수] 개인정보 수집동의서</span>
                  </label>
                </div>
              </div>
              <div className="option">
                <div>선택 동의 항목</div>
                <div className="checkBox">
                  <input type="checkbox" name="option" id="option" />
                  <label htmlFor="option">
                    <span>[선택] 개인정보 수집동의서</span>
                  </label>
                </div>
                <div className="checkBox">
                  <input type="checkbox" name="option" id="option" />
                  <label htmlFor="option">
                    <span>[선택] 위치기반서비스 이용약관</span>
                  </label>
                </div>
                <div className="checkBox">
                  <input type="checkbox" name="option" id="option" />
                  <label htmlFor="option">
                    <span>[선택] 제 3자 마케팅 활용동의서 전체동의</span>
                  </label>
                  <div>쇼핑 2,000원 할인쿠폰 증정</div>
                  <div>맞춤서비스 제공을 위해 마케팅활용에 동의하여 주신 고객님께 쇼핑 2천원 할인쿠폰을 드립니다.</div>
                </div>
              </div>
            </div>
            <button type="submit"></button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
