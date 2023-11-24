import styled from "styled-components";
import { Link } from "react-router-dom";

const ProdAvatar = styled.div`
  width: 18%;
  text-align: center;
  a{
    img{
      width: 100%;
    }
    &.preview{
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

export default function CategoryList_ProdAvatar({image}){
  return(
    <ProdAvatar>
      <Link>
        <img src={image} alt="bookCover" />
      </Link>
      <Link className="preview" target="_blank">
        미리보기
      </Link>
    </ProdAvatar>
  );
}