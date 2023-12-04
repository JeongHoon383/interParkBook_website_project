import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DropBox from '../DropBox';
import BestSellerBox from './BestSellerBox';
import BestSellerRank from './BestSellerRank';
import { IoIosArrowForward } from 'react-icons/io';
import axios from 'axios';

const BestSellerContainer = styled.div`
  width: 178px;

  .bestSeller_text {
    padding: 12px 0 9px 11px;
  }

  .bestSeller_dropBox {
    margin-left: 10px;
    padding: 0 0 9px 0;
  }

  .rank {
    display: flex;
    margin-left: 10px;
  }

  .rank_row {
    margin-right: 5px;
  }

  .rank_high {
    margin-left: 5px;
  }

  .more {
    display: flex;
    margin-left: 45px;
    font-size: 12px;
    cursor: pointer;
  }

  .rank_row:hover,
  .rank_high:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Bestseller = () => {
  const [rankList, setRankList] = useState([]);
  const [active, setActive] = useState('0');
  const [renderList, setLenderList] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: '/data/categoryMain/bestSeller.json',
    }).then((result) => {
      const date = result.data;

      setRankList(date);
      setLenderList(date.slice(0, 5));
    });
  }, []);

  const rankClick = ({ start, end }) => {
    setActive(start);
    setLenderList(rankList.slice(start, end));
  };

  const rankHover = (rank) => {
    setActive(rank - 1);
  };

  return (
    <BestSellerContainer>
      <h3 className='bestSeller_text'>베스트셀러</h3>
      <div className='bestSeller_dropBox'>
        <DropBox />
      </div>
      <div className='rank'>
        <span
          onClick={() => rankClick({ start: 0, end: 5 })}
          className='rank_row grey'
        >
          1~5위
        </span>
        <span>|</span>
        <span
          onClick={() => rankClick({ start: 5, end: 10 })}
          className='rank_high grey'
        >
          6~10위
        </span>
        <span className='more grey'>
          더보기
          <IoIosArrowForward />
        </span>
      </div>
      {rankList[active] && <BestSellerBox rank={rankList[active]} />}
      {renderList.length > 0 &&
        renderList.map((item) => (
          <BestSellerRank key={item.rank} item={item} rankHover={rankHover} />
        ))}
    </BestSellerContainer>
  );
};

export default Bestseller;