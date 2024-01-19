import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Second_banner_content from "./Second_banner_content";
import { Link } from "react-router-dom";
import axios from "axios";

const CategoryMain_second_banner = () => {
  const [active, setActive] = useState(0);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://192.168.50.16:9090/category/main",
    }).then((result) => {
      const data = result.data;
      setData(data.slice(3, 6));
    });
  }, []);

  return (
    <Second_banner>
      {data.length > 0 && <Second_banner_content banner={data[active]} />}
      <div className="banner_right">
        {data.length > 0 && (
          <ul>
            {data.map(({ title, cover, isbn13 }, key) => (
              <li key={key} onMouseOver={() => setActive(key)}>
                <Link to={`/book/${isbn13}`}>
                  <img className="banner_right_img" src={cover} alt="" />
                </Link>
                <span className="banner_right_text">{title}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Second_banner>
  );
};

const Second_banner = styled.div`
  display: flex;
  margin-top: 20px;
  width: 770px;
  height: 323px;
  background-color: rgb(38, 38, 38);

  .banner_right ul {
    width: 190px;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .banner_right ul li {
    display: flex;
    flex-basis: 33.3%;
    border-bottom: 1px solid grey;
    opacity: 0.3;
  }

  .banner_right ul li:hover {
    opacity: 1;
    cursor: pointer;
  }

  .banner_right ul li:last-child {
    border-bottom: none;
  }

  .banner_right_img {
    width: 47.8px;
    height: 80px;
    margin-top: 12px;
    margin-left: 20px;
  }

  .banner_right_text {
    margin: 18px 0 0 10px;
    font-size: 11px;
    color: #fff;
  }
`;

export default CategoryMain_second_banner;
