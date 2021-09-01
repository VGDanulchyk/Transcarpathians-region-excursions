import React from 'react';
import Logo from '../components/Header/HeaderSection/Logo/Logo';
import HeaderSection from '../components/Header/HeaderSection/HeaderSection';
import HeaderMenu from '../components/Header/HeaderSection/HeaderMenu/HeaderMenu';

import AutoSwiper from '../components/Main/AutoSwiper/AutoSwiper';
import ProfileSection from '../components/Main/ProfileSection/ProfileSection';
import ExcursionsPresentationSection from '../components/Main/ExcursionsPresentationSection/ExcursionsPresentationSection';
import FooterSection from '../components/FooterSection/FooterSection';

function Home() {
  return (
    <section>
      <HeaderSection>
        <Logo />
        <HeaderMenu />
      </HeaderSection>
      <AutoSwiper />
      <ProfileSection />
      <ExcursionsPresentationSection />
      <FooterSection />
    </section>
  );
}

export default Home;
