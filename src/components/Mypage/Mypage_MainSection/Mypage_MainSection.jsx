import styled from "styled-components";
import Mypage_Event from "./Mypage_Event";
import Mypage_RecentOrder from "./Mypage_RecentOrder";
import Mypage_BookList from "./Mypage_BookList";
import Mypage_Ad from "./Mypage_Ad";

const MainSection = styled.section`
  width: 900px;
  >*{
    margin-bottom: 30px;
  }
`;

export default function Mypage_MainSection() {
  return(
    <MainSection>
      <Mypage_Event />
      <Mypage_RecentOrder />
      <Mypage_BookList />
      <Mypage_Ad />
    </MainSection>
  );
}