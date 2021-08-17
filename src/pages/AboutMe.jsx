import React from 'react';
import Logo from '../components/Logo/Logo';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import HeaderSection from '../components/HeaderSection/HeaderSection';

const AboutMe = () => {
  return (
    <div>
      <HeaderSection>
        <Logo />
        <HeaderMenu />
      </HeaderSection>
      <h1>About me!!!</h1>
    </div>
  );
};

export default AboutMe;
