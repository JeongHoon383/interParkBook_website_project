import React from 'react';
import '../../css/footer/comInfo.css';

export default function ComInfo() {
  return (
    <div className="comInfo">
      <div className="col01">
        <dl className="col01Addr">
          <dt>(주)인터파크커머스</dt>
          <dd>
            <address>
              <span>서울특별시 서초구 강남대로 447(서초동, 남서울빌딩)</span>
              <span>사업자등록번호 : 422-81-03185</span>
              <span>호스팅서비스 제공자 : (주)인터파크커머스</span>
              <span>대표이사 : 김동식</span>
              <span>통신판매업신고 : 2023-서울서초-0823</span>
            </address>
          </dd>
        </dl>
      </div>
      <div className="col02">
        <dl className="col01Addr">
          <dt>
            고객센터
            <a href="#" className="linkBtn" style={{ marginLeft: '3px' }}>
              문의전 클릭
            </a>
          </dt>
          <dd>
            <address>
              <span>전화 1577-2555</span>
              <span>팩스 02-838-0750</span>
              <span>
                이메일 <a href="mailto: helpshop@interparkshop.com">helpshop@interparkshop.com</a>
              </span>
              <span>
                개인정보보호책임자 <a href="mailto: cposhopping@interparkshop.com">cposhopping@interparkshop.com</a>
              </span>
              <span>개인정보보유기간 회원탈퇴시까지</span>
            </address>
          </dd>
        </dl>
      </div>
      <div className="col03">
        <dl className="col01Addr">
          <dt>KG이니시스 구매안전서비스</dt>
          <dd>
            <span>
              고객님은 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한 KG이니시스의 구매안전서비스를 이용하실
              수 있습니다.
            </span>
            <br />
            <a href="#" className="linkBtn">
              서비스 가입사실 확인
            </a>
          </dd>
        </dl>
      </div>
    </div>
  );
}
