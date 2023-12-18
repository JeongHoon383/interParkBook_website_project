import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
const SortSection = styled(motion.section)`
  margin-top: 40px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 7px;
  }
  h1 {
    font-size: 20px;
    margin: 10px 0;
    font-weight: 900;
    padding-left: 20px;
    @media (max-width: 768px) {
      font-size: 14px;
      margin: 7px 0;
      padding-left: 14px;
    }
  }
  hr {
    margin-bottom: 15px;
    @media (max-width: 768px) {
      margin-bottom: 11px;
    }
  }
  em {
    font-size: 12px;
    padding-left: 20px;
    color: lightgray;
    @media (max-width: 768px) {
      font-size: 9px;
      padding-left: 14px;
    }
  }
  span {
    font-size: 14px;
    letter-spacing: normal;
    line-height: 150%;
    @media (max-width: 768px) {
      font-size: 10px;
    }
  }
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  div {
    min-height: 40px;
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 12px;
    line-height: 150%;
    word-spacing: 5px;
    @media (max-width: 768px) {
      min-height: 28px;
      padding-left: 14px;
      font-size: 10px;
      word-spacing: 4px;
    }
  }
  div:nth-child(odd) {
    background-color: #f9f9f9;
  }
  div:nth-child(even) {
    grid-column: span 4;
  }
`;
const Detail_change = () => {
  return (
    <>
      <SortSection>
        <h1>판매자 정보</h1>
        <hr />
        <em>
          인터파크도서에 등록된 오픈마켓 상품은 그 내용과 책임이 모두 판매자에게
          있으며, 인터파크도서는 해당 상품과 내용에 대해 책임지지 않습니다.
        </em>
      </SortSection>
      <GridBox>
        <div>상호</div>
        <div>(주)교보문고</div>
        <div>대표자명</div>
        <div>안병현</div>
        <div>사업자등록번호</div>
        <div>102-81-11670</div>
        <div>연락처</div>
        <div>1544-1900</div>
        <div>전자우편주소</div>
        <div>callcenter@kyobobook.co.kr</div>
        <div>통신판매업신고번호</div>
        <div>01-0653</div>
        <div>영업소재지</div>
        <div>서울특별시 종로구 종로 1(종로1가,교보빌딩)</div>
      </GridBox>
      <SortSection>
        <h1>교환/환불</h1>
        <hr />
        <em>
          인터파크도서에 등록된 오픈마켓 상품은 그 내용과 책임이 모두 판매자에게
          있으며, 인터파크도서는 해당 상품과 내용에 대해 책임지지 않습니다.
        </em>
      </SortSection>
      <GridBox>
        <div>반품/교환 방법</div>
        <div>
          ‘마이페이지 취소/반품/교환/환불’ 에서 신청 또는 1:1 문의 게시판 및
          고객센터(1577-2555)에서 신청 가능
        </div>
        <div>반품/교환가능 기간</div>
        <div>
          <ul>
            <li>
              변심 반품의 경우 출고완료 후 6일(영업일 기준) 이내까지만 가능
            </li>
            <li>
              단, 상품의 결함 및 계약내용과 다를 경우 문제점 발견 후 30일 이내
            </li>
          </ul>
        </div>
        <div>반품/교환 비용</div>
        <div>
          <ul>
            <li>변심 혹은 구매착오로 인한 반품/교환은 반송료 고객 부담</li>
            <li>
              상품이나 서비스 자체의 하자로 인한 교환/반품은 반송료 판매자 부담
            </li>
          </ul>
        </div>
        <div>반품/교환 불가 사유</div>
        <div>
          <ul>
            <li>소비자의 책임 있는 사유로 상품 등이 손실 또는 훼손된 경우</li>
            <li> (단지 확인을 위한 포장 훼손은 제외)</li>
            <li>
              ·소비자의 사용, 포장 개봉에 의해 상품 등의 가치가 현저히 감소한
              경우
            </li>
            <li>
              예) 화장품, 식품, 가전제품(악세서리 포함) 등 ·복제가 가능한 상품
              등의 포장을 훼손한 경우 예) 음반/DVD/비디오, 소프트웨어, 만화책,
              잡지, 영상 화보집
            </li>
            <li>
              ·시간의 경과에 의해 재판매가 곤란한 정도로 가치가 현저히 감소한
              경우
            </li>
            <li>
              ·전자상거래 등에서의 소비자보호에 관한 법률이 정하는 소비자
              청약철회 제한 내용에 해당되는 경우
            </li>
          </ul>
        </div>
        <div>전자우편주소</div>
        <div>callcenter@kyobobook.co.kr</div>
        <div>통신판매업신고번호</div>
        <div>01-0653</div>
        <div>영업소재지</div>
        <div>서울특별시 종로구 종로 1(종로1가,교보빌딩)</div>
      </GridBox>
      <SortSection>
        <h1>배송안내</h1>
        <hr />
        <ul>
          <li>
            <em>
              교보문고 상품은 택배로 배송되며, 출고완료 1~2일내 상품을 받아 보실
              수 있습니다.
            </em>
          </li>
          <li>
            <em>
              출고가능 시간이 서로 다른 상품을 함께 주문할 경우 출고가능 시간이
              가장 긴 상품을 기준으로 배송됩니다.
            </em>
          </li>
          <li>
            <em>군부대, 교도소 등 특정기관은 우체국 택배만 배송가능합니다.</em>
          </li>
          <li>
            <em>배송비는 업체 배송비 정책에 따릅니다.</em>
            <ul>
              <li>
                <em>
                  - 도서 구매 시 15,000원 이상 무료배송, 15,000원 미만 2,500원
                </em>
              </li>
              <li>
                <em>- 상품별 배송비가 있는 경우, 상품별 배송비 정책 적용</em>
              </li>
            </ul>
          </li>
        </ul>
      </SortSection>
    </>
  );
};

export default Detail_change;
