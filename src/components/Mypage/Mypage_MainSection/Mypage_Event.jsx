import styled from "styled-components";

  const EventBanner = styled.figure`
    width: 100%;
    img{
      width: 100%
    }
  `;

export default function Mypage_Event() {
  return (
    <EventBanner>
      <img src="https://qi-b.qoo10cdn.com/milti/renewPark/main/67656_202311291638177490.png" alt="eventImage" />
    </EventBanner>
  );
}
