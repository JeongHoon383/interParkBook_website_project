import styled from "styled-components";
import PaginationComponent from "./PaginationComponent";

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
        line-height: 25px;
        margin-right: 15px;
        &:hover {
          font-weight: bold;
        }
        &.currentSort {
          font-weight: bold;
          color: var(--main);
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
  listQty,
  setListQty,
  currentPage,
  setCurrentPage,
  isSoldout,
  setIsSoldout,
  handleSelectAll,
  isCheckedAll,
  setIsCheckedAll,
  setCheckList,
}) {
  //졍렬 버튼 클릭시 resetCheckLIst 실행/ 수정 필요

  //상품 체크 목록 리셋
  const resetCheckList = () => {
    setIsCheckedAll(false);
    setCheckList([]);
  };

  //페이지네이션 현재 페이지 변경
  const handlePageChange = (page) => {
    resetCheckList();
    setCurrentPage(page);
  };

  //한 페이지에 볼 상품 수량 변경
  const handleListQty = (e) => {
    resetCheckList();
    setListQty(Number(e.target.value));
    handleSelectAll(false);
  };

  //품절 상품 포함/제외 변경
  const handleChangeSoldout = (e) => {
    resetCheckList();
    setIsSoldout(e.target.value);
    handleSelectAll(false);
  };

  return (
    <Sortarea>
      <div className="topArea">
        <span className="sortOption">
          <button className="currentSort">기본순</button>
          <button>판매량순</button>
          <button>신상품순</button>
          <button>등록일순</button>
          <button>최저가순</button>
          <button>최고가순</button>
          <button>상품명순</button>
        </span>
        <span className="listOption">
          <label htmlFor="listQty"></label>
          <select
            name="listQty"
            id="listQty"
            onChange={handleListQty}
            value={listQty}
          >
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
            <option value="0">품절포함</option>
            <option value="1">품절제외</option>
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
