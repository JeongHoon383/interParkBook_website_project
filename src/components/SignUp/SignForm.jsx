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

const Fieldset = styled.fieldset`
  input[type="text"],
  input[type="password"],
  input[type="email"] {
    &::placeholder {
      padding-left: 6px;
      font-size: 0.8em;
      color: #c9c9c9;
    }
  }
  input[type="checkbox"] {
    display: none;
    + label {
      cursor: pointer;
      > span {
        vertical-align: middle;
        padding-left: 5px;
        font-size: 0.9em;
      }
      &::before {
        content: "";
        display: inline-block;
        width: 18px;
        height: 18px;
        border: 1px solid #ddd;
        border-radius: 3px;
        vertical-align: middle;
        cursor: pointer;
      }
    }
    &:checked + label {
      &::before {
        content: "";
        background-color: var(--main);
        background-position: 50%;
        background-repeat: no-repeat;
        background-image: url("img/check.png");
      }
    }
  }
  .agree {
    margin-top: 22px;
  }
  .agreeAll {
    margin-top: 22px;
    font-size: 1.2em;
    font-family: "YES24GothicB";
  }
  .required {
    margin-bottom: 33px;
    .selectText {
      font-size: 0.9em;
      font-family: "YES24GothicB";
    }
    div {
      margin-bottom: 12px;
    }
    .checkBox label {
      color: #666;
    }
  }
  button {
    margin: 6px 0 12px 0;
    width: 100%;
    height: 40px;
    border-radius: 3px;
    font-family: "YES24GothicB";
    text-align: center;
    color: #fff;
    background-color: var(--main);
    &:disabled {
      background-color: #ccc;
      pointer-events: none;
    }
  }
`;
const Label = styled.label`
  width: 190px;
  display: inline-block;
  text-align: left;
  font-family: "YES24GothicB";
  font-size: 0.8em;
`;

const Star = styled.span`
  color: #32aceb;
`;

const ErrorMessage = styled.div`
  /* margin-left: 190px; */
  margin-bottom: 12px;
  font-size: 0.7em;
  color: var(--main);
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
      url: "http://192.168.50.25:9090/member/",
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
      <div
        className="signUpInner"
        style={{ width: "40%", margin: "70px auto" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Fieldset>
            <div>
              <Label htmlFor="id">
                <span>아이디</span>
                <Star> *</Star>
              </Label>
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
            <ErrorMessage>{errors.id?.message}</ErrorMessage>
            <div>
              <Label htmlFor="password">
                <span>비밀번호</span>
                <Star> *</Star>
              </Label>
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
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
            <div>
              <Label htmlFor="passwordCheck" className="textLabel">
                <span>비밀번호 확인</span>
                <Star> *</Star>
              </Label>
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
            <ErrorMessage>{errors.passwordCheck?.message}</ErrorMessage>
            <div>
              <Label htmlFor="name" className="textLabel">
                <span>이름</span>
                <Star> *</Star>
              </Label>
              <Input type="text" name="name" id="name" {...register("name")} />
            </div>
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
            <div style={{ position: "relative" }}>
              <Label htmlFor="email" className="textLabel">
                <span>이메일</span>
                <Star> *</Star>
              </Label>
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
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
            <div style={{ position: "relative" }}>
              <Label htmlFor="phone" className="textLabel">
                <span>휴대폰</span>
                <Star> *</Star>
              </Label>
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
            <ErrorMessage>{errors.phone?.message}</ErrorMessage>
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
                    <span>[필수]14세 이상입니다.</span>
                  </label>
                </div>
                <ErrorMessage>{errors.required?.message}</ErrorMessage>
              </div>
            </div>
            <button
              type="submit"
              disabled={!isValid || disabled ? true : false}
            >
              가입 완료
            </button>
          </Fieldset>
        </form>
      </div>
    </div>
  );
}
