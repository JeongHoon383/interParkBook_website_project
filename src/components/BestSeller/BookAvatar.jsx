import React from "react";
import Bookcheckbox from "./Bookcheckbox";
import styled from "styled-components";

const Bookavatars = styled.div`
/*border:5px solid blue;*/
display: flex; 
flex-direction: column;
`
const Bookavatar_image = styled.img`
width: 170px;
height: 210px;
/*margin: 0.5rem 0;*/
cursor:pointer;
/*margin-left: 15px;*/
padding-left: 20px;
`
const Bookavatar_button = styled.button`
width: 30px;
padding: 1px 3px;
font-weight: bold;
background-color: white;
border: 1px solid lightgray;
/* border-radius: 0.1rem; */
margin-top: 7px;
font-size: 5px;
/* display: flex; */
color:grey;
`
export default function BookAvatar({ image }) {

  return (
      
      <Bookavatars>

      <Bookcheckbox/>
    
      <Bookavatar_image src={image} alt="">

      </Bookavatar_image>


      <Bookavatar_button>
        베스트셀러
      </Bookavatar_button>


      
      </Bookavatars>

  


  )
}