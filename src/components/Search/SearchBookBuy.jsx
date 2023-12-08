import React from "react";
import { ImArrowDown } from "react-icons/im";
import { PiArrowElbowDownRightLight } from "react-icons/pi";
import { BsCart2 } from "react-icons/bs";
import { BsCreditCard } from "react-icons/bs";

export default function SearchBookBuy({book}){
return(

	<>
	
	<div className="searchbookbuy">
	

	<p className="nodiscount">{book?.pricestandard}</p>

	<div className="discountedpriceboxup">
		<p className="discountedprice">{book?.pricesales}
		 {/* (10%▼) */}
		 </p>
	</div>
	
	<div className="discountpercentbox">
		<p className="discountpercent"> 
		{/* 650 (5%)  */}
		</p>
	</div>
	
	<p className="addbookcart">
	<BsCart2 />
	</p>
	
	<p className="buynow">
	<BsCreditCard />
	</p>
	
	<p className="salesindex">판매자수 <p className="salesindexred">{book?.mileage}</p></p>
	
	
	
	</div>
	</>

)
}