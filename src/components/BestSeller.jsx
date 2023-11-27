import React from "react";
import Book from "./Book";
import { useState } from "react";
import SearchNavBar from "./SearchNavBar";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function BestSeller() {

  
  return (
    
    <div className="toptop">

     <img src="https://qi-b.qoo10cdn.com/renewPark/reBookpark/rankChart2016/text/h1_bestSeller.png"  className="topletter" />
    <SearchNavBar/>



  
      
      <div className="content">

        <Book filename="BestSeller" />
        
  
        
      </div>
  
</div>
  )


}