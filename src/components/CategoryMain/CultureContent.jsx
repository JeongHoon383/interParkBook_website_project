import React from 'react'
import styled from 'styled-components'

const ContentContainer = styled.div`
  .day_review_container{
    display : flex;
    margin-top : 14px;
  }

  .day_review_img{
    width : 92px;
    height : 135px;
  }

  .day_review_text{
    margin-left : 14px;
  }

  .day_review_cmt{
    margin-bottom : 10px;
  }

  .day_review_name{
    margin-bottom : 5px;
    font-weight : bold;
  }

  .day_review_author{
    margin-bottom : 5px;
  }

`;

const CultureContent = ({ item }) => {
  if(!item) return <></>
  const {img, review, title, author, publisher} = item;
  
  return (
    <ContentContainer>
      <div className="day_review_container">
          <div><img className="day_review_img" src={img} alt="" /></div>
          <ul className="day_review_text">
            <li className="day_review_cmt">{review}</li>
            <li className="day_review_name">{title}</li>
            <li className="day_review_author grey">{author}</li>
            <li className="day_review_publisher grey">{publisher}</li>
          </ul>
        </div>
    </ContentContainer>
  )
}

export default CultureContent
