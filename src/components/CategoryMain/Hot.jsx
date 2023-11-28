import React from "react";
import styled from "styled-components";

const CategoryHot = styled.div`
  margin-top: 20px;

  .hotContainer {
    margin: 0 auto;
    margin-top: 20px;
    padding: 20px;
    width: 958px;
    height: 380px;
    border: solid 1px #d8d8d8;
  }

  .hot_banner_content {
    display: flex;
  }

  .hot_category {
    display: flex;
  }

  .hot_category h3 {
    flex: 1;
  }

  .hot_category_list {
    display: flex;
  }

  .hot_banner {
    width: 199px;
    height: 340px;
  }

  .hot_content_container {
    width: 739px;
    height: 340px;
  }

  .hot_content{
    margin-left : 20px;
    width : 172px;
  }

  .hot_content_img {
    margin-left: 20px;
    padding-top: 25px;
    width: 125px;
    height: 179px;
  }

  .hot_content_text{
    margin: 16px 0 0 20px;
  }

  .hot_text_title{
    font-weight : bold;
    margin-bottom : 10px;
  }

  .hot_text_author{
    margin-bottom : 10px;
  }

  .hot_text_price{
    margin-bottom : 10px;
    font-weight : bold;
  }
`;

const Hot = () => {
  return (
    <CategoryHot>
      <div className="hot_category">
        <h3>분야별 HOT</h3>
        <ul className="hot_category_list">
          <li>문학</li>
          <li>인문/경제</li>
          <li>교양/취미</li>
          <li>유아동</li>
          <li>외국어 IT 공부 청소년</li>
        </ul>
      </div>
      <div className="hotContainer">
        <div className="hot_banner_content">
          <div>
            <img
              className="hot_banner"
              src="/img/CategoryMain/categoryHot_img/banner_1.jpeg"
              alt=""
            />
          </div>
          <div className="hot_content_container">
            <div className="hot_content">
              <img
                className="hot_content_img"
                src="/img/CategoryMain/categoryHot_img/literature/img_1.jpeg"
                alt=""
              />
              <ul className="hot_content_text">
                <li className="hot_text_title">너의 얼굴이 궁금해</li>
                <li className="hot_text_author grey">오휘명 저 | 히읏</li>
                <li className="hot_text_price">13,950원(10% 할인)</li>
                <li className="grey">사랑과 위로가 필요한 사람들에게</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </CategoryHot>
  );
};

export default Hot;
