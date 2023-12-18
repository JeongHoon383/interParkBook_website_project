import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  h2 {
    font-size: 22px;
    font-weight: bold;
    color: var(--main);
  }
  span {
    a {
      padding: 0 6px;
      &:first-child {
        border-right: 1px solid #ccc;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default function CategoryList_Title({bookData}) {
  const parameterArr = useParams().categoryPath.split("_");
  return (
    <Title>
      <h2>{parameterArr.slice(-1)}</h2>
      {bookData.length > 0 ? (
        <span>
          <Link>주간베스트</Link>
          <Link>새로 나온 책</Link>
        </span>
      ) : null}
    </Title>
  );
}
