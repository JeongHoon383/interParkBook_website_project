import styled from "styled-components";
import Pagination from 'react-js-pagination'
import { useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineLeft, AiOutlineRight, AiOutlineDoubleRight } from "react-icons/ai";


const Sortarea = styled.div`
  width: 770px;
  margin-top: 30px;
  border: 1px solid #d8d8d8;
  .topArea{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    border-bottom: 1px solid #d8d8d8;
    .sortOption{
      button{
        line-height: 25px;
        margin-right: 10px;
        &:hover{
          font-weight: bold;
        }
        &.currentSort{
          font-weight: bold;
          color: var(--main);
        }
      }
    }
    .listOption{
      select{
        height: 30px;
        border: 1px solid #d8d8d8;
        border-radius: 4px;
        &:first-child{
          margin-right: 5px;
        }
      }
    }
  }
  .bottomArea{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    background: #f8f8f8;
    .pagination{
      display: inline-flex;
      align-items: center;
      li{
        a{
          display: inline-block;
          width: 26px;
          line-height: 24px;
          margin: 0 1px;
          text-align: center;
          &.active{
            font-weight: bold;
            border-radius: 4px;
            border: 1px solid #d8d8d8;
            background: #FFF;
          }
          &:not(.paginationBtn):hover{
            border-radius: 4px;
            border: 1px solid #d8d8d8;
            background: #FFF;
          }
          &.paginationBtn{
            font-size: 16px;
          }
        }
      }
    }
    .selectOption{
      button{
        line-height: 27px;
        padding: 0 7px;
        border: 1px solid #d8d8d8;
        border-radius: 4px;
        background: #FFF;
        &:not(:last-child){
          margin-right: 5px;
        }
      }
    }
  }
`;

export default function CategoryList_Sort({data}){
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState("20");

  const handlePageChange = (page) => setCurrentPage(page)
  const handleChangeCount = (e) => setSelected(e.target.value)
  
  return(
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
          <select name="count" id="count" onChange={handleChangeCount} value={selected}>
            <option value="20">20개씩 보기</option>
            <option value="40">40개씩 보기</option>
          </select>
          <select name="soldout" id="soldout">
            <option value="include">품절포함</option>
            <option value="exclude">품절제외</option>
          </select>
        </span>
      </div>
      <div className="bottomArea">
        <Pagination 
          totalItemsCount={data.totalResults}
          activePage={currentPage}
          pageRangeDisplayed={10}
          itemsCountPerPage={parseInt(selected)}
          onChange={handlePageChange}
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
        <span className="selectOption">
          <button>전체선택</button>
          <button>카트에 넣기</button>
          <button>찜하기</button>
        </span>
      </div>
    </Sortarea>
  );
}