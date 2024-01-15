import React from "react"
import SearchBookResult from "./SearchBookResult"
import SearchReview from "./SearchReview"
import SearchPagination from "./SearchPagination"
import { GoTriangleDown } from "react-icons/go";
import SearchTabWrap from "./SearchTabWrap";
import styled from "styled-components";


const Leftdiv = styled.div`
/* border:5px solid green; */
width:85%;
float:left;
clear: both;

`

const Categoryline = styled.div`
margin-top: 5px;
`

const Koreanbookresult = styled.div`
/* border:5px solid red; */
`

const Searchresulttitle = styled.div`
/* border:1px solid green; */
display: flex;
margin-bottom: 10px;
margin-top : 30px;
`
const Searchresulttitletitle =styled.div`
width:50px;
`

const Searchminitabtitle = styled.ul`
display: flex;
align-items: center;
flex-wrap: nowrap;
font-size: 9px;
color:rgb(98, 98, 98);
cursor:pointer;
border-right: 1px solid grey;
gap:4px;
padding:0 6px 0 9px;
margin-top: 4px;
margin-bottom: 5px;
`

const Bookcarticonbox = styled.div`
/* border:4px solid salmon; */
margin-top: 1px;
border-top: 2px solid rgb(97, 97, 97);
background-color: #eaeaea;
height: 22px;
`

const Bookcarticon = styled.div`
cursor: pointer;
width:35px;
/* border:1px solid black; */
margin-top: 2px;
margin-bottom: 3px;
`

const Bookcarticonimg = styled.img`
height: 12px;
margin-top:5px;
margin-left: 5px;
`

export default function SearchLeft({books}){
	
	return(

<>

<Leftdiv>


<SearchTabWrap />

		
		<Categoryline></Categoryline>
		<Koreanbookresult>

		<Searchresulttitle>

		<Searchresulttitletitle>
		<img src="https://bimage.interpark.com/renewPark/search/tit_internal.gif" alt="" /> 
		</Searchresulttitletitle>

		</Searchresulttitle>
	



	

		<Searchminitabtitle>
			<li className="ac">정확도순</li>
			<li className="bc">판매량순</li>
			<li className="cc">신상품순</li>
			<li className="dc">상품명순</li>
			<li className="ec">판매지수순</li>
			<li className="fc">가격순 <GoTriangleDown className="pricearrowdown"/></li>
			<li className="gc">리뷰순 <GoTriangleDown className="pricearrowdown"/></li>
			<li className="hc">기타보기 <GoTriangleDown className="pricearrowdown"/></li>
			<li className="ic">품/절판 함께보기</li>

		</Searchminitabtitle>
	
	

		<Bookcarticonbox>
		<Bookcarticon>
			<Bookcarticonimg>
			<img src="https://bimage.interpark.com/renewPark/search/ico_bookcart.gif" alt="" />
			</Bookcarticonimg>
				
	
		</Bookcarticon>
		</Bookcarticonbox>




		<SearchBookResult/>
		{/* <SearchPagination/> */}
		</Koreanbookresult>
	<SearchReview/>


	<SearchPagination/>
</Leftdiv>





</>
			)
		
		}
