import React from 'react';
import styles from './FooterSection.module.scss';
import Footer from './Footer/Footer';

const FooterSection = () => {
  return (
    <section className={styles.container}>
      <Footer />
    </section>
  );
};

export default FooterSection;
