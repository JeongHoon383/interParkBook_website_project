import styled from "styled-components";
import CategoryList_ProdAvatar from "./CategoryList_ProdAvatar";
import CategoryList_ProdContent from "./CategoryList_ProdContent";
import CategoryList_ProdBuy from "./CategoryList_ProdBuy";

const ProductsList = styled.ul`
  width: 770px;
  margin: 0 auto;
  li {
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
    border-bottom: solid 1px #ebebeb;
  }
`;

export default function CategoryList_Products({ data }) {
  return (
    <ProductsList>
      {data.item &&
        data.item.map((data) => (
          <li key={data.itemId}>
            <CategoryList_ProdAvatar data={data} />
            <CategoryList_ProdContent data={data} />
            <CategoryList_ProdBuy />
          </li>
        ))}
    </ProductsList>
  );
}
