import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  min-width: 60vw;
`;

const SortSection = styled(motion.section)`
  margin-top: 40px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    margin-top: 28px;
    margin-bottom: 7px;
  }
  h1 {
    font-size: 20px;
    margin: 10px 0;
    font-weight: 900;
    @media (max-width: 768px) {
      font-size: 14px;
      margin: 7px 0;
    }
  }
  hr {
    margin-bottom: 20px;
    @media (max-width: 768px) {
      margin-bottom: 14px;
    }
  }
  em {
    font-size: 12px;
    @media (max-width: 768px) {
      font-size: 8px;
    }
  }
  span {
    font-size: 14px;
    letter-spacing: normal;
    line-height: 150%;
    @media (max-width: 768px) {
      font-size: 10px;
    }
  }
`;
const AuthorBox = styled.div`
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-top: 1px solid lightgray;

  @media (max-width: 768px) {
    padding: 7px 14px;
  }
  div:first-child {
    font-size: 16px;
    font-weight: 600;
    @media (max-width: 768px) {
      font-size: 11px;
    }
  }
  div:last-child {
    font-size: 11px;
    color: #a1778c;
    @media (max-width: 768px) {
      font-size: 8px;
    }
  }
`;
const AuthorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
  padding-bottom: 10px;
  .author_info {
    @media (max-width: 768px) {
      font-size: 11px;
    }
  }
  @media (max-width: 768px) {
    padding-bottom: 7px;
  }
  div {
    padding: 10px;
    color: #777;
    @media (max-width: 768px) {
      padding: 7px;
    }
  }
  div:first-child {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #777;
    border-right: 1px solid lightgray;
    @media (max-width: 768px) {
      font-size: 8px;
    }
  }
  div:nth-child(2) {
    grid-column: span 3;
  }
`;

const Extend = styled.div`
  span {
    margin-left: 7px;
    @media (max-width: 768px) {
      margin-left: 5px;
    }
  }
  span:last-child {
    color: var(--main);
  }
  span:last-child.active {
    transform: rotate(180deg);
  }
`;

