import React from "react";

export default function Search() {

	return (
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

						</ul>


					</span>

					<span id="foreignresult"></span>
					<span id="ebookresult"></span>
					<span id="fancyresult"></span>
					<span id="contentresult"></span>


				</div>

				<div id="aside"></div>
				<span></span>


			</div>
		</div>







	)

}