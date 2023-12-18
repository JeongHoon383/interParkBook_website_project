import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StlyedSlider = styled.div`
  position: relative;
  width: auto;
`;

const StyledArrow = styled.div`
  position: absolute;
  background-color: #555;
  border-radius: 0.3rem;
  padding: 1rem;
  background-size: contain;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledLeft = styled(StyledArrow)`
  left: 0;
  background-image: url('/img/Slide/left-arrow.svg');
`;

const StyledRight = styled(StyledArrow)`
  right: 0;
  background-image: url('/img/Slide/right-arrow.svg');
`;

const StlyedPageNumber = styled.div`
  position: absolute;
  margin: 0.7rem;
  right: 0;
`;

const CommonSlider = ({ data, renderItem }) => {
  /** useState */
  const [active, setActive] = useState(0);
  const [isShowArrow, setIsShowArrow] = useState(false);

  useEffect(() => {
    setActive(0);
  }, [data]);

  const onLeft = () => {
    const index = active - 1;
    data[index] === undefined ? setActive(data.length - 1) : setActive(index);
  };

  const onRight = () => {
    const index = active + 1;
    data[index] === undefined ? setActive(0) : setActive(index);
  };

  const onMouseOver = () => {
    setIsShowArrow(true);
  };

  const onMouseOut = () => {
    setIsShowArrow(false);
  };

  return (
    <StlyedSlider onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <StlyedPageNumber>
        {active + 1}/{data.length}
      </StlyedPageNumber>
      {isShowArrow && <StyledLeft onClick={onLeft} />}
      {data.map((item) => renderItem(item))[active] || <div />}
      {isShowArrow && <StyledRight onClick={onRight} />}
    </StlyedSlider>
  );
};

export default CommonSlider;
