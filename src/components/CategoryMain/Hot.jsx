import React from "react";
import styled from "styled-components";

const CategoryHot = styled.div`
  margin-top: 20px;

  .hotContainer{
    margin : 0 auto;
    margin-top : 20px;
    width : 958px;
    border: solid 1px #d8d8d8;
  }

  .hot_category{
    display : flex;
  }

  .hot_category h3{
    flex : 1;
  }

  .hot_category_list{
    display : flex;
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
        asd
      </div>
    </CategoryHot>
  );
};

export default Hot;
