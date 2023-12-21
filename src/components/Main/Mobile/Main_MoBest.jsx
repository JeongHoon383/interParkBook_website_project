import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Div = styled.div`
  background-color: #fff;

  .mainB {
    text-align: center;
    border-bottom: 1px solid #eee;
    padding: 12px;
    h4 {
      color: var(--default);
    }
  }
  .rankList {
    padding: 11px;
    .rankNum {
      display: inline-block;
      width: 28px;
      font-family: "YES24GothicB";
      color: var(--main);
    }
    .rankTitle {
      color: var(--default);
    }
    li {
      margin-bottom: 15px;
    }
    .upper {
      span {
        &:first-child {
          font-style: italic;
        }
      }
    }
    .down {
      span {
        &:first-child {
          color: #ccc;
        }
      }
    }
  }
  .toggleBtn {
    padding: 8px;
    text-align: center;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    color: var(--default);
    span {
      &:last-child {
        display: inline-block;
      }
    }
  }
`;

export default function Main_MoBest() {
  const [bestSeller1, setBestSeller1] = useState([]);
  const [bestSeller2, setBestSeller2] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    axios
      .get("http://192.168.50.25:9090/best/")
      .then((result) => setBestSeller1(result.data.slice(0, 3)))
      .catch((err) => console.error(err));
    axios
      .get("http://192.168.50.25:9090/best/")
      .then((result) => setBestSeller2(result.data.slice(4, 11)))
      .catch((err) => console.error(err));
  }, []);
  return (
    <Div>
      <div className="mainB">
        <h4>실시간 베스트</h4>
      </div>
      <div className="rankList">
        <div className="upper">
          <ul>
            {bestSeller1.map((v, i) => (
              <li key={i}>
                <Link to={`/book/${v.isbn13}`}>
                  <span className="rankNum">{i + 1}</span>
                  <span className="rankTitle">{v.title.split("-")[0]}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="down" style={{ display: isOpen ? "block" : "none" }}>
          <ul>
            {bestSeller2.map((v, i) => (
              <li key={i}>
                <Link to={`/book/${v.isbn13}`}>
                  <span className="rankNum">{i + 4}</span>
                  <span className="rankTitle">{v.title.split("-")[0]}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="toggleBtn" onClick={handleToggle}>
        {isOpen ? (
          <>
            <span>접기</span>
            <span>
              <IoIosArrowUp />
            </span>
          </>
        ) : (
          <>
            <span>펼쳐보기</span>
            <span>
              <IoIosArrowDown />
            </span>
          </>
        )}
      </div>
    </Div>
  );
}
