import styled from 'styled-components';

export const PointLi = styled.li`
  font-weight: 800;
  color: var(--main);
`;

export const Title = styled.h3`
  &::after {
    content: '>';
    margin-left: 5px;
    font-size: 0.7em;
    font-weight: 800;
  }
`;

export const Category = styled.div`
  color: var(--default);
  padding: 20px;
  &:not(:first-child) {
    border-left: 1px solid #e5e5e5;
  }
  h3 {
    font-weight: 800;
    font-size: 0.9em;
    margin-bottom: 10px;
  }
  .categoryNav {
    display: flex;
    ul {
      width: 110px;
      font-size: 0.75em;
    }
    li {
      font-weight: 500;
      line-height: 150%;
      &:hover {
        color: var(--hover);
        text-decoration: underline;
      }
    }
  }
`;
