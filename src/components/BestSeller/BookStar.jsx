import React from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const Bookstars = styled.div`
margin-top: 5px;
display: flex;
margin-right: 1px;
font-size: 10px;
flex-direction : no-wrqp;

`

export default function Bookstar() {

	return (


			<Bookstars>
				<div><FaStar style={{ color: "orange" }} /></div>
				<div><FaStar style={{ color: "orange" }} /></div>
				<div><FaStar style={{ color: "orange" }} /></div>
				<div><FaStar style={{ color: "orange" }} /></div>
				<div><FaStar style={{ color: "orange" }} /></div>
			</Bookstars>



	)
}