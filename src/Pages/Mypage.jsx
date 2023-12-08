import Mypage_MainSection from "../components/Mypage/Mypage_MainSection/Mypage_MainSection.jsx";
import Mypage_TopNav from "../components/Mypage/Mypage_TopNav.jsx";
import styled from "styled-components";
import Mypage_AsideSection from './../components/Mypage/AsideLeft/Mypage_AsideSection';

const MypageMain = styled.main`
display: flex;
justify-content: space-between;
  width: 60%;
  margin: 0 auto;
  margin-top: 20px;
  padding: 0 15px;
  font-size: 12px;
  color: #666;
`;

export default function Mypage() {
  return (
    <>
      <Mypage_TopNav />

      <MypageMain>
        <Mypage_AsideSection />
        <Mypage_MainSection />
      </MypageMain>
    </>
  );
}
