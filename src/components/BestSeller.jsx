import React from "react";
import Book from "./Book";
import { useState } from "react";
import SearchNavBar from "./SearchNavBar";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchSideBar from "./SearchSideBar";



export default function BestSeller() {


  return (

    <div className="toptop">

      <img src="https://qi-b.qoo10cdn.com/renewPark/reBookpark/rankChart2016/text/h1_bestSeller.png" className="topletter" />

      <SearchSideBar className="searchsidebar"/>
   

      <SearchNavBar className="searchnavbar" />

      <div className="content">

        <Book filename="BestSeller" />

      </div>

      <div className="bottomtotal">
        <ul className="bottomtotaltitle">베스트셀러 집계 안내 </ul>
        
          <li className="bottomtotalct">인터파크 도서의 베스트셀러는 출판유통질서 확립을 위한 베스트셀러 집계/발표 가이드라인 협약을 준수합니다.</li>
          <li className="bottomtotalct">(협약에 따른 변경일: 2018.05.01)</li>
          <li className="bottomtotalct">당일 베스트셀러는 1시간 단위로 업데이트되며 주간/월간/연간 베스트셀러는 일단위로 업데이트됩니다.</li>
       
      </div>


    </div>
  )


}