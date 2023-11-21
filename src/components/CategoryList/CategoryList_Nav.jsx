import styled from "styled-components";
import { LiaAngleRightSolid } from "react-icons/lia";
import { CiSquareChevDown, CiSquareChevUp } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from "react";

const BackgroundLayout = styled.div`
  background: rgb(248, 248, 248);
  border-bottom: 1px solid rgb(229, 229, 229);
  height: 41px;
  .centerLayout {
    width: 980px;
    margin: 0 auto;
    .categoryNavigation {
      line-height: 41px;
      font-size: 12px;
      color: #666;
      > a {
        text-decoration: none;
      }
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
        button {
          display: inline-flex;
          align-items: center;
          padding-left: 20px;
          border: none;
          background: none;
          svg{
            font-size: 20px;
            
          }
        }
        .firstDepthList{
          position: absolute;
          top: calc(100% + 5px);
          left: 10%;
          border: 1px solid var(--main);
          background: #FFF;
          z-index: 100;
          li{
            width: 80px;
            text-align: center;
            line-height: 30px;
            a{
              display: inline-block;
              width: 100%;
              &:hover{
                text-decoration: underline;
              }
            }
          }
        }
        .secondDepthList{
          position: absolute;
          display: flex;
          border: 1;
          border: 1px solid var(--main);
          background: #FFF;
          ul{
            &:not(:last-child){
              border-right: 1px solid #DDD;
            }
            li{

            }
          }
        }
      }
    }
  }
`;

export default function CategoryList_Nav() {
  const [isClick, setIsClick] = useState([false,false]);


  const handleClick = (idx) => {
    let copy = [...isClick]
    if(copy[idx]){
      copy[idx] = false;
      setIsClick(copy);
    }else{
      copy = [false, false];
      copy[idx] = true;
      setIsClick(copy);
    }
  }

  // useEffect(() => {
  //   axios('http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbgur65142158001&QueryType=ItemNewAll&SearchTarget=Book&MaxResults=20&CategoryId=53510&Output=JS&Version=20131101')
  //   .then(result => console.log(result.data))
  // }, [])

  return (
    <BackgroundLayout>
      <div className="centerLayout">
        <div className="categoryNavigation">
          <Link>메인페이지</Link>

          <span>
            <LiaAngleRightSolid className="angleRight" />
            <button onClick={() => handleClick(0)}>
              <span>국내도서</span>
              {isClick[0] ? <CiSquareChevUp /> : <CiSquareChevDown />}
            </button>
            {
              isClick[0] ? (
                <ul className="firstDepthList">
              <li><Link>국내도서</Link></li>
              <li><Link>외국도서</Link></li>
              <li><Link>eBook</Link></li>
              <li><Link>중고샵</Link></li>
            </ul>
              ) : null
            }
          </span>

          <span>
            <LiaAngleRightSolid className="angleRight" />
            <button onClick={() => handleClick(1)}>
              <span>여행</span>
              {isClick[1] ? <CiSquareChevUp /> : <CiSquareChevDown />}
            </button>
            <div className="secondDepthList">
              <ul>
                <li><Link>건강/취미</Link></li>
                <li><Link>경제경영</Link></li>
                <li><Link>공무원 수험서</Link></li>
                <li><Link>과학</Link></li>
                <li><Link>달력/기타</Link></li>
                <li><Link>대학교재</Link></li>
                <li><Link>만화</Link></li>
                <li><Link>사회과학</Link></li>
                <li><Link>소설/시/희곡</Link></li>
              </ul>
              <ul>
                <li><Link>수험서/자격증</Link></li>
                <li><Link>어린이</Link></li>
                <li><Link>에세이</Link></li>
                <li><Link>여행</Link></li>
                <li><Link>역사</Link></li>
                <li><Link>예술/대중문화</Link></li>
                <li><Link>외국어</Link></li>
                <li><Link>요리/살림</Link></li>
                <li><Link>유아</Link></li>
              </ul>
              <ul>
                <li><Link>인문학</Link></li>
                <li><Link>자기계발</Link></li>
                <li><Link>잡지</Link></li>
                <li><Link>장르소설</Link></li>
                <li><Link>전집/중고전집</Link></li>
                <li><Link>종교/역학</Link></li>
                <li><Link>좋은부모</Link></li>
                <li><Link>청소년</Link></li>
                <li><Link>컴퓨터/모바일</Link></li>
              </ul>
              <ul>
                <li><Link>초등학교참고서</Link></li>
                <li><Link>중학교참고서</Link></li>
                <li><Link>고등학교참고서</Link></li>
              </ul>
            </div>
          </span>
        </div>
      </div>
    </BackgroundLayout>
  );
}
