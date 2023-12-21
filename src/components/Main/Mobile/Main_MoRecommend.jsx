import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Div = styled.div`
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    li {
      width: 50%;
      padding: 12px 0;
      text-align: center;
      border-top: 1px solid #e7e7e7;
      border-right: 1px solid #e7e7e7;
      &:nth-of-type(even) {
        border-right: none;
      }

      a {
        display: block;
      }

      .rImgBox {
        width: 111px;
        height: 160px;
        margin: 0 auto 12px auto;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .rTitleBox {
        width: 170px;
        margin: 0 auto;
      }
      .rTitle {
        display: block;
        font-family: "YES24GothicB";
        font-size: 0.8em;
        margin-bottom: 6px;
      }
      .rAuthor {
        display: block;
        font-size: 0.7em;
        color: var(--default);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`;
export default function Main_MoRecommend() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.50.25:9090/blogbest")
      .then((result) => setList(result.data))
      .catch((err) => console.error(err));
  }, [list]);
  return (
    <Div>
      <ul>
        {list.map((v, i) => (
          <li key={i}>
            <Link to={`/book/${v.isbn13}`}>
              <div className="rImgBox">
                <img src={v.cover} alt="" />
              </div>
              <div className="rTitleBox">
                <span className="rTitle">{v.title.split("-")[0]}</span>
                <span className="rAuthor">
                  {v.author.split("(")[0]} | {v.publisher}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Div>
  );
}
