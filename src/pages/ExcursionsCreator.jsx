import React from 'react';
import Logo from '../components/Header/HeaderSection/Logo/Logo';
import HeaderMenu from '../components/Header/HeaderSection/HeaderMenu/HeaderMenu';
import HeaderSection from '../components/Header/HeaderSection/HeaderSection';
import TrekSection from '../components/Main/TrekSection/TrekSection';
import FooterSection from '../components/FooterSection/FooterSection';
import styles from './Pages.module.scss';

const ExcursionsCreator = () => {
  return (
    <section className={styles.container}>
      <article>
        <HeaderSection>
          <Logo />
          <HeaderMenu />
        </HeaderSection>
        <TrekSection />
      </article>
      <article>
        <FooterSection />
      </article>
    </section>
  );
};

export default ExcursionsCreator;
