import React from 'react';
import Logo from '../components/Header/HeaderSection/Logo/Logo';
import HeaderSection from '../components/Header/HeaderSection/HeaderSection';
import HeaderMenu from '../components/Header/HeaderSection/HeaderMenu/HeaderMenu';

import AutoSwiper from '../components/Main/AutoSwiper/AutoSwiper';
import ProfileSection from '../components/Main/ProfileSection/ProfileSection';
import ExcursionsPresentationSection from '../components/Main/ExcursionsPresentationSection/ExcursionsPresentationSection';
import FooterSection from '../components/FooterSection/FooterSection';

import styles from './Pages.module.scss';

function Home() {
  return (
    <section className={styles.container}>
      <section>
        <article>
          <HeaderSection>
            <Logo />
            <HeaderMenu />
          </HeaderSection>
          <AutoSwiper />
          <article className={styles.profileSection}>
            <ProfileSection />
          </article>
          <ExcursionsPresentationSection />
        </article>
      </section>
      <section>
        <article>
          <FooterSection />
        </article>
      </section>
    </section>
  );
}

export default Home;
