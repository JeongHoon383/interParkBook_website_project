import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SteadyContainer from "./SteadyContainer";
import axios from "axios";

const Steady = styled.div`
  width: 958px;
  display: flex;
  justify-content: space-between;
`;

const SteadySeller = () => {
  const [steadyList, setSteadyList] = useState([]);
  const [hotList, setHotList] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://192.168.50.25:9090/category/main/categorySteady",
    }).then((result) => {
      setSteadyList(result.data);
    });
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://192.168.50.25:9090/category/main/categoryHot",
    }).then((result) => {
      setHotList(result.data);
    });
  }, []);

  return (
    <Steady>
      <SteadyContainer title="스테디셀러" List={steadyList} />
      <SteadyContainer title="화제의 책" List={hotList} />
    </Steady>
  );
};

export default SteadySeller;
