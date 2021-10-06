import React from 'react';
import Logo from '../components/Header/HeaderSection/Logo/Logo';
import HeaderMenu from '../components/Header/HeaderSection/HeaderMenu/HeaderMenu';
import HeaderSection from '../components/Header/HeaderSection/HeaderSection';
import ExcursionsSection from '../components/Main/ExcursionsSection/ExcursionsSection';
import FooterSection from '../components/FooterSection/FooterSection';
import styles from './Pages.module.scss';

const Excursions = () => {
  return (
    <section className={styles.container}>
      <article>
        <HeaderSection>
          <Logo />
          <HeaderMenu />
        </HeaderSection>
        <ExcursionsSection />
      </article>
      <article>
        <FooterSection />
      </article>
    </section>
  );
};

export default Excursions;
