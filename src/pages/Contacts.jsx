import React from 'react';
import HeaderSection from '../components/Header/HeaderSection/HeaderSection';
import Logo from '../components/Header/HeaderSection/Logo/Logo';
import HeaderMenu from '../components/Header/HeaderSection/HeaderMenu/HeaderMenu';
import FooterSection from '../components/FooterSection/FooterSection';

const Contacts = () => {
  return (
    <div>
      <HeaderSection>
        <Logo />
        <HeaderMenu />
      </HeaderSection>
      <FooterSection />
    </div>
  );
};

export default Contacts;
