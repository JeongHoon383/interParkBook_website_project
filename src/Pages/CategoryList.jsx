import CategoryList_FloatingMenu from "../components/CategoryList/CategoryList_FloatingMenu";
import CategoryList_TopNav from "../components/CategoryList/CategoryList_TopNav";
import CategoryList_MainSection from "../components/CategoryList/CategoryList_MainSection";
import CategoryList_CaNav from "../components/CategoryList/asideLeft/CategoryList_CaNav";
import CategoryLIst_WeekBestSeller from "../components/CategoryList/asideLeft/CategoryLIst_WeekBestSeller";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
`;

export default function CategoryList() {
  // const { mall } = useParams();
  const [categoryData, setCategoryData] = useState([]);

  // useEffect(() => {
  //   axios.get(`http://localhost:9090/category/list/${mall}`)
  //   .then(result => setCategoryData(result.data))
  //   .catch(error => console.log(error));
  // }, []);

  return (
    <>
      <CategoryList_TopNav
        categoryData={categoryData}
      />

      <CategoryListMain>
        <div>
          <CategoryList_CaNav />
          <CategoryLIst_WeekBestSeller />
        </div>
        <CategoryList_MainSection />
        <CategoryList_FloatingMenu />
      </CategoryListMain>
    </>
  );
}
