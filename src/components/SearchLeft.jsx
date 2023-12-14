import React from "react"
import SearchBookResult from "./SearchBookResult"
import SearchReview from "./SearchReview"
import SearchPagination from "./SearchPagination"
import { GoTriangleDown } from "react-icons/go";
import SearchTabWrap from "./SearchTabWrap";


export default function SearchLeft({books}){
	
	return(

<>
<div className="leftdiv">

<SearchTabWrap />

	
	
		<div className="category-line"></div>
	


		<div className="koreanbookresult">
	
		<div className="searchresulttitle">
			<img src="https://bimage.interpark.com/renewPark/search/tit_internal.gif" alt="" className="searchresulttitletitle"/> 
		
					</div>
	
		<div className="searchminitab">
		<ul className="searchminitabtitle">
			<li className="ac">정확도순</li>
			<li className="bc">판매량순</li>
			<li className="cc">신상품순</li>
			<li className="dc">상품명순</li>
			<li className="ec">판매지수순</li>
			<li className="fc">가격순 <GoTriangleDown className="pricearrowdown"/></li>
			<li className="gc">리뷰순 <GoTriangleDown className="pricearrowdown"/></li>
			<li className="hc">기타보기 <GoTriangleDown className="pricearrowdown"/></li>
			<li className="ic">품/절판 함께보기</li>
		</ul>
		</div>
	
		<div className="bookcarticonbox"><div className="bookcarticon"><img src="https://bimage.interpark.com/renewPark/search/ico_bookcart.gif" className="bookcarticonimg" alt="" /></div></div>
	

		<SearchBookResult/>
		{/* <SearchBookResult/> */}


		<SearchPagination/>

	</div>
	
	<SearchReview/>


	<SearchPagination/>


</div>



</>
			)
		
		}
