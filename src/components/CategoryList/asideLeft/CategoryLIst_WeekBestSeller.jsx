import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const BestSellerNav = styled.nav`
  width: 180px;
  border: 1px solid #d8d8d8;
  margin-top: 10px;
  .weekBestSellerTitle {
    font-size: 13px;
    font-weight: bold;
    color: #000;
    text-align: center;
    padding: 10px 0;
  }
  .weekBestSellerList {
    width: 100%;
    .weekBestSellerItem {
      width: 90%;
      margin: 10px auto;
      figure {
        position: relative;
        display: flex;
        justify-content: space-between;
        a {
          width: 30%;
          .weekBestSellerRank {
            position: absolute;
            top: 0;
            left: 0;
            width: 15px;
            line-height: 15px;
            font-size: 10px;
            font-weight: bold;
            color: #fff;
            text-align: center;
            background: #333;
          }
          img {
            width: 100%;
          }
        }
        figcaption {
          width: 65%;
          a {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            word-wrap: break-word;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`;

export default function CategortList_WeekBestSeller() {
  const parameterArr = useParams().categoryPath.split("_");
  const [weekBestSellerTitle, setWeekBestSellerTitle] = useState("");
  const [bestSellerBookData, setBestSellerBookData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://192.168.50.16:9090/category/list/${parameterArr[0]}/${parameterArr[1]}/${parameterArr[2]}/${parameterArr[3]}/${parameterArr[4]}/${parameterArr[5]}`
      )
      .then((result) => {
        setWeekBestSellerTitle(result.data.categoryName);
        axios
          .get(
            `/ttb/api/ItemList.aspx?ttbkey=ttbgur65142158001&QueryType=Bestseller&MaxResults=5&start=1&SearchTarget=Book&output=JS&Version=20131101&Cover=Big&CategoryId=${result.data.categoryId}`
          )
          .then((result) => setBestSellerBookData(result.data.item));
      });
  }, [
    parameterArr[0],
    parameterArr[1],
    parameterArr[2],
    parameterArr[3],
    parameterArr[4],
    parameterArr[5],
  ]);

  return (
    <BestSellerNav>
      <h4 className="weekBestSellerTitle">
        {weekBestSellerTitle} 주간 베스트셀러
      </h4>
      <ul className="weekBestSellerList">
        {bestSellerBookData.map((bestSellerBookItem) => (
          <li className="weekBestSellerItem" key={bestSellerBookItem.isbn13}>
            <figure>
              <Link to={`/book/${bestSellerBookItem.isbn13}`}>
                <div className="weekBestSellerRank">
                  {bestSellerBookItem.bestRank}
                </div>
                <img src={bestSellerBookItem.cover} alt="weekBestseller" />
              </Link>
              <figcaption>
                <Link to={`/book/${bestSellerBookItem.isbn13}`}>
                  {bestSellerBookItem.title}
                </Link>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </BestSellerNav>
  );
}
