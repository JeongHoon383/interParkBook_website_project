import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import OnlyContent from './OnlyContent'
import axios from 'axios'

const Only = styled.div`
  margin-top : 20px;

  .onlyContainer{
    display : flex;
    margin : 0 auto;
    margin-top : 20px;
    width : 958px;
    border: solid 1px #d8d8d8;
  }
`

const InterParkOnly = () => {
  const [onlyList, setOnlyList] = useState([]);
  const [mediaList, setMediaList] = useState([]);
  const [goodsList, setGoodsList] = useState([]);

  useEffect(() => {
    axios({
      method : 'get',
      url : '/data/categoryMain/interParkOnly.json'
    }).then((result) => {
      const data = result.data

      setOnlyList(data);
      setMediaList(data.slice(1, 4))
      setGoodsList(data.slice(4, 7))
    })
  })


  return (
    <Only>
      <h3>INTERPARK ONLY</h3>
      <div className="onlyContainer">
        <OnlyContent onlyList={onlyList[0]}/>
        <OnlyContent onlyList={mediaList[0]}/>
        <OnlyContent onlyList={goodsList[0]}/>
      </div>
    </Only>
  )
}

export default InterParkOnly
