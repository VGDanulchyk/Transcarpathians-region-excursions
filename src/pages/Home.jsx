import React from 'react';
import Logo from '../components/Logo/Logo';
import HeaderSection from '../components/HeaderSection/HeaderSection';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';

import AutoSwiper from '../components/AutoSwiper/AutoSwiper';

function Home() {
  return (
    <div>
      <HeaderSection>
        <Logo />
        <HeaderMenu />
      </HeaderSection>
      <AutoSwiper />
    </div>
  );
}

export default Home;
