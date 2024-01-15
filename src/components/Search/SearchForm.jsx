import React from "react";
import { IoSearch } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchBtn = styled.button`
  /* background-color:var(--main); */
  color: var(--main);
  text-align: right;
  flex-wrap: nowrap;
  margin-left: 5px;
  border-radius: 3px;
  height: 23px;
  font-weight: 900;
  font-size: 13px;
  svg {
    width: 25px;
    height: 25px;
  }
`;

export default function SearchForm() {
  const navigate = useNavigate();
  const axiosInstance = axios.create({
    withCredentials: true,
  });
  const [searchBook, setSearchBook] = useState("");

  const handleChange = (e) => {
    setSearchBook(e.target.value);
  };

  const handleSubmit = (e) => {
    // alert(searchBook);
    e.preventDefault();

    axios
      .post("http://127.0.0.1:9090/search", { sname: searchBook })
      .then((result) => {
        // alert(JSON.stringify(result.data))
        // console.log(result.data)
        navigate("/search", { state: { data: result.data } });
      })
      .catch((error) => {
        // console.log(error);
        // console.error('Error during API call:', error);
        // console.log('Response data:', error.response.data);
        // console.log('Status code:', error.response.status);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="searchForm">
        <input className="searchInput" type="text" onChange={handleChange} />

        <SearchBtn>
          <IoSearch />
        </SearchBtn>
      </form>
    </>
  );
}
