import React from 'react';
import Logo from '../components/Header/HeaderSection/Logo/Logo';
import HeaderMenu from '../components/Header/HeaderSection/HeaderMenu/HeaderMenu';
import HeaderSection from '../components/Header/HeaderSection/HeaderSection';
import ExcursionsSection from '../components/Main/ExcursionsSection/ExcursionsSection';
import FooterSection from '../components/FooterSection/FooterSection';
import TrekSection from '../components/Main/TrekSection/TrekSection';

const Excursions = () => {
  return (
    <div>
      <HeaderSection>
        <Logo />
        <HeaderMenu />
      </HeaderSection>
      <ExcursionsSection />
      <TrekSection />
      <FooterSection />
    </div>
  );
};

export default Excursions;
