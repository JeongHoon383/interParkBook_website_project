import styled from "styled-components";
import PaginationComponent from "./PaginationComponent";
import { TbSortAscending, TbSortDescending } from "react-icons/tb";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Sortarea = styled.div`
  width: 770px;
  margin-top: 30px;
  border: 1px solid #d8d8d8;
  .topArea {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    border-bottom: 1px solid #d8d8d8;
    .sortOption {
      button {
        position: relative;
        line-height: 25px;
        margin-right: 25px;
        &:hover {
          font-weight: bold;
        }
        &.currentSort {
          font-weight: bold;
          color: var(--main);
        }
        svg{
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateX(100%) translateY(-50%);
          font-size: 17px;
        }
      }
    }
    .listOption {
      select {
        height: 30px;
        border: 1px solid #d8d8d8;
        border-radius: 4px;
        &:first-of-type {
          margin-right: 5px;
        }
      }
    }
  }
  .bottomArea {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    background: #f8f8f8;
    .selectOption {
      button {
        line-height: 27px;
        padding: 0 7px;
        border: 1px solid #d8d8d8;
        border-radius: 4px;
        background: #fff;
        &:not(:last-child) {
          margin-right: 5px;
        }
      }
    }
  }
`;

export default function CategoryList_Sort({
  totalResults,
  sortField,
  handleSortField,
  sortOption,
  handleSortOption,
  listQty,
  handleListQty,
  currentPage,
  handleCurrentPage,
  isSoldout,
  handleIsSoldout,
  handleSelectAll,
  isCheckedAll,
  handleIsCheckedAll,
  handleCheckList,
}) {

  const parameterArr = useParams().categoryPath.split("_");

  //졍렬 기능
  const handleSort = (e) => {
    resetCheckList();
    handleCurrentPage(1);
    if(sortField === e.target.value) {
      sortOption === 'asc' ? handleSortOption('desc') : handleSortOption('asc')
    }else{
      handleSortField(e.target.value);
      handleSortOption('desc');
    }
  };

  //상품 체크 목록 리셋
  const resetCheckList = () => {
    handleIsCheckedAll(false);
    handleCheckList([]);
  };

  //페이지네이션 현재 페이지 변경
  const handlePageChange = (page) => {
    resetCheckList();
    handleCurrentPage(page);
  };

  //한 페이지에 볼 상품 수량 변경
  const handleListQtyChange = (e) => {
    resetCheckList();
    handleCurrentPage(1);
    handleListQty(Number(e.target.value));
    handleSelectAll(false);
  };

  //품절 상품 포함/제외 변경
  const handleChangeSoldout = (e) => {
    resetCheckList();
    handleCurrentPage(1);
    handleIsSoldout(e.target.value);
    handleSelectAll(false);
  };

  //카테고리 변경시 정렬, 페이지네이션, 전체선택, 한번에 볼 상품수, 품절여부 초기화
  useEffect(() => {
    resetCheckList();
    handleCurrentPage(1);
    handleIsSoldout("상품있음");
    handleListQty(20);
    handleSortField("pubDate");
    handleSortOption("desc");
  }, [parameterArr[0],parameterArr[1],parameterArr[2],parameterArr[3],parameterArr[4],parameterArr[5]]);

  return (
    <Sortarea>
      <div className="topArea">
        <span className="sortOption">
          <button className={sortField && sortField === "pubDate" ? "currentSort" : null} value="pubDate" onClick={handleSort}>등록일순{sortField === "pubDate" ? sortOption === "asc" ? <TbSortAscending /> : <TbSortDescending /> : null }</button>
          <button className={sortField && sortField === "salesPoint" ? "currentSort" : null} value="salesPoint" onClick={handleSort}>판매량순{sortField === "salesPoint" ? sortOption === "asc" ? <TbSortAscending /> : <TbSortDescending /> : null }</button>
          <button className={sortField && sortField === "priceSales" ? "currentSort" : null} value="priceSales" onClick={handleSort}>가격순{sortField === "priceSales" ? sortOption === "asc" ? <TbSortAscending /> : <TbSortDescending /> : null }</button>
          <button className={sortField && sortField === "title" ? "currentSort" : null} value="title" onClick={handleSort}>상품명순{sortField === "title" ? sortOption === "asc" ? <TbSortAscending /> : <TbSortDescending /> : null }</button>
        </span>
        <span className="listOption">
          <label htmlFor="listQty"></label>
          <select
            name="listQty"
            id="listQty"
            onChange={handleListQtyChange}
            value={listQty}
          >
            <option value="10">10개씩 보기</option>
            <option value="20">20개씩 보기</option>
            <option value="30">30개씩 보기</option>
            <option value="40">40개씩 보기</option>
          </select>
          <label htmlFor="soldout"></label>
          <select
            name="soldout"
            id="soldout"
            onChange={handleChangeSoldout}
            value={isSoldout}
          >
            <option value="품절포함">품절포함</option>
            <option value="품절">품절제외</option>
          </select>
        </span>
      </div>
      <div className="bottomArea">
        <PaginationComponent 
          totalResults = {totalResults}
          currentPage = {currentPage}
          pageRangeDisplayed = {10}
          itemsCountPerPage = {listQty}
          handlePageChange = {handlePageChange}
        />
        <span className="selectOption">
          {isCheckedAll ? (
            <button onClick={() => handleSelectAll(false)}>선택해제</button>
          ) : (
            <button onClick={() => handleSelectAll(true)}>전체선택</button>
          )}
          <button>카트에 넣기</button>
          <button>찜하기</button>
        </span>
      </div>
    </Sortarea>
  );
}
