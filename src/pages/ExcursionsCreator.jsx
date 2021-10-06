import React from 'react';
import Logo from '../components/Header/HeaderSection/Logo/Logo';
import HeaderMenu from '../components/Header/HeaderSection/HeaderMenu/HeaderMenu';
import HeaderSection from '../components/Header/HeaderSection/HeaderSection';
import TrekSection from '../components/Main/TrekSection/TrekSection';
import FooterSection from '../components/FooterSection/FooterSection';

const ExcursionsCreator = () => {
  return (
    <section>
      <HeaderSection>
        <Logo />
        <HeaderMenu />
      </HeaderSection>
      <TrekSection />
      <FooterSection />
    </section>
  );
};

export default ExcursionsCreator;
