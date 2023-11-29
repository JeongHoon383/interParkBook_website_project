import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import CategoryList_Title from "./categoryList_Title";
import CategoryList_SubCaNav from "./CategoryList_SubCaNav";
import CategoryList_Sort from "./CategoryList_Sort";
import CategoryList_Products from "./product/CategoryList_Products";

const MainSection = styled.section`
  width: 770px;
  padding-bottom: 30px;
`;

export default function CategoryList_MainSection() {
  const [data, setData] = useState([]);
  const [listQty, setListQty] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSoldout, setIsSoldout] = useState("0");
  const [checkList, setCheckList] = useState([]);
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  useEffect(() => {
    axios(`/ttb/api/ItemList.aspx
?ttbkey=ttbgur65142158001
&QueryType=itemNewAll
&MaxResults=${listQty}
&start=${currentPage}
&outofStockfilter=${isSoldout}
&SearchTarget=Book
&output=JS
&Version=20131101
&Cover=MidBig
&CategoryId=1196
`).then((result) => {
  setData(result.data)
});
  }, [listQty, currentPage, isSoldout]);

  //하위 컴포넌트(CategoryList_Sort) 전체선택/선택해제 핸들링이벤트
  const handleSelectAll = () => {
    Array.isArray(data.item) && data.item.map(item => checkList.indexOf(item.isbn) < 0 ? setCheckList(checkList => [...checkList, item.isbn]) : null)
    setIsCheckedAll(!isCheckedAll);
  };

  const handleDeselectAll = () => {
    setCheckList([]);
    setIsCheckedAll(!isCheckedAll);
  }

  return (
    <MainSection>
      {
        checkList.map(list => <div>{list}</div>)
      }
      <CategoryList_Title title={data.searchCategoryName} />
      <CategoryList_SubCaNav />
      <CategoryList_Sort
        data={data}
        listQty={listQty}
        setListQty={setListQty}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isSoldout={isSoldout}
        setIsSoldout={setIsSoldout}
        handleSelectAll={handleSelectAll}
        isCheckedAll={isCheckedAll}
        handleDeselectAll={handleDeselectAll}
      />
      <CategoryList_Products data={data} />
      <CategoryList_Sort
        data={data}
        listQty={listQty}
        setListQty={setListQty}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isSoldout={isSoldout}
        setIsSoldout={setIsSoldout}
      />
    </MainSection>
  );
}
