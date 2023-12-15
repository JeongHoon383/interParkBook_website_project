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
  .noDataNotice {
    width: 770px;
    text-align: center;
    font-size: 2em;
    border-radius: 4px;
    border: 2px solid #d8d8d8;
    span {
      line-height: 350px;
    }
  }
`;

export default function CategoryList_MainSection() {
  const userId = JSON.parse(sessionStorage.getItem('userId')) ? JSON.parse(sessionStorage.getItem('userId')).id : undefined;
  const parameterArr = useParams().categoryPath.split("_");
  const [bookData, setBookData] = useState([]);
  const [listQty, setListQty] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSoldout, setIsSoldout] = useState("상품있음");
  const [checkList, setCheckList] = useState([]);
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [sortField, setSortField] = useState("pubDate");
  const [sortOption, setSortOption] = useState("desc");

  const handleSortField = (data) => {
    setSortField(data);
  };
  const handleSortOption = (data) => {
    setSortOption(data);
  };
  const handleListQty = (data) => {
    setListQty(data);
  };
  const handleCurrentPage = (data) => {
    setCurrentPage(data);
  };
  const handleIsSoldout = (data) => {
    setIsSoldout(data);
  };
  const handleIsCheckedAll = (data) => {
    setIsCheckedAll(data);
  };
  const handleCheckList = (data) => {
    setCheckList(data);
  };


  //카테고리별, 정렬별, 페이지별 품절여부별 상품목록 불러오기
  useEffect(() => {
    let startIndex = 0;
    let endIndex = 0;

    startIndex = (currentPage - 1) * listQty + 1;
    endIndex = currentPage * listQty;

    if(sortField) {
      axios(
        `http://127.0.0.1:9090/category/list/${parameterArr[0]}/${parameterArr[1]}/${parameterArr[2]}/${parameterArr[3]}/${parameterArr[4]}/${startIndex}/${endIndex}/${sortField}/${sortOption}/${isSoldout}`
      ).then((result) => {
        setBookData(result.data);
      });
    }

  }, [
    listQty,
    currentPage,
    isSoldout,
    sortField,
    sortOption,
    parameterArr[0],
    parameterArr[1],
    parameterArr[2],
    parameterArr[3],
    parameterArr[4],
  ]);

  //하위 컴포넌트(CategoryList_Sort) 전체선택/선택해제 핸들링이벤트
  const handleSelectAll = (flag) => {
    if (flag) {
        bookData.map(({isbn13, title, cover, priceSales, stockStatus}) =>
          !checkList.some(checkItem => checkItem.isbn13 === isbn13) && !stockStatus.includes('품절')
            ? setCheckList((checkList) => [...checkList, {isbn13, userId, title, cover, priceSales}])
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
    const currentPageBookQty = bookData.filter(data => !data.stockStatus.includes('품절')).length;
    checkList.length === currentPageBookQty
      ? setIsCheckedAll(true)
      : setIsCheckedAll(false);
  }, [checkList, listQty]);

  return (
    <MainSection>
      <CategoryList_Title bookData={bookData} />
      {bookData.length >= 1 ? (
        <>
          <CategoryList_SubCaNav />
          <CategoryList_Sort
            totalResults={bookData[0] && bookData[0].totalResults}
            sortField={sortField}
            handleSortField={handleSortField}
            sortOption={sortOption}
            handleSortOption={handleSortOption}
            listQty={listQty}
            handleListQty={handleListQty}
            currentPage={currentPage}
            handleCurrentPage={handleCurrentPage}
            isSoldout={isSoldout}
            handleIsSoldout={handleIsSoldout}
            handleSelectAll={handleSelectAll}
            isCheckedAll={isCheckedAll}
            handleIsCheckedAll={handleIsCheckedAll}
            handleCheckList={handleCheckList}
            parameterArr={parameterArr}
          />
          <CategoryList_Products
            bookData={bookData}
            checkList={checkList}
            handleCheckList={handleCheckList}
          />
          <CategoryList_Sort
            totalResults={bookData[0] && bookData[0].totalResults}
            sortField={sortField}
            handleSortField={handleSortField}
            sortOption={sortOption}
            handleSortOption={handleSortOption}
            listQty={listQty}
            handleListQty={handleListQty}
            currentPage={currentPage}
            handleCurrentPage={handleCurrentPage}
            isSoldout={isSoldout}
            handleIsSoldout={handleIsSoldout}
            handleSelectAll={handleSelectAll}
            isCheckedAll={isCheckedAll}
            handleIsCheckedAll={handleIsCheckedAll}
            handleCheckList={handleCheckList}
            parameterArr={parameterArr}
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
