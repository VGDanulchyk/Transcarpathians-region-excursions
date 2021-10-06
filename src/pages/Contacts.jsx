import React from 'react';
import HeaderSection from '../components/Header/HeaderSection/HeaderSection';
import Logo from '../components/Header/HeaderSection/Logo/Logo';
import HeaderMenu from '../components/Header/HeaderSection/HeaderMenu/HeaderMenu';
import FooterSection from '../components/FooterSection/FooterSection';
import carpathianMap from '../img/MainImg/zakarpatskaobl.jpg';
import styles from './Pages.module.scss';

const Contacts = () => {
  return (
    <section className={styles.container}>
      <article>
        <HeaderSection>
          <Logo />
          <HeaderMenu />
        </HeaderSection>
        <article className={styles.mapContainer}>
          <img className={styles.mapBody} src={carpathianMap} alt="carpathians map" />
        </article>
      </article>
      <article>
        <FooterSection />
      </article>
    </section>
  );
};

export default Contacts;
