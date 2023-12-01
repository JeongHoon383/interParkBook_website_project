import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiOutlinePlusSmall, HiOutlineMinusSmall } from "react-icons/hi2";

const SubCategory = styled.div`
  position: relative;
  width: 100%;
  border: 2px solid var(--main);
  font-size: 13px;
  button {
    position: absolute;
    top: -2px;
    right: -2px;
    width: 20px;
    height: 20px;
    background: var(--main);
    svg {
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translateX(50%) translateY(-50%);
      font-size: 19px;
      color: #fff;
    }
  }
  .extended {
    .subCategoryItem {
      &:not(:last-child) {
        border-bottom: 1px solid #ccc;
      }
      display: flex;
      > * {
        padding: 14px 0;
      }
      > a {
        width: 150px;
        padding-left: 19px;
        color: var(--main);
        font-weight: bold;
        background: #f8f8f8;
        border-right: 1px solid #ccc;
        &:hover {
          text-decoration: underline;
        }
      }
      .furtherSubCategory {
        display: flex;
        flex-wrap: wrap;
        flex: 1;
        li {
          width: 25%;
          padding-left: 27px;
          a {
            display: inline-block;
            width: 100%;
            line-height: 22px;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
  .abbreviated {
    display: flex;
    flex-wrap: wrap;
    margin: 13px 0;
    li {
      width: 20%;
      line-height: 26px;
      a {
        display: inline-block;
        width: 100%;
        padding-left: 19px;
        color: var(--main);
        &:hover {
          font-weight: bold;
          text-decoration: underline;
        }
      }
    }
  }
`;

export default function CategoryList_SubCaNav() {
  const [isExtended, setIsExtended] = useState(false);

  const handleClick = () => {
    setIsExtended(!isExtended);
  };

  return (
    <SubCategory>
      {isExtended ? (
        <>
          <button onClick={handleClick}>
            <HiOutlineMinusSmall />
          </button>
          <ul className="extended">
            <li className="subCategoryItem">
              <Link>국내여행</Link>
              <ul className="furtherSubCategory">
                <li>
                  <Link>서울/수도권</Link>
                </li>
                <li>
                  <Link>경상</Link>
                </li>
                <li>
                  <Link>전라</Link>
                </li>
                <li>
                  <Link>충청</Link>
                </li>
                <li>
                  <Link>강원</Link>
                </li>
                <li>
                  <Link>제주</Link>
                </li>
                <li>
                  <Link>북한</Link>
                </li>
                <li>
                  <Link>전국여행</Link>
                </li>
                <li>
                  <Link>지도/지리정보</Link>
                </li>
              </ul>
            </li>
            <li className="subCategoryItem">
              <Link>해외여행</Link>
              <ul className="furtherSubCategory">
                <li>
                  <Link>독일</Link>
                </li>
                <li>
                  <Link>스페인</Link>
                </li>
                <li>
                  <Link>영국</Link>
                </li>
                <li>
                  <Link>이탈리아</Link>
                </li>
                <li>
                  <Link>터키</Link>
                </li>
                <li>
                  <Link>프랑스</Link>
                </li>
                <li>
                  <Link>유럽</Link>
                </li>
                <li>
                  <Link>러시아</Link>
                </li>
                <li>
                  <Link>미국/캐나다/남미</Link>
                </li>
                <li>
                  <Link>중국/홍콩</Link>
                </li>
                <li>
                  <Link>일본</Link>
                </li>
                <li>
                  <Link>대만/태국</Link>
                </li>
                <li>
                  <Link>인도/티뱃</Link>
                </li>
                <li>
                  <Link>동남아시아</Link>
                </li>
                <li>
                  <Link>중앙/남부아시아</Link>
                </li>
                <li>
                  <Link>태평양/오세아니아</Link>
                </li>
                <li>
                  <Link>아프리카/중동</Link>
                </li>
                <li>
                  <Link>세계여행정보/기행</Link>
                </li>
                <li>
                  <Link>세계/영문지도</Link>
                </li>
              </ul>
            </li>
            <li className="subCategoryItem">
              <Link>테마여행</Link>
              <ul className="furtherSubCategory">
                <li>
                  <Link>답사/도보여행</Link>
                </li>
                <li>
                  <Link>문화기행</Link>
                </li>
                <li>
                  <Link>배낭여행</Link>
                </li>
                <li>
                  <Link>별미여행</Link>
                </li>
                <li>
                  <Link>사찰기행</Link>
                </li>
                <li>
                  <Link>성지순례/오지탐험</Link>
                </li>
              </ul>
            </li>
            <li className="subCategoryItem">
              <Link>유학/이민(자기관리)</Link>
            </li>
            <li className="subCategoryItem">
              <Link>여행에세이</Link>
            </li>
            <li className="subCategoryItem">
              <Link>여행회화</Link>
            </li>
            <li className="subCategoryItem">
              <Link>지리의 이해</Link>
            </li>
          </ul>
        </>
      ) : (
        <>
          <button onClick={handleClick}>
            <HiOutlinePlusSmall />
          </button>
          <ul className="abbreviated">
            <li>
              <Link>국내여행</Link>
            </li>
            <li>
              <Link>해외여행</Link>
            </li>
            <li>
              <Link>테마여행</Link>
            </li>
            <li>
              <Link>유학/이민(자기관리)</Link>
            </li>
            <li>
              <Link>여행에세이</Link>
            </li>
            <li>
              <Link>여행회화</Link>
            </li>
            <li>
              <Link>지리의 이해</Link>
            </li>
          </ul>
        </>
      )}
    </SubCategory>
  );
}
