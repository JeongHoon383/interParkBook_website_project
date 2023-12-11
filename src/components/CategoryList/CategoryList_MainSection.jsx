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
      setData(result.data);
    });

  }, [listQty, currentPage, isSoldout]);

  //하위 컴포넌트(CategoryList_Sort) 전체선택/선택해제 핸들링이벤트
  const handleSelectAll = (flag) => {
    if (flag) {
      Array.isArray(data.item) &&
        data.item.map((item) =>
          !checkList.includes(item.isbn)
            ? setCheckList((checkList) => [...checkList, item.isbn])
            : null
        );
      setIsCheckedAll(true);
    } else {
      setCheckList([]);
      setIsCheckedAll(false);
    }
  };

  //체크박스가 전부 체크됐을 때 IsCheckedAll true/false 변환
  useEffect(() => {
    Array.isArray(checkList) && checkList.length === listQty
      ? setIsCheckedAll(true)
      : setIsCheckedAll(false);
  }, [checkList]);

  return (
    <MainSection>
      <CategoryList_Title />
      <CategoryList_SubCaNav />
      <CategoryList_Sort
        totalResults={data.totalResults}
        listQty={listQty}
        setListQty={setListQty}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isSoldout={isSoldout}
        setIsSoldout={setIsSoldout}
        handleSelectAll={handleSelectAll}
        isCheckedAll={isCheckedAll}
        setIsCheckedAll={setIsCheckedAll}
        setCheckList={setCheckList}
      />
      <CategoryList_Products
        data={data}
        checkList={checkList}
        setCheckList={setCheckList}
      />
      <CategoryList_Sort
        totalResults={data.totalResults}
        listQty={listQty}
        setListQty={setListQty}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isSoldout={isSoldout}
        setIsSoldout={setIsSoldout}
        handleSelectAll={handleSelectAll}
        isCheckedAll={isCheckedAll}
        setIsCheckedAll={setIsCheckedAll}
        setCheckList={setCheckList}
      />
    </MainSection>
  );
}
