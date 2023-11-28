import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const Wrapper = styled.div`
  position: relative;
`;

const ToggleButton = styled(motion.button)`
  position: absolute;
  top: -50px;
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
      h1 {
        margin: 0 10px;
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
      input {
        margin-right: 10px;
      }
      label {
        margin-right: 10px;
      }
    }
    .content {
      display: flex;
      width: 100%;
      justify-content: flex-start;
      align-items: flex-start;
      padding-left: 10px;
      margin: 20px;
      label {
        margin-right: 10px;
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
  font-size: 20px;
  font-weight: bold;
  padding-left: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  div.star {
    display: flex;
    align-items: center;
    color: #ff9c46;
  }
  span {
    font-size: 12px;
    font-weight: lighter;
  }
`;

const Review = styled.div`
  margin-top: 85px;
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

const Content = styled(motion.div)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 70px;
`;

const PageContainer = styled.div`
  height: 37px;
  background: #fafafa;
  border-top: 1px solid black;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  margin-bottom: 10px;
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
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 45px;
        height: 37px;
        cursor: pointer;
      }
    }
  }
`;

const Detail_review = () => {
  const [star, setStar] = useState(1);
  const [toggle, setToggle] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick((click) => !click);
  };

  return (
    <Wrapper>
      {toggle === false && (
        <ToggleButton
          drag
          layoutId="tog"
          onClick={() => setToggle(true)}
          type="button">
          리뷰쓰기
        </ToggleButton>
      )}
      <AnimatePresence>
        {toggle === true ? (
          <Form variants={formVars} initial="start" animate="end" exit="exit">
            <fieldset>
              <legend>
                <h1>리뷰 작성</h1>{" "}
                <RiKakaoTalkFill style={{ fontSize: "20px" }} />{" "}
                <CloseButton
                  layoutId="tog"
                  onClick={() => setToggle(false)}
                  type="button">
                  리뷰닫기
                </CloseButton>
              </legend>

              <div className="title">
                <label htmlFor=""></label>
                <input placeholder="제목을 입력해주세요.." type="text" />{" "}
                <Evaluation>
                  <select
                    onChange={(e) => setStar(e.currentTarget.value)}
                    name="star"
                    id="">
                    <option value="1">1점</option>
                    <option value="2">2점</option>
                    <option value="3">3점</option>
                    <option value="4">4점</option>
                    <option value="5">5점</option>
                  </select>
                  <Star>
                    {star === 1 && (
                      <>
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                      </>
                    )}
                    {star === 2 && (
                      <>
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                      </>
                    )}
                    {star === 3 && (
                      <>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                      </>
                    )}
                    {star === 4 && (
                      <>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                      </>
                    )}
                    {star === 5 && (
                      <>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </>
                    )}
                  </Star>
                </Evaluation>
              </div>
              <div className="content">
                <label htmlFor=""></label>
                <TextArea type="text" placeholder="내용을 입력해주세요" />
              </div>
              <SubmitButton type="submit">글작성</SubmitButton>
            </fieldset>
          </Form>
        ) : null}
      </AnimatePresence>
      <Review>
        <Re_title>
          리뷰{" "}
          <div className="star">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <span>(총 2건)</span>
        </Re_title>
        <SortBox>
          <ul>
            <li>최근순</li>
            <li>제목순</li>
          </ul>
        </SortBox>
        <div>
          <UserOutput>
            <div>
              <ul>
                <li>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </li>
                <li>마흔에 읽는 쇼펜하우어</li>
              </ul>
              <ul>
                <li>아이디</li>
                <li>2023/09/21</li>
              </ul>
            </div>
            <Content
              style={{
                overflow: click && "visible",
                whiteSpace: click && "normal",
                textOverflow: click && "clip",
                height: click && "auto",
              }}>
              역사책을 좋아하는 나로썬 이런 부류의 책은 관심을 갖지 못했다.
              우연히 유튜브 알고리즘으로 마흔의 읽는 쇼펜 하우어 책을
              알게됐는데, 그야 말로 충격이었다. 잠언 형식처럼 사회생활에 꼭
              필요한 책이란 걸 알게되 당장 구입했다. 책가격은 생각보다
              비싼편이지만 역사책을 좋아하는 나로썬 이런 부류의 책은 관심을 갖지
              못했다. 우연히 유튜브 알고리즘으로 마흔의 읽는 쇼펜 하우어 책을
              알게됐는데, 그야 말로 충격이었다. 잠언 형식처럼 사회생활에 꼭
              필요한 책이란 걸 알게되 당장 구입했다. 책가격은 생각보다
              비싼편이지만 역사책을 좋아하는 나로썬 이런 부류의 책은 관심을 갖지
              못했다. 우연히 유튜브 알고리즘으로 마흔의 읽는 쇼펜 하우어 책을
              알게됐는데, 그야 말로 충격이었다. 잠언 형식처럼 사회생활에 꼭
              필요한 책이란 걸 알게되 당장 구입했다. 책가격은 생각보다
              비싼편이지만
            </Content>
            <Extend onClick={handleClick}>
              <motion.div style={{ position: "relative" }}>
                <motion.span>펼쳐보기</motion.span>
                <motion.span>
                  <IoIosArrowDown
                    style={{ transform: click && "rotate(180deg)" }}
                  />
                </motion.span>
              </motion.div>
            </Extend>
          </UserOutput>
        </div>
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
  );
};

export default Detail_review;
