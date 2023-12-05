import React from "react";
import { SlArrowUp } from "react-icons/sl";
import { CgChevronRight } from "react-icons/cg";


export default function SearchSideBar(){
	return(
		<div className="searchsidebar">
			
			<div className="searchcategory">카테고리</div>
			<div className="searchbooks">도서 <a href="" className="searchbooksspan"><SlArrowUp class/></a></div>
			<div className="searchbookslist">

				<a href="" className="all"><p className="allarrow">종합 </p><CgChevronRight className="searchsidebarrightarrow" /></a>
				<a href=""><p>소설</p></a>
				<a href=""><p>시/에세이</p></a>
				<a href=""><p>경제경영</p></a>
				<a href=""><p>자기계발</p></a>
				<a href=""><p>사회과학</p></a>
				<a href=""><p>역사와문화</p></a>
				<a href=""><p>예술/대중문화</p></a>
				<a href=""><p>인문</p></a>
				<a href=""><p>자연과 과학</p></a>
				<a href=""><p>예술/대중문화</p></a>
				<a href=""><p>인문</p></a>
				<a href=""><p>자연과 과학</p></a>
				<a href=""><p>종교/역학</p></a>
				<a href=""><p>유아</p></a>
				<a href=""><p>아동</p></a>
				<a href=""><p>가정과 생활</p></a>
				<a href=""><p>청소년</p></a>
				<a href=""><p>초등학습</p></a>
				<a href=""><p>중등학습</p></a>
				<a href=""><p>고등학습</p></a>
				<a href=""><p>국어/외국어/사전</p></a>
				<a href=""><p>자격서/수험서</p></a>
				<a href=""><p>컴퓨터/인터넷</p></a>
				<a href=""><p>전공도서/대학교재</p></a>
				<a href=""><p>여행</p></a>
				<a href=""><p>취미/레저</p></a>
				<a href=""><p>건강/뷰티</p></a>
				<a href=""><p>잡지</p></a>
				<a href=""><p>만화</p></a>
				<a href=""><p>라이트노벨</p></a>
				<a href=""><p>유아동전집</p></a>
				<a href=""><p className="lastbook">외국도서</p></a>
				
			<div className="searchsidebarline">
					<a href=""><p className="novelfirst">소설세트</p></a>
					<a href=""><p>만화세트</p></a>
					<a href=""><p>유아세트</p></a>
					<a href=""><p>아동세트</p></a>
			</div>
	
			</div>

			<div className="searchsteadyseller">스테디셀러</div>
			<div className="searchranking">랭킹리포트</div>

		</div>
	)

}