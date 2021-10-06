import React from 'react';
import Logo from '../components/Header/HeaderSection/Logo/Logo';
import HeaderMenu from '../components/Header/HeaderSection/HeaderMenu/HeaderMenu';
import HeaderSection from '../components/Header/HeaderSection/HeaderSection';
import ProfileSection from '../components/Main/ProfileSection/ProfileSection';
import FooterSection from '../components/FooterSection/FooterSection';
import styles from './Pages.module.scss';

const AboutMe = () => {
  return (
    <section className={styles.container}>
      <article>
        <HeaderSection>
          <Logo />
          <HeaderMenu />
        </HeaderSection>
        <ProfileSection />
      </article>
      <article>
        <FooterSection />
      </article>
    </section>
  );
};

export default AboutMe;
