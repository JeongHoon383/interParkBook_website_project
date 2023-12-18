import React from 'react';
import MainBanner from '../components/Main/Main_MainBanner';
import Main_Advertise from '../components/Main/Main_Advertise';
import Main_ITrendSection from '../components/Main/Main_ITrendSection';
import Main_ChoiceSection from '../components/Main/Main_ChoiceSection';
import Main_LoginBanner from '../components/Main/Main_LoginBanner';
import Main_CouponAd from '../components/Main/Main_CouponAd';
import Main_ServiceBenefit from '../components/Main/Main_ServiceBenefit';
import Main_CategoryRecommend from '../components/Main/Main_CategoryRecommend';
import Main_Advertise2 from '../components/Main/Main_Advertise2';
import Main_PointSection from '../components/Main/Main_PointSection';

export default function Main() {
  return (
    <div className="mainContent" style={{ width: '60%', margin: '30px auto' }}>
      <MainBanner />
      <Main_Advertise />
      <Main_ITrendSection />
      <Main_ChoiceSection />
      <Main_LoginBanner />
      <Main_CategoryRecommend />
      <Main_Advertise2 />
      <Main_PointSection />
      <Main_ServiceBenefit />
      <Main_CouponAd />
    </div>
  );
}
