import React from 'react';
import Main_MoMainBanner from './Main_MoMainBanner';
import Main_MoBest from './Main_MoBest';
import Main_CategoryRecommend from '../Main_CategoryRecommend';
import Main_Advertise2 from '../Main_Advertise2';
import Main_PointSection from '../Main_PointSection';
import Main_LoginBanner from '../Main_LoginBanner';

export default function Main_Mo() {
  return (
    <div className="mMainContent">
      <Main_MoMainBanner />
      <Main_PointSection />
      <Main_LoginBanner />
      <Main_MoBest />
      <Main_CategoryRecommend />
      <Main_Advertise2 />
    </div>
  );
}
