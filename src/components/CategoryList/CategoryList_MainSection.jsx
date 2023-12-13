import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import CategoryList_Title from "./categoryList_Title";
import CategoryList_SubCaNav from "./CategoryList_SubCaNav";
import CategoryList_Sort from "./CategoryList_Sort";
import CategoryList_Products from "./product/CategoryList_Products";
import { useParams } from "react-router-dom";

const MainSection = styled.section`
  width: 770px;
  margin-bottom: 30px;
  .noDataNotice{
    width: 770px;
    text-align: center;
    font-size: 2em;
    border-radius: 4px;
    border: 2px solid #d8d8d8;
    span{
      line-height: 350px;
    }
  }
`;

export default function CategoryList_MainSection() {
  const parameterArr = useParams().categoryPath.split("_");
  const [bookData, setBookData] = useState([]);
  const [listQty, setListQty] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSoldout, setIsSoldout] = useState("0");
  const [checkList, setCheckList] = useState([]);
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  useEffect(() => {
    let startIndex = 0;
    let endIndex = 0;
    let sorting = "priceSales desc";

    startIndex = (currentPage - 1) * listQty + 1;
    endIndex = currentPage * listQty;

    axios(
      `http://127.0.0.1:9090/category/list/${parameterArr[0]}/${parameterArr[1]}/${parameterArr[2]}/${parameterArr[3]}/${parameterArr[4]}/${startIndex}/${endIndex}/${sorting}`
    ).then((result) => {
      setBookData(result.data);
    });
  }, [
    listQty,
    currentPage,
    isSoldout,
    parameterArr[0],
    parameterArr[1],
    parameterArr[2],
    parameterArr[3],
    parameterArr[4],
  ]);

  //하위 컴포넌트(CategoryList_Sort) 전체선택/선택해제 핸들링이벤트
  const handleSelectAll = (flag) => {
    if (flag) {
      Array.isArray(bookData) &&
        bookData.map((item) =>
          !checkList.includes(item.isbn13)
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
      <CategoryList_Title bookData={bookData} />
      {bookData.length >= 1 ? (
        <>
          <CategoryList_SubCaNav />
          <CategoryList_Sort
            totalResults={bookData[0] && bookData[0].totalResults}
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
            bookData={bookData}
            checkList={checkList}
            setCheckList={setCheckList}
          />
          <CategoryList_Sort
            totalResults={bookData[0] && bookData[0].totalResults}
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
        </>
      ) : (
        <div className="noDataNotice">
          <span>현재 카테고리에 해당하는 상품이 없습니다.</span>
        </div>
      )}
    </MainSection>
  );
}
