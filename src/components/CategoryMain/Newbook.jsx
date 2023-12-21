import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewbookContent from "./NewbookContent";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";

const NewbookContainer = styled.div`
  float: left;
  height: 483px;
  border-left: solid 1px #d8d8d8;
  text-align: left;
  .newBookText {
    padding: 20px 0 19px 20px;
    display: flex;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
  }

  .content_container {
    display: flex;
  }
`;

const Newbook = () => {
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://192.168.50.25:9090/category/main/categoryNew",
    }).then((result) => {
      setNewList(result.data);
    });
  }, []);

  console.log(newList);

  return (
    <NewbookContainer>
      <div className="newBookText">
        새로 나온 책
        <span>
          <IoIosArrowForward />
        </span>
      </div>
      <div className="content_container">
        {newList.map((item, key) => (
          <NewbookContent key={key} content={item} />
        ))}
      </div>
    </NewbookContainer>
  );
};

export default Newbook;
