import PaginationComponent from "../../CategoryList/PaginationComponent";
import styled from "styled-components";
import { FaCircleDot } from "react-icons/fa6";
import { useState } from "react";

const RecentOrder = styled.article`
  width: 100%;
  .titleContainer {
    margin-bottom: 8px;
    svg {
      display: inline;
      font-size: 15px;
      color: var(--main);
      margin-right: 5px;
    }
    h3 {
      display: inline;
      font-size: 15px;
      font-weight: bold;
    }
    .orderQty {
      padding: 0 5px;
      font-size: 14px;
      em {
        font-weight: bold;
      }
    }
    .titleText {
      color: #aaa;
      em {
        font-weight: bold;
        color: var(--main);
      }
    }
  }
  .RecentOrderTable {
    width: 100%;
    border-top: 2px solid var(--main);
    thead {
      font-size: 11px;
      background: #f8f8f8;
      tr {
        th {
          padding: 10px 0;
          &:not(:last-child) {
            border-right: 1px solid #d8d8d8;
          }
          &:nth-child(2) {
            width: 40%;
          }
          &:nth-child(3) {
            width: 5%;
          }
          &:nth-child(7) {
            width: 7%;
          }
        }
      }
    }
    tbody {
      text-align: center;
      border: 1px solid #d8d8d8;
    }
  }
  .EmptyRecentOrder {
    width: 100%;
    line-height: 70px;
    text-align: center;
    border: 1px solid #d8d8d8;
  }
  .paginationWrapper{
    text-align: center;
    margin-top: 10px;
    .pagination {
      margin: 0 auto;
    }
  }
`;

export default function Mypage_RecentOrder() {
  const [currentPage, setCurrentPage] = useState(1);

  //임시함수(페이지변경함수)
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <RecentOrder>
      <div className="titleContainer">
        <FaCircleDot />
        <h3>최근 주문내역</h3>
        <span className="orderQty">
          ( <em>0</em>개 )
        </span>
        <span className="titleText">
          고객님의 최근 <em>1개월</em>내 주문 중 상세내역확인, 취소, 반품, 교환,
          구매확정을 원하는 주문번호를 선택해주세요.
        </span>
      </div>
      <table className="RecentOrderTable">
        <thead>
          <tr>
            <th>주문번호</th>
            <th>상품명</th>
            <th>수량</th>
            <th>결제금액</th>
            <th>주문상태</th>
            <th>적립금</th>
            <th>업체/증빙</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <div className="EmptyRecentOrder">
        최근 1개월 내에 주문하신 내역이 없습니다.
      </div>
      <div className="paginationWrapper">
        <PaginationComponent
          totalResults={1}
          currentPage={currentPage}
          pageRangeDisplayed={10}
          itemsCountPerPage={10}
          handlePageChange={handlePageChange}
        />
      </div>
    </RecentOrder>
  );
}
