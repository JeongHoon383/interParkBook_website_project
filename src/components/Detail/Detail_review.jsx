import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { AiTwotoneLike } from "react-icons/ai";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../util/localStorage";

const Wrapper = styled.div`
  position: relative;
`;

const ToggleButton = styled(motion.button)`
  position: absolute;
  top: -5px;
  right: 0;
  margin-top: 10px;
  width: 90px;
  height: 25px;
  background: linear-gradient(#ff9c46, rgba(209, 30, 30, 0.694));
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.75);
  color: white;
  right: 0;
  @media (max-width: 768px) {
    width: 65px;
    height: 18px;
    font-size: 12px;
  }
`;
const CloseButton = styled(motion.button)`
  width: 90px;
  height: 25px;
  background: linear-gradient(#ff9c46, rgba(209, 30, 30, 0.694));
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.75);
  color: white;
  right: 0;
  @media (max-width: 768px) {
    width: 65px;
    height: 18px;
    font-size: 12px;
  }
`;
const SubmitButton = styled.button`
  width: 90px;
  height: 25px;
  background: linear-gradient(#ff9c46, rgba(209, 30, 30, 0.694));
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.75);
  color: white;
  right: 0;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    width: 65px;
    height: 18px;
    font-size: 12px;
  }
`;
const Form = styled(motion.form)`
  border: 1px solid lightgray;
  fieldset {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    legend {
      margin: 0 auto;
      height: 40px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: #ff9c46;
      @media (max-width: 768px) {
        height: 28px;
      }
      h1 {
        margin: 0 10px;
        @media (max-width: 768px) {
          margin: 0 7px;
        }
      }
    }
    .title {
      height: 40px;
      background: #f8f8f8;
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 10px;
      @media (max-width: 768px) {
        height: 30px;
        padding-left: 7px;
      }
      input {
        margin-right: 10px;
        @media (max-width: 768px) {
          margin-right: 7px;
        }
      }
      label {
        margin-right: 10px;
        @media (max-width: 768px) {
          margin-right: 7px;
        }
      }
    }
    .content {
      display: flex;
      width: 100%;
      justify-content: flex-start;
      align-items: flex-start;
      padding-left: 10px;
      margin: 20px;
      @media (max-width: 768px) {
        padding-left: 7px;
        margin: 14px;
      }
      label {
        margin-right: 10px;
        @media (max-width: 768px) {
          margin-right: 7px;
        }
      }
    }
  }
`;
const Evaluation = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const TextArea = styled.textarea`
  height: 70px;
  margin: 0 auto;
  width: 80%;
  @media (max-width: 768px) {
    height: 50px;
  }
`;
const Star = styled.span`
  display: flex;
  color: #ff9c46;
`;

const formVars = {
  start: {
    opacity: 0.5,
    scale: 0,
    x: -100,
  },
  end: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "tween" },
  },
  exit: {
    opacity: 0,
    scale: 0,
    x: 100,
    display: "none",
    transition: { type: "tween", duration: 1 },
  },
};

const SortBox = styled.div`
  height: 30px;
  border-bottom: 1px solid lightgray;
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 12px;
    height: 100%;
    li:first-child {
      font-weight: bold;
    }
    li:first-child::after {
      content: "|";
      margin: 0 5px;
    }
  }
`;

const Re_title = styled.div`
  padding: 10px 0;
  font-size: 20px;
  font-weight: bold;
  padding-left: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  @media (max-width: 768px) {
    padding: 7px 0;
    font-size: 14px;
    padding-left: 14px;
  }
  div.star {
    display: flex;
    align-items: center;
    color: #ff9c46;
  }
  span {
    font-size: 12px;
    font-weight: lighter;
    @media (max-width: 768px) {
      font-size: 8px;
    }
  }
`;

