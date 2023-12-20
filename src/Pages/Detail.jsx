import React, { useRef, useState } from "react";
import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsClipboardCheck } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Detail_BookInfo from "../components/Detail/Detail_BookInfo";
import Detail_tabs from "../components/Detail/Detail_tabs";
import Detail_hover from "../components/Detail/Detail_hover";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { cartState } from "../components/Cart/atom";
import * as cookies from '../util/cookies';

const Wrapper = styled.div`
  width: 60vw;
  margin: 0 auto;
`;

const MotionNav = styled(motion.div)`
  position: fixed;
  margin: 0 auto;
  top: 0;
  left: 0;
  background: #f4f6f9;
  width: 100vw;
  height: 55px;
  z-index: 1;
  @media (max-width: 768px) {
    height: 40px;
  }
  .center {
    width: 60%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    div:first-child {
      font-weight: 900;
      font-size: 20px;
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
    div:last-child {
      font-size: 22px;
      color: #ff9c46;
      display: flex;
      align-items: center;
      @media (max-width: 768px) {
        font-size: 15px;
      }
      * {
        margin-left: 8px;
        @media (max-width: 768px) {
          margin-left: 6px;
        }
      }
      span {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      em {
        font-size: 14px;
        @media (max-width: 768px) {
          font-size: 10px;
        }
      }

      input {
        width: 115px;
        height: 32px;
        color: white;
        background: #ff9c46;
        font-size: 14px;
        font-weight: bold;
        border: none;
        @media (max-width: 768px) {
          width: 80px;
          height: 22px;
        }
      }
    }
  }
`;

const LocationBox = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  width: 60vw;
  border-bottom: 1px solid #e5e5e5;
  @media (max-width: 768px) {
    height: 25px;
  }
  span {
    font-size: 11px;
    @media (max-width: 768px) {
      font-size: 8px;
    }
  }
`;
const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 15px 0;

  @media (max-width: 768px) {
    padding: 11px 0;
  }
`;
const Title = styled.div`
  div:first-child {
    display: flex;
    align-items: center;
    padding: 15px 0px;
    .sub_title {
      @media (max-width: 768px) {
        display: none;
      }
    }
    @media (max-width: 768px) {
      padding: 11px 0px;
    }
    h1 {
      font-size: 22px;
      font-weight: bold;
      @media (max-width: 768px) {
        font-size: 20px;
      }
    }
    span {
      font-size: 17px;
      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
  }
  .event {
    display: flex;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #e5e5e5;
      font-size: 9px;
      width: 47px;
      height: 15px;
      color: 555;
      margin-right: 5px;
      @media (max-width: 768px) {
        font-size: 6px;
        width: 33px;
        height: 11px;
        margin-right: 4px;
      }
    }
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  .center {
    padding: 10px;
    width: 60vw;
    @media (max-width: 768px) {
      padding: 7px;
    }
  }
`;
const Star = styled.div`
  display: flex;

  min-width: 200px;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
    min-width: 140px;
  }
  .star {
    font-size: 16px;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      font-size: 11px;
    }
    .star_icon {
      color: var(--main);
      display: flex;
    }
  }

  .review {
    font-size: 12px;
    color: #666;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      font-size: 9px;
    }
    .line {
      margin: 0 5px;
      color: #666;
      @media (max-width: 768px) {
        margin: 0 4px;
      }
    }
  }
  .star_icon {
    color: #ff9c46;
  }
`;

