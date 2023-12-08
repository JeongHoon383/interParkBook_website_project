import styled from "styled-components";

  const AdBanner = styled.figure`
    width: 100%;
    img{
      width: 100%
    }
  `;

export default function Mypage_Ad() {
  return (
    <AdBanner>
      <img src="//qi-o.qoo10cdn.com/ad_2021/min/2112_book_mincash_785112.png" alt="AdImage" />
    </AdBanner>
  );
}
