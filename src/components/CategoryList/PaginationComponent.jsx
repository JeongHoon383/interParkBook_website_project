import styled from "styled-components";
import Pagination from "react-js-pagination";
import {
  AiOutlineDoubleLeft,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDoubleRight,
} from "react-icons/ai";

const PaginationWrapper = styled.div`
  .pagination {
    display: inline-flex;
    align-items: center;
    li {
      &.disabled {
        color: #ccc;
      }
      a {
        display: inline-block;
        width: 26px;
        line-height: 24px;
        margin: 0 1px;
        text-align: center;
        &.active {
          font-weight: bold;
          pointer-events: none;
          border-radius: 4px;
          border: 1px solid #d8d8d8;
          background: #fff;
        }
        &:not(.paginationBtn):hover {
          border-radius: 4px;
          border: 1px solid #d8d8d8;
          background: #fff;
        }
        &.paginationBtn {
          font-size: 16px;
        }
      }
    }
  }
`;

export default function PaginationComponent({totalResults, currentPage, pageRangeDisplayed, itemsCountPerPage, handlePageChange}){
  return(
    <PaginationWrapper>
    <Pagination
    totalItemsCount={totalResults}//총 수량
    activePage={currentPage}//현재 페이지
    pageRangeDisplayed={pageRangeDisplayed}//페이지네이션 수
    itemsCountPerPage={itemsCountPerPage}//한 페이지 당 보여줄 목록 개수
    onChange={handlePageChange}//현재페이지(activepage) 변경, 페이지 변경에 따른 목록 변경
    linkClassFirst={"paginationBtn"}
    linkClassPrev={"paginationBtn"}
    linkClassNext={"paginationBtn"}
    linkClassLast={"paginationBtn"}
    activeLinkClass={"active"}
    firstPageText={<AiOutlineDoubleLeft />}
    prevPageText={<AiOutlineLeft />}
    nextPageText={<AiOutlineRight />}
    lastPageText={<AiOutlineDoubleRight />}
  />
    </PaginationWrapper>

  );
}