import React from 'react';
import Logo from '../components/Logo/Logo';
import HeaderSection from '../components/HeaderSection/HeaderSection';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';

import AutoSwiper from '../components/AutoSwiper/AutoSwiper';
import ProfileSection from '../components/ProfileSection/ProfileSection';

function Home() {
  return (
    <div>
      <HeaderSection>
        <Logo />
        <HeaderMenu />
      </HeaderSection>
      <AutoSwiper />
      <ProfileSection />
    </div>
  );
}

export default Home;
