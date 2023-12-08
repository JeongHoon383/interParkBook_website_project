import React from 'react';
import SignUpHeader from '../components/Header/SignUpHeader';
import { Outlet } from 'react-router-dom';
import SignUpFooter from '../components/Footer/SignUpFooter';

export default function SignUp() {
  return (
    <>
      <SignUpHeader />
      <Outlet />
      <SignUpFooter />
    </>
  );
}