const Detail_info = ({ DetailData }) => {
  const sectionRef = useRef(null);
  const [clickWriter, setClickWriter] = useState(false);
  return (
    <Wrapper>
      <SortSection>
        <h1>이상품분류</h1>
        <hr />
        <em>{DetailData.categoryName && DetailData.categoryName}</em>
      </SortSection>
      <SortSection ref={sectionRef}>
        <h1>책소개</h1>
        <hr />
        <motion.span>
          {DetailData?.description
            ? DetailData.description
            : "책 정보가 없습니다"}
          <br /> <br />
          일본 최고 권위 문학상답게 현지 언론들은 앞다퉈 시상식장으로
          몰려들었고, 수상자가 무대에 오르자 평소와 다른 풍경에 기자들은 홀린 듯
          플래시를 터트렸다. 전동 휠체어를 타고 기자들 앞에 선 수상자. 바로,
          이치카와 사오가 등장하는 순간이었다. 그는 목에 꽂힌 기관절개 호스를
          누르며 기자들의 질문에 유머러스하게 답했고, 수상 소감을 밝히는 순서가
          되자 다음과 같이 말했다. “어째서 2023년에 이르러서야 중증 장애인이
          최초로 수상하게 됐는지 모두가 생각해 주셨으면 합니다.” 장애인을 배제한
          종이책 중심의 일본 출판계를 비판하면서 전자책과 오디오북 추가 보급 등
          ‘독서 배리어 프리’를 호소하는 그의 모습은 실시간으로 보도되었고,
          일본은 물론이거니와 국내 언론과 SNS 커뮤니티에서까지 화제를 일으켰다.
          이러한 화제의 열기는 온라인상에서 그치지 않고 판매로까지 이어지면서,
          출간 당시부터 화제작이었던 『헌치백』은 출간 한 달 만에 20만 부가
          판매되는 초대형 베스트셀러로 등극했다. 이치카와 사오가 수상 소감에서
          밝혔던 것처럼, 중증 장애인 작가가 아쿠타가와상을 수상한 것은 이번이
          최초이며 이 역사적 사건이 『헌치백』을 뜨거운 감자로 만든 건 분명한
          사실이다.
          <br /> <br /> 그러나 화제의 크기를 본격적으로 키운 요소는 따로
          있었으니, 바로 수상작의 파격적인 줄거리와 작품성이다. 『헌치백』은
          중증 척추 장애인 샤카가 남성 간병인에게 “내가 임신하고 중절하는 걸
          도와주면 1억 엔을 줄게요”라고 제안하면서 벌어지는 이야기로, 심사위원
          일부가 난색을 표할 만큼 위악적인 상상력을 숨김없이 표출하는 작품이다.
          이렇듯 호불호가 분명히 갈리는 작품이지만, 9명의 심사위원 모두 극찬을
          아끼지 않으며 『헌치백』을 만장일치 수상작으로 선정했다. “약자인
          작가가 약자의 이야기를 썼을 터인데도 이곳에는 털끝만큼의 약함도 없다.”
          _ 요시다 슈이치(소설가) “상식적인 사고를 휘저어 버리는 언어의 전개는
          주인공이 처한 상황으로 인해 생겨난 것이 아니라 소설이 소설로서 낳아준
          것이다.” _ 호리에 도시유키(소설가) 위 두 심사평을 비롯한 심사 경위를
          살펴보면, 일본 문학계가 『헌치백』에 주목하는 이유는 작가의 장애가
          아닌 작품의 파격성과 문학성에 있다는 것을 알 수 있다.
          <br /> <br />
          이와 비슷한 사례는 아쿠타가와상 발표 당시 생방송으로 진행된 서평가
          좌담회에서도 확인할 수 있는데, 서평가들은 이치카와 사오의 장애
          당사자성을 중요하게 여기면서도 그것과 무관하게 『헌치백』의 문학성은
          가히 압도적이라며 입을 모았다. 중증 장애 당사자가 중증 장애인 주인공을
          진실하고 생동감 있게 그려냈다는 점만으로도 『헌치백』은 당사자
          문학으로서 훌륭한 가치를 지니고 있지만, 이 작품이 선보이는 문학적
          실험은 그 훌륭한 문학성을 배가시킨다. 파격을 과감히 도전하는 작가를
          발굴함으로써 문단에 새바람을 불러일으키기로 정평이 난 아쿠타가와상의
          수상작답게, 『헌치백』은 시사성 넘치는 풍자적 표현을 전면에 내세우면서
          인터넷 밈과 은어를 과감히 차용해 뛰어난 문학적 실험성을 보여준다.
          전반부에 등장하는 주인공 샤카의 액자소설이 후반부엔 현실의 층위를
          전복하면서 메타픽션에 대한 실험으로까지 발전해 나가는데, 이에
          『헌치백』을 우리말로 옮긴 번역자 양윤옥은 “특히 마지막 부분의 짧은
          글로 소설 전체를 뒤엎는 또 다른 세계가 입체적으로 변환하면서 전혀 다른
          가정을 펼쳐갈 수 있다는 게 대단합니다. (…) 기적의 명작이 아닌가
          싶습니다.”라고 극찬하기도 했다.
        </motion.span>
      </SortSection>
      <SortSection>
        <h1>출판사 서평</h1>
        <hr />
        <span>
          척추 장애인의 등뼈처럼 휘어지고 뒤틀린, 육체와 욕망의 목소리 김초엽,
          정지아 소설가가 강력 추천하는 헌치백 괴물의 인간선언문 “온몸으로
          돌진하는 소설. ‘살기 위해 파괴되어 가는 몸으로, 욕망하는 내가 여기
          있다.’ 읽는 내내 그렇게 말하는 주인공 샤카의 목소리가 들려왔다.” _
          김초엽(소설가)
          <br />
          <br />
          “비장애 여성처럼 임신과 중절을 꼭 해보고 싶다는, 이치카와 사오를 꼭
          닮은 주인공 샤카의 고백 앞에서 나는 차마 울지 못했다. (…) 연민에
          맞서는 그녀의 위악에, 타락을 꿈꾸는 발칙한 상상력에 박수를 보낸다.” _
          정지아(소설가)
          <br />
          <br /> 앞서 설명했던 것처럼 『헌치백』은 수많은 매력을 가진, 양윤옥
          번역자의 표현을 빌리자면, “문학의 보물 창고” 같은 작품이다. 그 수많은
          보석 중에서 최고의 가치를 지닌 보석은 의심의 여지 없이 당사자 문학.
          그렇기에 이 작품을 가장 온전히 읽는 방법은 소설 속 주인공 ‘이자와
          샤카’에게 ‘이치카와 사오’를 투영해 읽는 것일 터다. 주인공 이자와
          샤카는 작가 이치카와 사오가 가진 거의 모든 것을 물려받은 인물이다.
          이에 대한 근거는 작가의 〈수상 인터뷰〉에 나오는데, 작가는
          『헌치백』엔 자신의 개인적 경험이 30퍼센트 정도 들어갔다고 설명하면서,
          “『헌치백』은 거의 단번에 써 내려간 작품이라서 의식할 만한
          시행착오라는 것도 없이 제 감각과 머릿속 이미지를 그대로 출력해 낸
          느낌이에요”라며 자기 자신과 작품이 얼마나 밀착돼 있는지를 드러내기도
          했다. 작가는 중증 장애인으로서 자신이 할 수 있는 일인 소설 집필을
          20살부터 시작해서 지난 20여 년 동안 라이트노벨을 비롯한 각종 문학상에
          해마다 빠짐없이 응모해 온 이력을 가지고 있다. 즉, 양윤옥 번역자의
          표현을 빌리자면, “작가의 타고난 재능이 오랜 세월 독서와 집필의 단련을
          거쳐 고통스러운 몸의 언어와 결합했을 때, 마치 둑이 터지듯이 단숨에
          쏟아져 나온” 작품이 바로 『헌치백』이다.
        </span>
      </SortSection>
      <SortSection>
        <h1>목차</h1>
        <hr />
        <span>
          한국어판에 부쳐 ？ 5
          <br />
          <br />
          헌치백 ？ 11
          <br />
          <br />
          제169회 아쿠타가와상 수상 인터뷰 ？ 108
          <br />
          <br />
          옮긴이의 말 ？ 132
          <br />
          <br />
        </span>
      </SortSection>
      <SortSection>
        <h1>본문중에서</h1>
        <hr />
        <span>
          임신과 중절을 해보고 싶다. 내 휘어진 몸속에서 태아는 제대로 크지도
          못할 텐데. 출산도 견뎌내지 못할 것이다. 물론 육아도 어렵다. 하지만
          아마도 임신과 중절까지라면 보통 사람처럼 가능할 것이다. 생식기능에는
          문제가 없으니까. 그래서 임신과 중절은 해보고 싶다. 평범한 여자
          사람처럼 아이를 임신하고 중절해 보는 게 나의 꿈입니다. - pp. 27~28
        </span>
      </SortSection>
      <SortSection>
        <h1>저자소개</h1>
        <hr />
        <div>
          <AuthorBox>
            <div>{DetailData?.author} [저]</div>
            <div>신작알림 SNS신청 </div>
          </AuthorBox>
          <AuthorGrid>
            <div>
              <span>생년월일</span>
              <span>1997</span>
            </div>
            <div className="author_info">
              {clickWriter
                ? `1979년생이다. 와세다대학교 인간과학부 통신교육과정
              인간환경과학과를 졸업했다. 「장애인 표상과 현실사회의 상호 영향에
              관하여」라는 제목의 졸업논문은 오노 아즈사 기념학술상을 수상했다.
              2023년 중편소설 「헌치백」으로 제128회 《문학계》 신인상을
              수상하며 데뷔했고, 나아가 이 작품의 제169회 아쿠타가와상 수상으로
              문학계는 물론 사회적 대반향을 불러일으키며 일약 스타 작가로
              떠올랐다. 선천성 근세관성 근병증의 중증 장애인으로 인공호흡기와
              전동 휠체어 등에 의지하고, 집필에는 태블릿을 사용한다.
              아쿠타가와상 시상식에서 수상 소감으로 전자책과 오 디오북 추가 보급
              등 ‘독서 배리어 프리’를 호소했다. 자신이 할 수 있는 가장 쉽고 편한
              일로서 20대 때부터 소설을 쓰기 시작해 지난 20여 년 동안 해마다 각
              문학상에 SF, 판타지 등의 장르소설과 라이트노벨을 응모해 왔다.
              절박한 심정으로 집필한 첫 비장르소설이 「헌치백」이었다. 존경하는
              작가로 노벨문학상 수상자 오에 겐자부로, 일본문학 대표 작가 시마다
              마사히코, 라이트노벨 작가 와카기 미오 등을 꼽았다.`.slice(0)
                : `1979년생이다. 와세다대학교 인간과학부 통신교육과정
              인간환경과학과를 졸업했다. 「장애인 표상과 현실사회의 상호 영향에
              관하여」라는 제목의 졸업논문은 오노 아즈사 기념학술상을 수상했다.
              2023년 중편소설 「헌치백」으로 제128회 《문학계》 신인상을
              수상하며 데뷔했고, 나아가 이 작품의 제169회 아쿠타가와상 수상으로
              문학계는 물론 사회적 대반향을 불러일으키며 일약 스타 작가로
              떠올랐다. 선천성 근세관성 근병증의 중증 장애인으로 인공호흡기와
              전동 휠체어 등에 의지하고, 집필에는 태블릿을 사용한다.
              아쿠타가와상 시상식에서 수상 소감으로 전자책과 오 디오북 추가 보급
              등 ‘독서 배리어 프리’를 호소했다. 자신이 할 수 있는 가장 쉽고 편한
              일로서 20대 때부터 소설을 쓰기 시작해 지난 20여 년 동안 해마다 각
              문학상에 SF, 판타지 등의 장르소설과 라이트노벨을 응모해 왔다.
              절박한 심정으로 집필한 첫 비장르소설이 「헌치백」이었다. 존경하는
              작가로 노벨문학상 수상자 오에 겐자부로, 일본문학 대표 작가 시마다
              마사히코, 라이트노벨 작가 와카기 미오 등을 꼽았다.`.slice(
                    0,
                    100
                  ) + `...`}
              <Extend
                onClick={() => setClickWriter(!clickWriter)}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  border: "none",
                  cursor: "pointer",
                }}>
                <span>펼쳐보기</span>
                <span className={clickWriter && "active"}>
                  <IoIosArrowDown />
                </span>
              </Extend>
            </div>
          </AuthorGrid>
        </div>
      </SortSection>
    </Wrapper>
  );
};

export default Detail_info;
