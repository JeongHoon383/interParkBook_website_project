import styled from "styled-components";
import Mypage_UserInfo from './Mypage_UserInfo';
import Mypage_MenuNav from './Mypage_MenuNav';

const AsideSection = styled.aside`
  min-width: 190px;
`;

export default function Mypage_AsideSection() {
  return(
    <AsideSection>
      <Mypage_UserInfo />
      <Mypage_MenuNav />
    </AsideSection>
  );
}