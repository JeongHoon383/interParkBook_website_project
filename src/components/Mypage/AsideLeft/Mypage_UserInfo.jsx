import styled from "styled-components";
import { Link } from "react-router-dom";

const UserInfoContainer = styled.div`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #d8d8d8;
  .userInfo {
    text-align: center;
    em {
      font-size: 13px;
      font-weight: bold;
    }
    .userName {
      color: #333;
    }
    .userGrade {
      color: var(--main);
      text-decoration: underline;
    }
  }
  .infoBtn {
    text-align: center;
    margin: 10px 0;
    a {
      display: inline-block;
      width: 40%;
      padding: 2px;
      font-size: 11px;
      text-align: center;
      border: 1px solid #d8d8d8;
      background: #f8f8f8;
      &:first-child {
        width: 35%;
        margin-right: 5px;
      }
    }
  }
  .userBenefit {
    padding: 8px;
    color: #888;
    font-weight: bold;
    border-radius: 4px;
    border: 1px solid #d8d8d8;
    li {
      padding: 5px 0;
      p {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .couponInfo{
          margin-top: 3px;
          margin-left: 4px;
        }
      }
      .benefitName{
        color: #333;
      }
      .benefitInfo{ 
          display: inline-block;
          width: 15px;
          height: 15px;
          margin-left: 5px;
          text-align: center;
          font-size: 11px;
          border-radius: 50%;
          border: 1px solid #d8d8d8;
        }
      em{
        color: var(--main); 
      }
      &:not(:last-child) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 2px dotted #d8d8d8;
      }
    }
  }
`;

export default function Mypage_UserInfo() {
  return (
    <UserInfoContainer>
      <p className="userInfo">
        <em className="userName">data</em> 님은 현재
        <br />
        <em className="userGrade">WELCOME</em> 회원입니다.
      </p>
      <div className="infoBtn">
        <Link>등급별혜택</Link>
        <Link>회원정보수정</Link>
      </div>
      <ul className="userBenefit">
        <li>
          <span className="benefitName">
            S-Point
            <span className="benefitInfo">?</span>
          </span>
          <span>
            <em>0</em> P
          </span>
        </li>
        <li>
          <span className="benefitName">
            Coupon
          </span>
          <span>
            <em>0</em> 장
          </span>
        </li>
        <li>
          <p>
            <span className="benefitName">
              도서상품권
              <span className="benefitInfo">?</span>
            </span>
          </p>
          <p>
            <span className="couponInfo">사용가능매수</span>
            <span>
              <em>1</em> 매
            </span>
          </p>
          <p>
            <span className="couponInfo">사용가능금액</span>
            <span>
              <em>1,000</em> 원
            </span>
          </p>
        </li>
      </ul>
    </UserInfoContainer>
  );
}
