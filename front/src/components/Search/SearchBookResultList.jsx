import React from "react";

export default function SearchBookResultList(){

	return(
		<div>SearchBookresult

<span id="searchbookresultlist">
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



		</div>
	)

}