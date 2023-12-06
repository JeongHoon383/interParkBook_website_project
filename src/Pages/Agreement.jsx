import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../css/login/signUp.css';
import axios from 'axios';
import SignForm from '../components/SignUp/SignForm';

const schema = yup
  .object({
    id: yup
      .string()
      .matches(
        /^[a-z]+[a-z0-9]{6,20}$/g, // 영문으로 시작하는 영문자 또는 숫자 6~20자
        '영문으로 시작하는 6~20자 영문(소문자), 숫자만 사용 가능합니다.'
      )
      .required('필수 정보입니다. 아이디를 입력해주세요.'),

    password: yup
      .string()
      .matches(
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,12}$/, // 8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩
        '8~12자의 영문, 숫자, 특수문자 중 2가지 이상으로만 가능합니다.'
      )
      .required('필수 정보입니다. 비밀번호를 입력해주세요.'),

    passwordCheck: yup.string().oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다. 다시 입력해주세요.'),

    name: yup
      .string()
      .matches(/^[가-힣a-zA-Z]{2,15}$/, '한글과 영문 대,소문자를 사용해주세요.')
      .required('필수 정보입니다. 이름을 입력해주세요.'),

    email: yup
      .string()
      .required('비밀번호 찾기 시 사용되니, 정확한 이메일 주소를 작성해주세요.')
      .email('이메일 주소 양식에 맞게 작성해주세요.'),

    phone: yup
      .string()
      .required('점유인증을 하여 휴대폰 번호를 등록해주세요. 등록한 번호는 로그인 이후 변경 가능합니다.'),
  })
  .required();

export default function Agreement() {
  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <SignForm />
    </FormProvider>
  );
}
