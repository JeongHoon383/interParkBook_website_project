# 인터파크 도서 사이트

## 프로젝트 소개

* 인터파크 도서, yes24를 참고하여 만든 도서 사이트 입니다.
* 베스트 셀러, 추천 도서 등 인터파크에서 제공하는 도서를 카테고리 별로 볼 수 있습니다. 
* 회원가입, 로그인을 통해 맘에 드는 도서를 찜, 리뷰, 카트에 담을 수 있습니다.
* 문의사항이 있으면 챗봇을 통해 관리자에게 메세지를 보낼 수 있습니다.

## 개발 기간

23.11.20 ~ 23.12.08

## 멤버구성

팀장 : 정훈 - 카테고리 메인 페이지

팀원 : 성소아 - 베스트 셀러, 신간, 검색 페이지

팀원 : 박지원 - 도서 상세페이지, 카트페이지, 관리자페이지, 채팅봇

팀원 : 윤혁진 - 카테고리별 페이지

팀원 : 백지수 - 메인 페이지, 로그인, 회원가입

## 개발 환경
* front : HTML, CSS, JavaScript, React, styled-components, Recoil
* Back-end : Node.js, Express, socket.io
* DB : MySQL, 알라딘 API
* 협업 툴 : Github

## ERD
<img width="450" alt="스크린샷 2024-07-31 오후 3 33 37" src="https://github.com/user-attachments/assets/11b2c09b-283d-4db5-af07-9d217a1532ba">

## 채택한 개발 기술과 브랜치 전략
- React
  - 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
  - DOM을 가상화하여 메모리에 보관함으로써 DOM 변경을 최소화하고 스마트하게 최적화할 수 있습니다.<br/><br/>
- styled-components
  - props를 이용한 조건부 스타일링을 활용하여 상황에 알맞은 스타일을 적용시킬 수 있었습니다.
  - 빌드될 때 고유한 클래스 이름이 부여되어 네이밍 컨벤션을 정하는 비용을 절약할 수 있었습니다.
  - CSS-in-JS는 짧은 길이의 유니크한 클래스를 자동으로 생성하기 때문에 코드 경량화의 장점이 있습니다.<br/><br/>
- Recoil
  - 최상위 컴포넌트를 만들어 props로 유저 정보를 내려주는 방식의 경우 불필요한 props 전달이 발생합니다. 따라서, 필요한 컴포넌트 내부에서만 상태 값을 가져다 사용하기 위해 상태 관리 라이브러리를 사용하기로 했습니다.
  - Redux가 아닌 Recoil을 채택한 이유
    - Redux는 보일러플레이트 코드가 많고, 컴포넌트와 액션 사이의 연결을 설정하는 작업이 번거로울 수 있다. 반면, Recoil은 상태를 단일 원천으로 중앙 집중적으로 관리하면서도 이러한 불편함을 해소한다.<br/><br/>
- eslint, prettier
  - 정해진 규칙에 따라 자동적으로 코드 스타일을 정리해 코드의 일관성을 유지하고자 했습니다.
  - 코드 품질 관리는 eslint에, 코드 포맷팅은 prettier에 일임해 사용했습니다.<br/><br/>
- 브랜치 전략
  - Git-flow 전략을 기반으로 main, develop 브랜치와 feature(페이지명) 보조 브랜치를 사용했습니다.
  - **main** 브랜치는 출시 가능한 프로덕션 코드를 모아두는 브랜치 입니다.
  - **develop** 브랜치는 다음 버전 개발을 위한 코드를 모아두는 브랜치 입니다. 개발이 완료되면, main 브랜치로 머지됩니다.
  - **Feature** 브랜치는 하나의 기능을 개발하기 위한 브랜치 입니다.
 
## 페이지별 기능
### [메인 화면]
  - 페이지 접속시 가장 먼저 보이는 화면 입니다. 
  - 베스트셀러, 신간리스트 등 카테고리 별로 도서를 볼 수 있으며 배너별 슬라이드가 탑재되어 다양한 도서를 즐길 수 있습니다.
  - 도서 이미지 클릭시 해당 도서 상세페이지로 이동됩니다.
  - 상단 헤더에서 로그인, 회원가입이 가능합니다.
  - 좌측 하단 로봇 이미지를 클릭하면 관리자에게 실시간 문의를 할 수 있습니다. 
<img width="270" alt="스크린샷 2024-07-31 오후 6 05 00" src="https://github.com/user-attachments/assets/310d2e23-a0e0-41e3-9de6-2e79cf72ad0e">
<img width="280" alt="스크린샷 2024-07-31 오후 6 05 35" src="https://github.com/user-attachments/assets/633a25c7-12ab-4ca0-9afe-d4c7dd39e331">
<img width="280" alt="스크린샷 2024-07-31 오후 6 06 26" src="https://github.com/user-attachments/assets/5f770664-18a3-4402-b818-b1e717eda194">
<img width="120" alt="스크린샷 2024-07-31 오후 6 50 55" src="https://github.com/user-attachments/assets/97f5719c-1b3b-49c1-a5c9-cad9517638f3">

