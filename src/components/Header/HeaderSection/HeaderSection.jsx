import React, { useState } from 'react';
import styles from './HeaderSection.module.scss';
import Logo from './Logo/Logo';
import HeaderMenu from './HeaderMenu/HeaderMenu';

const HeaderSection = () => {
  // const [menuActive, setMenuActive] = useState(false);
  return (
    <section className={styles.container}>
      <Logo />
      <HeaderMenu />
    </section>
  );
};

export default HeaderSection;
