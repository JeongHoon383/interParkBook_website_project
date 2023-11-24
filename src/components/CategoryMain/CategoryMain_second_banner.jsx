import React from "react";
import styled from "styled-components";

const CategoryMain_second_banner = () => {
  return (
    <Second_banner>
      <div className="banner_left">
        left
        <div>
          <img className="banner_img" src="https://image.yes24.com/Goods/123253432/L" alt="" />
        </div>
        <div className="banner_text">
          <div>인터파크의 선택(링크 - 카테고리 리스트로)</div>
          <div>단어를 통해 새로이 보게 된 세상</div>
          <div>민바람 작가가 단어들을 그러모아 하나씩 꺼내어주는 산문집. 그가 건네는 순우리말 낱말들이 낯설지만 품고 있는 에너지들이 우리에게 위안과 용기를 준다. 익숙한 장면들에서 떠오른 낱말들로 마음을 따뜻하게 만져주어 틈틈이 펼쳐 읽고 싶다.</div>
          <div>낱말의 장면들(링크 - 상세도서로)</div>
          <div>민바람 저/신혜림 사진/서사원</div>
          <div>
            <span>15,120원(10% 할인)</span>
            <span>이미지, 840원</span>
          </div>
        </div>
      </div>
      <div className="banner_right">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </Second_banner>
  );
};

const Second_banner = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  width: 770px;
  height: 323px;
  border : 1px solid red;

  .banner_left{
    display : flex;
    width : 580px
  }

  .banner_img{
    margin-top : 30px;
    width : 190px;
    height : 261px;
  }

  .banner_text{
    margin-left : 20px;
    margin-top : 30px;
  }

  .banner_right{
    display : flex;
    flex-direction : column;
    border : 1px solid blue;
  }

  .banner_right *{
    width : 190px;
    flex : 1;
  }
`;

export default CategoryMain_second_banner;
