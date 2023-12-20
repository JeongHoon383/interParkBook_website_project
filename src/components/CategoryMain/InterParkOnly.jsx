import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import OnlyContent from './OnlyContent';
import OnlyContentLast from './OnlyContentLast';
import axios from 'axios';
import CommonSlider from '../../common/CommonSlider';

const Only = styled.div`
  margin-top: 20px;

  .onlyContainer {
    display: flex;
    margin: 0 auto;
    margin-top: 20px;
    width: 958px;
    border: solid 1px #d8d8d8;
  }
`;

const InterParkOnly = () => {
  const [onlyList, setOnlyList] = useState([]);
  const [mediaList, setMediaList] = useState([]);
  const [goodsList, setGoodsList] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:9090/category/main/',
    }).then((result) => {
      const data = result.data;

      setOnlyList(data);
      setMediaList(data.slice(1, 4));

      console.log('data:', data);
    });
  }, []);

  useEffect(() => {
    axios({
      method : 'get',
      url : '/data/categoryMain/interParkOnly.json'
    }).then((result) => {
      setGoodsList(result.data)
    })
  },[])


  return (
    <Only>
      <h3>INTERPARK ONLY</h3>
      <div className='onlyContainer'>
        <OnlyContent topTitle='INTERPARK 편집자 리뷰' onlyList={onlyList[0]} />
        <CommonSlider
          data={mediaList}
          renderItem={(item) => (
            <OnlyContent key={item.title} onlyList={item} topTitle='미디어 추천' />
          )}
        />
        <CommonSlider
          data={goodsList}
          renderItem={(item) => (
            <OnlyContentLast key={item.title} onlyList={item} topTitle='사은품 증정'/>
          )}
        />
      </div>
    </Only>
  );
};

export default InterParkOnly;

