import React from "react";
import { CgAddR } from "react-icons/cg";

export default function SearchRight() {
	return (
		<>
			<div className="rightdiv">

				<img src="../img/sidead.png" className="rightad" alt="" />

				<div className="firstsidebar">

					<div className="firstsidebartitlebox">
						<h4 className="firstsidebartitle">인기 아동 <CgAddR className="plusbtn"/></h4>


						<ul className="firstsidebar-sch-list">
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
							<div className="firststandardline"></div>
							<li className="firststandard">기준 : 최근 1주일</li>
						</ul>
					</div>

				</div>

				<div className="secondsidebar">
					<h4 className="secondsidebartitle">실시간 베스트 도서<CgAddR className="plusbtn"/></h4>
					<ul className="secondsidebar-sch-list">
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
						<div className="secondstandardline"></div>
						<li className="secondstandard">기준 : 최근 1주일</li>
					</ul>

				</div>


			</div>
		</>

	)
}