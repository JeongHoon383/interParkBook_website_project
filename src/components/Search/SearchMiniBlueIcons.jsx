import React from "react";
import styled from "styled-components";


const searchminiblueicons = styled.div`
display:flex;
`

const Series = styled.img`
`

const Sms = styled.img`
`

export default function SearchMiniBlueIcons(){
	return(

			<SearchMiniBlueIcons>

			<Series><img src="https://bimage.interpark.com/renewPark/reBookpark/search/btn_series.gif" alt="" /> </Series>
			
			<Sms><img src="https://bimage.interpark.com/renewPark/reBookpark/search/bt_smsAlram.gif" alt="" /></Sms>
			

			</SearchMiniBlueIcons>

		
	)
}