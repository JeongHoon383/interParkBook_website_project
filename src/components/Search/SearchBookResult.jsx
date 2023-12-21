import React from "react";
import SearchBookBuy from "./SearchBookBuy";
import SearchBookDetail from './SearchBookDetail'
import SearchBookCheckIcons from "./SearchBookCheckIcons";
import styled from 'styled-components';

const Bookresultbox = styled.div`
display:flex;
/* margin-bottom: 50px; */
border-bottom: 1px dotted lightgray;
padding-bottom: 20px;
`

const Bookresult = styled.div`
/* border:5px solid yellow; */
width: 100%;
`

export default function SearchBookResult({title}){

	return(

		<Bookresultbox>
		
		<Bookresult>
			<SearchBookDetail 
			title={title}
			/>
			<SearchBookBuy/>

		</Bookresult>


		</Bookresultbox>


	)
}