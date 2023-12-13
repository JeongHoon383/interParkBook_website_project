import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import { AiFillStar } from "react-icons/ai";

const ProdContent = styled.div`
  width: 66%;
  padding: 0 20px;
  > * {
    margin-bottom: 8px;
  }
  .title {
    font-size: 15px;
    font-weight: bold;
    color: #000;
  }
  .bookInfo {
    > * {
      padding-right: 5px;
      &:not(:first-child) {
        padding-left: 5px;
      }
      &:not(:last-child) {
        border-right: 1px solid #666;
      }
    }
  }
  .price {
    display: flex;
    align-items: center;
    > * {
      margin-right: 5px;
    }
    .priceSales {
      font-size: 15px;
      font-weight: bold;
      color: var(--main);
    }
    .pointIcon {
      width: 13px;
      height: 13px;
      font-size: 10px;
      line-height: 13px;
      color: #fff;
      text-align: center;
      border-radius: 50%;
      background: var(--main);
    }
    .point {
      font-size: 11px;
      font-weight: bold;
    }
  }
  .salesPoint {
    .salesPointNumber {
      font-weight: bold;
    }
  }
  .customerReviewRank {
    display: flex;
    align-items: center;
    svg {
      color: var(--main);
    }
    .reviewPoint {
      font-size: 15px;
      font-weight: bold;
      margin-left: 5px;
    }
  }
  .description {
    color: #aaa;
    line-height: 16px;
  }
`;

export default function CategoryList_ProdContent({ bookData }) {
  return (
    <ProdContent>
      <p className="title">
        <Link to={`/book/${bookData.isbn13}`}>{bookData.title}</Link>
      </p>
      <p className="bookInfo">
        <span>{bookData.author}</span>
        {/* 클릭 시 지은이 이름으로 검색하는 기능 추가 필요 */}
        <span>{bookData.publisher}</span>
        <span>{bookData.pubDate}</span>
      </p>
      <p className="price">
        <span>{bookData.priceStandard.toLocaleString()}원</span>
        <HiArrowLongRight />
        <span className="priceSales">{bookData.priceSales.toLocaleString()}원</span>
        <span className="pointIcon">P</span>
        <span className="point">{bookData.mileage.toLocaleString()}P</span>
      </p>
      <p className="salesPoint">
        <span>세일즈포인트 : </span>
        <span className="salesPointNumber">
          {bookData.salesPoint.toLocaleString()}
        </span>
      </p>
      <p className="customerReviewRank">
        <span>회원리뷰 : </span>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <span className="reviewPoint">10</span> {/* 별점 기능 추가 필요 */}
      </p>
      <p className="description">{bookData.description}</p>
    </ProdContent>
  );
}
