import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { CgPushChevronDownR } from "react-icons/cg";


export default function SearchNavBar() {

  return (
    <div className='momsearchnavbar'>

      <Navbar className="searchnavbar" >
        <div className="searchnavbarct">
           <div className='searchnavbarday'> <NavLink activeClassName='active' to="#home">당일</NavLink></div>
              <div className='searchnavbarweek'><NavLink to="#home">주간</NavLink></div>
              <div className='searchnavbarmonth'><NavLink to="#features">월간</NavLink></div>
              <div className='searchnavbaryear'><NavLink to="#pricing">연간</NavLink></div>
        </div>
<div className='btcur'>
                <div className='curtime'>2023년 12월 1일(금) 14:00 기준 </div>
                <CgPushChevronDownR className='downbtn'/>
                <Button className="bookbutton" variant="secondary">북카트 담기</Button>
</div>
      </Navbar>

    </div>



  )
}
