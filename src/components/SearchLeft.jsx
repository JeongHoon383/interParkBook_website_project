import React from "react"
import SearchBookResult from "./SearchBookResult"
import SearchReview from "./SearchReview"
import SearchPagination from "./SearchPagination"
import { GoTriangleDown } from "react-icons/go";

export default function SearchLeft(){
	
	return(

<>
<div className="leftdiv">


	<div className="searchtabwrap">

		<div className="searchtabwraptitle"><h2 className="searchtitle">우리 민담집</h2>
		<div className="searchtabtextbox">에 대한 검색결과는  <span className="searchwraptitlenumb">3</span>건입니다</div>
		</div>
	
	
	<div className="selectwrapbox">
		
			<div className="selecttitle">결과내 재검색</div>
			 <label><input type="text" id="dtl_input" className="searchlabel"/></label>
	
			 <button className="searchbtn">검색</button>
			 <button className="detailsearch">상세검색<GoTriangleDown className="pricearrowdown"/></button>
	
		<div className="searchresulttop">
			<div className="searchresultdomestic">국내도서 (2)
				<div className="adiv">
				<a className="searchresultup"><li>아동(1)</li></a>
				<a className="searchresultmiddle"><li>시/에세이(1)</li></a>
				</div>
			</div>
			<ol className="searchresultforeign">외국도서 (0)
			</ol>
		
			<ol className="searchresultgoods">굿즈샵 (0)
			</ol>
		</div>
	</div>
		

	
		<p className="categoryresultline"><img src="https://qi-b.qoo10cdn.com/renewPark/search/btn_cate_open.gif" className="categoryresultline" alt="" /></p>
	
	</div>
	
	
		<div className="category-line"></div>
	


		<div className="koreanbookresult">
	
		<div className="searchresulttitle">
			<img src="https://bimage.interpark.com/renewPark/search/tit_internal.gif" alt="" className="searchresulttitletitle"/> 
		
			<div className="searchnum">(<b className="searchnumb">2</b>건)</div>
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
		<SearchBookResult/>


		<SearchPagination/>

	</div>
	
	<SearchReview/>


	<SearchPagination/>


</div>



</>
			)
		
		}
