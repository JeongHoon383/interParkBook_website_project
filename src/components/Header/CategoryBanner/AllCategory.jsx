import React from 'react';
import HeaderCategoryList from './HeaderCategoryList';
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
        <HeaderCategoryList
          mall={'국내도서'}
        />
        <HeaderCategoryList
          mall={'외국도서'}
        />
        <HeaderCategoryList
          mall={'전자책'}
        />
      </div>
    </All>
  );
}
