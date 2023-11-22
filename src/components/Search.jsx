import React from "react";

export default function Search() {

	return (
		<div id="body">
			<div id="Header"></div>
			<div id="container">
				<div className="searchTabWrap">
					<h2><b>설자은</b>"에 대한 검색결과는" <span className="num"><img src="https://bimage.interpark.com/renewPark/search/num_1.gif" alt="" /></span>"건입니다"</h2>

					<div id="content">
						<div id="search">
							<div className="select">
								<span>결과내 재검색</span>
								<label><input type="text" id="dtl_input" /></label>
								<a href="">검색</a>
								<a href="">상세검색</a>
							</div>


							<div id="onmousecate" className="category" style="77px;">
								<dl>
									<dt>
										<a href="">국내도서</a>
										"(" <span>58</span> ")"
									</dt>
									<dd id=""></dd>
									<dd id=""></dd>
									<dd id=""></dd>
									<dd id=""></dd>
									<dd id=""></dd>
									<dd id=""></dd>
									<dd id=""></dd>
									<dd id=""></dd>
									<dd id=""></dd>
								</dl>


								<dl>
									<dt>
										<a href="">외국도서</a>
										"(" <span>0</span> ")"
									</dt>
									<dd id=""></dd>
									<dd id=""></dd>
									<dd id=""></dd>
									<dd id=""></dd>
									<dd id=""></dd>
									<dd id=""></dd>

									<dd id=""></dd>
									<dd id=""></dd>
									<dd id=""></dd>
								</dl>


								<dl>
									<dt>
										<a href="">굿즈샵</a>
										"(" <span>0</span> ")"
									</dt>
									<dd id=""></dd>
									<dd id=""></dd>
									<dd id=""></dd>
									<dd id=""></dd>
									<dd id=""></dd>
									<dd id=""></dd>
									<dd id=""></dd>
									<dd id=""></dd>
									<dd id=""></dd>
								</dl>
							</div>

							<p className="button"><img id="categorybtn" src="https://qi-b.qoo10cdn.com/renewPark/search/btn_cate_open.gif" alt="카테고리 더보기" /></p>
						</div>


						<div id="topicLayer"></div>
						{/* 검색결과가 있고 카테고리별 검색일대는 카테고리별 카운트로 집계한다 */}


						<span id="bookresult">
							{/* 국내도서 */}
							<h3><img src="https://bimage.interpark.com/renewPark/search/tit_internal.gif" alt="" /></h3>
							"(" <b>0</b> ")"

							<ul class="sorting">
								<li className="on"><a href="">정확도순____추가작성</a></li>
								<li><a href="">정확도순</a></li>
								<li><a href="">판매량순</a></li>
								<li><a href="">신상품순</a></li>
								<li><a href="">상품명순</a></li>
								<li><a href="">판매자수순</a></li>

								<li><a href="">가격순</a></li>
								<li><a href="">리뷰순</a></li>
								<li><a href="">기타보기</a></li>

								<li className="check"><label><input id="book_sale_tp" onclick="getSaleStat" type="checked" />"품/절판 함께보기"</label></li>
							</ul>



							<div className="sort_Top">
								<ul>
									<li>
										<label><input type="checkbox" onclick="chkSelectAll" /></label>
										<a href=""></a>
									</li>
								</ul>
							</div>


							<form name="FORM_NAME_TOTAL_BOOK">

							</form>

						</span>


						<span id="foreignresult"></span>
						<span id="ebookresult"></span>
						<span id="fancyresult"></span>
						<span id="contentresult"></span>

						<span>
							<div className="powerlinkWrapper">
								<div className="powerlinkHeader">
									<h4>
										<strong>파워링크</strong>
										<span>광고</span>
									</h4>
									<a href="">신청하기</a>
								</div>

								<div className="powerlinkContents">
									<ul className="powerlinkItems" id="powerLinkArea"></ul>
								</div>

							</div>
						</span>

					</div>

					<div id="aside">
						<div className="link">
							<h4><img src="" alt="" /></h4>
							<p><img src="" alt="" /></p>
						</div>

						<div id="ctgBest" className="search">
							<div className="title">
								<h4>인기 초등학습서</h4>
								<div><a href="" className="btn_more">+</a></div>
								<ul className="sch_list">
									<li className="top" onlcick="setESItemSearch">
										<span>1</span>
										<a href="">쎈 연산</a>
									</li>

									<li onlcick="setESItemSearch">
										<span>2</span>
										<a href="">쎈 연산</a>
									</li>

									<li onlcick="setESItemSearch">
										<span>3</span>
										<a href="">쎈 연산</a>
									</li>

									<li onlcick="setESItemSearch">
										<span>4</span>
										<a href="">쎈 연산</a>
									</li>

									<li onlcick="setESItemSearch">
										<span>5</span>
										<a href="">쎈 연산</a>
									</li>

									<li onlcick="setESItemSearch">
										<span>6</span>
										<a href="">쎈 연산</a>
									</li>

									<li onlcick="setESItemSearch">
										<span>7</span>
										<a href="">쎈 연산</a>
									</li>

									<li onlcick="setESItemSearch">
										<span>8</span>
										<a href="">쎈 연산</a>
									</li>

									<li onlcick="setESItemSearch">
										<span>9</span>
										<a href="">쎈 연산</a>
									</li>

									<li onlcick="setESItemSearch">
										<span>10</span>
										<a href="">쎈 연산</a>
									</li>

								</ul>


								<div className="sch_date">기준: 최근1주일</div>

							</div>
						</div>


						<div id="ageBest" className="search">
							<div className="title">
								<h4>실시간 베스트 도서</h4>
								<div><a href="" className="btn_more">+</a></div>
								<ul className="sch_list">
									<li className="top" onlcick="setESItemSearch">
										<span>1</span>
										<a href="">마흔에 읽는 쇼펜하우어</a>
									</li>

									<li onlcick="setESItemSearch">
										<span>2</span>
										<a href="">마흔에 읽는 쇼펜하우어</a>
									</li>

									<li onlcick="setESItemSearch">
										<span>3</span>
										<a href="">마흔에 읽는 쇼펜하우어</a>
									</li>

									<li onlcick="setESItemSearch">
										<span>4</span>
										<a href="">마흔에 읽는 쇼펜하우어</a>
									</li>

									<li onlcick="setESItemSearch">
										<span>5</span>
										<a href="">마흔에 읽는 쇼펜하우어</a>
									</li>

									<li onlcick="setESItemSearch">
										<span>6</span>
										<a href="">마흔에 읽는 쇼펜하우어</a>
									</li>

									<li onlcick="setESItemSearch">
										<span>7</span>
										<a href="">마흔에 읽는 쇼펜하우어</a>
									</li>

									<li onlcick="setESItemSearch">
										<span>8</span>
										<a href="">마흔에 읽는 쇼펜하우어</a>
									</li>

									<li onlcick="setESItemSearch">
										<span>9</span>
										<a href="">마흔에 읽는 쇼펜하우어</a>
									</li>

									<li onlcick="setESItemSearch">
										<span>10</span>
										<a href="">마흔에 읽는 쇼펜하우어</a>
									</li>

								</ul>


								<div className="sch_date">기준: 2023년 11월 22일</div>

							</div>

						</div>









					</div>


					<span></span>


				</div>
			</div>

			<div className="footerwrap"></div>

		</div>




	)

}