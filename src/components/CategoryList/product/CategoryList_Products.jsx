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

export default function CategoryList_Products({
  bookData,
  checkList,
  setCheckList,
}) {
  return (
    <ProductsList>
      {bookData.item &&
        bookData.item.map((bookData) => (
          <li key={bookData.isbn}>
            <CategoryList_ProdAvatar bookData={bookData} />
            <CategoryList_ProdContent bookData={bookData} />
            <CategoryList_ProdBuy
              bookData={bookData}
              checkList={checkList}
              setCheckList={setCheckList}
            />
          </li>
        ))}
    </ProductsList>
  );
}
