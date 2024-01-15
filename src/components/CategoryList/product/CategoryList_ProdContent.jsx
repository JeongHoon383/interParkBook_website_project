import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import { BiSolidStar, BiSolidStarHalf, BiStar } from "react-icons/bi";

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
      font-size: 15px;
      color: var(--main);
    }
    .reviewRank {
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

  //customerReviewRank에 따라 별점 표시
  const showReviewRankStar = (customerReviewRank) => {
    let arr = [];
    let filledStar = Math.floor(customerReviewRank / 2);
    let halfStar = customerReviewRank % 2 === 0 ? 0 : 1;
    let emptyStar = 5 - filledStar - halfStar;

    for (let i=0; i < filledStar; i++) {
      arr.push(<BiSolidStar key={"SolidStar" + i}/>)
    }
    for (let i=0; i < halfStar; i++) {
      arr.push(<BiSolidStarHalf key={"halfStar" + i}/>)
    }
    for (let i=0; i < emptyStar; i++) {
      arr.push(<BiStar key={"emptyStar" + i}/>)
    }

    return arr;
  };

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
        <span>{bookData.pubDate.substr(0, 10)}</span>
      </p>
      {
        bookData.priceStandard === bookData.priceSales ? (
          <p className="price">
          <span className="priceSales">{bookData.priceSales.toLocaleString()}원</span>
          <span className="pointIcon">P</span>
          <span className="point">{bookData.mileage.toLocaleString()}P</span>
        </p>
        ) : (
          <p className="price">
          <span>{bookData.priceStandard.toLocaleString()}원</span>
          <HiArrowLongRight />
          <span className="priceSales">{bookData.priceSales.toLocaleString()}원</span>
          <span className="pointIcon">P</span>
          <span className="point">{bookData.mileage.toLocaleString()}P</span>
        </p>
        )
      }
      <p className="salesPoint">
        <span>세일즈포인트 : </span>
        <span className="salesPointNumber">
          {bookData.salesPoint.toLocaleString()}
        </span>
      </p>
      <p className="customerReviewRank">
        <span>회원리뷰 : </span>
          {showReviewRankStar(bookData.customerReviewRank)}
        <span className="reviewRank">{bookData.customerReviewRank / 2}</span> {/* 별점 기능 추가 필요 */}
      </p>
      <p className="description">{bookData.description}</p>
    </ProdContent>
  );
}
