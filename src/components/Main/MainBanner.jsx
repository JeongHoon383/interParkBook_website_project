import React from 'react';
import '../../css/main/banner/mainBanner.css';
import Slider from '../Slide';

export default function MainBanner() {
  return (
    <div className="mainBanner">
      <div className="mainBanner_content">
        <Slider />
      </div>
      <div className="mainBanner_tab">
        <div>핫클릭 이벤트</div>
        <div>추천 이벤트</div>
        <div>화제의 책</div>
      </div>
    </div>
  );
}
