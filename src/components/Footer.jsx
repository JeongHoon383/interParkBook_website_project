import React from "react";
import styled from "styled-components";

const AdSection = styled.div`
  height: 60px;
  background: #58cfc7;
  .center {
    width: 60%;
    height: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    cursor: pointer;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    div:first-child {
      border-right: 1px solid white;

      @media (max-width: 768px) {
        margin: 0 auto;
        border-right: none;
        width: 100%;
        border-bottom: 1px solid whitesmoke;
      }
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      height: 100%;
      width: 100%;

      span {
        color: white;
        font-size: 15px;
        margin-right: 10px;
        @media (max-width: 768px) {
          font-size: 11px;
        }
      }
      span:last-child {
        color: #fff5b3;
        font-weight: 600;
      }
    }
  }
`;
const InfoSection = styled.div`
  height: 230px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    border-top: 1px solid black;
  }
  .center {
    width: 60%;
    height: 100%;
    ul:first-child {
      height: 35px;
      display: flex;
      align-items: center;
      @media (max-width: 768px) {
        display: none;
      }
      li:first-child {
        font-weight: bold;
        color: #2a2a2a;
      }
      li {
        font-size: 12px;
        color: #b8b8b8;
        margin-right: 5px;
        cursor: pointer;
        a:hover {
          text-decoration: underline;
        }
      }
      li::after {
        content: "|";
        color: #b8b8b8;
        margin-left: 5px;
      }
      li:last-child::after {
        content: "";
      }
    }
    .company_info {
      display: flex;
      bottom: 0;

      @media (max-width: 768px) {
        flex-direction: column;
      }
      div:first-child {
        border-left: none;
      }
      div {
        border-left: 1px solid #b8b8b8;
        flex: 1;
        padding: 7px 10px;
        @media (max-width: 768px) {
          border-left: none;
          border-bottom: 1px dotted black;
        }
        span {
          font-size: 12px;
        }
        ul {
          font-size: 11px;
          color: #b8b8b8;
          margin: 3px 0;

          li {
            margin: 3px 0;
            padding-left: 10px;
          }
        }
      }
    }
    .copyright_box {
      font-size: 11px;
      padding: 10px 0;
      h1 {
        font-weight: bold;
        margin-bottom: 7px;
        color: #666;
      }
      span {
        color: #b8b8b8;
      }
    }
  }
`;

const Footer = () => {
  return (
    <div>
      <AdSection>
        <div className="center">
          <div>
            <span>매일매일 선착순 도서 상품권 받기!</span>
            <span>이달의 혜택 모음</span>
          </div>
          <div>
            <span>친구에게 상품권 선물 FLEX로 포인트 적립까지!</span>
            <span>상품권 선물하기</span>
          </div>
        </div>
      </AdSection>
      <InfoSection>
        <div className="center">
          <ul>
            <li>
              <a href="#">개인정보처리방침</a>
            </li>
            <li>
              <a href="#">청소년보호정책</a>
            </li>
            <li>
              <a href="#">이용약관</a>
            </li>
            <li>
              <a href="#">위치기반서비스 이용약관</a>
            </li>
            <li>
              <a href="#">회사소개</a>
            </li>
            <li>
              <a href="#">수익배분프로그램</a>
            </li>
            <li>
              <a href="#">광고안내</a>
            </li>
            <li>
              <a href="#">담당자안내</a>
            </li>
            <li>
              <a href="#">판매매니저</a>
            </li>
          </ul>
          <div className="company_info">
            <div>
              <span>(주)인터파크커머스</span>
              <ul>
                <li>
                  주소 | 서울특별시 서초구 강남대로 447(서초동,남서울빌딩)
                </li>
                <li>사업자등록번호 | 422-81-03185</li>
                <li>호스팅서비스 제공자 | (주)인터파크커머스</li>
                <li>대표이사 | 김동식</li>
                <li>통신판매업신고 | 2023-서울서초-0823</li>
              </ul>
            </div>
            <div>
              <span>고객센터</span>
              <ul>
                <li>전화 9999-9999</li>
                <li>팩스 02-999-9999</li>
                <li>이메일 interpark@naver.com</li>
                <li>개인정보보호책임자 cposhopping@interparkshop.com</li>
                <li>개인정보보유기간 회원탈퇴시까지</li>
              </ul>
            </div>
            <div>
              <span>KG이니시스 구매안전서비스</span>
              <ul>
                <li>
                  고객님은 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서
                  가입한
                </li>
                <li> KG이니시스의 구매안전서비스를 이용하실 수 있습니다.</li>
              </ul>
            </div>
          </div>
          <div className="copyright_box">
            <h1>
              주식회사 인터파크커머스는 인터파크 쇼핑, 인터파크 도서의
              통신판매중개자로서 통신판매의 당사자가 아니므로, 개별 판매자가
              등록한 오픈마켓 상품에 대해서 주식회사 인터파크커머스는 일체
              책임을 지지 않습니다.
            </h1>
            <span>
              Copyright © Interpark Commerce Corp. All Rights Reserved.
            </span>
          </div>
        </div>
      </InfoSection>
    </div>
  );
};

export default Footer;
