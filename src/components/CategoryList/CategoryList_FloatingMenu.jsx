import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import * as cookies from '../../util/cookies.js';
import { RiCoupon3Line } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";
import { FiUser } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";

const FloatingMenu = styled.aside`
  position: sticky;
  top: 20px;
  width: 90px;
  margin-left: 30px;
  font-size: 11px;
  .myInterpark,
  .recentView {
    line-height: 28px;
    background: var(--main);
    text-align: center;
    color: #fff;
  }
  > * {
    background: #f8f8f8;
  }
  .myMenu,
  .recentViewList,
  .fractionPagination {
    border-left: 1px solid #d8d8d8;
    border-right: 1px solid #d8d8d8;
  }
  .myMenu {
    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 30px;
      padding: 0 8px;
      &:not(:last-child) {
        border-bottom: 1px solid #d8d8d8;
      }
      svg {
        font-size: 18px;
      }
      .pointIcon {
        width: 16px;
        height: 16px;
        font-size: 11px;
        font-weight: bold;
        line-height: 16px;
        color: #f8f8f8;
        text-align: center;
        border-radius: 50%;
        background: #666;
      }
    }
  }
  .recentViewList {
    min-height: 240px;
    padding: 5px 0;
    li {
      > a {
        display: block;
        width: 70%;
        margin: 5px auto;
        figure {
          position: relative;
          width: 100%;
          img {
            width: 100%;
          }
          figcaption {
            position: absolute;
            display: none;
            flex-direction: column;
            justify-content: space-between;
            top: 0;
            right: 0;
            width: 150px;
            height: 100%;
            padding: 10px 5px;
            transform: translateX(100%);
            border: 1px solid #d8d8d8;
            background: #fff;
            .deleteBtn {
              position: absolute;
              top: 0;
              left: 0;
              transform: translateX(-100%);
              color: #fff;
              font-size: 10px;
              width: 16px;
              height: 16px;
              text-align: center;
              background: #000;
              svg {
                position: absolute;
                top: 50%;
                right: 50%;
                transform: translateX(50%) translateY(-50%);
              }
            }
            .bookTitle {
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              word-wrap: break-word;
              font-size: 12px;
              line-height: 13px;
              &:hover {
                text-decoration: underline;
              }
            }
            .priceSales {
              margin-top: 5px;
              font-size: 14px;
              font-weight: bold;
              color: var(--main);
            }
          }
          &:hover figcaption {
            display: flex;
          }
        }
      }
    }
  }
  .fractionPagination {
    width: 100%;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid #d8d8d8;
    span {
      margin: 0 5px;
    }
    button {
      width: 16px;
      line-height: 14px;
      font-size: 12px;
      border: 1px solid #d8d8d8;
      background: #fff;
    }
  }
`;

export default function CategoryList_FloatingMenu({userId}) {
  const [recentView, setRecentView] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    axios.get(`http://127.0.0.1:9090/member/${userId}`)
    .then(result => setUserInfo(result.data));

    // const recentViewArr = cookies.getCookie('recentView');
    // console.log(recentViewArr);
    // axios.get(`http://127.0.0.1:9090/floatingMenu/${JSON.stringify(recentViewArr)}`)
    // .then(result => console.log(result.data));

  }, []);

  



  const handleDelete = (e) => {
    /* 최근 본 상품 삭제 기능 추가 */
    e.preventDefault();
  };

  return (
    <FloatingMenu>
      <h4 className="myInterpark">마이 인터파크</h4>
      {
        userId ? (
          <div className="myMenu">
          <Link>
            <span className="pointIcon">P</span>
            <span>{userInfo.userMileage}P</span>
          </Link>
          <Link>
            <RiCoupon3Line />
            <span>0장</span>
          </Link>
          <Link to={'/mypage'}>
            <FiUser />
            <span>마이페이지</span>
          </Link>
          <Link>
            <CiHeart />
            <span>찜한상품</span>
          </Link>
        </div>
        ) : (
          null
        )
      }
      <h4 className="recentView">
        최근 본 상품
        <span className="recentViewCount">3</span>
      </h4>
      <ul className="recentViewList">
        {/* 추후 sql 이용 시 axios 데이터로 수정/ 데이터 없을 때 화면 추가 /삭제 기능 추가*/}
        <li>
          <Link>
            <figure>
              <img
                src="https://image.aladin.co.kr/product/32940/45/cover150/k692936045_1.jpg"
                alt="recentViewBookCover"
              />
              <figcaption>
                <button className="deleteBtn" onClick={handleDelete}>
                  <TfiClose />
                </button>
                <p className="bookTitle">
                  함께 웃고, 배우고, 사랑하고 - 네 자매의 스페인 여행
                </p>
                <p className="priceSales">17100원</p>
              </figcaption>
            </figure>
          </Link>
        </li>
        <li>
          <Link>
            <figure>
              <img
                src="https://image.aladin.co.kr/product/32940/45/cover150/k692936045_1.jpg"
                alt="recentViewBookCover"
              />
              <figcaption>
                <button className="deleteBtn" onClick={handleDelete}>
                  <TfiClose />
                </button>
                <p className="bookTitle">
                  함께 웃고, 배우고, 사랑하고 - 네 자매의 스페인 여행
                </p>
                <p className="priceSales">17100원</p>
              </figcaption>
            </figure>
          </Link>
        </li>
        <li>
          <Link>
            <figure>
              <img
                src="https://image.aladin.co.kr/product/32940/45/cover150/k692936045_1.jpg"
                alt="recentViewBookCover"
              />
              <figcaption>
                <button className="deleteBtn" onClick={handleDelete}>
                  <TfiClose />
                </button>
                <p className="bookTitle">
                  함께 웃고, 배우고, 사랑하고 - 네 자매의 스페인 여행
                </p>
                <p className="priceSales">17100원</p>
              </figcaption>
            </figure>
          </Link>
        </li>
      </ul>
      <div className="fractionPagination">
        <button>&lt;</button>
        <span>
          {currentPage}/{totalPage}
        </span>
        <button>&gt;</button>
      </div>
    </FloatingMenu>
  );
}
