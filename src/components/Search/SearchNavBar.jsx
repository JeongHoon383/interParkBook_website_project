import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { CgPushChevronDownR } from "react-icons/cg";
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';


const Momsearchnavbarcontainer = styled.div`
border-top:2px solid rgb(79, 79, 79);
border-bottom: 1px solid rgb(175, 175, 175);
margin-left:200px;
`

const Searchnavbar = styled.nav`
background-color:lightgrey;
flex:right;
`

const Searchnavbarct = styled.div`
font-weight: 999;
font-size: 20px;
text-decoration:none;
display: flex;
align-items: center;
white-space: nowrap;
gap:15px;
margin-left: 27px;
color:#515151;
height: 30px;
width: 20%;
height: 100%;

& > div {
  height: 30px;
  display: flex;
  align-items: center;
  padding-right: 30px;
  width: 100%;
  height: 100%;
}
`

const Searchnavbarday = styled.div`
font-size: 20px;
text-decoration: none;  
`
const Searchnavbarweek = styled.div`
`
const Searchnavbarmonth = styled.div`
`
const Searchnavbaryear = styled.div`
`

const Btcur = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
margin-left: 140px;
`

const Curtime = styled.div`
margin-right:10px;
`

const Downbtn = styled.div`
margin-right: 80px;
cursor:pointer;
`

const Bookbutton = styled.button`
font-weight: 900;
`
export default function SearchNavBar({setNavbar}) {

  const handleclick = (nav) => {
    setNavbar(nav);
  }

  
  return (

<Momsearchnavbarcontainer>

  <Searchnavbar>

      <Navbar>

      <Searchnavbarct>

          <Searchnavbarday>
          <button  onClick={() => handleclick('all')}>종합</button>
          </Searchnavbarday>

          <Searchnavbarweek><button onClick={() => handleclick('week')}>주간</button></Searchnavbarweek>

          <Searchnavbarmonth><button onClick={() => handleclick('month')}>월간</button></Searchnavbarmonth>
   
          
          <Searchnavbaryear><button onClick={() => handleclick('year')}>연간</button></Searchnavbaryear>
        
        
      </Searchnavbarct>
        
        <Btcur>
        <Curtime>2023년 12월 22일(금) 14:00 기준</Curtime>
    
        
        <Downbtn><CgPushChevronDownR/></Downbtn>

        
        <Bookbutton><Button variant="secondary">북카트 담기</Button></Bookbutton>

        </Btcur>
    
      </Navbar>

  </Searchnavbar>

</Momsearchnavbarcontainer>





  )
}
