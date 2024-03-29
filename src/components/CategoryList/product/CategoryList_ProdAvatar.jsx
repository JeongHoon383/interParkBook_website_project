import styled from "styled-components";
import { Link } from "react-router-dom";

const ProdAvatar = styled.div`
  width: 18%;
  text-align: center;
  a {
    img {
      max-width: 100%;
      margin: 0 auto;
    }
    &.preview {
      display: inline-block;
      width: 97px;
      font-weight: bold;
      color: #000;
      line-height: 28px;
      margin-top: 10px;
      border: 1px solid #d8d8d8;
      border-radius: 4px;
    }
  }
`;

export default function CategoryList_ProdAvatar({ bookData }) {
  return (
    <ProdAvatar>
      <Link to={`/book/${bookData.isbn13}`}>
        <img src={bookData.cover} alt="bookCover" />
      </Link>
      <Link className="preview" target="_blank">
        미리보기{/* 클릭시 미리보기 창 기능 추가 필요 */}
      </Link>
    </ProdAvatar>
  );
}
