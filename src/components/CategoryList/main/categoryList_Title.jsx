import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  h3{
    font-size: 22px;
    font-weight: bold;
    color: var(--main);
  }
  span{
    a{
      padding: 0 6px;
      &:first-child{
        border-right: 1px solid #CCC;
      }
      &:hover{
        text-decoration: underline;
      }
    }
  }
`;

export default function CategoryList_Title(){
  return(
    <Title>
      <h3>여행</h3>
      <span>
        <Link>주간베스트</Link>
        <Link>새로 나온 책</Link>
      </span>
    </Title>
  );
}