const Detail = () => {
  
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => axios.get(`/detail.json`).then((res) => res.data.item[0]),
  });
  const [reviewData, setReviewData] = useState([]);
  const containerRef = useRef(null);

  const { scrollY, scrollYProgress } = useViewportScroll();
  /*   console.log(scrollY > containerRef.current.offsetTop); */
  const opacity = useTransform(scrollY, [0, 186], [0, 1]);

  const { id } = useParams();

  const {
    isPending: kakaoPending,
    error: kakaoError,
    data: kakaoData,
  } = useQuery({
    queryKey: ["detailData"],
    queryFn: () =>
      axios
        .get(
          `https://dapi.kakao.com/v3/search/book?target=isbn&query='9791171710102'`,
          {
            headers: "Authorization: KakaoAK 21cabe3d0ca37c4bab8dea7ce9d95589",
          }
        )
        .then((result) => result.data.documents[0]),
  });

  const {
    isPending: DetailLoading,
    error: DetailError,
    data: DetailData,
  } = useQuery({
    queryKey: ["DetailData"],
    queryFn: () =>
      axios.get(`http://127.0.0.1:9090/book/${id}`).then((res) => res.data),
  });
  const [qty, setQty] = useState(1);
  const [cart, setCart] = useRecoilState(cartState);
  const navigate = useNavigate();
  const handleAddCart = () => {
    navigate("/cart");
    alert("추가완료");
    return setCart((prev) => [
      ...prev,
      {
        cartId: Date.now(),
        img: DetailData.cover && DetailData.cover,
        title: DetailData.title && DetailData.title,
        priceStandard: DetailData.priceStandard && DetailData.priceStandard,
        priceSales: DetailData.priceSales && DetailData.priceSales,
        mileage: DetailData.mileage && DetailData.mileage,
        count: qty,
      },
    ]);
  };

  // 현재 상품 로컬스토리에 최근 본 상품 목록으로 저장
  const cookieSetting =  () => {
    if(!DetailLoading) {
    const recentViewCookie = cookies.getCookie('recentView');
    const existingValues = recentViewCookie ? recentViewCookie : [];

      if(existingValues.length && !existingValues.includes(DetailData.isbn13)) {
        if(existingValues.length > 11) {
          existingValues.pop();
        }
        const updateValues = [DetailData.isbn13, ...existingValues];
        cookies.setCookie('recentView', JSON.stringify(updateValues), {path : '/', expires: new Date(Date.now() + 600000)});

      }else if(!existingValues.includes(DetailData.isbn13)){
        cookies.setCookie('recentView', JSON.stringify([DetailData.isbn13]), {path : '/', expires: new Date(Date.now() + 600000)});
      };
    };
  };
  cookieSetting();

  return (
    <Wrapper>
      {DetailLoading ? (
        <h1>로딩중</h1>
      ) : (
        <>
          <MotionNav
            style={{
              opacity: opacity,
              scale: opacity,
            }}>
            <div className="center">
              <div>
                {DetailData.title.split("-")[0]
                  ? DetailData.title.split("-")[0]
                  : DetailData.title}
              </div>
              <div>
                <span>
                  {DetailData?.priceSales.toLocaleString()}
                  <em>원</em>
                </span>
                <input
                  style={{ background: "#707070" }}
                  type="button"
                  value="북카트담기"
                  onClick={() => handleAddCart()}
                />
                <input type="button" value="바로구매" />
              </div>
            </div>
          </MotionNav>
          <Container ref={containerRef}>
            <div className="center">
              <LocationBox>
                <span>
                  {DetailData.categoryName
                    ? DetailData.categoryName
                    : "홈 &gt; 국내도서 &gt; 인문 &gt; 인문교양 &gt; 교양일반"}
                </span>
              </LocationBox>
              <TitleBox>
                <Title>
                  <div>
                    <h1>
                      {DetailData.title.split("-")[0]
                        ? DetailData.title.split("-")[0]
                        : DetailData.title}
                    </h1>
                    <span className="sub_title">
                      {DetailData.title.split("-").reverse()[0] !==
                        DetailData.title.split("-")[0] &&
                        `:` + DetailData.title.split("-").reverse()[0]}
                    </span>
                  </div>
                  <div className="event">
                    <span>베스트셀러</span>
                    <span>소득공제</span>
                  </div>
                </Title>
                <Star>
                  <span className="star">
                    <div className="star star_icon ">
                      {reviewData && !Number(reviewData[0]?.avg_point) && (
                        <>
                          <AiOutlineStar />
                          <AiOutlineStar />
                          <AiOutlineStar />
                          <AiOutlineStar />
                          <AiOutlineStar />
                        </>
                      )}
                      {reviewData &&
                        Math.floor(Number(reviewData[0]?.avg_point)) === 1 && (
                          <>
                            <AiFillStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                          </>
                        )}
                      {reviewData &&
                        Math.floor(Number(reviewData[0]?.avg_point)) === 2 && (
                          <>
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                          </>
                        )}
                      {reviewData &&
                        Math.floor(Number(reviewData[0]?.avg_point)) === 3 && (
                          <>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                          </>
                        )}
                      {reviewData &&
                        Math.floor(Number(reviewData[0]?.avg_point)) === 4 && (
                          <>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                          </>
                        )}
                      {reviewData &&
                        Math.floor(Number(reviewData[0]?.avg_point)) === 5 && (
                          <>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                          </>
                        )}
                    </div>
                  </span>
                  <span className="review">
                    <span className="line">|</span>
                    <BsClipboardCheck />
                    리뷰
                  </span>
                </Star>
              </TitleBox>
              <Detail_BookInfo
                kakaoData={kakaoData}
                DetailData={DetailData}
                data={data}
                qty={qty}
                setQty={setQty}
              />
              <Detail_hover />
            </div>
          </Container>
          <Detail_tabs
            reviewData={reviewData}
            setReviewData={setReviewData}
            id={id}
            DetailData={DetailData}></Detail_tabs>
        </>
      )}
    </Wrapper>
  );
};

export default Detail;
