import styled from "styled-components";
import { HiArrowLongRight } from "react-icons/hi2";

const ProdContent = styled.div`
  width: 66%;
  padding: 0 20px;
  > *{
    margin-bottom: 8px;
  }
  .title{
    font-size: 15px;
    font-weight: bold;
    color: #000;
  }
  .bookInfo{
    > *{
      padding-right: 5px;
      &:not(:first-child){
        padding-left: 5px;
      }
      &:not(:last-child){
        border-right: 1px solid #666;
      }
    }
  }
  .price{
    display: flex;
    align-items: center;
    > *{
      margin-right: 5px;
    }
    .priceSales{
      font-size: 14px;
      font-weight: bold;
      color: var(--main);
    }
    .mileageIcon{
      width: 13px;
      height: 13px;
      font-size: 10px;
      line-height: 13px;
      color: #FFF;
      text-align: center;
      border-radius: 50%;
      background: var(--main);
    }
    .mileage{
      font-size: 11px;
      font-weight: bold;
    }
  }
  .salesPoint{
    span{
      font-weight: bold;
    }
  }
  .description{
    color: #AAA;
    line-height: 16px;
  }
`;

export default function CategoryList_ProdContent({data}){

  return(
    <ProdContent>
      <p className="title">{data.title}</p>
      <p className="bookInfo">
        <span>{data.author}</span>
        <span>{data.publisher}</span>
        <span>{data.pubDate}</span>
      </p>
      <p className="price">
        <span>{data.priceStandard.toLocaleString()}원</span>
        <HiArrowLongRight />
        <span className="priceSales">{data.priceSales.toLocaleString()}원</span>
        <span className="mileageIcon">M</span>
        <span className="mileage">{data.mileage.toLocaleString()}원</span>
      </p>
      <p className="salesPoint">
        세일즈포인트 :
        <span>{data.salesPoint.toLocaleString()}</span>
        </p>
      <p className="description">{data.description}</p>
    </ProdContent>
  );
}