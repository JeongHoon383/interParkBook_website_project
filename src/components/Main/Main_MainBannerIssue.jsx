import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const IssueBook = styled.div`
  padding-bottom: 58px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  background-color: rgb(248, 248, 248);

  .issueBookItem {
    width: 22%;
    margin-top: 50px;
    p {
      margin-top: 44px;
      font-size: 0.8em;
      font-weight: 800;
      color: var(--hover);
      text-align: center;
    }
    .imgBox {
      width: 100%;
      height: 223px;
    }
  }
`;

const imgStyle = {
  margin: "0 auto",
  width: "80%",
  height: "100%",
  boxShadow: "0 10px 4px -4px #d9d9d9",
};

export default function Main_MainBannerIssue() {
  const [issueBook, setIssueBook] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:9090/book")
      .then((result) => {
        setIssueBook(result.data.slice(0, 4));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <IssueBook>
      {issueBook.map((v, i) => (
        <div className="issueBookItem" key={i}>
          <div className="imgBox">
            <Link to={`/book/${v.isbn13}`}>
              <img src={v.cover} style={imgStyle} alt="" />
            </Link>
          </div>
          <p>{v.title.split("-")[0]}</p>
        </div>
      ))}
    </IssueBook>
  );
}
