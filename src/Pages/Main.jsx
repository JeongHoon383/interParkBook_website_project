import React from 'react';
import MainBanner from '../components/Main/Main_MainBanner';
import Main_Advertise from '../components/Main/Main_Advertise';
import Main_ITrendSection from '../components/Main/Main_ITrendSection';
import '../css/slick.css';
import '../css/slick-theme.css';

export default function Main() {
  return (
    <div className="mainContent" style={{ width: '60%', margin: '30px auto', height: '1500px' }}>
      <MainBanner />
      <Main_Advertise />
      <Main_ITrendSection />
    </div>
  );
}
