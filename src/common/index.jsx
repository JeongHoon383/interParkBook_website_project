import React from 'react';
import CommonSlider from './CommonSlider';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledItem = styled.div`
  width: 15rem;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  border-radius: 0.5rem;
`;

const Common = () => {
  const data = [
    { id: 1, text: '1', color: 'red' },
    { id: 2, text: '2', color: 'blue' },
    { id: 3, text: '3', color: 'green' },
    { id: 4, text: '4', color: 'gray' },
  ];

  return (
    <StyledContainer>
      <CommonSlider
        data={data}
        renderItem={({ id, text, color }) => (
          <StyledItem key={id} color={color}>
            {text}
          </StyledItem>
        )}
      />
    </StyledContainer>
  );
};

export default Common;
