import styled from "styled-components";
import { Link } from "react-router-dom";

const BestSellerNav = styled.nav`
  width: 180px;
  border: 1px solid #d8d8d8;
  margin-top: 10px;
  .weekBestSellerTitle {
    font-size: 15px;
    font-weight: bold;
    color: #000;
    text-align: center;
    padding-top: 10px;
  }
  .weekBestSellerList {
    width: 100%;
    .weekBestSellerItem {
      width: 90%;
      margin: 10px auto;
      figure {
        position: relative;
        display: flex;
        justify-content: space-between;
        a {
          width: 30%;
          .weekBestSellerRank {
            position: absolute;
            top: 0;
            left: 0;
            width: 15px;
            line-height: 15px;
            font-size: 10px;
            font-weight: bold;
            color: #fff;
            text-align: center;
            background: #333;
          }
          img {
            width: 100%;
          }
        }
        figcaption {
          width: 65%;
          a {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            word-wrap: break-word;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`;

export default function CategortList_WeekBestSeller() {
  return (
    <BestSellerNav>
      <h4 className="weekBestSellerTitle">여행 주간 베스트셀러 &lt;</h4>
      <ul className="weekBestSellerList">
        <li className="weekBestSellerItem">
          <figure>
            <Link>
              <div className="weekBestSellerRank">1</div>
              <img
                src="https://image.aladin.co.kr/product/32940/45/cover150/k692936045_1.jpg"
                alt="weekBestseller"
              />
            </Link>
            <figcaption>
              <Link>함께 웃고, 배우고, 사랑하고 - 네 자매의 스페인 여행</Link>
            </figcaption>
          </figure>
        </li>
        <li className="weekBestSellerItem">
          <figure>
            <Link>
              <div className="weekBestSellerRank">2</div>
              <img
                src="https://image.aladin.co.kr/product/32940/45/cover150/k692936045_1.jpg"
                alt="weekBestseller"
              />
            </Link>
            <figcaption>
              <Link>함께 웃고, 배우고, 사랑하고 - 네 자매의 스페인 여행</Link>
            </figcaption>
          </figure>
        </li>
        <li className="weekBestSellerItem">
          <figure>
            <Link>
              <div className="weekBestSellerRank">3</div>
              <img
                src="https://image.aladin.co.kr/product/32940/45/cover150/k692936045_1.jpg"
                alt="weekBestseller"
              />
            </Link>
            <figcaption>
              <Link>함께 웃고, 배우고, 사랑하고 - 네 자매의 스페인 여행</Link>
            </figcaption>
          </figure>
        </li>
        <li className="weekBestSellerItem">
          <figure>
            <Link>
              <div className="weekBestSellerRank">4</div>
              <img
                src="https://image.aladin.co.kr/product/32940/45/cover150/k692936045_1.jpg"
                alt="weekBestseller"
              />
            </Link>
            <figcaption>
              <Link>함께 웃고, 배우고, 사랑하고 - 네 자매의 스페인 여행</Link>
            </figcaption>
          </figure>
        </li>
        <li className="weekBestSellerItem">
          <figure>
            <Link>
              <div className="weekBestSellerRank">5</div>
              <img
                src="https://image.aladin.co.kr/product/32940/45/cover150/k692936045_1.jpg"
                alt="weekBestseller"
              />
            </Link>
            <figcaption>
              <Link>함께 웃고, 배우고, 사랑하고 - 네 자매의 스페인 여행</Link>
            </figcaption>
          </figure>
        </li>
      </ul>
    </BestSellerNav>
  );
}
