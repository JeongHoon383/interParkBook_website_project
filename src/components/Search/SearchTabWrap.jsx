import React from "react";
import { GoTriangleDown } from "react-icons/go";
import styled from "styled-components";

const Searchtabwrapcontainer = styled.div`
display:flex;
width:800px;
margin: 0 auto;
flex-direction : column;

position:absolute;

`

const Searchtabwraptitle = styled.div`
display:flex;
border-bottom: 2px solid grey;
margin-top: 5px;
flex-wrap:wrap;
color:#515151;
font-size:10px;
width:90%;
margin:auto;

`

const Searchtitle = styled.h2`
font-weight: 600;
font-size: 14px;
color:rgb(181, 6, 6);
margin-bottom: 0px;
margin-left: 13px;
line-height: 30px;

`

const Searchtabtextbox = styled.div`
margin-top: 10px;
font-size: 13px;
margin-bottom: 1px;
padding-left: 3px;
`

const Selectwrapbox = styled.div`
/* border:5px solid pink; */
padding-left:10px;
width:500px;
white-space: normal;
margin-top: 10px;
margin-bottom: 25px;
display: flex;
flex-wrap: wrap;
`

const Searchlabel = styled.label`
border-radius:1%;
color:#a1a1a1;
width:100px;
border:1px solid rgb(166, 166, 166);
`

export default function SearchTabWrap() {
	return (
		<>

			<Searchtabwrapcontainer>
			
			<Searchtabwraptitle>

					<Searchtitle>입력하신</Searchtitle>
					<Searchtabtextbox>검색결과입니다.</Searchtabtextbox>
	
			</Searchtabwraptitle>

				<Selectwrapbox>
				</Selectwrapbox>
	

			</Searchtabwrapcontainer>
		</>
	)
}