import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import SearchBookDetail from "./SearchBookDetail";
import SearchBookBuy from "./SearchBookBuy";
import SearchBookCheckIcons from "./SearchBookCheckIcons";
import SearchLeft from './SearchLeft'
import SearchRight from './SearchRight'
import SearchBookResult from "./SearchBookResult";
import SearchPagination from "./SearchPagination";
import SearchReview from "./SearchReview";
import SearchTabWrap from "./SearchTabWrap";
import styled from 'styled-components';


const Momsearch = styled.div`
// border:5px solid yellowgreen;

margin: 0 auto;
width:65%;
`

const Searchbookdetailnsearchbookbuy = styled.div`
overflow:hidden;
//border: 5px solid yellowgreen;
display: flex;
//width:73%;
width:800px;

//justify-content:space-between;

//margin:auto; 
`

const Bottomdiv = styled.div`
//border : 5px solid black; 
display:flex;
clear: both;
margin:auto;
width:900px;
margin-left:50px;

`

const Bottomdivimg = styled.img`
width:100px;
height: 50px;
cursor: pointer;
width:900px;
height:330px;
margin : auto;
`



export default function Search() {
	const location = useLocation();
	const [booklist, setBookList] = useState([]);

	const [data, setData] = useState([]);



	useEffect(() => {
		setBookList(location.state.data);
	}, [location.state.data]);
	// console.log(location.state.data,'112')



	return (
	
			<Momsearch>



				<SearchRight className="searchright" />
				<SearchTabWrap />
			
			
	
				{/* <div>1</div> */}
				{booklist && booklist.map(book => (
					<div key={book.bid}>
	
						{console.log(book)}
					<Searchbookdetailnsearchbookbuy>
	

								<SearchBookDetail
		
									// title={book.title && book.title}
		
		
									title={book?.title}
									cover={book?.cover}
									publisher={book?.publisher}
									p_Date={book?.p_Date}
									author={book?.author}
									description={book?.description}
								/>
								<SearchBookBuy
									priceStandard={book.priceStandard}
									priceSales={book.priceSales}
									mileage={book.mileage}
								/>
		





						</Searchbookdetailnsearchbookbuy>
					
	
					</div>

			
			
			
			
			
			
			
			
			))}


			<SearchPagination />

			<SearchReview />
			<SearchPagination />

			<Bottomdiv>

				<Bottomdivimg src="../img/power.png" alt="">
		
				</Bottomdivimg>

			</Bottomdiv>
	
		
		</Momsearch>
	);
}