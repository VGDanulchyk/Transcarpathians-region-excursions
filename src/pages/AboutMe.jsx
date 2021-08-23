import React from 'react';
import Logo from '../components/Logo/Logo';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import HeaderSection from '../components/HeaderSection/HeaderSection';
import ProfileSection from '../components/ProfileSection/ProfileSection';

const AboutMe = () => {
  return (
    <div>
      <HeaderSection>
        <Logo />
        <HeaderMenu />
      </HeaderSection>
      <ProfileSection />
    </div>
  );
};

export default AboutMe;
