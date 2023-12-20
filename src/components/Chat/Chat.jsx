import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import Chat_Avatar from "./Chat_Avatar";
import { useForm } from "react-hook-form";
import { io } from "socket.io-client";
import { getUser } from "../../util/localStorage";
import { IoMdPaperPlane } from "react-icons/io";
const Wrapper = styled.div`
  position: fixed;
  left: 30px;
  bottom: 30px;
  z-index: 99;
`;

const BotIcon = styled(motion.svg)`
  cursor: pointer;
  width: 50px;
  height: 50px;
  fill: var(--main);
`;
const ChatBox = styled.div`
  width: 315px;
  height: 450px;
  border: 1px solid black;
  border-radius: 10px;
`;
const TopMenu = styled(motion.div)`
  width: 100%;
  height: 60px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: white;
  background-color: var(--main);
  font-weight: bold;
  .close_button {
    cursor: pointer;
  }
  svg {
    scale: 1.5;
  }
`;
const TimeMenu = styled(motion.div)`
  height: 60px;
  width: 100%;
  padding: 20px;
  color: white;
  border-top: 1px solid white;
  background-color: var(--main);
`;

const ChatArea = styled.div`
  height: 285px;
  width: 100%;
  padding: 20px;
  background-color: white;
  overflow-y: scroll;
`;
const TodayList = styled.li`
  font-size: 11px;
  color: rgba(0, 0, 0, 0.4);
  text-align: center;
`;
const MessageRow = styled(motion.div)`
  .timeLine {
    font-size: 10px;
    margin-bottom: 5px;
    color: rgba(0, 0, 0, 0.4);
  }
  &.mine {
    flex-direction: row-reverse;
    .message_payload span:first-child {
      background-color: yellow;
      color: black;
      order: 1;
      margin-right: 0;
      margin-left: 5px;
    }
  }
  width: 100%;
  display: flex;
  margin-bottom: 25px;
  img {
    margin-right: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .message_author {
    opacity: 0.8;
    font-size: 13px;
    margin-bottom: 8px;
    display: block;
  }
  .message_payload {
    display: flex;
    align-items: flex-end;
    span:first-child {
      background-color: #d3d3d3;
      padding: 8px 10px;
      border-radius: 10px;
      margin-right: 5px;
      opacity: 0.8;
      font-size: 13px;
      border-top-left-radius: 0px;
    }
    span:last-child {
      opacity: 0.8;
 
    }
  }
`;
const MessageRow2 = styled.div`
  .timeLine {
    font-size: 10px;
    margin-bottom: 5px;
    color: rgba(0, 0, 0, 0.4);
  }
  &.mine {
    flex-direction: row-reverse;
    .message_payload span:first-child {
      background-color: var(--main);
      color: black;
      order: 1;
      border-top-left-radius: 10px;
      border-top-right-radius: 0;
      margin-right: 0;
      margin-left: 5px;
    }
  }
  width: 100%;
  display: flex;
  margin-bottom: 25px;
  img {
    margin-right: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .message_author {
    opacity: 0.8;
    font-size: 13px;
    margin-bottom: 8px;
    display: block;
  }
  .message_payload {
    display: flex;
    align-items: flex-end;

    span:first-child {
      background-color: var(--main);
      padding: 8px 10px;
      border-radius: 10px;
      margin-right: 5px;
      opacity: 0.8;
      font-size: 13px;
      border-top-left-radius: 0px;
    }
    span:last-child {
      opacity: 0.8;
      font-size: 10px;
    }
  }
`;

const Form = styled.form`
  width: 100%;
  height: 44px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid black;
  font-size: 14px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  input {
    width: 80%;

    margin-right: 10px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    color: var(--main);
    scale: 1.5;
  }
`;
const socket = io();
socket.emit("ask-join", "1");
const Chat = () => {
  const [click, setClick] = useState(false);
  const [update, setUpdate] = useState();
  const [down, setDown] = useState([]);
  const userInfo = getUser();
  const scrollRef = useRef(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();
  useEffect(() => {
    socket.emit("message", {
      id: userInfo?.id,
      msg: update,
      time: `${new Date().getHours()}:${new Date().getMinutes()}`,
    });
  }, [update]);
  socket.on("broadcast", (data) => {
    console.log(data, "서버에서받은");
    setDown([...down, data]);
  });

  const onValid = (data) => {
    setUpdate(data.msg);
    setValue("msg", "");
    console.log(update, "update");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // 100ms 후에 스크롤 이동 실행
    return () => clearTimeout(timer); // 클린업 함수로 타이머 제거
  }, [down]);
  return (
    <Wrapper>
      {!click ? (
        <BotIcon
          layoutId="chatroom"
          onClick={() => setClick((prev) => !prev)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512">
          <path d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z" />
        </BotIcon>
      ) : (
        <ChatBox layoutId="chatroom">
          <TopMenu>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0, transition: 0.3 }}>
              4조 고객센터
            </motion.span>
            <span
              className="close_button"
              onClick={() => setClick((prev) => !prev)}>
              <MdClose />
            </span>
          </TopMenu>
          <TimeMenu
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
                delay: 0.3,
                type: "tween",
                ease: "easeIn",
              },
            }}>
            운영시간 : 10:00 ~ 18:50
          </TimeMenu>
          <ChatArea>
            <ul>
              <TodayList>
                {new Date().getFullYear()}.{new Date().getMonth() + 1}.
                {new Date().getDate()}
              </TodayList>
              <li>
                <MessageRow
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.3,
                      delay: 0.6,
                      type: "tween",
                      ease: "easeIn",
                    },
                  }}>
                  <Chat_Avatar />
                  <div className="message_content">
                    <span className="message_author"> </span>
                    <div className="message_payload">
                      <motion.span>
                        ★고객센터 운영시간★
                        <br /> *평일 ( 10 :00 ~ 18:50 )
                        <br />
                        *점심시간 ( 12:00 ~ 13:30 )
                        <br />
                        *토, 일, 공휴일 휴무
                        <br />
                        -----------------------------
                        <br />
                        구매자분 성함/연락처/
                        <br />
                        문의사항 남겨주시면
                        <br />
                        빠른 확인이 가능합니다
                      </motion.span>
                      <span> </span>
                    </div>
                  </div>
                </MessageRow>
              </li>
              {down.map((v, i) =>
                v.id == "admin1234" ? (
                  <MessageRow>
                    <Chat_Avatar />
                    <div className="message_content">
                      <span className="message_author"> </span>
                      <div className="message_payload">
                        <span>{v.msg}</span>
                        <span className="timeLine">{v.time}</span>
                      </div>
                    </div>
                  </MessageRow>
                ) : (
                  <li key={i}>
                    <MessageRow2 className="mine">
                      <div className="message_content">
                        <span className="message_author"> </span>
                        <div className="message_payload">
                          <span>{v.msg}</span>
                          <span className="timeLine">{v.time}</span>
                        </div>
                      </div>
                    </MessageRow2>
                  </li>
                )
              )}
              <li ref={scrollRef}></li>
            </ul>
          </ChatArea>
          <Form onSubmit={handleSubmit(onValid)}>
            <input {...register("msg", { required: true })} type="text" />
            <button>
              <IoMdPaperPlane />
            </button>
          </Form>
        </ChatBox>
      )}
    </Wrapper>
  );
};

export default Chat;
