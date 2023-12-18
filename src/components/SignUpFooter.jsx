import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  height: 80px;
  text-align: center;
  line-height: 80px;
  font-size: 0.8em;
  color: #999;
  background-color: #fafafa;
`;

export default function SignUpFooter() {
  return <Div className="signUpFooter">Copyright © Interpark Commerce Corp. All Rights Reserved.</Div>;
}
