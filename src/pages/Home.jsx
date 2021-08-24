import React from 'react';
import Logo from '../components/Logo/Logo';
import HeaderSection from '../components/HeaderSection/HeaderSection';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';

import AutoSwiper from '../components/AutoSwiper/AutoSwiper';
import ProfileSection from '../components/ProfileSection/ProfileSection';

import ExcursionsSection from '../components/ExcursionsSection/ExcursionsSection';

function Home() {
  return (
    <div>
      <HeaderSection>
        <Logo />
        <HeaderMenu />
      </HeaderSection>
      <AutoSwiper />
      <ProfileSection />
      <ExcursionsSection />
    </div>
  );
}

export default Home;
