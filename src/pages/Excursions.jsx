import React from 'react';
import Logo from '../components/Logo/Logo';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import HeaderSection from '../components/HeaderSection/HeaderSection';
import ExcursionsSection from '../components/ExcursionsSection/ExcursionsSection';

const Excursions = () => {
  return (
    <div>
      <HeaderSection>
        <Logo />
        <HeaderMenu />
      </HeaderSection>
      <ExcursionsSection />
    </div>
  );
};

export default Excursions;
