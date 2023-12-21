import React from 'react'
import styled from 'styled-components'

const RecentMain = styled.div`
    padding-bottom: 25px;

    .recent_content_img_box{
      padding-left : 20px;
    }

    .recent_content_img{
      width : 125px;
      height : 185px;
    }

    .recent_img_text{
      margin-top : 17px;
      padding-left : 29px;
    }

    .recent_img_name{
      font-weight : bold;
    }

    .recent_img_author{
      margin-top: 6px;
      width: 140px;
      height: 15px;
      line-height: 15px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .recent_img_grade{
      margin-top : 8px;
    }

    .recent_img_price{
      margin-top : 8px;
      font-weight : bold;
    }
`;

const RecentContent = ({ recentList }) => {
  if(!recentList) return <></>
  const {img, title, author, price} = recentList;

  return (
    
      <RecentMain>
          <div className="recent_content_img_container">
            <div className="recent_content_img_box"><img className="recent_content_img" src={img} alt="" /></div>
            <div>
              <ul className="recent_img_text">
                <li className="recent_img_name">{title}</li>
                <li className="recent_img_author grey">{author}</li>
                <li className="recent_img_grade">별점</li>
                <li className="recent_img_price">{price}</li>
              </ul>
            </div>
          </div>
      </RecentMain>
  )
}

export default RecentContent
