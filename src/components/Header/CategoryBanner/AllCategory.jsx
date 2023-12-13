import React from 'react';
import Domestic from './Domestic';
import Foreign from './Foreign';
import Goods from './Goods';
import styled from 'styled-components';

const All = styled.div`
  position: relative;
  color: #000;
  z-index: 99;
  .mainNav {
    z-index: 99;
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 15px;
    border: 1px solid var(--main);
    background-color: #fff;
  }
`;

export default function AllCategory() {
  return (
    <All>
      <div className="mainNav">
        <Domestic />
        <Foreign />
        <Goods />
      </div>
    </All>
  );
}
