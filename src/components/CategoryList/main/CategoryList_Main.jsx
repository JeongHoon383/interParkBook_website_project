import CategoryList_Title from "./categoryList_Title";
import CategoryList_SubCaNav from "./CategoryList_SubCaNav";
import styled from "styled-components";
import CategoryList_Sort from "./CategoryList_Sort";
import CategoryList_Products from './product/CategoryList_Products';

const MainLayout = styled.div`
  width: 770px;
  margin: 0 auto;
  padding-bottom: 30px;
`;

export default function CategoryList_Main({data}){
  return(
    <MainLayout>
      <CategoryList_Title 
      title = {data.searchCategoryName}
      />
      <CategoryList_SubCaNav />
      <CategoryList_Sort 
      data = {data}
      />
      <CategoryList_Products 
      data = {data}
      />
      <CategoryList_Sort 
      data = {data}
      />
    </MainLayout>
  );
}