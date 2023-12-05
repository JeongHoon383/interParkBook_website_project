import React from "react";
import { ImArrowDown } from "react-icons/im";
import { PiArrowElbowDownRightLight } from "react-icons/pi";

export default function SearchBookBuy(){
return(

	<>
	
	<div className="searchbookbuy">
	

	<p className="nodiscount">13,000원</p>

	<div className="discountedpriceboxup">
		<p className="discountedprice">11,700원 (10%▼)</p>
	</div>
	
	<div className="discountpercentbox">
		<p className="discountpercent"> 650 (5%) </p>
	</div>
	
	<p className="addbookcart">
		<img src="https://bimage.interpark.com/renewPark/search/btn_bookcart.gif" alt="" />
	</p>
	
	<p className="buynow">
		<img src="https://bimage.interpark.com/renewPark/search/btn_buy.gif" alt="" />
	</p>
	
	<p className="salesindex">판매자수 <p className="salesindexred">1,293</p></p>
	
	
	
	</div>
	</>

)
}