const Review = styled.div`
  margin-top: 85px;
  @media (max-width: 768px) {
    margin-top: 60px;
  }
`;
const UserOutput = styled.div`
  height: 145px;
  .content {
    margin-top: 20px;
    white-space: nowrap;
    line-height: 120%;
    word-spacing: 5px;
    font-size: 13px;
  }
  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  div {
    ul:first-child {
      font-size: 14px;
      li:first-child {
        display: flex;
        align-items: center;
        color: #ff9c46;
      }
      li:nth-child(2) {
        font-weight: bold;
      }
    }
    ul:nth-child(2) {
      font-size: 12px;
      color: #666;
    }
    ul {
      display: flex;
      align-items: center;
      margin-top: 20px;

      li {
        margin: 0 10px;
      }
    }
  }
`;

const Extend = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  span:nth-child(2) {
    color: #ff9c46;
    font-weight: bold;
  }
`;

const PageContainer = styled.div`
  height: 37px;
  background: #fafafa;
  border-top: 1px solid black;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  margin-bottom: 10px;
  @media (max-width: 768px) {
    height: 30px;
    margin-bottom: 7px;
  }
  .number {
    background-color: #555555;
    color: #ffffe4;
  }
  div {
    width: 100%;
    height: 100%;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 12px;
      @media (max-width: 768px) {
        font-size: 9px;
      }
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 45px;
        height: 37px;
        cursor: pointer;
        @media (max-width: 768px) {
          width: 32px;
          height: 26px;
        }
      }
    }
  }
`;
const ReviewContent = styled.div`
  padding: 0 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  .title {
    margin: 20px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    div:first-child {
      font-size: 15px;
      font-weight: bold;
      display: flex;
      align-items: center;
      em {
        color: var(--main);
        display: flex;
        align-items: center;
      }
    }
    div:last-child {
      ul {
        display: flex;
        align-items: center;
        li:first-child::after {
          content: "|";
          margin: 0 5px;
        }
      }
      font-size: 12px;
      color: rgba(0, 0, 0, 0.4);
    }
  } //title
  .content {
    font-size: 13px;
    word-spacing: 4px;
    line-height: 110%;
  }
  .comment {
    margin-top: 10px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      display: flex;
      align-items: center;
      font-size: 12px;

      li::after {
        content: "|";
        margin: 0 10px;
        color: rgba(0, 0, 0, 0.4);
      }
      li:last-child {
        background-color: #949494;
        font-size: 11px;
        padding: 3px 5px;
        box-sizing: content-box;
        width: 55px;
        display: flex;
        align-items: center;
        color: rgba(255, 255, 255, 1);
        span {
          margin-left: 2px;
        }
      }
      li:last-child::after {
        content: "";
        margin: 0;
        color: transparent;
      }
    }
  }
  .extend {
    font-size: 12px;
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      margin-left: 5px;
    }
    span:last-child {
      color: var(--main);
    }
  }
