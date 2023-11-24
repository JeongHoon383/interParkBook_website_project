import CategoryList_Title from "./categoryList_Title";
import CategoryList_SubCaNav from "./CategoryList_SubCaNav";
import styled from "styled-components";

const MainLayout = styled.div`
  width: 770px;
  margin: 0 auto;
`;

export default function CategoryList_Main(){
  return(
    <MainLayout>
      <CategoryList_Title />
      <CategoryList_SubCaNav />
    </MainLayout>
  );
}