import React from 'react'
import styled from "styled-components"
import SteadyBox from "./SteadyBox";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";


const SteadyHot = styled.div`
  margin-top : 20px;
  width: 467px;
  height: 354px;
  border : 0.3px solid grey;

  .steady_title{
    padding: 20px 0 9px 20px;
    display : flex;
    font-weight : bold;
  }

  .steady_content_container{
    display : flex;
    flex-wrap : wrap;
  }
`

const SteadyContainer = (props) => {
  

  return (
    <SteadyHot>
      <Link to='/book/:id'><h3 className="steady_title">
        {props.title}
        <span>
          <IoIosArrowForward />
        </span>
      </h3></Link>
      <div className="steady_content_container">
        { props.List.map((item, key) => <SteadyBox key = {key} content = {item} /> )}
      </div>
    </SteadyHot>
  )
}

export default SteadyContainer
