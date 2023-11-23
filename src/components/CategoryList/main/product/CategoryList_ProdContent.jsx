import styled from "styled-components";

const ProdContent = styled.div`
width: 66%;
  padding: 0 20px;
  .title{
    font-size: 15px;
    font-weight: bold;
    color: #000;
  }
`;

export default function CategoryList_ProdContent({data}){

  return(
    <ProdContent>
      <p className="title">{data.title}</p>
      <p>
        <span>{data.author}</span>
        <span>{data.publisher}</span>
        <span>{data.pubDate}</span>
        <span>{data.mileage}</span>
      </p>
      <p>
        <span>{data.priceStandard}</span>
        <span>{data.priceSales}</span>
      </p>
      <p>{data.salesPoint}</p>
      <p>{data.description}</p>
    </ProdContent>
  );
}