import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuNav = styled.nav`
  width: 100%;
  border-radius: 4px;
  border: 1px solid #d8d8d8;
`;

export default function Mypage_MenuNav() {
  return (
    <MenuNav>
      <ul>
        <li>
          <Link>주문/배송조회</Link>
        </li>
      </ul>
    </MenuNav>
  );
}
