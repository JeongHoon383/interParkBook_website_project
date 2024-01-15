import React, { useEffect } from "react";
import Book from "./Book";
import { useState } from "react";
import SearchNavBar from "../Search/SearchNavBar";
import SearchSideBar from "../Search/SearchSideBar";
import axios from "axios";
import Pagination from "react-js-pagination";
import styled from "styled-components";

const Toptop = styled.div`
  width: 1200px;
  justify-content: center;
  margin: 0 auto;
  /*border:5px solid blueviolet;*/
  /* margin-left: 270px; */
  position: relative;
`;

const Topletter = styled.img`
  margin-top: 20px;
  margin: 20px auto;
  margin-left: 1px;
`;
const Bottomtotal = styled.div`
  background-color: rgb(237, 237, 237);
  width: 890px;
  margin-top: 20px;
  padding: 20px;
  margin-left: 250px;
  line-height: 10px;
`;
const Bottomtotaltitle = styled.ul`
  font-size: 13px;
  font-weight: 900;
  margin-bottom: 7px;
  line-height: 20px;
`;

const Bottomtotalct = styled.li`
  font-size: 10px;
  color: #a1a1a1;
  margin-bottom: 5px;
  line-height: 20px;
`;

const PaginationWrapper = styled.div`
  color: #757575;
  font-weight: 999;
  font-size: 13px;
  display: flex;
  justify-content: center;
  display: flex;
  gap: 20px;
  margin-left: 20px;
  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    cursor: pointer;
  }
  li.previous a,
  li.next a {
    color: #62b6b7;
  }
  li.active a {
    color: #91cccd;
    font-weight: 700;
    min-width: 32px;
  }
`;

export default function BestSeller() {
  const [navbar, setNavbar] = useState("all");
  const [categoryName, setCategoryName] = useState("total");
  const [BestSeller, setBestSeller] = useState([]);
  const [totalitems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);
  const itemsCountPerPage = 15;

  useEffect(() => {
    axios
      .get(
        `http://127.0.0.1:9090/bestseller/${navbar}/${categoryName}/${page}/${itemsCountPerPage}`
      )
      .then((result) => {
        console.log(result.data[0].total_rows);
        setTotalItems(result.data[0].total_rows);
        setBestSeller(result.data);
        /*       setTotalPages(result.data.totalPages); */
      })
      .catch((err) => console.log(err));
  }, [navbar, categoryName, page]);

  const handleChange = (page) => {
    setPage(page);
  };

  return (
    <Toptop>
      <Topletter
        src="https://qi-b.qoo10cdn.com/renewPark/reBookpark/rankChart2016/text/h1_bestSeller.png"
        alt=""
      />
      <SearchSideBar setCategoryName={setCategoryName}></SearchSideBar>
      <SearchNavBar setNavbar={setNavbar}></SearchNavBar>
      <>
        <Book filename="BestSeller" BestSeller={BestSeller} />
      </>

      {navbar !== "all" ? (
        <PaginationWrapper>
          <Pagination
            activePage={page}
            itemsCountPerPage={15}
            totalItemsCount={totalitems}
            pageRangeDisplayed={5}
            prevPageText={"<"}
            nextPageText={">"}
            onChange={handleChange}
          />
        </PaginationWrapper>
      ) : null}

      <Bottomtotal>
        <Bottomtotaltitle>베스트셀러 집계 안내</Bottomtotaltitle>

        <Bottomtotalct>
          인터파크 도서의 베스트셀러는 출판유통질서 확립을 위한 베스트셀러
          집계/발표 가이드라인 협약을 준수합니다.
        </Bottomtotalct>

        <Bottomtotalct>(협약에 따른 변경일: 2018.05.01)</Bottomtotalct>

        <Bottomtotalct>
          당일 베스트셀러는 1시간 단위로 업데이트되며 주간/월간/연간
          베스트셀러는 일단위로 업데이트됩니다.
        </Bottomtotalct>
      </Bottomtotal>
    </Toptop>
  );
}
