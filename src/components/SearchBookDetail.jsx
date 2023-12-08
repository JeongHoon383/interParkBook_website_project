import React from "react"


export default function SearchBookDetail({book, title, cover, publisher, P_date, description, author}){
	// console.log(book.title)
return(
<>
	<div className="searchbookdetail">

		
	<div className="booksearchdetail-img"><img src={cover} alt="" />
		 
	 	</div>

<div className="searchbookdetaillisting">
		<p className="">
			
			<b className="searchbookdetail-boldtitle">{title}</b>
		</p>
		
	<div className="searchbookdetail-sub">
			<p className="searchbookdetail-title">
				
				{/* [황석영의 어린이 민담집] */}
				
				</p>


			<img src="https://bimage.interpark.com/renewPark/reBookpark/search/btn_series.gif" alt="" className="series" /> 
			<img src="https://bimage.interpark.com/renewPark/reBookpark/search/bt_smsAlram.gif" alt="" className="sms"/>
	</div>

		<div className="searchbookdetailp">
			
			<div className="searchbookdetailauthoretc">
		
					<p className="searchbookdetailblue">{author}</p> 
					<p className="searchbookdetailblue"></p> 
					<p className="searchbookdetailblue">{publisher}</p>  
					{P_date}
			</div>
			
			<p className="searchbookdetailpsec">{description}</p>
		
		</div>
	
</div>

	</div>
	
</>
)

}