`;
const Detail_review = ({ reviewData, setReviewData }) => {
  const [rating, setRating] = useState(0);
  const [star, setStar] = useState(1);
  const [toggle, setToggle] = useState(false);
  const [click, setClick] = useState(false);
  const [totalPoint, setTotalPoint] = useState(0);

  const [isPending, setIsPending] = useState(false);
  let a = "";
  const params = useParams();
  function idStar(a) {
    let arr = a.split("");
    let v = arr.reverse().splice(0, 2);
    arr = arr.reverse().join("");
    return arr;
  }

  useEffect(() => {
    setIsPending(true);
    axios
      .get(`http://127.0.0.1:9090/book/${params.id}/review`)
      .then((res) => setReviewData(res?.data));
    setIsPending(false);
  }, [reviewData]);

  const handleClick = () => {
    setClick((click) => !click);
  };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    setValue("title", "");
    setValue("content", "");

    let { title, point, content } = data;
    axios
      .post(`http://127.0.0.1:9090/book/:isbn/review`, {
        title,
        point: rating + 1,
        content,
        isbn: params.id,
        uid: "park",
      })
      .then((res) => {
        alert("리뷰등록성공");
        setToggle(false);
      })
      .catch((err) => console.log(err));
    setValue("point", "1");
  };

  let starArr = [1, 2, 3, 4, 5];

  const handleMouseover = (star) => setRating(star);
  let userInfo = getUser();
  return (
    <>
      {isPending ? (
        <h1>로딩중</h1>
      ) : (
        <Wrapper>
          {toggle === false && userInfo && (
            <ToggleButton
              drag
              layoutId="tog"
              onClick={() => setToggle(true)}
              type="button"
            >
              리뷰쓰기
            </ToggleButton>
          )}
          <AnimatePresence>
            {toggle === true ? (
              <Form
                onSubmit={handleSubmit(onValid)}
                variants={formVars}
                initial="start"
                animate="end"
                exit="exit"
              >
                <fieldset>
                  <legend>
                    <h1>리뷰 작성</h1>{" "}
                    <RiKakaoTalkFill style={{ fontSize: "20px" }} />
                    <CloseButton
                      layoutId="tog"
                      onClick={() => setToggle(false)}
                      type="button"
                    >
                      리뷰닫기
                    </CloseButton>
                  </legend>

                  <div className="title">
                    <label htmlFor=""></label>
                    <input
                      {...register("title", { required: true })}
                      placeholder="제목을 입력해주세요.."
                      type="text"
                    />

                    <Evaluation>
                      <Star>
                        {starArr.map((v, i) => (
                          <>
                            <AiFillStar
                              key={i}
                              onMouseOver={() => handleMouseover(i)}
                              style={{ cursor: "pointer", scale: "1.2" }}
                              fill={i <= rating ? "var(--main)" : "none"}
                              stroke="var(--main)"
                              strokeWidth="20"
                            />
                          </>
                        ))}
                      </Star>
                    </Evaluation>
                  </div>

                  <div className="content">
                    <label htmlFor=""></label>
                    <TextArea
                      {...register("content", { required: true })}
                      type="text"
                      placeholder="내용을 입력해주세요"
                    />
                  </div>
                  <SubmitButton type="submit">글작성</SubmitButton>
                </fieldset>
              </Form>
            ) : null}
          </AnimatePresence>
          <Review>
            <Re_title>
              리뷰
              <div className="star">
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
              <span>
                (총 {reviewData && reviewData.length ? reviewData.length : 0}건)
              </span>
            </Re_title>
            <SortBox>
              <ul>
                <li>최근순</li>
                <li>제목순</li>
              </ul>
            </SortBox>
            {!isPending &&
              reviewData &&
              Array.isArray(reviewData) &&
              reviewData.map((v, i) => (
                <ReviewContent key={i}>
                  <div className="title">
                    <div>
                      <em>
                        {Number(v?.point) === 1 && (
                          <>
                            <AiFillStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                          </>
                        )}
                        {Number(v?.point) === 2 && (
                          <>
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                          </>
                        )}
                        {Number(v?.point) === 3 && (
                          <>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                          </>
                        )}
                        {Number(v?.point) === 4 && (
                          <>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                          </>
                        )}
                        {Number(v?.point) === 5 && (
                          <>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                          </>
                        )}
                      </em>
                      {v?.title}
                    </div>
                    <div>
                      <ul>
                        <li>{idStar(v.id)}**</li>
                        <li>{v?.rdate.split("T")[0].replaceAll("-", "/")}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="content">{v?.content}</div>
                  <div className="comment">
                    <ul>
                      <li>댓글(0)</li>
                      <li>추천(0)</li>
                      <li>
                        <AiTwotoneLike />
                        <span>추천하기</span>
                      </li>
                    </ul>
                    <div onClick={handleClick} className="extend">
                      <span>펼쳐보기</span>
                      <span
                        style={{
                          transform: click ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      >
                        <IoIosArrowDown />
                      </span>
                    </div>
                  </div>
                </ReviewContent>
              ))}

            <PageContainer>
              <div>
                <ul>
                  <li>
                    <MdKeyboardDoubleArrowLeft />
                    맨앞
                  </li>
                  <li>
                    <MdArrowBackIos />
                    이전
                  </li>
                  <li className="number">1</li>
                  <li>
                    다음
                    <MdArrowForwardIos />
                  </li>
                  <li>
                    맨뒤
                    <MdKeyboardDoubleArrowRight />
                  </li>
                </ul>
              </div>
            </PageContainer>
          </Review>
        </Wrapper>
      )}
    </>
  );
};

export default Detail_review;