### [회원 가입, 로그인]
  - 회원 입력란에서 유효성 검사가 진행되고 조건에 만족하지 못한 경우 하단에 경고창이 표시됩니다.
  - 조건 만족시 경고창이 사라지며 모든 조건 만족시 하단 가입 완료 버튼이 활성화 됩니다.
  - 회원 가입한 아이디, 비밀번호로 로그인이 가능합니다.
  - SNS(네이버, 카카오톡) 소셜 로그인 기능은 구현되어 있지 않습니다.
<img width="340" alt="스크린샷 2024-07-31 오후 6 41 04" src="https://github.com/user-attachments/assets/d06fa068-cb4a-4aa6-8660-eab27e8b8915">
<img width="340" alt="스크린샷 2024-07-31 오후 6 40 27" src="https://github.com/user-attachments/assets/55c9831b-be50-4289-b916-224a80930a2a">
<img width="300" alt="스크린샷 2024-07-31 오후 6 58 57" src="https://github.com/user-attachments/assets/766b35e4-2b20-4d8d-9670-2f0743e1ef48">

### [베스트셀러, 검색 페이지]
  - 헤더에서 베스트셀러를 클릭하면 페이지로 이동하고 해당 도서들을 볼 수 있습니다. 
  - 검색창에 검색어를 입력하면 해당 내용에 맞는 도서를 볼 수 있습니다. 
<img width="500" alt="스크린샷 2024-07-31 오후 7 09 12" src="https://github.com/user-attachments/assets/d7b71ebf-d0e9-491c-9af7-1072b0f8c114">
<img width="500" alt="스크린샷 2024-07-31 오후 7 07 12" src="https://github.com/user-attachments/assets/8199a2ee-b02f-4225-b4e5-324c7b712d12">

### [카테고리 메인 페이지]
  - 도서 이외에 상품 또는 이벤트 정보 제공
  - 인터파크에서 선정한 추천 도서 제공
  - 카테고리 별로 베스트셀러 순위 제공
<img width="320" alt="스크린샷 2024-01-15 오후 10 47 53" src="https://github.com/user-attachments/assets/de375817-beb6-47e4-a98d-7307d1e00a45">
<img width="320" alt="스크린샷 2024-01-15 오후 10 48 21" src="https://github.com/user-attachments/assets/42ba48fa-7ecb-4520-b189-5a016376c079">
<img width="320" alt="스크린샷 2024-01-15 오후 10 48 50" src="https://github.com/user-attachments/assets/4c9d24be-f80d-4393-8224-a78640d927ad">

### [카테고리별 페이지]
  - 전체 카테고리를 클릭했을때 카테고리 바를 볼 수 있습니다.
  - 도서 카테고리 클릭시 해당 카테고리 도서를 볼 수 있습니다. 만약, 품목이 없다면 품목이 없다는 문구가 있는 페이지를 볼 수 있습니다.
  - 우측 플로팅바 : 최근 본 상품을 볼 수 있고 품목 삭제, 3개가 넘을 경우 다음페이지로 넘길 수 있는 기능이 있습니다. 포인트, 쿠폰, 찜한상품 기능은 구현되어 있지 않습니다.
      - 로그인이 되어 있지 않은 경우 : 최근 본 상품만 볼 수 있습니다.
      - 로그인이 되어 있는 경우 : 포인트, 쿠폰, 찜한상품, 마이페이지를 추가로 볼 수 있습니다.
  - 카테고리 바 우측 상단에 + 버튼을 클릭하면 크기가 커지면서 더 자세히 볼 수 있습니다.
  - 등록일순, 판매량순, 가격순, 상품명순 클릭시 정렬이 가능합니다.
  - 페이지별 개수가 조정 가능하며 페이지네이션 기능이 있습니다.
  - 전체 선택 버튼 클릭시 체크박스가 활성화 되며 카트에 담기를 눌렀을 때 카트페이지로 이동하고 찜하기를 눌렀을 때 하트 아이콘이 활성화 됩니다.
  - 찜하기 버튼은 로그인시에만 기능이 동작하며 로그인이 되어 있지 않은 경우 로그인 모달창이 나오게 됩니다. 
