import React from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";


const Searchreviewcontainer = styled.div`
/* border: 5px solid blue; */
color:#515151;
font-size: 10px;
margin-top: 10px;
border-bottom: 2px solid grey;
width:870px;
margin: 0 auto;

margin-left:50px;

white-space: nowrap;
overflow:hidden;
text-overflow: ellipsis;
//width:40%
//padding:50px;

//position:absolute;
`

const Searchreviewtop = styled.div`
display: flex;
padding-bottom: 5px;
width:60%
`
const Searchreviewtitleimg = styled.div`
`

const Searchreviewnumbox = styled.div`
display:flex;
margin-top: 6px;
margin-left: 5px;
font-weight : 700;
`

const Searchreviewnumb = styled.b`
color:rgb(187, 20, 20);
font-size: 10px;  
`
const Reviewboxcontainer = styled.div`
`

const Searchreviewtopbar = styled.div`
display: flex;
background-color:#eaeaea;
height:22px;
color:#bd4141;
font-size: 7px;
font-weight: 800;
align-items: center;
padding:5px;
border-top: 1px solid grey;
cursor: pointer;
`
const Reviewonecontainer = styled.div`
display:flex;
border-bottom: 1px dotted rgb(198, 198, 198);
padding-top: 20px;
padding-bottom: 10px;
padding-left: 10px;
`
const Reviewoneimg = styled.div`
  border: 1px solid lightgray;
  width: 80px;
  height: 60px;
  margin-bottom: 3px;
`;

const Reviewoneimgs = styled.img`
  border: 1px solid lightgray;
  width: 80px;
  height: 60px;
  margin-bottom: 3px;
`;

const Searchreviewonect = styled.div`
line-height: 15px;
font-size: 8px;
padding-left: 10px;
width:60%;
`

const Reviewonetitle = styled.p`
display: flex;
align-items: center;
`

const Reviewtwoa = styled.a`
cursor: pointer;
font-weight: 600;
color:black;
margin-left: 3px;
&:hover {
text-decoration: underline;
  }
`

const Reviewonedate = styled.p`
text-align: right;
`
const Reviewid = styled.a`
color:#0097b7;
cursor: pointer;
&:hover {
	text-decoration: underline;
	  }
`

const Reviewstar = styled.div`
display:flex;
width: 10px;
height: 10px;
`

const Reviewtwocontainer = styled.div`
display:flex;
border-bottom: 1px dotted rgb(198, 198, 198);
padding-top: 20px;
padding-bottom: 40px;
padding-left: 10px;
`

const Reviewonect = styled.div`
text-overflow: ellipsis;
`
export default function SearchReview() {

	return (

		<>

			<Searchreviewcontainer>
				<Searchreviewtop>
					<Searchreviewtitleimg>
						<img src="https://bimage.interpark.com/renewPark/reBookpark/search/tit_review_220303.gif" alt="" />
					</Searchreviewtitleimg>

					<Searchreviewnumbox>
						<Searchreviewnumb>2</Searchreviewnumb>건
					</Searchreviewnumbox>
				</Searchreviewtop>

				<Reviewboxcontainer>
					<Searchreviewtopbar>리뷰(2)</Searchreviewtopbar>
					<Reviewonecontainer>
						<Reviewoneimg>
							<Reviewoneimgs
								src="http://bimage.interpark.com/bookpark/good/3/3/3907133s.jpg"
								alt="" />
						</Reviewoneimg>

						<Searchreviewonect>
							<Reviewonetitle>[리뷰]

								<Reviewtwoa> 14.03.05. 아주 예전에 - 그림 형제 동화집 </Reviewtwoa>

								<Reviewstar><FaStar style={{ color: "orange" }} /></Reviewstar>
								<Reviewstar><FaStar style={{ color: "orange" }} /></Reviewstar>
								<Reviewstar><FaStar style={{ color: "orange" }} /></Reviewstar>
								<Reviewstar><FaStar style={{ color: "orange" }} /></Reviewstar>
								<Reviewstar><FaStar style={{ color: "orange" }} /></Reviewstar>
							</Reviewonetitle>

							<Reviewonedate>
								작성자 : <Reviewid>우노</Reviewid>/ 추천수 : 0 / 2014.03.14
							</Reviewonedate>

							<Reviewonect>뜬금 없이 - 하긴 언젠 뜸금이 있었냐만 - 아주 예전에 난 엄마랑 전단지를 쳐다보며 어떤 책을 사야할지를 고르고 있었다.    - 이런 건 읽어야하고, 오호, 이거 아주 좋아. 음..그리고, 이것도 읽어야하고. 그런데 이것도 좋은데? 어때? 재밌겠지?    그러니까 내가</Reviewonect>
							
						</Searchreviewonect>
					</Reviewonecontainer>




					<Reviewtwocontainer>

						<Reviewoneimg>
							<Reviewoneimgs
								src="http://bimage.interpark.com/goods_image/6/6/6/7/201636667s.jpg"
								alt="" />
						</Reviewoneimg>




						<Searchreviewonect>
							<Reviewonetitle>[리뷰]

								<Reviewtwoa> 권선징악 이야기 </Reviewtwoa>

								<Reviewstar><FaStar style={{ color: "orange" }} /></Reviewstar>
								<Reviewstar><FaStar style={{ color: "orange" }} /></Reviewstar>
								<Reviewstar><FaStar style={{ color: "orange" }} /></Reviewstar>
								<Reviewstar><FaStar style={{ color: "orange" }} /></Reviewstar>
								<Reviewstar><FaStar style={{ color: "orange" }} /></Reviewstar>
							</Reviewonetitle>

							<Reviewonedate>
								작성자 : <Reviewid>꺼삐딴리™</Reviewid>/ 추천수 : 0 / 2011.08.02
							</Reviewonedate>

							<Reviewonect>솔직히 제목에서, 표지 그림에서 무서운 이야기인줄 알고 쫄았는데 전혀 무섭지 않고 하층민들의 고단한 삶이 담긴 서글픈 이야기였다. 총 9편의 단편집이다.우리도 민담, 설화, 전설에서 익히 봐왔던 권선징악, 인과응보, 오컬트적인 요소로 인해, 비록 원혼들의 저주, 도깨비와 관련한 이야기지만 교훈적인 내용도 더러 있고 정겹게 다가오는 이야기였다.  ...</Reviewonect>
							
						</Searchreviewonect>


						
					</Reviewtwocontainer>




				</Reviewboxcontainer>


			</Searchreviewcontainer>


		</>
	)
}





