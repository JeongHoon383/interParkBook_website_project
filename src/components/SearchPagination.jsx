import React from "react"
import { Bs1Square } from "react-icons/bs";

export default function SearchPagination(){

	return(



<>
	<div className="paginationbox">
		<img className="paginationleftarrow" 
		src="https://bimage.interpark.com/renewPark/writerFile/btn_naviPrev01.gif" alt="" />
		<img className="paginationletter" 
		src="https://bimage.interpark.com/renewPark/writerFile/btn_naviPrev02.gif" alt="" />
	
		<div className="paginationstartnum"><Bs1Square className="paginationnum" /></div>
		<div className="paginationtotalnum"> [total 1/1] </div>
	
	</div>
	
</>


	)
}

		