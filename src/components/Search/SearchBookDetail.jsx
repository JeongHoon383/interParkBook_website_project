import React from "react"
import SearchBookCheckIcons from "./SearchBookCheckIcons"
import styled from "styled-components"

const Searchbookdetail = styled.div`
color:#7a7a7a;
line-height: 15px;
display: flex;
margin-top: 50px;
//border : 5px solid black;
//float: left;
margin-left:55px;
width:600px;

overflow: hidden;
text-overflow: ellipsis;

`

const Booksearchdetailimg = styled.img`
cursor:pointer;
border:1px solid rgb(185, 185, 185);
margin-left: 10px;
width:80px;
height: 110px;
`

const Searchbookdetaillisting = styled.div`
margin-top:10px;
margin-left: 15px;
width: 90%;
white-space: nowrap;
line-height: 22px;
text-overflow: ellipsis;
overflow: hidden;
`

const Searchbookdetailboldtitle = styled.b`
font-weight:800;
text-overflow: ellipsis;
font-size:12px;


white-space: nowrap;
overflow: hidden;
width:100%;
`

const Searchbookdetailsub = styled.div`
display:flex;
font-size: 9px;
text-overflow:ellipsis;
`

const Searchbookdetailp = styled.div`
font-size: 10px;
display: flex;
flex-wrap: wrap;
text-overflow:ellipsis;
`

const Searchbookdetailauthoretc = styled.div`
display: flex;
justify-content: space-between;
`

const Searchbookdetailblue = styled.p`
color:#2ba5e4;
text-decoration: underline;
cursor: pointer;
`

const Searchbookdetailpsec = styled.div`
margin-top: 10px;
display: inline-block;

text-overflow:ellipsis;
overflow:hidden;
`

export default function SearchBookDetail({ book, title, cover, publisher, pubDate, description, author }) {
	// console.log(book.title)


	return (
		<>

			<Searchbookdetail>	
			<SearchBookCheckIcons/>	
				<Booksearchdetailimg src={cover}>
		
				</Booksearchdetailimg>

					<Searchbookdetaillisting>
			
					<Searchbookdetailboldtitle>
					{title}
					</Searchbookdetailboldtitle>
	

						<Searchbookdetailsub>

						<img src="https://bimage.interpark.com/renewPark/reBookpark/search/btn_series.gif" alt="" className="series" />
						<img src="https://bimage.interpark.com/renewPark/reBookpark/search/bt_smsAlram.gif" alt="" className="sms" />

						</Searchbookdetailsub>

					<Searchbookdetailp>

						<Searchbookdetailauthoretc>

						<Searchbookdetailblue> {author} </Searchbookdetailblue> 저 /
						<Searchbookdetailblue> {publisher} </Searchbookdetailblue> 

						
							<p className="searchbookdetailgrey">{pubDate} </p>
						</Searchbookdetailauthoretc>
			
				<Searchbookdetailpsec>{description}</Searchbookdetailpsec>



					</Searchbookdetailp>
					</Searchbookdetaillisting>
			</Searchbookdetail>









		</>
	)

}