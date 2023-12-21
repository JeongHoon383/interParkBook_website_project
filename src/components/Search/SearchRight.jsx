import React from "react";
import { CgAddR } from "react-icons/cg";
import styled from "styled-components";

const Rightdivcontainer = styled.div`
// float: right;
padding-left:1px;
clear: both;
//border-left: 10px;
//margin-right: 300PX;
//border: 5px solid pink;
width:130px;
margin: 0 auto;

margin-left :850px;
position:absolute;
`

const RightAdImage = styled.img`
width:130px;
cursor: pointer;
border:1px solid lightgray;
margin-bottom: 14px;
margin-top: 29px;

`

const Firstsidebarcontainer = styled.div`
`
const Firstsidebartitlebox = styled.div`
`
const Firstsidebartitle = styled.h4`
display: flex;
font-size: 10px;
font-weight: 999;
margin-top: 20px;
border-bottom:0.5px solid black;
padding-bottom: 5px;
justify-content: space-between;
`

const Firstsidebarschlist = styled.ul`
font-size: 8px;
margin:3px;
margin-top: 3px;
color:rgb(90, 90, 90);
line-height: 17px;
`

const Secondsidebarcontainer = styled.div`
margin-top: 13px;0
`
const Secondsidebartitle = styled.h4`
display: flex;
font-size: 10px;
font-weight: 999;
margin-top: 20px;
border-bottom:0.5px solid black;
padding-bottom: 5px;
justify-content: space-between;
`



const Secondsidebarschlist = styled.ul`
font-size: 8px;
margin:3px;
margin-bottom: 3px;
margin-top: 3px;
color:rgb(90, 90, 90);
line-height: 17px;
`

const Firststandardline = styled.div`
border-bottom: 0.5px solid #a1a1a1;
`
const Firststandard = styled.li`
margin-top:1px;
color:#a1a1a1;
`

const Secondstandardline = styled.div`
border-bottom: 0.5px solid #a1a1a1;
`

const Secondstandard = styled.li`
margin-top:1px;
color:#a1a1a1;
}
`

export default function SearchRight() {
	return (
		<>
	
			<Rightdivcontainer>
				<RightAdImage src="../img/sidead.png" className="rightad" alt="" />

				<Firstsidebarcontainer>

				<Firstsidebartitlebox>

				<Firstsidebartitle>인기 검색어 <CgAddR className="plusbtn"/></Firstsidebartitle>

						<Firstsidebarschlist>
							<li><span>1. </span><a href="">고양이 해결사</a></li>
							<li><span>2. </span><a href="">흔한남매 과학탐험</a></li>
							<li><span>3. </span><a href="">흔한남매14</a></li>
							<li><span>4. </span><a href="">만화 그리스 로마 신화</a></li>
							<li><span>5. </span><a href="">흔한 남매의 호기심</a></li>
							<li><span>6. </span><a href="">채사장의 지대넓얕</a></li>
							<li><span>7. </span><a href="">사이언스 2024</a></li>
							<li><span>8. </span><a href="">해님 달님 떡집</a></li>
							<li><span>9. </span><a href="">위풍당당 여우 꼬리</a></li>
							<li><span>10. </span><a href="">백앤아 4</a></li>


							<Firststandardline></Firststandardline>

							<li className="firststandard"></li>
							<Firststandard>기준 : 최근 1주일</Firststandard>
								
						</Firstsidebarschlist>

				</Firstsidebartitlebox>
				</Firstsidebarcontainer>



				<Secondsidebarcontainer>

			
			<Secondsidebartitle> 실시간 베스트 도서<CgAddR className="plusbtn"/></Secondsidebartitle>
			

					<Secondsidebarschlist>

						<li><span>1. </span><a href="">마흔에 읽는 쇼펜하우어</a></li>
						<li><span>2. </span><a href="">2024 임용 면접 레시피</a></li>
						<li><span>3. </span><a href="">1분 요리 뚝딱이형</a></li>
						<li><span>4. </span><a href="">퓨처 셀프</a></li>
						<li><span>5. </span><a href="">황금종이 1</a></li>
						<li><span>6. </span><a href="">사랑에 관한 거의 모든 기술</a></li>
						<li><span>7. </span><a href="">나혼자 슬퍼하겠습니다</a></li>
						<li><span>8. </span><a href="">모모</a></li>
						<li><span>9. </span><a href="">한푼도 더도말고 덜도말고</a></li>
						<li><span>10. </span><a href="">설국</a></li>

						<Secondstandardline></Secondstandardline>
					
						<Secondstandard>기준 : 최근 1주일</Secondstandard>


					</Secondsidebarschlist>
				</Secondsidebarcontainer>
		
			</Rightdivcontainer>










		</>

	)
}