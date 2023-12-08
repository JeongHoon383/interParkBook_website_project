import React from "react";
import SearchBookBuy from "./SearchBookBuy";
import SearchBookDetail from './SearchBookDetail'
import SearchBookCheckIcons from "./SearchBookCheckIcons";


export default function SearchBookResult(){

	return(
	<div className="bookresultbox">
		<div className="bookresult">

		<SearchBookCheckIcons/>

		
		<SearchBookDetail/>
		<SearchBookBuy/>

		</div>


	</div>

	)
}