import styled from "styled-components";
import { Link } from "react-router-dom";
import { LiaAngleRightSolid } from "react-icons/lia";

const BackgroundLayout = styled.nav`
  height: 41px;
  font-size: 12px;
  color: #666;
  border-bottom: 1px solid #d8d8d8;
  background: #f8f8f8;
  .centerLayout {
    width: 60%;
    margin: 0 auto;
    padding: 0 15px;
    .categoryNavigation {
      line-height: 41px;
      > span {
        position: relative;
        svg {
          position: relative;
          display: inline-block;
          font-size: 16px;
          &.angleRight {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
        }
        a {
          display: inline-flex;
          align-items: center;
          padding-left: 20px;
          svg {
            font-size: 20px;
          }
        }
      }
    }
  }
`;

export default function CategoryList_TopNav() {
  return (
    <BackgroundLayout>
      <div className="centerLayout">
        <nav className="categoryNavigation">
          <Link to={"/"}>메인페이지</Link>
          <span>
            <LiaAngleRightSolid className="angleRight" />
            <Link to={"/mypage"}>
              <span>마이페이지</span>
            </Link>
          </span>
        </nav>
      </div>
    </BackgroundLayout>
  );
}
