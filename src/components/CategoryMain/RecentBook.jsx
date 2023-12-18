import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RecentContent from './RecentContent';
import axios from 'axios';
import CommonSlider from '../../common/CommonSlider';
import { setArrayInArray } from '../../util/array';

const Recent_container = styled.div`
  display: flex;
  margin: 20px auto 20px;

  width: 958px;
  height: 364px;
  border: solid 1px #d8d8d8;
  background-color: #fff;

  .recent_book {
    width: 218px;
    height: 362px;
    background-color: #ecf5fe;
    border-right: solid 1px #d8d8d8;
  }

  .recent_title {
    height: 52px;
    line-height: 52px;
    text-align: center;
  }

  .recent_img_box {
    padding-left: 47px;
    padding-bottom: 25px;
  }

  .recent_img {
    height: 185px;
  }

  .recent_text {
    margin-top: 17px;
  }

  .recent_name {
    margin-bottom: 8px;
    font-weight: bold;
  }

  .recent_name:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .recent_author {
    margin-bottom: 8px;
  }

  .recent_grade {
    margin-bottom: 8px;
  }

  .recent_price {
    font-weight: bold;
  }

  .recent_content {
    width: 739px;
  }

  .recent_content p {
    display: flex;
    margin-left: 30px;
  }

  .recent_content_title {
    padding-left: 20px;
    height: 52px;
    line-height: 52px;
    font-size: 14px;
    text-align: left;
  }

  .recent_content_title em {
    color: var(—main);
  }
`;

const RecentBook = () => {
  const [recentList, setRecentList] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: '/data/categoryMain/recent.json',
    }).then((result) => {
      const dataList = setArrayInArray({ array: result.data, len: 4 });
      setRecentList(dataList);
    });
  }, []);

  return (
    <Recent_container>
      <div className='recent_book'>
        <h3 className='recent_title'>내가 최근 본 상품</h3>
        <div className='recent_img_box'>
          <div>
            <div>
              <Link to='/book/:id'>
                <img
                  className='recent_img'
                  src='/img/CategoryMain/recent_img/banner.jpeg'
                  alt=''
                />
              </Link>
            </div>
            <div className='recent_text'>
              <ul>
                <Link to='/book/:id'>
                  <li className='recent_name'>레몬과 살인귀</li>
                </Link>
                <li className='recent_author grey'>구와가키 아유 저</li>
                <li className='recent_grade'>별점</li>
                <li className='recent_price'>15,120원(10% 할인)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CommonSlider
        data={recentList}
        renderItem={({ id, renderList }) => (
          <div className='recent_content' key={id}>
            <h3 className='recent_content_title'>
              이 책을 구입하신 분들이 <em>함께 산 책</em>
            </h3>
            <p>
              {renderList.map((item) => (
                <RecentContent key={item.title} recentList={item} />
              ))}
            </p>
          </div>
        )}
      />
    </Recent_container>
  );
};

export default RecentBook;
