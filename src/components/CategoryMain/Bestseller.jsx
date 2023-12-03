import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import DropBox from '../DropBox';
import BestSellerBox from './BestSellerBox';
import BestSellerRank from './BestSellerRank';
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';

const BestSellerContainer = styled.div`
  width : 178px;

  .bestSeller_text{
    padding: 12px 0 9px 11px;
  }

  .bestSeller_dropBox{
    margin-left: 10px;
    padding: 0 0 9px 0;
  }

  .rank{
    display : flex;
    margin-left : 10px;
  }

  .rank_row{
    margin-right : 5px;
  }

  .rank_high{
    margin-left : 5px;
  }

  .more{
    display : flex;
    margin-left : 45px;
    font-size : 12px;
    cursor: pointer;
  }

  .rank_row:hover,
  .rank_high:hover{
    text-decoration : underline;
    cursor: pointer;
  }
`;

const Bestseller = () => {
  const [rankList, setRankList] = useState([])
  const [active, setActive] = useState(0);
  useEffect(() => {
    axios({
      method : 'get',
      url : '/data/categoryMain/bestSeller.json'
    }).then((result) => {
      setRankList(result.data);
    });
  }, [])
  
  const rankClick = (e) => {
    console.log(e);
  }

  return (
    <BestSellerContainer>
      <h3 className="bestSeller_text">
        베스트셀러
      </h3>
      <div className="bestSeller_dropBox">
          <DropBox/>
      </div>
      <div className="rank">
        <span onClick={rankClick} className="rank_row grey">1~5위</span>
        <span>|</span>
        <span onClick={rankClick} className="rank_high grey">6~10위</span>
        <span className="more grey">더보기<IoIosArrowForward/></span>
      </div>
      <BestSellerBox rank={rankList[0]}/>
      <BestSellerRank rank={rankList[0]}/>
    </BestSellerContainer>
  )
}

export default Bestseller
