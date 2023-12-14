import React from 'react';
import { Outlet } from 'react-router-dom';
import SignUpHeader from '../components/Header/SignUpHeader';
import SignUpFooter from '../components/SignUpFooter';

export default function SignUp() {
  return (
    <>
      <SignUpHeader />
      <Outlet />
      <SignUpFooter />
    </>
  );
}
