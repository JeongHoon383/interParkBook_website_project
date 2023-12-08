import React from "react";
import { FaStar } from "react-icons/fa";

export default function SearchReview(){

	return(

	<>
	<div className="searchreview">
		<div className="searchreviewtop">
			<div className="searchreviewtitleimg"><img className="searchreviewtitleimg" src="https://bimage.interpark.com/renewPark/reBookpark/search/tit_review_220303.gif" alt="" /></div>
			<div className="searchreviewnumbox">(<b className="searchreviewnumb">2</b>건)</div>
		</div>


		<div className="reviewbox">
		
		<div className="searchreviewtopbar">리뷰(2)</div>

		<div className="reviewone">
			
		<div className="reviewoneimg"><img  className="reviewoneimg" src="http://bimage.interpark.com/bookpark/good/3/3/3907133s.jpg" alt="" />
		</div>

		<div className="searchreviewonect">
			<p className="reviewonetitle">[리뷰] <a className="reviewtwoa"> 14.03.05. 아주 예전에 - 그림 형제 동화집</a>
			<FaStar style={{ color: "orange" }} className="reviewstar"/> 
			<FaStar style={{ color: "orange" }} className="reviewstar"/> 
			<FaStar style={{ color: "orange" }} className="reviewstar"/> 
			<FaStar style={{ color: "orange" }} className="reviewstar"/> 
			<FaStar style={{ color: "orange" }} className="reviewstar"/> 
			</p>
			
			<p className="reviewonedate">작성자 : <a className="reviewid">우노</a> / 추천수 : 0 / 2014.03.14 </p>
			<p className="reviewonect">뜬금 없이 - 하긴 언젠 뜸금이 있었냐만 - 아주 예전에 난 엄마랑 전단지를 쳐다보며 어떤 책을 사야할지를 고르고 있었다.    - 이런 건 읽어야하고, 오호, 이거 아주 좋아. 음..그리고, 이것도 읽어야하고. 그런데 이것도 좋은데? 어때? 재밌겠지?    그러니까 내가</p>
		</div>

		</div>
		


		<div className="reviewtwo">
		<div className="reviewtwoimg"><img className="reviewtwoimg" src="http://bimage.interpark.com/goods_image/6/6/6/7/201636667s.jpg" alt="" />
		</div>
		
		<div className="searchreviewtwoct">
			<p className="reviewtwotitle">[리뷰] <a className="reviewtwoa"> 권선징악 이야기</a>
			<FaStar style={{ color: "orange" }} className="reviewstar"/> 
			<FaStar style={{ color: "orange" }} className="reviewstar"/> 
			<FaStar style={{ color: "orange" }} className="reviewstar"/> 
			<FaStar style={{ color: "orange" }} className="reviewstar"/> 
			<FaStar style={{ color: "orange" }} className="reviewstar"/> 
			</p>
			<p className="reviewtwodate">작성자 :<a className="reviewid"> 꺼삐딴리™</a> / 추천수 : 0 / 2011.08.02 </p>
			<p className="reviewtwoct">솔직히 제목에서, 표지 그림에서 무서운 이야기인줄 알고 쫄았는데 전혀 무섭지 않고 하층민들의 고단한 삶이 담긴 서글픈 이야기였다. 총 9편의 단편집이다.우리도 민담, 설화, 전설에서 익히 봐왔던 권선징악, 인과응보, 오컬트적인 요소로 인해, 비록 원혼들의 저주, 도깨비와 관련한 이야기지만 교훈적인 내용도 더러 있고 정겹게 다가오는 이야기였다.  ...</p>
		</div>

		</div>

		</div>


	</div>
	</>
	
	)
}





	