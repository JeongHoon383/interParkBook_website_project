import CategoryList_FloatingMenu from "../components/CategoryList/CategoryList_FloatingMenu";
import CategoryList_TopNav from "../components/CategoryList/CategoryList_TopNav";
import CategoryList_MainSection from "../components/CategoryList/CategoryList_MainSection";
import CategoryList_CaNav from "../components/CategoryList/asideLeft/CategoryList_CaNav";
import CategoryLIst_WeekBestSeller from "../components/CategoryList/asideLeft/CategoryLIst_WeekBestSeller";
import styled from "styled-components";

const CategoryListMain = styled.main`
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 60%;
  margin: 0 auto;
  margin-top: 20px;
  padding: 0 15px;
  font-size: 12px;
  color: #666;
  .asideContainer{
    margin-bottom: 30px;
  }
`;

export default function CategoryList() {
  const userId = JSON.parse(sessionStorage.getItem('userId')) ? JSON.parse(sessionStorage.getItem('userId')).id : undefined;

  return (
    <>
      <CategoryList_TopNav/>

      <CategoryListMain>
        <div className="asideContainer">
          <CategoryList_CaNav />
          <CategoryLIst_WeekBestSeller />
        </div>
        <CategoryList_MainSection 
          userId={userId}
        />
        <CategoryList_FloatingMenu 
          userId={userId}
        />
      </CategoryListMain>
    </>
  );
}
