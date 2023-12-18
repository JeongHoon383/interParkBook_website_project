import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const IssueBook = styled.div`
  padding-bottom: 58px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgb(248, 248, 248);

  .issueBookItem {
    margin-top: 50px;
    p {
      margin-top: 35px;
      font-size: 0.8em;
      font-weight: 800;
      color: var(--hover);
      text-align: center;
    }
    .imgBox {
      width: 200px;
      height: 270px;
      margin-bottom: 12px;
    }
  }
`;

const imgStyle = {
  width: '100%',
  height: '100%',
  boxShadow: '0 10px 4px -4px #d9d9d9',
};

export default function Main_MainBannerIssue() {
  const [issueBook, setIssueBook] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:9090/book')
      .then((result) => {
        setIssueBook(result.data.slice(0, 4));
      })
      .catch((err) => console.error(err));
  }, [issueBook]);

  return (
    <IssueBook>
      {issueBook.map((v, i) => (
        <div className="issueBookItem" key={i}>
          <div className="imgBox">
            <Link to={`/book/${v.isbn13}`}>
              <img src={v.cover} style={imgStyle} alt="" />
            </Link>
          </div>
          <p>{v.title.split('-')[0]}</p>
        </div>
      ))}
    </IssueBook>
  );
}
