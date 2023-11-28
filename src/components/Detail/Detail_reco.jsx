import React from "react";
import Detail_slider from "./Detail_slider";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Title = styled.div`
  margin-top: 40px;
  height: 40px;
  font-weight: bold;
  div {
    border-top: 1px solid lightgray;
    margin-top: 15px;
    width: 100%;
  }
`;

const Detail_reco = () => {
  const {
    isPending: novelPending,
    error: novelError,
    data: novelData,
  } = useQuery({
    queryKey: ["novelData"],
    queryFn: () =>
      axios
        .get(
          `https://dapi.kakao.com/v3/search/book?target=person&size=12&query='미야자키 하야오'`,
          {
            headers: "Authorization: KakaoAK 21cabe3d0ca37c4bab8dea7ce9d95589",
          }
        )
        .then((result) => result.data.documents),
  });
  const {
    isPending: cookPending,
    error: cookError,
    data: cookData,
  } = useQuery({
    queryKey: ["cookData"],
    queryFn: () =>
      axios
        .get(
          `https://dapi.kakao.com/v3/search/book?target=person&size=12&query='백종원'`,
          {
            headers: "Authorization: KakaoAK 21cabe3d0ca37c4bab8dea7ce9d95589",
          }
        )
        .then((result) => result.data.documents),
  });
  const {
    isPending: enPending,
    error: enError,
    data: enData,
  } = useQuery({
    queryKey: ["enData"],
    queryFn: () =>
      axios
        .get(
          `https://dapi.kakao.com/v3/search/book?target=title&size=12&query='토익'`,
          {
            headers: "Authorization: KakaoAK 21cabe3d0ca37c4bab8dea7ce9d95589",
          }
        )
        .then((result) => result.data.documents),
  });
  console.log(enData);
  return (
    <>
      {novelPending ? (
        <p>로딩중...</p>
      ) : (
        <>
          {" "}
          <Title>
            📖소설 분야에서 많은 회원이 구매한 책<div></div>
          </Title>
          <Detail_slider data={novelData} />
          <Title>
            📖이 책을 조회한 회원들이 같이 본 책<div></div>
          </Title>
          <Detail_slider data={cookData} />
          <Title>
            📖이 책을 구매한 회원들이 구매한 책<div></div>
          </Title>
          <Detail_slider data={enData} />
        </>
      )}
    </>
  );
};

export default Detail_reco;