<img width="320" alt="스크린샷 2024-07-31 오후 7 53 13" src="https://github.com/user-attachments/assets/7b0ec4f0-7f4c-418e-bc66-91a6c2661530">
<img width="320" alt="스크린샷 2024-07-31 오후 7 53 41" src="https://github.com/user-attachments/assets/09890320-632e-46d7-aab6-6318186fc001">
<img width="320" alt="스크린샷 2024-07-31 오후 7 53 57" src="https://github.com/user-attachments/assets/2ab74953-ba61-4fce-be95-af6ead8f95a0">
<br/><br/>
<img width="50" alt="스크린샷 2024-07-31 오후 8 05 02" src="https://github.com/user-attachments/assets/fd378044-a3ec-4e97-be02-0bf107339933">
<img width="50" alt="스크린샷 2024-07-31 오후 8 06 49" src="https://github.com/user-attachments/assets/8c3a7666-cf2c-4291-90c4-cfd5662e9f5c">
<img width="50" alt="스크린샷 2024-07-31 오후 8 07 29" src="https://github.com/user-attachments/assets/e6cb740c-d2b3-4c32-9e3d-86346cb116bf">
<img width="500" alt="스크린샷 2024-07-31 오후 8 29 03" src="https://github.com/user-attachments/assets/a777f014-b7f8-4d3b-8954-908c37f30049">
<img width="300" alt="스크린샷 2024-07-31 오후 8 31 08" src="https://github.com/user-attachments/assets/f7b66a23-d42f-499a-80cb-1c799878bb65">
<br/><br/>
<img width="300" alt="스크린샷 2024-07-31 오후 8 35 54" src="https://github.com/user-attachments/assets/f90d6238-d601-48a8-a21b-e64207d416cf">
<img width="300" alt="스크린샷 2024-07-31 오후 8 36 27" src="https://github.com/user-attachments/assets/21df5088-d538-4175-b5e1-922a7b4e1a51">
<img width="300" alt="스크린샷 2024-07-31 오후 8 36 58" src="https://github.com/user-attachments/assets/eb8d3c5e-7510-4d4b-b1f1-e4c7770904ae">

### [도서 상세페이지]
  - 스크롤을 내렸을 때 상단에 해당 도서의 제목, 금액, 북카트담기, 바로구매 네비게이션바가 나옵니다.
  - 주문수량을 조절할 수 있고 도서관 소장, 위치 버튼 클릭시 해당 도서를 빌릴 수 있는 국립 도서관 정보가 나옵니다.
  - 이벤트/기획전, 책정보 등 박스 글씨 마우스를 올려놓거나 또는 클릭 할 경우 해당 내용이 나옵니다.
  - 리뷰를 작성할 수 있고 글작성을 누르면 아래 리뷰 영역에 적용됩니다.  
<img width="400" alt="스크린샷 2024-07-31 오후 8 42 56" src="https://github.com/user-attachments/assets/08fd17ea-5aea-451b-915d-b7dd63ae488e">
<img width="400" alt="스크린샷 2024-07-31 오후 8 43 26" src="https://github.com/user-attachments/assets/3725ec02-c944-4234-8d02-be25baff98cb">
<br/><br/>
<img width="500" alt="스크린샷 2024-07-31 오후 8 52 37" src="https://github.com/user-attachments/assets/97ad2fd4-72de-4fb5-9e53-7b0d77a855e2">
<img width="500" alt="스크린샷 2024-07-31 오후 8 52 13" src="https://github.com/user-attachments/assets/a921073b-cd31-4b85-95be-c3a97e334df6">

### [도서 카트페이지, 관리자 페이지]
  - 카트 페이지는 수량 변경, 하단 금액이 합산되어 볼 수 있습니다. 
  - 관리자 페이지는 회원가입한 회원정보, 새로운 도서 등록, 도서 삭제 기능이 있습니다. 
<img width="500" alt="스크린샷 2024-07-31 오후 8 57 07" src="https://github.com/user-attachments/assets/38e7c9b5-df68-4867-a40f-b75c8959ed73">
<img width="500" alt="스크린샷 2024-07-31 오후 8 58 15" src="https://github.com/user-attachments/assets/6784ba8e-7e7e-4df3-b4e6-c4c24f7ed1b6">

## 트러블 슈팅
* [캐러셀 화살표 제거 이슈](https://github.com/JeongHoon383/interParkBook_website_project/wiki/%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_%EC%BA%90%EB%9F%AC%EC%85%80-%ED%99%94%EC%82%B4%ED%91%9C-%EC%A0%9C%EA%B1%B0-%EC%9D%B4%EC%8A%88#%EC%BA%90%EB%9F%AC%EC%85%80-%ED%99%94%EC%82%B4%ED%91%9C-%EC%A0%9C%EA%B1%B0-%EC%9D%B4%EC%8A%88)
* [카테고리에 맞는 데이터 전달 이슈](https://github.com/JeongHoon383/interParkBook_website_project/wiki/%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC%EC%97%90-%EB%A7%9E%EB%8A%94-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%84%EB%8B%AC-%EC%9D%B4%EC%8A%88)
