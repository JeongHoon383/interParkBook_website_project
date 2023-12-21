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
  handleCheckList,
  quantity,
  handleQuantity,
  handleToggleWishlist,
  wishlist
}) {
  return (
    <ProductsList>
      {bookData &&
        bookData.map((bookData, idx) => (
          <li key={bookData.isbn13}>
            <CategoryList_ProdAvatar bookData={bookData} />
            <CategoryList_ProdContent bookData={bookData} />
            <CategoryList_ProdBuy
              bookData={bookData}
              checkList={checkList}
              handleCheckList={handleCheckList}
              idx={idx}
              quantity={quantity}
              handleQuantity={handleQuantity}
              handleToggleWishlist={handleToggleWishlist}
              wishlist={wishlist}
            />
          </li>
        ))}
    </ProductsList>
  );
}
