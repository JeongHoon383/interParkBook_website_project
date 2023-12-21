import React from "react"
import { Bs1Square } from "react-icons/bs";
import styled from "styled-components";

const Paginationbox = styled.div`
display :flex;
align-items: center;
justify-content: center;
margin-bottom:30px;
padding-top: 30px;
gap:12px;

margin-right:300px;

`

const Paginationleftarrow = styled.img`
width:9px;
cursor: pointer;
height: 7px;
margin-top :5px;
`
const Paginationletter = styled.img`
width:20px;
cursor: pointer;
height: 9px;
margin-top:5px;
}
`

const Paginationstartnum = styled.div`
display: flex;
width:13px;
height: 13px;
`

const Paginationum = styled.div`
margin-top :1px;
cursor:pointer;
`

const Paginationtotalnum = styled.div`
font-size: 10px;
margin-top:4px;
`

export default function SearchPagination(){

	return(

<>

		<Paginationbox>

		<Paginationleftarrow src="https://bimage.interpark.com/renewPark/writerFile/btn_naviPrev01.gif" alt="" ></Paginationleftarrow>
	

		<Paginationletter src="https://qi-b.qoo10cdn.com/renewPark/writerFile/btn_naviPrev02.gif" alt=""/>
	
		<Paginationstartnum>
			<Paginationum><Bs1Square/></Paginationum>
			
		</Paginationstartnum>


		<Paginationtotalnum>[TOTAL 1/1]</Paginationtotalnum>

		</Paginationbox>
	

	
</>
	)
}

