import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Input = styled.input`
  display: inline-block;
  width: 70%;
  height: 40px;
  padding-left: 8px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
`;

export default function SignForm() {
  const [checkItem, setCheckItem] = useState([]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useFormContext();

  const handleNumber = (e) => {
    const phoneReg = /[ \{\}\[\]\/?.₩,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
    if (phoneReg.test(e.key)) e.preventDefault();
  };

  const handleSelect = (e) => {
    e.target.checked
      ? setCheckItem([...checkItem, e.target.id])
      : setCheckItem(checkItem.filter((el) => el !== e.target.id));
  };

  const handleSelectAll = (e) => {
    e.target.checked
      ? setCheckItem(["required01", "required02", "required03"])
      : setCheckItem([]);
  };

  const isAllChecked = checkItem.length === 3;
  const disabled = !isAllChecked;

  const onSubmit = (data) => {
    axios({
      method: "post",
      url: "http://127.0.0.1:9090/member/",
      data: data,
    })
      .then((result) => {
        if (result.data === "success") {
          navigate("/member/done");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="signUpContent">
      <div className="signUpInner">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <div>
              <label htmlFor="id" className="textLabel">
                <span>아이디</span>
                <span className="requireIcon"> *</span>
              </label>
              <Input
                type="text"
                name="id"
                id="id"
                placeholder="6~20자 영문, 숫자"
                {...register("id", {
                  required: true,
                })}
              />
            </div>
            <div className="messageDiv">{errors.id?.message}</div>
            <div>
              <label htmlFor="password" className="textLabel">
                <span>비밀번호</span>
                <span className="requireIcon"> *</span>
              </label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="8~12자 영문, 숫자, 특수문자"
                {...register("password", {
                  required: true,
                })}
              />
            </div>
            <div className="messageDiv">{errors.password?.message}</div>
            <div>
              <label htmlFor="passwordCheck" className="textLabel">
                <span>비밀번호 확인</span>
                <span className="requireIcon"> *</span>
              </label>
              <Input
                type="password"
                name="passwordCheck"
                id="passwordCheck"
                placeholder="8~12자 영문, 숫자, 특수문자"
                {...register("passwordCheck", {
                  required: true,
                })}
              />
            </div>
            <div className="messageDiv">{errors.passwordCheck?.message}</div>
            <div>
              <label htmlFor="name" className="textLabel">
                <span>이름</span>
                <span className="requireIcon"> *</span>
              </label>
              <Input type="text" name="name" id="name" {...register("name")} />
            </div>
            <div className="messageDiv">{errors.name?.message}</div>
            <div style={{ position: "relative" }}>
              <label htmlFor="email" className="textLabel">
                <span>이메일</span>
                <span className="requireIcon"> *</span>
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="interpark@interpark.com"
                {...register("email", {
                  required: true,
                })}
              />
            </div>
            <div className="messageDiv">{errors.email?.message}</div>
            <div style={{ position: "relative" }}>
              <label htmlFor="phone" className="textLabel">
                <span>휴대폰</span>
                <span className="requireIcon"> *</span>
              </label>
              <Input
                type="text"
                name="phone"
                id="phone"
                maxLength="11"
                placeholder="010 1234 5678"
                onKeyDown={handleNumber}
                {...register("phone", {
                  required: true,
                })}
              />
              {/* <button className="tokenBtn">인증번호받기</button> */}
            </div>
            <div className="messageDiv">{errors.phone?.message}</div>
            <div className="agreeAll">
              <div className="checkBox">
                <input
                  type="checkbox"
                  id="requiredAll"
                  onChange={handleSelectAll}
                  checked={checkItem.length == 3 ? true : false}
                />
                <label htmlFor="requiredAll">
                  <span>약관 전체 동의</span>
                </label>
              </div>
            </div>
            <div className="agree">
              <div className="required">
                <div className="selectText">인터파크커머스 필수 동의 항목</div>
                <div className="checkBox">
                  <input
                    type="checkbox"
                    id="required01"
                    onChange={handleSelect}
                    checked={checkItem.includes("required01") ? true : false}
                  />
                  <label htmlFor="required01">
                    <span>[필수] 이용약관</span>
                  </label>
                </div>
                <div className="checkBox">
                  <input
                    type="checkbox"
                    id="required02"
                    onChange={handleSelect}
                    checked={checkItem.includes("required02") ? true : false}
                  />
                  <label htmlFor="required02">
                    <span>[필수] 개인정보 수집동의서</span>
                  </label>
                </div>
                <div className="checkBox">
                  <input
                    type="checkbox"
                    id="required03"
                    onChange={handleSelect}
                    checked={checkItem.includes("required03") ? true : false}
                  />
                  <label htmlFor="required03">
                    <span>14세 이상입니다.</span>
                  </label>
                </div>
                <div className="messageDiv">{errors.required?.message}</div>
              </div>
            </div>
            <button
              className="submitBtn"
              type="submit"
              disabled={!isValid || disabled ? true : false}
            >
              가입 완료
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
