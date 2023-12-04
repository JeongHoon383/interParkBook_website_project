import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {

  return (
    <nav className="nav_header">
      <Link to='/' className="menu">전체카테고리</Link>
      <Link to='/bestseller' className="menu">베스트셀러</Link>
      <Link to='/newseller' className="menu">신간</Link>

    </nav>

  )
}