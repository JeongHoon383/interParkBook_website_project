import React from "react";
import { GoTriangleDown } from "react-icons/go";

export default function SearchTabWrap(){
	return(
		<div>
			
	<div className="searchtabwrap">

<div className="searchtabwraptitle"><h2 className="searchtitle">입력하신</h2>
<div className="searchtabtextbox">검색 결과입니다.  </div>
</div>


<div className="selectwrapbox">

	<div className="selecttitle">결과내 재검색</div>
	 <label><input type="text" id="dtl_input" className="searchlabel"/></label>

	 <button className="searchbtn">검색</button>
	 <button className="detailsearch">상세검색<GoTriangleDown className="pricearrowdown"/></button>

<div className="searchresulttop">
	<div className="searchresultdomestic">국내도서
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




</div>
		</div>
	)
}