import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DropBox from '../DropBox';
import BestSellerBox from './BestSellerBox';
import BestSellerRank from './BestSellerRank';
import { IoIosArrowForward } from 'react-icons/io';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

  .rank_row{
    margin-right: 5px;
    font-weight : bold;
    cursor: pointer;
  }

  .rank_row_active{
    margin-right : 5px;
  }

  .rank_high{
    margin-left: 5px;
    font-weight : bold;
    cursor: pointer;
  }

  .rank_high_active{
    margin-left : 5px;
    
  }
  .rank_row_active:hover,
  .rank_high_active:hover{
    text-decoration : underline;
    cursor: pointer;
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
  const [rankActive, setRankActive] = useState('0');

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:9090/category/main',
    }).then((result) => {
      const data = result.data;

      setRankList(data);
      setLenderList(data.slice(0, 5));
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
          onClick={() => {
            rankClick({ start: 0, end: 5 })
            return setRankActive('0')
          }}
          className={rankActive === '0' ? 'rank_row' : 'rank_row_active grey'}
        >
          1~5위
        </span>
        <span>|</span>
        <span
          onClick={() => {
            rankClick({ start: 5, end: 10 })
            return setRankActive('1')
        }}
          className={rankActive === '1' ? 'rank_high' : 'rank_high_active grey'}
        >
          6~10위
        </span>
        <Link to="/bestSeller/">
          <span className='more grey'>
            더보기
            <IoIosArrowForward />
          </span>
        </Link>
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