import React from 'react';
import styled from 'styled-components';

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
      font-size: 0.8em;
      font-weight: 800;
      color: var(--hover);
      text-align: center;
      &:last-child {
        margin-top: 7px;
        font-size: 0.7em;
        color: var(--default);
      }
    }
    .imgBox {
      width: 200px;
      height: 270px;
      margin-bottom: 12px;
      img {
        width: 100%;
        height: 100%;
        box-shadow: 0 10px 4px -4px #d9d9d9;
      }
    }
  }
`;

export default function Main_MainBannerIssue() {
  return (
    <IssueBook>
      <div className="issueBookItem">
        <div className="imgBox">
          <img src="/img/IssueBook/issueBook1.jpg" alt="" />
        </div>
        <p>당도 100퍼센트의 행복</p>
        <p>마님 & 올리버쌤 첫 번째 에세이</p>
      </div>
      <div className="issueBookItem">
        <div className="imgBox">
          <img src="/img/IssueBook/issueBook2.jpg" alt="" />
        </div>
        <p>마흔에 읽는 쇼펜하우어</p>
        <p>나.혼.산. 하석진이 읽은 책</p>
      </div>
      <div className="issueBookItem">
        <div className="imgBox">
          <img src="/img/IssueBook/issueBook3.jpg" alt="" />
        </div>
        <p>작별하지 않는다</p>
        <p>한경 장편 소설 메디치상 수상!</p>
      </div>
      <div className="issueBookItem">
        <div className="imgBox">
          <img src="/img/IssueBook/issueBook4.jpg" alt="" />
        </div>
        <p>이상한 과자 가게 전천당 19</p>
        <p>어린이 No.1 베스트셀러</p>
      </div>
    </IssueBook>
  );
}
