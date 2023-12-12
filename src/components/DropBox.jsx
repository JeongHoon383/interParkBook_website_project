import React, { useState } from "react";
import styled from "styled-components";

const DropBox_container = styled.div`

  .form-select{
    width : 158px;
    height : 30px;
  }
`;

const DropBox = () => {
  const [value, setValue] = useState("");
  const options = [
    { label: "국내도서 종합", value: 1 },
    { label: "가정 살림", value: 2 },
    { label: "건강 취미", value: 3 },
    { label: "경제 경영", value: 4 },
    { label: "국어 외국어 사전", value: 5 },
    { label: "대학교재", value: 6 },
    { label: "만화/라이트노벨", value: 7 },
    { label: "사회 정치", value: 8 },
    { label: "소설/시/희곡", value: 9 },
    { label: "수험서 자격증", value: 10 },
    { label: "어린이", value: 11 },
    { label: "에세이", value: 12 },
    { label: "여행", value: 13 },
    { label: "역사", value: 14 },
    { label: "예술", value: 15 },
    { label: "유아", value: 16 },
    { label: "인문", value: 17 },
    { label: "인물", value: 18 },
    { label: "자기계발", value: 19 },
    { label: "자연과학", value: 20 },
    { label: "잡지", value: 21 },
    { label: "전집", value: 22 },
    { label: "종교", value: 23 },
    { label: "청소년", value: 24 },
    { label: "IT 모바일", value: 25 },
    { label: "초등참고서", value: 26 },
    { label: "중고등참고서", value: 27 },
  ];

  const handleSelect = (e) => {
    setValue(e.target.value);
  };

  return (
    <DropBox_container>
      <div>
        <select className="form-select" onChange={handleSelect}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </DropBox_container>
  );
};

export default DropBox;
