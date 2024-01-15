import React from "react";
import { SlArrowUp } from "react-icons/sl";
import { CgChevronRight } from "react-icons/cg";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Searchsidebarcontainer = styled.div`
display: flex;
width:200px;
background-color:rgb(243, 243, 243);
color:rgb(79, 79, 79);
position: absolute;
left: -200px;
margin-bottom: 10px;
flex-direction: column;
margin-left: 200px;
`

const Searchcategory = styled.div`
background-color:#4d4d4d;
color:white;
font-weight: 900;
height:55px;
clear:both;
float:left;
text-align: left;
line-height: 53px;
padding-left:20px;
font-size:20px;
cursor:pointer;
`

const Searchbooks = styled.div`
/*border:5px solid purple;*/
background-color: #818181;
padding-left:20px;
font-size: 20px;
color:white;
font-weight: 999;
height:55px;
line-height: 53px;
cursor:pointer;
`

const Searchbooksspan = styled.div`
float:right;
margin-right: 20px;
margin-top: 10px;
`

const Searchbookslistcontainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
line-height: 40px;
padding-left:20px;
cursor:rgb(231, 73, 38);
padding-top: 15px;
`

const Allarrow = styled.button`
display: flex;
`

const ChevronRightIcon = styled(CgChevronRight)`
display: flex;
margin-left: 1px;
line-height: 20px !important;
margin-top: 13px;
`

const Lastbook = styled.button`
margin-bottom: 25px;
`

const Searchsidebarline = styled.div`
border-top: 1px solid lightgray;
margin-bottom: 25px;
`
const Novelfirst = styled.div`
margin-top: 20px;
cursor:pointer;
`

const Searchsteadyseller = styled.div`
background-color: #818181;
padding-left:20px;
font-size: 20px;
color:white;
font-weight: 600;
height:55px;
line-height: 53px;
`

const Searchranking = styled.div`
/*border:5px solid green;*/
background-color: #818181;
padding-left:20px;
font-size: 20px;
color:white;
font-weight: 600;
height:55px;
line-height: 53px;
`

export default function SearchSideBar({setCategoryName}){
	const handleAllClick = (categoryName) =>{
	 setCategoryName(categoryName);
	}


	/*handleclick*/ 
	return(
		
			<Searchsidebarcontainer>
			<Searchcategory>카테고리</Searchcategory>
			<Searchbooks>도서 	<Searchbooksspan><SlArrowUp class/></Searchbooksspan>
			</Searchbooks>

	
			<Searchbookslistcontainer>



<Allarrow onClick={()=>handleAllClick('total')}>
<p>종합 </p>

<ChevronRightIcon className="searchsidebarrightarrow" />

</Allarrow>

				<button onClick={()=>handleAllClick('소설')}>소설</button>
				<button onClick={()=>handleAllClick('시')}>시</button>
				<button onClick={()=>handleAllClick('에세이')}>에세이</button>
				<button onClick={()=>handleAllClick('경제경영')}>경제경영</button>
				<button onClick={()=>handleAllClick('자기계발')}>자기계발</button>
				<button onClick={()=>handleAllClick('사회과학')}>사회과학</button>
				<button onClick={()=>handleAllClick('역사')}>역사</button>
				<button onClick={()=>handleAllClick('문화')}>문화</button>
				<button onClick={()=>handleAllClick('과학')}>과학</button>
				<button onClick={()=>handleAllClick('생활')}>생활</button>
				<button onClick={()=>handleAllClick('국어')}>국어</button>
				<button onClick={()=>handleAllClick('외국어')}>외국어</button>
				<button onClick={()=>handleAllClick('수험서')}>수험서</button>
				<button onClick={()=>handleAllClick('컴퓨터')}>컴퓨터</button>
				<button onClick={()=>handleAllClick('대학교재')}>대학교재</button>
				<button onClick={()=>handleAllClick('여행')}>여행</button>
				<button onClick={()=>handleAllClick('만화')}>만화</button>
				<button onClick={()=>handleAllClick('라이트노벨')}>라이트노벨</button>
				<button onClick={()=>handleAllClick('유아동전집')}>유아동전집</button>
				
		

				<Lastbook  onClick={()=>handleAllClick('외국도서')} > 
				외국도서
				</Lastbook>
				
	

			<Searchsidebarline>

			<Novelfirst>소설세트</Novelfirst>
					<a href=""><p>만화세트</p></a>
					<a href=""><p>유아세트</p></a>
					<a href=""><p>아동세트</p></a>
			</Searchsidebarline>

			</Searchbookslistcontainer>

			<Searchsteadyseller>스테디셀러</Searchsteadyseller>
			<Searchranking>랭킹리포트</Searchranking>
			

			</Searchsidebarcontainer>
	
	)

}