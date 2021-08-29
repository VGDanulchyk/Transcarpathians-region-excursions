import React from 'react';
import Logo from '../components/Header/HeaderSection/Logo/Logo';
import HeaderMenu from '../components/Header/HeaderSection/HeaderMenu/HeaderMenu';
import HeaderSection from '../components/Header/HeaderSection/HeaderSection';
import ProfileSection from '../components/Main/ProfileSection/ProfileSection';
import FooterSection from '../components/FooterSection/FooterSection';

const AboutMe = () => {
  return (
    <div>
      <HeaderSection>
        <Logo />
        <HeaderMenu />
      </HeaderSection>
      <ProfileSection />
      <FooterSection />
    </div>
  );
};

export default AboutMe;
