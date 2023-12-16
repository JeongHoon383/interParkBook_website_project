import React, { useState } from 'react';
import styled from 'styled-components';
import Main_MoMainBanner from './Main_MoMainBanner';
import Main_MoRecommend from './Main_MoRecommend';
import Main_MoBest from './Main_MoBest';
import Main_CategoryRecommend from '../Main_CategoryRecommend';
import Main_Advertise2 from '../Main_Advertise2';
import Main_PointSection from '../Main_PointSection';
import Main_LoginBanner from '../Main_LoginBanner';

const MobileNav = styled.nav`
  margin-top: 11px;
  color: #333;
  background-color: #fff;
  overflow: hidden;
  .mTabs {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
  }
  .tabC {
    margin-bottom: 7px;
    cursor: pointer;
  }
  .activeC {
    font-size: 1.2em;
    font-family: 'YES24GothicB';
    border-bottom: 2px solid var(--main);
    padding-bottom: 3px;
  }
`;

const TabContentContainer = styled.div`
  overflow: hidden;
  .mTab-content {
    display: flex;
    transition: transform 0.3s ease-in-out;
    .mTab-pane {
      width: 100%;
      flex-shrink: 0;
    }
  }
`;

export default function Main_Mo() {
  const [tab, setTab] = useState(0);

  const handleTabClick = (index) => {
    setTab(index);
    console.log(index);
  };

  return (
    <>
      <MobileNav>
        <div className="mTabs">
          <div
            onClick={() => {
              handleTabClick(0);
            }}
            className={tab === 0 ? 'activeC' : 'tabC'}
          >
            홈
          </div>
          <div
            onClick={() => {
              handleTabClick(1);
            }}
            className={tab === 1 ? 'activeC' : 'tabC'}
          >
            베스트셀러
          </div>
          <div
            onClick={() => {
              handleTabClick(2);
            }}
            className={tab === 2 ? 'activeC' : 'tabC'}
          >
            지금! 추천
          </div>
        </div>
      </MobileNav>
      <TabContentContainer>
        <div className="mTab-content" style={{ transform: `translateX(${-tab * 100}%)` }}>
          <div className="mTab-pane">
            <Main_MoMainBanner />
            <Main_PointSection />
            <Main_LoginBanner />
            <Main_MoBest />
            <Main_CategoryRecommend />
            <Main_Advertise2 />
          </div>
          <div className="mTab-pane"></div>
          <div className="mTab-pane">
            <Main_MoRecommend />
          </div>
        </div>
      </TabContentContainer>
    </>
  );
}
