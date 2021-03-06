import React from 'react';
import styles from './HeaderSection.module.scss';
import Logo from './Logo/Logo';
import HeaderMenu from './HeaderMenu/HeaderMenu';

const HeaderSection = () => {
  return (
    <section className={styles.container}>
      <Logo />
      <HeaderMenu />
    </section>
  );
};

export default HeaderSection;
